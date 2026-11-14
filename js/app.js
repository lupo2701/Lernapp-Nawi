/* Der Weg der Nahrung – Lern-App
 * Reines HTML/CSS/JS, keine Abhängigkeiten. Fortschritt wird lokal im Browser gespeichert.
 */
(function () {
  "use strict";

  /* ---------- Helfer ---------- */
  const app = document.getElementById("app");
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const topicById = (id) => TOPICS.find((t) => t.id === id);
  const TYPE = { R: "Recherche", E: "Experiment", S: "Selbstbeobachtung" };
  const TYPE_ICON = { R: "🔍", E: "🧪", S: "🧘" };

  /* Lexikon-Begriffe und Fettdruck in Texten */
  function rich(text) {
    let s = esc(text);
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, term, label) => {
      const shown = label || term;
      return LEXIKON[term] ? `<button class="lex" data-lex="${esc(term)}">${shown}</button>` : shown;
    });
    return s;
  }

  /* ---------- Speicher ---------- */
  const KEY = "wdn-lernapp-v1";
  const blank = () => ({ read: {}, goals: {}, cards: {}, exp: {}, quiz: {}, games: {}, protocols: [], level: "basis", xp: 0, awarded: {}, badges: {}, days: [], lexSeen: [], daily: {} });
  let S = blank();
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* Speicher nicht verfügbar */ }
  let saveTimer;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignorieren */ } }, 150);
  }
  const cardState = (n) => (S.cards[n] = S.cards[n] || { done: false, note: "" });
  const expState = (id) => (S.exp[id] = S.exp[id] || { done: false, fields: {}, steps: {} });

  function topicProgress(t) {
    const parts = [];
    parts.push(S.read[t.id] ? 1 : 0);
    const g = S.goals[t.id] || [];
    parts.push(t.goals.length ? g.filter(Boolean).length / t.goals.length : 0);
    parts.push(t.cards.filter((n) => S.cards[n]?.done).length / t.cards.length);
    parts.push((S.quiz[t.id] || 0) / 100);
    return Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100);
  }

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast"; el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }


  /* ---------- Gamification: XP, Level, Abzeichen, Serie ---------- */
  const LEVELS = [
    [0, "Krümel", "🍞"], [100, "Kau-Profi", "🦷"], [250, "Schluck-Held", "😮"], [450, "Magen-Meister", "🫃"],
    [700, "Zotten-Detektiv", "🔍"], [1000, "Enzym-Experte", "🧪"], [1400, "Darmflora-Dompteur", "🦠"], [1900, "Verdauungs-Genie", "🧠"], [2500, "Professor Pepsin", "🎓"]
  ];
  function levelInfo(xp) {
    let i = 0; while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1][0]) i++;
    const [from, name, icon] = LEVELS[i], to = LEVELS[i + 1] ? LEVELS[i + 1][0] : null;
    return { n: i + 1, name, icon, from, to, pct: to ? Math.round(((xp - from) / (to - from)) * 100) : 100 };
  }
  const today = () => new Date().toISOString().slice(0, 10);
  function streak() {
    const days = new Set(S.days || []); let n = 0; const d = new Date();
    if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (days.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const BADGES = [
    { id: "start", icon: "🍞", name: "Erster Bissen", desc: "Sammle deine ersten XP.", test: () => S.xp > 0 },
    { id: "reader", icon: "📚", name: "Leseratte", desc: "Lies die Texte aller Stationen.", test: () => TOPICS.every((t) => S.read[t.id]) },
    { id: "cards10", icon: "🃏", name: "Kartensammler", desc: "Erledige 10 Aufgabenkarten.", test: () => doneCount() >= 10 },
    { id: "cards25", icon: "🗂️", name: "Fleißige Biene", desc: "Erledige 25 Aufgabenkarten.", test: () => doneCount() >= 25 },
    { id: "cards40", icon: "👑", name: "Alle 40!", desc: "Erledige alle Aufgabenkarten.", test: () => doneCount() >= 40 },
    { id: "lab1", icon: "🧪", name: "Jungforscher", desc: "Schließe dein erstes Experiment ab.", test: () => expCount() >= 1 },
    { id: "lab5", icon: "🔬", name: "Laborchef", desc: "Schließe 5 Experimente ab.", test: () => expCount() >= 5 },
    { id: "self", icon: "🧘", name: "Körperflüsterer", desc: "Notiere 5 Selbstbeobachtungen.", test: () => CARDS.filter((c) => c.type === "S" && S.cards[c.n]?.note?.trim()).length >= 5 },
    { id: "quiz100", icon: "💯", name: "Quiz-Ass", desc: "Schaffe ein Quiz mit 100 %.", test: () => Object.values(S.quiz).some((v) => v === 100) },
    { id: "quizall", icon: "🏆", name: "Alleskönner", desc: "Mindestens 80 % in allen Stations-Quizzen.", test: () => TOPICS.every((t) => (S.quiz[t.id] || 0) >= 80) },
    { id: "final", icon: "🎓", name: "Abschlussprüfung", desc: "Mindestens 80 % im großen Quiz.", test: () => (S.quiz.all || 0) >= 80 },
    { id: "blitz", icon: "⚡", name: "Blitzmerker", desc: "Schaffe 12 richtige Antworten in einer Blitzrunde.", test: () => (S.games.blitz || 0) >= 12 },
    { id: "zucker", icon: "🔎", name: "Zucker-Detektiv", desc: "Finde alle versteckten Zucker in der Zutatenliste.", test: () => S.games.zucker === 100 },
    { id: "route", icon: "🧭", name: "Wegweiser", desc: "Bring den Weg der Nahrung fehlerfrei in Reihenfolge.", test: () => S.games.reihenfolge === 100 },
    { id: "organs", icon: "🏷️", name: "Organ-Kenner", desc: "Erkenne alle Organe ohne Fehler.", test: () => S.games.beschriften === 100 },
    { id: "syll", icon: "🧩", name: "Silbenkönig", desc: "Löse das Silbenrätsel.", test: () => S.games.silben === 100 },
    { id: "fiber", icon: "🥦", name: "Ballaststoff-Detektiv", desc: "Finde alle ballaststoffreichen Lebensmittel.", test: () => S.games.ballast === 100 },
    { id: "lex", icon: "📖", name: "Wortschatz", desc: "Schlage 10 Begriffe im Lexikon nach.", test: () => (S.lexSeen || []).length >= 10 },
    { id: "station", icon: "⭐", name: "Station komplett", desc: "Bringe eine Station auf 100 %.", test: () => TOPICS.some((t) => topicProgress(t) === 100) },
    { id: "daily", icon: "📅", name: "Tagesheld", desc: "Schaffe eine Tages-Challenge.", test: () => Object.values(S.daily || {}).some((v) => v >= 80) },
    { id: "streak3", icon: "🔥", name: "Am Ball", desc: "Lerne 3 Tage hintereinander.", test: () => streak() >= 3 },
    { id: "streak7", icon: "☄️", name: "Wochen-Serie", desc: "Lerne 7 Tage hintereinander.", test: () => streak() >= 7 },
    { id: "master", icon: "🧠", name: "Verdauungs-Genie", desc: "Erreiche Level 8.", test: () => levelInfo(S.xp).n >= 8 }
  ];
  const doneCount = () => Object.values(S.cards).filter((c) => c.done).length;
  const expCount = () => Object.values(S.exp).filter((e) => e.done).length;

  /* XP vergeben – mit Schlüssel nur einmal, ohne Schlüssel immer */
  function award(xp, key, label) {
    S.awarded = S.awarded || {};
    if (!xp || xp <= 0) return 0;
    if (key) { if (S.awarded[key]) return 0; S.awarded[key] = 1; }
    const before = levelInfo(S.xp || 0).n;
    S.xp = (S.xp || 0) + xp;
    S.days = S.days || []; if (!S.days.includes(today())) S.days.push(today());
    save();
    floatXP(`+${xp} XP${label ? " · " + label : ""}`);
    const after = levelInfo(S.xp);
    updateXPBar();
    if (after.n > before) setTimeout(() => celebrate(`${after.icon}`, `Level ${after.n}!`, `Du bist jetzt <b>${after.name}</b>.`), 600);
    checkBadges();
    return xp;
  }
  function checkBadges() {
    S.badges = S.badges || {};
    const fresh = BADGES.filter((b) => !S.badges[b.id] && b.test());
    fresh.forEach((b) => { S.badges[b.id] = today(); });
    if (fresh.length) { save(); updateXPBar(); setTimeout(() => celebrate(fresh[0].icon, "Neues Abzeichen!", `${esc(fresh[0].name)} – ${esc(fresh[0].desc)}${fresh.length > 1 ? `<br>+ ${fresh.length - 1} weitere` : ""}`), 900); }
  }
  function floatXP(text) {
    const el = document.createElement("div"); el.className = "xp-float"; el.textContent = text;
    document.body.appendChild(el); setTimeout(() => el.remove(), 1600);
  }
  function celebrate(icon, title, html) {
    confetti();
    const el = document.createElement("a");
    el.className = "celebrate"; el.href = "#/ich";
    el.innerHTML = `<span class="c-icon">${icon}</span><span><b>${title}</b><br><span class="small">${html}</span></span>`;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add("out"), 3600);
    setTimeout(() => el.remove(), 4100);
  }
  function confetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cv = document.createElement("canvas"); cv.className = "confetti"; document.body.appendChild(cv);
    const ctx = cv.getContext("2d"); const W = cv.width = innerWidth, H = cv.height = innerHeight;
    const cols = ["#e07a5f", "#f2a65a", "#81b29a", "#3d8bbd", "#9a7cc0", "#f1c453"];
    const ps = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - .5) * 120, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 13 - 4, r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      ps.forEach((p) => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); });
      if (++f < 120) requestAnimationFrame(tick); else cv.remove();
    })();
  }
  function updateXPBar() {
    const el = document.getElementById("xpbar"); if (!el) return;
    const L = levelInfo(S.xp || 0), s = streak();
    el.innerHTML = `<span class="lvl" title="${esc(L.name)}">${L.icon} <b>Lv ${L.n}</b></span><span class="xpmini"><i style="width:${L.pct}%"></i></span><span class="xpnum">${S.xp || 0} XP</span>${s ? `<span class="streak" title="Tage in Folge">🔥 ${s}</span>` : ""}`;
  }

  /* ---------- Bottom-Sheet ---------- */
  const sheet = $("#sheet"), sheetBody = $("#sheet-body");
  let sheetOnClose = null;
  function openSheet(html, onClose) {
    sheetBody.innerHTML = html;
    sheet.hidden = false;
    sheetOnClose = onClose || null;
    document.body.style.overflow = "hidden";
    setTimeout(() => { const f = $("button, textarea, input", sheetBody); if (f) f.focus({ preventScroll: true }); }, 50);
  }
  function closeSheet() {
    sheet.hidden = true; document.body.style.overflow = "";
    if (sheetOnClose) { const f = sheetOnClose; sheetOnClose = null; f(); }
  }
  sheet.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeSheet(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !sheet.hidden) closeSheet(); });

  function openLex(term) {
    S.lexSeen = S.lexSeen || [];
    if (!S.lexSeen.includes(term)) { S.lexSeen.push(term); award(2, "lex:" + term); }
    openSheet(`<p class="chip">📚 Lexikon</p><h2 id="sheet-title" style="margin-top:10px">${esc(term)}</h2><p>${esc(LEXIKON[term])}</p><a class="btn secondary small" href="#/lexikon" data-close>Ganzes Lexikon öffnen</a>`);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lex]");
    if (b) { e.preventDefault(); openLex(b.dataset.lex); }
  });

  /* ---------- Körperkarte (SVG) ---------- */
  const ORGAN_COLORS = {
    mund: "#e76f51", speiseroehre: "#f4a261", leber: "#9c5b46", gallenblase: "#8ab64a",
    magen: "#e5989b", bauchspeicheldruese: "#f1c453", duenndarm: "#6fb08f", dickdarm: "#3d8bbd", mastdarm: "#2a6590"
  };
  function bodySVG() {
    const c = ORGAN_COLORS;
    const org = (id, inner) => `<g class="organ" data-organ="${id}" tabindex="0" role="button" aria-label="${ORGANS[id].name}">${inner}</g>`;
    return `<svg viewBox="0 0 260 500" xmlns="http://www.w3.org/2000/svg" aria-label="Verdauungsorgane im Körper">
      <defs><linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fbe3d3"/><stop offset="1" stop-color="#f6d4bf"/></linearGradient></defs>
      <g fill="url(#skin)" stroke="#e9bfa6" stroke-width="2">
        <circle cx="130" cy="62" r="44"/>
        <rect x="114" y="98" width="32" height="34" rx="10"/>
        <path d="M60 150 Q70 128 130 126 Q190 128 200 150 L212 300 Q216 400 196 478 L64 478 Q44 400 48 300 Z"/>
      </g>
      <g fill="#7a5c4f"><circle cx="114" cy="56" r="4"/><circle cx="146" cy="56" r="4"/></g>
      ${org("dickdarm", `<path d="M96 386 L88 382 L88 296 Q88 288 96 288 L172 288 Q180 288 180 296 L180 380 Q180 398 150 404" fill="none" stroke="${c.dickdarm}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M84 388 q-6 10 2 16" fill="none" stroke="${c.dickdarm}" stroke-width="7" stroke-linecap="round"/>`)}
      ${org("duenndarm", `<path d="M188 266 Q170 300 158 310 L114 310 q-9 0 -9 9 t9 9 L160 328 q9 0 9 9 t-9 9 L114 346 q-9 0 -9 9 t9 9 L160 364 q9 0 9 9 t-9 9 L104 382" fill="none" stroke="${c.duenndarm}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`)}
      ${org("mastdarm", `<path d="M146 404 Q134 418 134 446" fill="none" stroke="${c.mastdarm}" stroke-width="15" stroke-linecap="round"/>`)}
      ${org("leber", `<path d="M66 196 Q106 176 156 190 Q164 214 140 228 Q104 240 76 236 Q60 218 66 196 Z" fill="${c.leber}"/>`)}
      ${org("gallenblase", `<ellipse cx="122" cy="238" rx="10" ry="7" fill="${c.gallenblase}"/>`)}
      ${org("magen", `<path d="M146 198 C184 186 210 212 200 246 C192 272 160 278 144 262 C158 258 172 248 170 230 C168 216 156 212 146 214 Z" fill="${c.magen}"/>`)}
      ${org("bauchspeicheldruese", `<path d="M118 274 Q156 260 194 262 Q200 270 192 276 Q156 280 122 284 Q112 280 118 274 Z" fill="${c.bauchspeicheldruese}"/>`)}
      ${org("speiseroehre", `<path d="M130 92 C130 128 132 162 148 204" fill="none" stroke="${c.speiseroehre}" stroke-width="9" stroke-linecap="round"/>`)}
      ${org("mund", `<path d="M112 80 Q130 96 148 80 Q130 86 112 80 Z" fill="${c.mund}" stroke="${c.mund}" stroke-width="5" stroke-linejoin="round"/>`)}
    </svg>`;
  }

  /* ---------- Router ---------- */
  const routes = [];
  const route = (re, fn) => routes.push([re, fn]);
  function render() {
    const hash = location.hash.replace(/^#/, "") || "/";
    app.style.removeProperty("--c");
    if (!sheet.hidden) { sheetOnClose = null; sheet.hidden = true; document.body.style.overflow = ""; }
    let handled = false;
    for (const [re, fn] of routes) {
      const m = hash.match(re);
      if (m) { fn(...m.slice(1).map((x) => (x === undefined ? undefined : decodeURIComponent(x)))); handled = true; break; }
    }
    if (!handled) home();
    const section = hash.split("/")[1] || "home";
    const map = { "": "home", challenge: "quiz", quiz: "quiz", spiele: "quiz", spiel: "quiz", blitz: "quiz", thema: "lernen", themen: "lernen", karten: "lernen", experiment: "lernen", lexikon: "lernen", ich: "ich", erfolge: "ich", heft: "ich", protokoll: "ich" };
    const navKey = map[section] || "home";
    $$("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === navKey));
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", render);

  function setColor(el, color) { el.style.setProperty("--c", color); }
  const footer = `<p class="footer">Inhalte nach der Materialsammlung „Der Weg der Nahrung“ (BZfE/BLE) – für die App neu aufbereitet. Dein Fortschritt wird nur auf diesem Gerät gespeichert.</p>`;

  /* ---------- Startseite ---------- */
  const nextTopic = () => TOPICS.find((t) => topicProgress(t) < 100) || TOPICS[0];
  function stationRow(t, i) {
    const p = topicProgress(t);
    return `<a class="station" href="#/thema/${t.id}" style="--c:${t.color}">
      <span class="s-num">${p === 100 ? "✓" : i + 1}</span><span class="s-icon" aria-hidden="true">${t.icon}</span>
      <span class="s-main"><b>${esc(t.title)}</b><span class="progress"><i style="width:${p}%"></i></span></span>
      <span class="s-pct">${p}%</span></a>`;
  }
  function bodyMapBlock() {
    return `<div class="bodymap" id="bodymap"><div class="hint">👆 Tippe auf ein Organ</div>${bodySVG()}
      <div class="organ-info" id="organ-info"><p class="muted" style="margin:0">Die Nahrung wandert durch <b>Mund → Speiseröhre → Magen → Dünndarm → Dickdarm → Mastdarm</b>. Leber, Gallenblase und Bauchspeicheldrüse helfen mit ihren Säften.</p></div></div>`;
  }
  function home() {
    const nt = nextTopic();
    app.innerHTML = `
      <section class="hello">
        <h1>Was passiert mit deinem <span>Pausenbrot</span>?</h1>
        <p class="hero-lead">Begleite die Nahrung auf ihrer Reise durch deinen Körper – lesen, verstehen, Quiz durchklicken.</p>
        ${levelCard()}
        <div class="bigbtns">
          <a class="bigbtn" href="#/thema/${nt.id}" style="--c:${nt.color}"><span class="bi" aria-hidden="true">📖</span><span><small>Weiterlernen</small><b>${nt.icon} ${esc(nt.title)}</b></span></a>
          <a class="bigbtn" href="#/quiz/schnell" style="--c:#3d8bbd"><span class="bi" aria-hidden="true">❓</span><span><small>Schnell-Quiz</small><b>10 Fragen durchklicken</b></span></a>
        </div>
      </section>
      ${dailyCard()}
      <h2>Deine ${TOPICS.length} Stationen</h2>
      <div class="stations">${TOPICS.map(stationRow).join("")}</div>
      <div class="spacer"></div>
      <h2>Entdecke deinen Körper</h2>
      ${bodyMapBlock()}
      ${footer}`;
    bindBodyMap($("#bodymap"));
  }

  function bindBodyMap(root) {
    const info = $("#organ-info", root);
    const show = (id) => {
      const o = ORGANS[id], t = topicById(o.topic);
      root.classList.add("dim");
      $$(".organ", root).forEach((g) => g.classList.toggle("on", g.dataset.organ === id));
      setColor(info, ORGAN_COLORS[id]);
      info.innerHTML = `<h3><span class="dot"></span>${esc(o.name)}</h3><p>${esc(o.text)}</p><a class="btn small color" href="#/thema/${t.id}">Mehr zu „${esc(t.title)}“ →</a>`;
    };
    $$(".organ", root).forEach((g) => {
      g.addEventListener("click", () => show(g.dataset.organ));
      g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(g.dataset.organ); } });
    });
  }


  function levelCard() {
    const L = levelInfo(S.xp || 0), nb = Object.keys(S.badges || {}).length, s = streak();
    return `<a class="card levelcard" href="#/ich">
      <div class="lvl-icon">${L.icon}</div>
      <div style="flex:1;min-width:0"><p class="small muted" style="margin:0;font-weight:800">Level ${L.n} · ${S.xp || 0} XP${L.to ? ` · noch ${L.to - (S.xp || 0)} bis Level ${L.n + 1}` : ""}</p>
        <h3 style="margin:2px 0 8px">${esc(L.name)}</h3><div class="progress xp"><i style="width:${L.pct}%"></i></div></div>
      <div class="lvl-side"><span>🏅 ${nb}/${BADGES.length}</span><span>🔥 ${s} ${s === 1 ? "Tag" : "Tage"}</span></div></a>`;
  }
  function seeded(seedStr) { let h = 2166136261; for (const ch of seedStr) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function dailyQuestions() {
    const rnd = seeded(today()); const pool = QUIZ.slice(); const out = [];
    while (out.length < 5) out.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
    return out;
  }
  function dailyCard() {
    const done = (S.daily || {})[today()];
    return `<div class="card daily">
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <div><p class="small" style="margin:0;font-weight:800;opacity:.85">📅 Tages-Challenge</p><h2 style="margin:4px 0 6px">5 Fragen – jeden Tag neue!</h2>
        <p style="margin:0;opacity:.9">${done >= 80 ? `Heute geschafft: <b>${done} %</b> ✅ Morgen gibt’s neue Fragen.` : done !== undefined ? `Heute: <b>${done} %</b> – ab 80 % ist die Challenge geschafft. Versuch’s nochmal!` : "Schaffe mindestens 4 von 5 und sichere dir <b>+40 XP</b> und deine Serie 🔥"}</p></div>
        <a class="btn ${done !== undefined ? "secondary" : ""}" href="#/challenge" style="background:#fff;color:var(--ink)">${done >= 80 ? "Nochmal" : done !== undefined ? "Nochmal versuchen" : "Starten"}</a>
      </div></div>`;
  }
  route(/^\/challenge$/, () => {
    app.innerHTML = `<a class="back" href="#/">← Start</a><h1>📅 Tages-Challenge</h1><p class="muted">Fünf zufällige Fragen aus allen Stationen. Ab 80 % gilt die Challenge als geschafft.</p><div class="card" id="dq"></div>`;
    const qs = dailyQuestions();
    mountQuiz($("#dq"), qs, "daily", 5, (pct) => {
      S.daily = S.daily || {}; S.daily[today()] = Math.max(S.daily[today()] || 0, pct); save();
      if (pct >= 80) { award(40, "daily:" + today(), "Tages-Challenge"); confetti(); }
      else { award(5, "dailytry:" + today(), "Versucht"); toast("Fast! Versuch es nochmal 💪"); }
    });
  });

  function ichPage() {
    const L = levelInfo(S.xp || 0);
    app.innerHTML = `<h1>🙂 Ich</h1>
      ${levelCard()}
      <div class="grid grid-3">
        <a class="card game-tile" href="#/heft"><span class="icon">📒</span><div><h3>Mein Heft</h3><p class="small muted" style="margin:0">Alle deine Antworten &amp; Notizen</p></div></a>
        <a class="card game-tile" href="#/lexikon"><span class="icon">📚</span><div><h3>Lexikon</h3><p class="small muted" style="margin:0">Fachbegriffe nachschlagen</p></div></a>
        <a class="card game-tile" href="#/protokoll"><span class="icon">📝</span><div><h3>Eigene Experimente</h3><p class="small muted" style="margin:0">Planen &amp; protokollieren</p></div></a>
      </div>
      <div class="spacer"></div>
      <h2>Abzeichen <span class="chip">${Object.keys(S.badges || {}).length}/${BADGES.length}</span></h2>
      <div class="badges">${BADGES.map((b) => { const got = (S.badges || {})[b.id]; return `<div class="badge ${got ? "got" : ""}" title="${esc(b.desc)}"><div class="b-icon">${got ? b.icon : "🔒"}</div><b>${esc(b.name)}</b><span class="small muted">${esc(b.desc)}</span></div>`; }).join("")}</div>
      <div class="spacer"></div>
      <details class="more"><summary>🪜 Level-Leiter</summary>
        <div class="ladder" style="margin-top:10px">${LEVELS.map(([xp, name, icon], i) => `<div class="rung ${i + 1 <= L.n ? "got" : ""} ${i + 1 === L.n ? "now" : ""}"><span class="r-icon">${icon}</span><span><b>Level ${i + 1}: ${esc(name)}</b><br><span class="small muted">ab ${xp} XP</span></span></div>`).join("")}</div></details>
      <details class="more"><summary>⭐ So sammelst du XP</summary><ul class="small" style="margin:10px 0 0;padding-left:20px">
        <li>Text gelesen: 20 XP · Lernziel abgehakt: 5 XP</li>
        <li>Quiz: 2 XP pro richtige Antwort, Serien-Bonus ab 3 in Folge, Quiz geschafft +15, 100 % +30</li>
        <li>Blitzrunde: 1 XP pro richtige Antwort · Tages-Challenge: 40 XP</li>
        <li>Aufgabenkarte: 15 XP (Profi 20) · Experiment: 30 XP (Profi 40)</li>
        <li>Spiele fehlerfrei: 25–30 XP · Lexikon-Begriff: 2 XP</li></ul></details>
      ${footer}`;
  }
  route(/^\/ich$/, ichPage);
  route(/^\/erfolge$/, ichPage);

  /* ---------- Lernen: Übersicht ---------- */
  route(/^\/themen$/, () => {
    app.innerHTML = `<h1>📖 Lernen</h1>
      <p class="muted">${TOPICS.length} Stationen – vom Mund bis zum Darmausgang, dazu das Extra-Thema Zucker. Jede Station: <b>lesen → merken → Quiz</b>. Aufgaben und Experimente gibt’s zum Vertiefen.</p>
      <div class="stations">${TOPICS.map(stationRow).join("")}</div>
      <div class="spacer"></div>
      <div class="grid grid-2">
        <a class="card game-tile" href="#/lexikon"><span class="icon">📚</span><div><h3>Lexikon</h3><p class="small muted" style="margin:0">Alle Fachbegriffe kurz erklärt</p></div></a>
        <a class="card game-tile" href="#/karten"><span class="icon">🃏</span><div><h3>Alle Aufgabenkarten</h3><p class="small muted" style="margin:0">40 Karten zum Recherchieren, Experimentieren und Beobachten</p></div></a>
      </div>
      ${footer}`;
  });

  /* ---------- Station (Lernpfad) ---------- */
  function figureHTML(f, i) {
    return `<figure class="fig" data-fig="${i}"><div class="fig-img">${f.svg}</div><figcaption>${esc(f.caption)} <span class="zoom">🔍 Vergrößern</span></figcaption></figure>`;
  }
  function routeStrip() {
    return `<div class="routestrip">${ROUTE_STRIP.map((r, i) => `<div class="rs" style="--c:${ORGAN_COLORS[r.o]}"><span class="rs-n">${i + 1}</span><b>${esc(ORGANS[r.o].name)}</b><span>${esc(r.verb)}</span></div>`).join("")}</div>`;
  }
  route(/^\/thema\/([a-z]+)(?:\/([a-z]+))?$/, (id, tab) => {
    const t = topicById(id);
    if (!t) return home();
    const idx = TOPICS.indexOf(t);
    const prev = TOPICS[idx - 1], next = TOPICS[idx + 1];
    const goals = S.goals[t.id] || [];
    const nDone = t.cards.filter((n) => S.cards[n]?.done).length;
    app.innerHTML = `
      <a class="back" href="#/themen">← Alle Stationen</a>
      <div class="topic-head">
        <div class="icon" aria-hidden="true">${t.icon}</div>
        <p class="small" style="margin:0;opacity:.85;font-weight:800">Station ${idx + 1} von ${TOPICS.length}</p>
        <h1>${esc(t.title)}</h1>
        <div class="progress" style="background:rgba(255,255,255,.3);max-width:320px"><i style="width:${topicProgress(t)}%;background:#fff"></i></div>
      </div>
      <section class="step">
        <div class="step-h"><span class="step-n">1</span><h2>Lesen</h2>
          <div class="level-toggle" role="group" aria-label="Schwierigkeit">
            <button data-level="basis">🌱 Basis</button><button data-level="profi">⭐ Profi</button>
          </div></div>
        <div class="card reading" id="reading"></div>
      </section>
      <section class="step">
        <div class="step-h"><span class="step-n">2</span><h2>Merke dir</h2></div>
        <ul class="facts">${t.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      </section>
      <section class="step" id="quizstep">
        <div class="step-h"><span class="step-n">3</span><h2>Teste dich</h2></div>
        <div class="card" id="quizbox"></div>
      </section>
      <section class="step">
        <div class="step-h"><span class="step-n">4</span><h2>Vertiefen</h2><span class="chip">freiwillig</span></div>
        <details class="more"><summary>🃏 Aufgabenkarten <span class="chip">${nDone}/${t.cards.length}</span></summary>
          <p class="muted small">Karte antippen = Tipp auf der Rückseite. „Bearbeiten“ = Antwort notieren und Lösungsidee ansehen.</p><div class="grid grid-2" id="cardgrid"></div></details>
        <details class="more"><summary>🧪 Experimente &amp; Modelle <span class="chip">${t.experiments.length}</span></summary>
          <div class="grid grid-2" style="margin-top:10px">${t.experiments.map(expTile).join("")}</div></details>
        <details class="more"><summary>✅ Das kann ich schon <span class="chip">${goals.filter(Boolean).length}/${t.goals.length}</span></summary>
          <ul class="goals" style="margin-top:10px">${t.goals.map((g, i) => `<li><label><input type="checkbox" data-goal="${i}" ${goals[i] ? "checked" : ""}><span>${esc(g)}</span></label></li>`).join("")}</ul></details>
      </section>
      <div class="row" style="justify-content:space-between;margin-top:24px">
        ${prev ? `<a class="btn secondary" href="#/thema/${prev.id}">← ${esc(prev.short)}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="#/thema/${next.id}">Nächste Station: ${esc(next.short)} →</a>` : `<a class="btn" href="#/quiz/all">Abschlussquiz →</a>`}
      </div>`;
    setColor(app, t.color);
    const figs = FIGURES[t.id] || [];
    const drawText = () => {
      const level = S.level || "basis";
      $$("[data-level]").forEach((b) => b.classList.toggle("active", b.dataset.level === level));
      const paras = t[level];
      let html = "";
      paras.forEach((p, i) => {
        html += `<p>${rich(p)}</p>`;
        if (t.id === "weg" && i === 0) html += routeStrip();
        const lim = Math.min(paras.length - 1, 99);
        figs.forEach((f, fi) => { const af = typeof f.after === "object" ? f.after[level] : f.after; if (Math.min(af, lim) === i) html += figureHTML(f, fi); });
      });
      if (t.id === "weg") html += bodyMapBlock();
      html += `<p class="small muted" style="margin:14px 0 0">Unterstrichene Wörter antippen = Erklärung aus dem Lexikon.</p>
        <button class="btn color" id="readbtn" style="margin-top:12px">${S.read[t.id] ? "✓ Gelesen – zum Quiz" : "Gelesen ✓ – weiter zum Quiz"}</button>`;
      $("#reading").innerHTML = html;
      if (t.id === "weg") bindBodyMap($("#bodymap"));
      $$(".fig").forEach((el) => el.addEventListener("click", () => {
        const f = figs[+el.dataset.fig];
        openSheet(`<h2 id="sheet-title">${esc(t.title)}</h2><div class="fig-big">${f.svg}</div><p class="muted">${esc(f.caption)}</p>`);
      }));
      $("#readbtn").addEventListener("click", (e) => {
        S.read[t.id] = true; save(); e.target.textContent = "✓ Gelesen – zum Quiz";
        award(20, "read:" + t.id, "Text gelesen");
        $("#quizstep").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    $$("[data-level]").forEach((b) => b.addEventListener("click", () => { S.level = b.dataset.level; save(); drawText(); }));
    drawText();
    mountQuiz($("#quizbox"), QUIZ.filter((q) => q.t === t.id), t.id, 8);
    renderCardGrid($("#cardgrid"), t.cards.map((n) => CARDS[n - 1]));
    $$("[data-goal]").forEach((cb) => cb.addEventListener("change", () => {
      const arr = S.goals[t.id] || []; arr[+cb.dataset.goal] = cb.checked; S.goals[t.id] = arr; save();
      if (cb.checked) award(5, `goal:${t.id}:${cb.dataset.goal}`, "Lernziel"); else checkBadges();
    }));
    if (tab === "quiz") setTimeout(() => $("#quizstep").scrollIntoView({ block: "start" }), 50);
    if (tab === "aufgaben" || tab === "experimente") { const d = $$("details.more")[tab === "aufgaben" ? 0 : 1]; d.open = true; setTimeout(() => d.scrollIntoView({ block: "start" }), 50); }
  });

  /* ---------- Aufgabenkarten ---------- */
  function cardFace(c) {
    const st = S.cards[c.n] || {};
    const chips = `<span class="chip ${c.type}">${TYPE_ICON[c.type]} ${TYPE[c.type]}</span>${c.profi ? `<span class="chip profi">⭐ Profi</span>` : ""}${st.done ? `<span class="chip done">✓ erledigt</span>` : ""}`;
    return `<div class="tcard" data-card="${c.n}" data-color="${topicById(c.topic).color}">
      <div class="tcard-inner">
        <div class="tcard-face">
          <div class="row" style="justify-content:space-between"><span class="tcard-num">${c.n}</span><div class="row" style="gap:4px">${chips}</div></div>
          <div class="tcard-text">${esc(c.front)}</div>
          <div class="tcard-foot"><span class="small muted">↻ Tippen für Tipp</span><button class="btn small color" data-open="${c.n}">Bearbeiten</button></div>
        </div>
        <div class="tcard-face tcard-back">
          <div class="row" style="justify-content:space-between"><span class="tcard-num">${c.n}</span><span class="chip">Rückseite</span></div>
          <div class="tcard-text">${esc(c.back)}</div>
          <div class="tcard-foot"><span class="small muted">↻ zurückdrehen</span><button class="btn small color" data-open="${c.n}">Bearbeiten</button></div>
        </div>
      </div>
    </div>`;
  }
  function renderCardGrid(grid, cards) {
    grid.innerHTML = cards.length ? cards.map(cardFace).join("") : `<div class="empty">Keine Karten gefunden.</div>`;
    $$(".tcard", grid).forEach((el) => {
      setColor(el, el.dataset.color);
      el.addEventListener("click", (e) => {
        const ob = e.target.closest("[data-open]");
        if (ob) { e.stopPropagation(); openCard(+ob.dataset.open, () => renderCardGrid(grid, cards)); return; }
        el.classList.toggle("flipped");
      });
    });
  }
  function openCard(n, onClose) {
    const c = CARDS[n - 1], st = cardState(n), t = topicById(c.topic);
    const expLink = (c.front + " " + c.back).match(/\((A\d+)\)/);
    openSheet(`
      <div class="row" style="gap:6px"><span class="chip ${c.type}">${TYPE_ICON[c.type]} ${TYPE[c.type]}</span>${c.profi ? `<span class="chip profi">⭐ Profi</span>` : ""}<span class="chip">${t.icon} ${esc(t.short)}</span></div>
      <h2 id="sheet-title" style="margin-top:12px">Aufgabe ${c.n}</h2>
      <p style="font-weight:700">${esc(c.front)}</p>
      <details class="box"><summary><b>${c.type === "S" ? "Tipp / Zusatzaufgabe" : "Tipp anzeigen"}</b></summary><p style="margin:.6em 0 0">${esc(c.back)}</p></details>
      ${expLink && EXPERIMENTS[expLink[1]] ? `<a class="btn secondary small" href="#/experiment/${expLink[1]}" data-close>🧪 Zum Experiment ${expLink[1]}</a>` : ""}
      <h3 style="margin-top:16px">${c.type === "S" ? "Meine Beobachtungen" : "Meine Antwort"}</h3>
      ${c.type === "S" ? `<p class="small muted">Hier gibt es kein Richtig oder Falsch – beobachte dich genau und beschreibe, was du merkst.</p>` : ""}
      <textarea id="note" placeholder="Schreib hier…">${esc(st.note)}</textarea>
      ${c.solution ? `<div class="spacer"></div><button class="btn secondary small" id="showsol">💡 Lösungsidee anzeigen</button><div id="sol" hidden class="solution"><h4>Lösungsidee</h4><p style="margin:0">${esc(c.solution)}</p></div>` : ""}
      <div class="spacer"></div>
      <div class="row"><button class="btn" id="donebtn">${st.done ? "↺ Als offen markieren" : "✓ Erledigt"}</button></div>`, onClose);
    $("#note").addEventListener("input", (e) => { st.note = e.target.value; save(); });
    const sb = $("#showsol");
    if (sb) sb.addEventListener("click", () => {
      if (!st.note.trim() && !confirmSoft(sb)) return;
      $("#sol").hidden = false; sb.remove();
    });
    $("#donebtn").addEventListener("click", () => { st.done = !st.done; save(); closeSheet();
      if (st.done) { award(c.profi ? 20 : 15, "card:" + c.n, "Aufgabe"); if (st.note.trim().length > 20) award(5, "cardnote:" + c.n, "Notiz"); } else toast("Wieder offen"); });
  }
  /* Kleiner Anstupser: Erst selbst probieren */
  function confirmSoft(btn) {
    if (btn.dataset.warned) return true;
    btn.dataset.warned = "1";
    btn.textContent = "Erst selbst probieren? Nochmal tippen zum Anzeigen";
    return false;
  }

  route(/^\/karten$/, () => {
    app.innerHTML = `<h1>Aufgabenkarten</h1>
      <p class="muted">40 Karten zu allen Stationen. <span class="chip R">🔍 Recherche</span> <span class="chip E">🧪 Experiment</span> <span class="chip S">🧘 Selbstbeobachtung</span></p>
      <div class="filters">
        <select id="f-topic" aria-label="Thema"><option value="">Alle Themen</option>${TOPICS.map((t) => `<option value="${t.id}">${esc(t.title)}</option>`).join("")}</select>
        <select id="f-type" aria-label="Aufgabenart"><option value="">Alle Arten</option><option value="R">Recherche</option><option value="E">Experiment</option><option value="S">Selbstbeobachtung</option></select>
        <select id="f-level" aria-label="Niveau"><option value="">Alle Niveaus</option><option value="basis">🌱 Basis</option><option value="profi">⭐ Profi</option></select>
        <select id="f-done" aria-label="Status"><option value="">Alle</option><option value="open">Offen</option><option value="done">Erledigt</option></select>
        <button class="btn secondary small" id="random">🎲 Zufallskarte</button>
      </div>
      <div class="grid grid-2" id="cardgrid"></div>`;
    const grid = $("#cardgrid");
    const apply = () => {
      const tp = $("#f-topic").value, ty = $("#f-type").value, lv = $("#f-level").value, dn = $("#f-done").value;
      renderCardGrid(grid, CARDS.filter((c) => (!tp || c.topic === tp) && (!ty || c.type === ty) && (!lv || (lv === "profi") === !!c.profi) && (!dn || (dn === "done") === !!S.cards[c.n]?.done)));
    };
    $$(".filters select").forEach((s) => s.addEventListener("change", apply));
    $("#random").addEventListener("click", () => {
      const open = CARDS.filter((c) => !S.cards[c.n]?.done);
      const pick = (open.length ? open : CARDS)[Math.floor(Math.random() * (open.length || CARDS.length))];
      openCard(pick.n, apply);
    });
    apply();
  });

  /* ---------- Experimente ---------- */
  function expTile(id) {
    const x = EXPERIMENTS[id], st = S.exp[id];
    const icon = x.interactive ? "🎮" : "🧪";
    return `<a class="card game-tile" href="#/experiment/${id}"><span class="icon" aria-hidden="true">${icon}</span><div>
      <p class="small muted" style="margin:0;font-weight:800">${id}${x.profi ? " · ⭐ Profi" : ""}${st?.done ? " · ✓ erledigt" : ""}</p>
      <h3>${esc(x.title)}</h3><p class="small muted" style="margin:0">${esc(x.intro)}</p></div></a>`;
  }

  route(/^\/experiment\/([AZ]\d+)$/, (id) => {
    const x = EXPERIMENTS[id];
    if (!x) return home();
    const t = topicById(x.topic), st = expState(id);
    const field = (key, label, ph) => `<h3>${label}</h3><textarea data-field="${key}" placeholder="${esc(ph || "")}">${esc(st.fields[key] || "")}</textarea>`;
    app.innerHTML = `
      <a class="back" href="#/thema/${t.id}/experimente">← ${esc(t.title)}</a>
      <div class="topic-head"><div class="icon">${x.interactive ? "🎮" : "🧪"}</div><p class="small" style="margin:0;font-weight:800;opacity:.85">${id}${x.profi ? " · ⭐ Profi" : ""}</p><h1>${esc(x.title)}</h1><p style="margin:0">${esc(x.intro)}</p></div>
      <div class="grid" style="gap:16px">
        ${x.material ? `<div class="card"><h2>Ihr braucht</h2><ul class="material">${x.material.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></div>` : ""}
        ${x.hypothesis ? `<div class="card">${field("hyp", "🤔 Vermutung", "Ich vermute, dass …")}<p class="small muted" style="margin:.5em 0 0">${esc(x.hypothesis)}</p></div>` : ""}
        ${x.steps ? `<div class="card"><h2>So geht’s</h2><ol class="steps">${x.steps.map((s, i) => `<li class="${st.steps[i] ? "checked" : ""}"><div>
            <label class="row" style="gap:10px;align-items:flex-start;cursor:pointer"><input type="checkbox" data-step="${i}" ${st.steps[i] ? "checked" : ""} style="width:20px;height:20px;margin-top:3px;accent-color:var(--c)"><span>${esc(s.do)}</span></label>
            ${s.organ ? `<details style="margin-top:6px"><summary class="small" style="font-weight:800;cursor:pointer">In welchem Organ passiert das? (erst überlegen!)</summary><p class="organ-tag" style="margin:.4em 0 .2em">→ ${esc(s.organ)}</p><p class="small" style="margin:0">${esc(s.explain)}</p></details>` : ""}
          </div></li>`).join("")}</ol></div>` : ""}
        ${x.interactive ? `<div class="card" id="interactive"></div>` : ""}
        ${x.observe ? `<div class="card">${field("obs", "👀 Beobachtung", x.observe)}<p class="small muted" style="margin:.5em 0 0">${esc(x.observe)}</p></div>` : ""}
        ${x.explanation ? `<div class="card"><h2>💡 Erklärung</h2>${x.observe || x.hypothesis ? `<p class="muted small">Schreib zuerst deine eigene Erklärung, dann vergleiche.</p><textarea data-field="erk" placeholder="Meine Erklärung …">${esc(st.fields.erk || "")}</textarea><div class="spacer"></div>` : ""}
          <button class="btn secondary" id="showexp">Erklärung anzeigen</button><div class="solution" id="exptext" hidden><p style="margin:0">${esc(x.explanation)}</p></div></div>` : ""}
        ${x.reflect ? `<div class="card">${field("ref", "🧘 Und du?", "")}<p class="small muted" style="margin:.5em 0 0">${esc(x.reflect)}</p></div>` : ""}
      </div>
      <div class="spacer"></div>
      <button class="btn color" id="expdone">${st.done ? "✓ Experiment erledigt" : "Experiment abschließen ✓"}</button>`;
    setColor(app, t.color);
    $$("[data-field]").forEach((ta) => ta.addEventListener("input", () => { st.fields[ta.dataset.field] = ta.value; save(); }));
    $$("[data-step]").forEach((cb) => cb.addEventListener("change", () => { st.steps[cb.dataset.step] = cb.checked; cb.closest("li").classList.toggle("checked", cb.checked); save(); }));
    const se = $("#showexp"); if (se) se.addEventListener("click", () => { $("#exptext").hidden = false; se.remove(); });
    $("#expdone").addEventListener("click", (e) => { st.done = true; save(); e.target.textContent = "✓ Experiment erledigt"; award(x.profi ? 40 : 30, "exp:" + id, "Experiment"); });
    if (x.interactive) INTERACTIVE[x.interactive]($("#interactive"), id);
  });

  /* ---------- Interaktive Module ---------- */
  const INTERACTIVE = {
    swallow(el) {
      el.innerHTML = `<div class="swallow">
        <h2>Schluck-Modell</h2>
        <svg viewBox="0 0 345 300" xmlns="http://www.w3.org/2000/svg" aria-label="Seitenansicht von Mund und Rachen">
          <path d="M30 40 Q120 20 250 34 L262 300 L190 300 L186 190 Q120 200 40 178 Z" fill="#f6d9c8"/>
          <path d="M40 52 L210 52 L210 80 L40 80 Z" fill="#e3f0fa"/>
          <path d="M40 112 L200 112 Q206 140 200 160 L40 160 Z" fill="#fde6e3"/>
          <path d="M206 52 L248 52 L248 210 L206 210 Z" fill="#e3f0fa"/>
          <path d="M206 210 L223 210 L223 300 L206 300 Z" fill="#e3f0fa"/>
          <g stroke="#bcd3e6" stroke-width="2">${[225, 240, 255, 270, 285].map((y) => `<line x1="206" x2="223" y1="${y}" y2="${y}"/>`).join("")}</g>
          <path d="M227 210 L248 210 L248 300 L227 300 Z" fill="#fbd3cd"/>
          <path d="M44 160 Q110 118 192 150 L192 160 Z" fill="#e57373"/>
          <path id="air" d="M60 66 L228 66 L228 200 L214 200 L214 292" fill="none" stroke="#5aa5d6" stroke-width="4" stroke-dasharray="8 7" stroke-linecap="round" marker-end="url(#arr)"/>
          <defs><marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#5aa5d6"/></marker></defs>
          <g class="flap" id="velum"><line x1="196" y1="96" x2="244" y2="96" stroke="#c75b5b" stroke-width="9" stroke-linecap="round"/></g>
          <g class="flap" id="epi"><line x1="205" y1="200" x2="230" y2="200" stroke="#7b6bb0" stroke-width="7" stroke-linecap="round"/></g>
          <circle id="bolus" r="9" fill="#a0703c" stroke="#7a5228" stroke-width="2"/>
          <g font-size="11" font-weight="700" fill="#5d5866" font-family="inherit">
            <text x="48" y="47">Nasenraum</text><text x="48" y="107">Mundhöhle</text><text x="90" y="176" fill="#fff">Zunge</text>
            <text x="252" y="92">Gaumen-</text><text x="252" y="104">segel</text><text x="252" y="196">Kehl-</text><text x="252" y="208">deckel</text>
            <text x="150" y="292" text-anchor="end">Luftröhre →</text><text x="252" y="292">← Speiseröhre</text>
          </g>
        </svg>
        <label for="sw" class="small muted" style="font-weight:800">Schieb den Regler, um zu schlucken:</label>
        <input type="range" id="sw" min="0" max="100" value="0">
        <div class="box" id="swtext" aria-live="polite"></div>
        <button class="btn small secondary" id="swplay">▶ Abspielen</button>
      </div>`;
      const bolus = $("#bolus", el), velum = $("#velum", el), epi = $("#epi", el), air = $("#air", el), txt = $("#swtext", el), range = $("#sw", el);
      const lerp = (a, b, k) => a + (b - a) * k;
      const path = [[110, 140], [196, 136], [232, 175], [237, 215], [237, 290]];
      const stops = [0, 30, 50, 70, 100];
      function pos(v) {
        if (v <= 15) return path[0];
        const vv = Math.max(15, v);
        const s = [15, 35, 50, 70, 100];
        for (let i = 0; i < s.length - 1; i++) {
          if (vv <= s[i + 1]) { const k = (vv - s[i]) / (s[i + 1] - s[i]); return [lerp(path[i][0], path[i + 1][0], k), lerp(path[i][1], path[i + 1][1], k)]; }
        }
        return path[path.length - 1];
      }
      void stops;
      function update(v) {
        const [x, y] = pos(v);
        bolus.setAttribute("cx", x); bolus.setAttribute("cy", y);
        const closed = v > 18 && v < 78;
        velum.style.transformOrigin = "196px 96px"; epi.style.transformOrigin = "205px 200px";
        velum.style.transform = `rotate(${closed ? -25 : 62}deg)`;
        epi.style.transform = `rotate(${v > 35 && v < 78 ? 18 : -78}deg)`;
        air.style.opacity = closed ? 0.12 : 1;
        let msg;
        if (v <= 15) msg = "<b>Kauen:</b> Der Bissen liegt auf der Zunge. Der Luftweg durch Nase, Rachen und Luftröhre ist offen – du kannst atmen.";
        else if (v <= 35) msg = "<b>Schlucken beginnt:</b> Die Zunge drückt den Bissen nach hinten. Das <b>Gaumensegel</b> hebt sich und verschließt den Nasenraum.";
        else if (v < 78) msg = "<b>Luftweg zu:</b> Der <b>Kehldeckel</b> klappt über die Luftröhre. Der Bissen gleitet vorbei in die Speiseröhre. In diesem Moment kannst du <b>nicht atmen</b>.";
        else msg = "<b>Geschafft:</b> Der Bissen ist in der Speiseröhre und wird durch Peristaltik zum Magen geschoben. Gaumensegel und Kehldeckel öffnen sich – du kannst wieder atmen.";
        txt.innerHTML = msg;
      }
      range.addEventListener("input", () => update(+range.value));
      $("#swplay", el).addEventListener("click", () => {
        let v = 0; range.value = 0; update(0);
        const iv = setInterval(() => { v += 1; range.value = v; update(v); if (v >= 100) clearInterval(iv); }, 45);
      });
      update(0);
    },

    hunger(el) {
      const answers = {};
      const draw = () => {
        el.innerHTML = `<h2>Hunger, Appetit oder andere Gründe?</h2>${HUNGER_STORIES.map((s, i) => {
          const a = answers[i];
          return `<div class="box"><p><b>${i + 1}. ${esc(s.name)}:</b> ${esc(s.text)}</p>
            <div class="choice-row">${["Hunger", "Appetit", "andere Gründe"].map((o) => `<button data-i="${i}" data-o="${o}" class="${a ? (o === s.answer ? "right" : a === o ? "wrong" : "") : ""}" ${a ? "disabled" : ""}>${o}</button>`).join("")}</div>
            ${a ? `<p class="small" style="margin:.6em 0 0">${a === s.answer ? "✅ Richtig! " : "❌ Nicht ganz. "}${esc(s.why)}</p>` : ""}</div>`;
        }).join("")}
        <h3>Was ist der Unterschied zwischen Hunger und Appetit?</h3>
        <textarea id="hdiff" placeholder="Beschreibe mit eigenen Worten …">${esc(expState("A13").fields.diff || "")}</textarea>`;
        $$("[data-o]", el).forEach((b) => b.addEventListener("click", () => { answers[b.dataset.i] = b.dataset.o; draw(); }));
        $("#hdiff", el).addEventListener("input", (e) => { expState("A13").fields.diff = e.target.value; save(); });
        const n = Object.keys(answers).length;
        if (n === HUNGER_STORIES.length) {
          const score = HUNGER_STORIES.filter((s, i) => answers[i] === s.answer).length;
          S.games.hunger = Math.max(S.games.hunger || 0, Math.round((score / HUNGER_STORIES.length) * 100)); save();
          award(score * 5, "hunger:" + score, "Hunger/Appetit");
        }
      };
      draw();
    },

    ballast(el) {
      const sel = new Set();
      let checked = false;
      const travel = {};
      const st = expState("A12");
      const draw = () => {
        el.innerHTML = `
          <h2>1. Wo stecken Ballaststoffe?</h2>
          <p class="muted">Tippe alle Lebensmittel an, die viele Ballaststoffe enthalten – die du deinem Freund empfehlen würdest.</p>
          <div class="foods">${FOODS.map((f, i) => {
            let cls = sel.has(i) ? "sel" : "";
            if (checked) cls = sel.has(i) ? (f.fiber ? "right" : "wrong") : (f.fiber ? "missed" : "");
            return `<button class="food ${cls}" data-f="${i}" ${checked ? "disabled" : ""}><span class="e">${f.icon}</span>${esc(f.name)}</button>`;
          }).join("")}</div>
          <div class="spacer"></div>
          ${checked ? `<div class="feedback ${resultOK() ? "ok" : "no"}">${resultText()}</div><button class="btn small secondary" id="again" style="margin-top:10px">Nochmal</button>` : `<button class="btn" id="check" ${sel.size ? "" : "disabled"}>Prüfen</button>`}
          <div class="spacer"></div>
          <h2>2. Die lange Flugreise</h2>
          <p class="muted">Dein Freund hat Angst vor Verstopfung auf einer langen Flugreise. Was sollte er jeweils wählen?</p>
          ${TRAVEL_CHOICES.map((q, i) => `<div class="box"><p style="font-weight:800">${esc(q.q)}</p><div class="choice-row">${q.options.map((o, j) => `<button data-t="${i}" data-j="${j}" class="${travel[i] !== undefined ? (j === q.answer ? "right" : travel[i] === j ? "wrong" : "") : ""}" ${travel[i] !== undefined ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>${travel[i] !== undefined ? `<p class="small" style="margin:.6em 0 0">${travel[i] === q.answer ? "✅ " : "❌ "}${esc(q.why)}</p>` : ""}</div>`).join("")}
          <h2>3. Erkläre</h2>
          <p class="muted">Wie schützen Ballaststoffe vor Verstopfung? Erkläre mit eigenen Worten.</p>
          <textarea id="bexp" placeholder="Ballaststoffe …">${esc(st.fields.bexp || "")}</textarea>`;
        $$("[data-f]", el).forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.f; sel.has(i) ? sel.delete(i) : sel.add(i); draw(); }));
        const c = $("#check", el); if (c) c.addEventListener("click", () => { checked = true; const sc = score(); S.games.ballast = Math.max(S.games.ballast || 0, sc); save(); draw(); if (sc === 100) award(30, "ballast:100", "Ballaststoffe"); else checkBadges(); });
        const a = $("#again", el); if (a) a.addEventListener("click", () => { checked = false; sel.clear(); draw(); });
        $$("[data-t]", el).forEach((b) => b.addEventListener("click", () => { travel[b.dataset.t] = +b.dataset.j; draw(); }));
        $("#bexp", el).addEventListener("input", (e) => { st.fields.bexp = e.target.value; save(); });
      };
      const score = () => { let ok = 0; FOODS.forEach((f, i) => { if (f.fiber === sel.has(i)) ok++; }); return Math.round((ok / FOODS.length) * 100); };
      const resultOK = () => score() === 100;
      const resultText = () => resultOK() ? "Perfekt! Alle ballaststoffreichen Lebensmittel gefunden. Sie stammen alle aus Pflanzen." : `${score()} % richtig. Grün = richtig, rot = enthält kaum Ballaststoffe, gestrichelt = übersehen. Tipp: Ballaststoffe gibt es nur in pflanzlichen Lebensmitteln – aber nicht in Saft oder Süßigkeiten.`;
      draw();
    },

    zuckerdetektiv(el) {
      const items = shuffle(SUGAR_NAMES);
      const sel = new Set(); let checked = false;
      const st = expState("Z1");
      const draw = () => {
        const ok = items.filter((x, i) => x.sugar === sel.has(i)).length;
        el.innerHTML = `<h2>Zutatenliste</h2><p class="muted">Tippe alle Zutaten an, die <b>Zucker</b> sind.</p>
          <div class="label-pack"><b>Zutaten:</b> ${items.map((x, i) => { let c = sel.has(i) ? "sel" : ""; if (checked) c = sel.has(i) ? (x.sugar ? "right" : "wrong") : (x.sugar ? "missed" : ""); return `<button class="ing ${c}" data-i="${i}" ${checked ? "disabled" : ""}>${esc(x.name)}</button>`; }).join(", ")}</div>
          <div class="spacer"></div>
          ${checked ? `<div class="feedback ${ok === items.length ? "ok" : "no"}">${ok === items.length ? "🔎 Perfekt! Alle versteckten Zucker entlarvt." : `${ok} von ${items.length} richtig. Grün = richtig erkannt, rot = kein Zucker, gestrichelt = übersehener Zucker.`}</div><div class="spacer"></div><button class="btn secondary small" id="zagain">Nochmal</button>` : `<button class="btn" id="zcheck" ${sel.size ? "" : "disabled"}>Prüfen</button>`}`;
        $$("[data-i]", el).forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.i; sel.has(i) ? sel.delete(i) : sel.add(i); draw(); }));
        const c = $("#zcheck", el); if (c) c.addEventListener("click", () => { checked = true; const pct = Math.round((items.filter((x, i) => x.sugar === sel.has(i)).length / items.length) * 100); S.games.zucker = Math.max(S.games.zucker || 0, pct); save(); if (pct === 100) { award(30, "zucker:100", "Zucker-Detektiv"); confetti(); } else checkBadges(); draw(); });
        const a = $("#zagain", el); if (a) a.addEventListener("click", () => { sel.clear(); checked = false; draw(); });
      };
      void st; draw();
    },

    wuerfel(el) {
      const guess = {}, shown = {};
      const cubeRow = (n, cls) => `<span class="cubes">${Array.from({ length: n }, () => `<i class="${cls}"></i>`).join("")}</span>`;
      const draw = () => {
        el.innerHTML = `<h2>Schätze!</h2><p class="muted">1 Würfel ≈ 3 g Zucker. Schieb den Regler und decke dann auf.</p>
          ${SUGAR_PRODUCTS.map((p, i) => { const real = Math.round(p.g / 3), g = guess[i] ?? 5; return `<div class="box"><p style="margin:0 0 6px;font-weight:800">${p.icon} ${esc(p.name)}</p>
            <div class="row"><input type="range" min="0" max="20" value="${g}" data-g="${i}" style="flex:1;accent-color:var(--c)" ${shown[i] ? "disabled" : ""}><b style="min-width:70px;text-align:right">${g} Würfel</b></div>
            ${cubeRow(g, "guess")}
            ${shown[i] ? `<p class="small" style="margin:.4em 0 0">${Math.abs(g - real) <= 2 ? "✅ Gut geschätzt!" : g < real ? "😮 Mehr als gedacht!" : "🙂 Weniger als gedacht."} Tatsächlich ca. <b>${p.g} g = ${real} Würfel</b>.</p>${cubeRow(real, "real")}` : `<button class="btn small secondary" data-s="${i}" style="margin-top:8px">Aufdecken</button>`}</div>`; }).join("")}
          ${Object.keys(shown).length === SUGAR_PRODUCTS.length ? `<div class="feedback ok">Fertig! Zur Erinnerung: Die WHO empfiehlt höchstens <b>16 Würfel</b> pro Tag, besser 8.</div>` : ""}`;
        $$("[data-g]", el).forEach((r) => r.addEventListener("input", () => { guess[r.dataset.g] = +r.value; const row = r.closest(".box"); row.querySelector("b").textContent = r.value + " Würfel"; row.querySelector(".cubes").outerHTML = cubeRow(+r.value, "guess"); }));
        $$("[data-s]", el).forEach((b) => b.addEventListener("click", () => {
          const i = +b.dataset.s; shown[i] = true; if (guess[i] === undefined) guess[i] = 5;
          if (Object.keys(shown).length === SUGAR_PRODUCTS.length) { const good = SUGAR_PRODUCTS.filter((p, k) => Math.abs((guess[k] ?? 5) - Math.round(p.g / 3)) <= 2).length; award(good * 4, "wuerfel:" + good, "Gut geschätzt"); }
          draw();
        }));
      };
      draw();
    },

    illusion(el) {
      const ans = {};
      const st = expState("A14");
      const plates = `<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" aria-label="Zwei Teller mit Nudelportionen">
        <circle cx="105" cy="95" r="88" fill="#fff" stroke="#d9cfc0" stroke-width="3"/><circle cx="105" cy="95" r="76" fill="none" stroke="#efe7da" stroke-width="2"/>
        <circle cx="300" cy="95" r="50" fill="#fff" stroke="#d9cfc0" stroke-width="3"/><circle cx="300" cy="95" r="44" fill="none" stroke="#efe7da" stroke-width="2"/>
        ${[105, 300].map((cx) => `<g><circle cx="${cx}" cy="95" r="36" fill="#f2c45a"/><path d="M${cx - 28} 88 q14 -12 28 0 t28 0 M${cx - 30} 100 q15 -12 30 0 t30 0" stroke="#d99a2b" stroke-width="3" fill="none"/><circle cx="${cx - 6}" cy="90" r="9" fill="#d1495b"/></g>`).join("")}
        <text x="105" y="188" text-anchor="middle" font-size="13" font-weight="700" fill="#5d5866">links</text><text x="300" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#5d5866">rechts</text>
      </svg>`;
      const glasses = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" aria-label="Drei unterschiedliche Gläser mit Saft">
        <g stroke="#9aa9b5" stroke-width="3" fill="rgba(220,235,245,.4)">
          <path d="M40 60 L40 175 Q40 182 47 182 L133 182 Q140 182 140 175 L140 60"/>
          <path d="M180 30 L180 175 Q180 182 187 182 L223 182 Q230 182 230 175 L230 30"/>
          <path d="M270 30 L300 182 L340 182 L370 30"/>
        </g>
        <path d="M43 125 L137 125 L137 175 Q137 179 133 179 L47 179 Q43 179 43 175 Z" fill="#f4a261"/>
        <path d="M183 95 L227 95 L227 175 Q227 179 223 179 L187 179 Q183 179 183 175 Z" fill="#f4a261"/>
        <path d="M282 92 L358 92 L338 179 L302 179 Z" fill="#f4a261"/>
        <g font-size="13" font-weight="700" fill="#5d5866" text-anchor="middle"><text x="90" y="198">links</text><text x="205" y="198">Mitte</text><text x="320" y="198">rechts</text></g>
      </svg>`;
      const q = (key, opts, right, why) => `<div class="choice-row">${opts.map((o) => `<button data-q="${key}" data-o="${o}" class="${ans[key] ? (o === right ? "right" : ans[key] === o ? "wrong" : "") : ""}" ${ans[key] ? "disabled" : ""}>${o}</button>`).join("")}</div>${ans[key] ? `<p class="small" style="margin:.6em 0 0">${ans[key] === right ? "✅ Richtig! " : "❌ Reingefallen! "}${why}</p>` : ""}`;
      const draw = () => {
        el.innerHTML = `
          <h2>1. Welche Portion ist größer?</h2><div class="illus">${plates}</div>
          ${q("p", ["links", "rechts", "gleich groß"], "gleich groß", "Beide Portionen sind gleich groß. Nur der Teller links ist größer – deshalb wirkt die Portion dort kleiner. Das nennt man <b>Delboeuf-Täuschung</b>.")}
          <div class="spacer"></div>
          <h2>2. In welchem Glas ist am meisten Saft?</h2><div class="illus">${glasses}</div>
          ${q("g", ["links", "Mitte", "rechts"], "links", "Im breiten linken Glas ist am meisten Saft, obwohl es niedriger gefüllt ist. Das rechte Glas wird nach unten schmaler und enthält kaum mehr als das mittlere.")}
          <div class="spacer"></div>
          <h2>3. In der Eisdiele</h2>
          <p class="muted">Du darfst so viele Kugeln nehmen, wie du möchtest. Wie viele nimmst du …</p>
          <div class="grid grid-2">
            <label class="box">… wenn es <b>3 Sorten</b> gibt?<input type="text" inputmode="numeric" id="ice3" value="${esc(st.fields.ice3 || "")}" placeholder="Anzahl Kugeln" style="margin-top:8px"></label>
            <label class="box">… wenn es <b>12 Sorten</b> gibt?<input type="text" inputmode="numeric" id="ice12" value="${esc(st.fields.ice12 || "")}" placeholder="Anzahl Kugeln" style="margin-top:8px"></label>
          </div>
          <details class="box"><summary><b>Was zeigen Studien?</b></summary><p style="margin:.6em 0 0">Hier gibt es kein Richtig oder Falsch. Studien zeigen aber: Je größer die Auswahl, desto mehr essen wir. Hast du bei 12 Sorten mehr Kugeln gewählt?</p></details>
          <h2>4. Du bist Mensa-Chef!</h2>
          <p class="muted">Die Gäste bekommen ein Glas, einen großen Teller und zwei kleine Teller (Salat, Nachtisch). Wie nutzt du die optischen Täuschungen, damit sie <b>wenig Getränke und Nachtisch</b>, aber <b>viel Salat und Nudeln</b> nehmen? Und: Werden sie den vielen Salat auch essen?</p>
          <textarea id="mensa" placeholder="Meine Ideen …">${esc(st.fields.mensa || "")}</textarea>`;
        $$("[data-q]", el).forEach((b) => b.addEventListener("click", () => { ans[b.dataset.q] = b.dataset.o; draw(); }));
        ["ice3", "ice12", "mensa"].forEach((k) => $("#" + k, el).addEventListener("input", (e) => { st.fields[k] = e.target.value; save(); }));
      };
      draw();
    }
  };

  /* ---------- Protokoll (A1/A2) ---------- */
  route(/^\/protokoll(?:\/(\d+))?$/, (idx) => {
    if (idx === undefined) {
      app.innerHTML = `<a class="back" href="#/heft">← Mein Heft</a><h1>Eigene Experimente</h1>
        <p class="muted">Plane und protokolliere eigene Experimente – z. B. für Aufgabe 7, 28 oder deine eigene Forschungsfrage.</p>
        <div class="grid">${S.protocols.map((p, i) => `<a class="card game-tile" href="#/protokoll/${i}"><span class="icon">📝</span><div><h3>${esc(p.frage || "Ohne Titel")}</h3><p class="small muted" style="margin:0">${esc(p.datum || "")}</p></div></a>`).join("") || `<div class="empty">Noch keine eigenen Experimente.</div>`}</div>
        <div class="spacer"></div><button class="btn" id="newp">+ Neues Experiment</button>`;
      $("#newp").addEventListener("click", () => { S.protocols.push({ datum: new Date().toLocaleDateString("de-DE") }); save(); location.hash = `#/protokoll/${S.protocols.length - 1}`; });
      return;
    }
    const p = S.protocols[+idx];
    if (!p) { location.hash = "#/protokoll"; return; }
    const F = [
      ["frage", "Welche Frage möchtest du klären?"], ["vermutung", "Vorwissen oder Vermutung"], ["material", "Material und Geräte (Wer besorgt was? Wer räumt auf?)"],
      ["aufbau", "Versuchsaufbau (Beschreibung)"], ["beobachtung", "Beobachtung"], ["erklaerung", "Erklärung"], ["fazit", "Fazit"], ["alltag", "Was bedeutet das für dein Essen und Trinken?"]
    ];
    app.innerHTML = `<a class="back" href="#/protokoll">← Alle eigenen Experimente</a><h1>Experiment-Protokoll</h1>
      <div class="card grid" style="gap:12px"><label><b>Datum</b><input type="text" data-p="datum" value="${esc(p.datum || "")}"></label>
      ${F.map(([k, l]) => `<label><b>${l}</b><textarea data-p="${k}">${esc(p[k] || "")}</textarea></label>`).join("")}</div>
      <div class="spacer"></div><div class="row no-print"><button class="btn secondary" onclick="window.print()">🖨 Drucken</button><button class="btn secondary" id="delp">🗑 Löschen</button></div>`;
    $$("[data-p]").forEach((f) => f.addEventListener("input", () => { p[f.dataset.p] = f.value; save(); }));
    $("#delp").addEventListener("click", (e) => {
      if (!e.target.dataset.sure) { e.target.dataset.sure = 1; e.target.textContent = "Wirklich löschen? Nochmal tippen"; return; }
      S.protocols.splice(+idx, 1); save(); location.hash = "#/protokoll";
    });
  });

  /* ---------- Quiz ---------- */
  function mountQuiz(el, pool, key, count, onDone, auto) {
    const qs = shuffle(pool).slice(0, count || pool.length).map((q) => {
      if (q.tf) return { ...q };
      const order = shuffle(q.a.map((_, i) => i));
      return { ...q, a: order.map((i) => q.a[i]), c: order.indexOf(q.c) };
    });
    let i = 0, score = 0, combo = 0, bestCombo = 0, answered = false;
    const wrong = [];
    const intro = () => {
      el.innerHTML = `<div class="quiz-intro"><div><b>${qs.length} Fragen</b><p class="small muted" style="margin:0">Bestwert: ${S.quiz[key] || 0} %</p></div><button class="btn color" id="qstart">▶ Quiz starten</button></div>`;
      $("#qstart", el).addEventListener("click", step);
    };
    const step = () => {
      answered = false;
      const q = qs[i];
      el.innerHTML = `<div class="row" style="justify-content:space-between"><span class="chip">Frage ${i + 1} / ${qs.length}</span>${combo >= 2 ? `<span class="chip combo">🔥 ${combo} in Folge</span>` : ""}<span class="chip">✓ ${score}</span></div>
        <div class="progress" style="margin-top:10px"><i style="width:${(i / qs.length) * 100}%"></i></div>
        <p class="quiz-q">${q.tf ? `<span class="chip S" style="vertical-align:middle">Richtig oder falsch?</span><br>${esc(q.q.replace("Richtig oder falsch? ", ""))}` : esc(q.q)}</p>
        <div class="answers ${q.tf ? "tf" : ""}">${q.a.map((a, j) => `<button data-a="${j}">${q.tf ? (j === 0 ? "👍 " : "👎 ") : ""}${esc(a)}</button>`).join("")}</div>
        <div id="qfb" aria-live="polite"></div>`;
      $$("[data-a]", el).forEach((b) => b.addEventListener("click", () => answer(+b.dataset.a)));
    };
    const answer = (j) => {
      if (answered) return; answered = true;
      const q = qs[i], ok = j === q.c;
      if (ok) { score++; combo++; bestCombo = Math.max(bestCombo, combo); if (combo === 3 || combo === 5 || combo === 10) award(combo, null, `${combo}er-Serie 🔥`); }
      else { combo = 0; wrong.push(q); }
      $$("[data-a]", el).forEach((x) => { x.disabled = true; if (+x.dataset.a === q.c) x.classList.add("right"); });
      if (!ok) $(`[data-a="${j}"]`, el).classList.add("wrong");
      const t = topicById(q.t);
      $("#qfb", el).innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? "✅ Richtig!" : "❌ Nicht ganz."} ${esc(q.e)}${!ok && key !== q.t && t ? ` <a href="#/thema/${t.id}">Nachlesen →</a>` : ""}</div>
        <div class="spacer"></div><button class="btn" id="qnext">${i + 1 < qs.length ? "Weiter →" : "Ergebnis"}</button>`;
      $("#qnext", el).addEventListener("click", next);
      $("#qnext", el).focus({ preventScroll: true });
    };
    const next = () => { i++; i < qs.length ? step() : end(); };
    const keys = (e) => {
      if (!document.body.contains(el)) return document.removeEventListener("keydown", keys);
      if (!sheet.hidden || /INPUT|TEXTAREA/.test(document.activeElement?.tagName)) return;
      const n = parseInt(e.key, 10);
      if (!answered && n >= 1 && n <= (qs[i]?.a.length || 0) && $("[data-a]", el)) answer(n - 1);
    };
    document.addEventListener("keydown", keys);
    const end = () => {
      const pct = Math.round((score / qs.length) * 100);
      const best = Math.max(S.quiz[key] || 0, pct); S.quiz[key] = best; save();
      if (onDone) onDone(pct);
      else { award(score * 2, null, "Quiz"); award(15, "quizdone:" + key); if (pct === 100) { award(key === "all" ? 60 : 30, "quizperfect:" + key, "Perfekt!"); confetti(); } }
      const msg = pct === 100 ? "Perfekt! 🏆" : pct >= 75 ? "Sehr gut! 💪" : pct >= 50 ? "Gut – da geht noch was. 📖" : "Lies den Text nochmal und probier es erneut. 🌱";
      el.innerHTML = `<div class="big-score">${pct}%</div><p style="text-align:center;margin-bottom:4px"><b>${score} von ${qs.length} richtig.</b> ${msg}</p>
        <p class="muted small" style="text-align:center">Bestwert: ${best} % · längste Serie: 🔥 ${bestCombo}</p>
        ${wrong.length ? `<details class="box"><summary><b>Diese ${wrong.length === 1 ? "Frage" : wrong.length + " Fragen"} nochmal ansehen</b></summary><ul class="review">${wrong.map((q) => `<li><b>${esc(q.q.replace("Richtig oder falsch? ", ""))}</b><br>✅ ${esc(q.a[q.c])} – ${esc(q.e)}</li>`).join("")}</ul></details>` : ""}
        <div class="row" style="justify-content:center;margin-top:12px"><button class="btn color" id="qagain">↻ Nochmal</button><a class="btn secondary" href="#/quiz">Mehr Quiz</a></div>`;
      $("#qagain", el).addEventListener("click", () => { document.removeEventListener("keydown", keys); mountQuiz(el, pool, key, count, onDone, true); });
    };
    auto ? step() : intro();
  }

  /* ---------- Quiz-Zentrale ---------- */
  route(/^\/quiz$/, () => {
    app.innerHTML = `<h1>❓ Quiz</h1><p class="muted">Durchklicken, Punkte sammeln, Serien knacken. Tipp: Am Computer kannst du mit den Tasten 1–4 antworten.</p>
      <div class="quizgrid">
        <a class="qtile" href="#/quiz/schnell" style="--c:#3d8bbd"><span class="qi">⚡</span><b>Schnell-Quiz</b><span>10 gemischte Fragen</span></a>
        <a class="qtile" href="#/blitz" style="--c:#e07a5f"><span class="qi">⏱️</span><b>Blitzrunde</b><span>60 Sek. Richtig oder falsch${S.games.blitz ? ` · Rekord ${S.games.blitz}` : ""}</span></a>
        <a class="qtile" href="#/challenge" style="--c:#9a7cc0"><span class="qi">📅</span><b>Tages-Challenge</b><span>5 Fragen, jeden Tag neu</span></a>
        <a class="qtile" href="#/quiz/all" style="--c:#2b2733"><span class="qi">🎓</span><b>Abschlussquiz</b><span>20 Fragen · Bestwert ${S.quiz.all || 0} %</span></a>
      </div>
      <h2>Quiz pro Station</h2>
      <div class="stations">${TOPICS.map((t, i) => `<a class="station" href="#/quiz/${t.id}" style="--c:${t.color}"><span class="s-num">${(S.quiz[t.id] || 0) === 100 ? "✓" : i + 1}</span><span class="s-icon">${t.icon}</span><span class="s-main"><b>${esc(t.title)}</b><span class="progress"><i style="width:${S.quiz[t.id] || 0}%"></i></span></span><span class="s-pct">${S.quiz[t.id] || 0}%</span></a>`).join("")}</div>
      <div class="spacer"></div>
      <h2>Spiele</h2>
      <div class="grid grid-2">${GAMES.map((g) => `<a class="card game-tile" href="${g.exp ? `#/experiment/${g.id}` : `#/spiel/${g.id}`}"><span class="icon" aria-hidden="true">${g.icon}</span><div><h3>${esc(g.title)}</h3><p class="small muted" style="margin:0">${esc(g.desc)}</p></div></a>`).join("")}</div>
      ${footer}`;
  });
  route(/^\/spiele$/, () => { location.replace("#/quiz"); });
  route(/^\/quiz\/([a-z]+)$/, (key) => {
    const t = topicById(key);
    const cfg = key === "schnell" ? ["⚡ Schnell-Quiz", QUIZ, 10] : key === "all" ? ["🎓 Abschlussquiz", QUIZ, 20] : t ? [`${t.icon} Quiz: ${t.title}`, QUIZ.filter((q) => q.t === t.id), 10] : null;
    if (!cfg) return home();
    app.innerHTML = `<a class="back" href="#/quiz">← Quiz</a><h1>${esc(cfg[0])}</h1><div class="card" id="qb"></div>`;
    if (t) setColor(app, t.color);
    mountQuiz($("#qb"), cfg[1], key, cfg[2], null, true);
  });

  /* ---------- Blitzrunde ---------- */
  route(/^\/blitz$/, () => {
    app.innerHTML = `<a class="back" href="#/quiz">← Quiz</a><h1>⏱️ Blitzrunde</h1><div class="card blitz" id="bz"></div>`;
    const el = $("#bz");
    const start = () => {
      let pool = shuffle(TF), k = 0, score = 0, wrongN = 0, left = 60, lock = false;
      const tick = setInterval(() => {
        if (!document.body.contains(el)) return clearInterval(tick);
        left--; const tl = $("#bztime", el); if (tl) tl.textContent = left;
        const bar = $("#bzbar", el); if (bar) bar.style.width = (left / 60) * 100 + "%";
        if (left <= 0) { clearInterval(tick); finish(); }
      }, 1000);
      const show = (flash) => {
        if (k >= pool.length) { pool = shuffle(TF); k = 0; }
        const q = pool[k];
        el.innerHTML = `<div class="row" style="justify-content:space-between"><span class="chip">⏱️ <b id="bztime">${left}</b> s</span><span class="chip done">✓ ${score}</span></div>
          <div class="progress" style="margin-top:10px"><i id="bzbar" style="width:${(left / 60) * 100}%;transition:width 1s linear"></i></div>
          <p class="blitz-q">${esc(q.s)}</p>
          <div class="tfbig"><button data-r="1" class="yes">👍 Richtig</button><button data-r="0" class="no">👎 Falsch</button></div>
          <div class="blitz-fb ${flash ? flash.cls : ""}">${flash ? flash.txt : "&nbsp;"}</div>`;
        $$("[data-r]", el).forEach((b) => b.addEventListener("click", () => {
          if (lock || left <= 0) return; lock = true;
          const ok = (b.dataset.r === "1") === q.r;
          if (ok) score++; else wrongN++;
          k++;
          setTimeout(() => { lock = false; if (left > 0) show({ cls: ok ? "ok" : "no", txt: ok ? "✅ Richtig!" : `❌ ${esc(q.e)}` }); }, ok ? 150 : 650);
        }));
      };
      const finish = () => {
        const rec = Math.max(S.games.blitz || 0, score); const isRec = score > (S.games.blitz || 0) && score > 0;
        S.games.blitz = rec; save();
        award(score, null, "Blitzrunde"); if (isRec) confetti();
        el.innerHTML = `<div class="big-score">${score}</div><p style="text-align:center"><b>richtige Antworten</b> in 60 Sekunden (${wrongN} falsch).<br>${isRec ? "🎉 Neuer Rekord!" : `Rekord: ${rec}`}</p><div class="row" style="justify-content:center"><button class="btn color" id="bzagain">↻ Nochmal</button><a class="btn secondary" href="#/quiz">Mehr Quiz</a></div>`;
        $("#bzagain", el).addEventListener("click", start);
      };
      show();
    };
    el.innerHTML = `<p style="font-size:1.1rem">Du hast <b>60 Sekunden</b>. Entscheide so schnell du kannst: Stimmt die Aussage – oder nicht?</p><p class="muted">Rekord: <b>${S.games.blitz || 0}</b> richtige Antworten</p><button class="btn color" id="bzgo">▶ Los!</button>`;
    $("#bzgo", el).addEventListener("click", start);
  });

  /* ---------- Üben / Spiele ---------- */
  const GAMES = [
    { id: "reihenfolge", icon: "🧭", title: "Weg der Nahrung", desc: "Bring die Stationen in die richtige Reihenfolge." },
    { id: "beschriften", icon: "🏷️", title: "Organe beschriften", desc: "Erkennst du jedes Verdauungsorgan im Körper?" },
    { id: "silben", icon: "🧩", title: "Silbenrätsel", desc: "Setze die Namen der Organe aus Silben zusammen." },
    { id: "A13", icon: "🍩", title: "Hunger oder Appetit?", desc: "Vier Geschichten – warum essen die Personen?", exp: true },
    { id: "A12", icon: "🥦", title: "Ballaststoff-Detektiv", desc: "Finde die ballaststoffreichen Lebensmittel.", exp: true },
    { id: "A14", icon: "👀", title: "Wie gut kannst du schätzen?", desc: "Optische Täuschungen rund ums Essen.", exp: true },
    { id: "A6", icon: "😮", title: "Schluck-Modell", desc: "Warum kann man beim Schlucken nicht atmen?", exp: true },
    { id: "Z1", icon: "🔎", title: "Zucker-Detektiv", desc: "Finde die versteckten Zucker in der Zutatenliste.", exp: true },
    { id: "Z2", icon: "🧊", title: "Wie viele Würfel?", desc: "Schätze den Zucker in Cola, Ketchup & Co.", exp: true }
  ];
  route(/^\/spiel\/([a-z]+)$/, (id) => {
    const g = GAMES.find((x) => x.id === id);
    if (!g) return home();
    app.innerHTML = `<a class="back" href="#/quiz">← Quiz</a><h1>${g.icon} ${esc(g.title)}</h1><p class="muted">${esc(g.desc)}</p><div class="card" id="game"></div>`;
    const el = $("#game");
    ({ reihenfolge: gameOrder, beschriften: gameLabel, silben: gameSyllables })[id](el);
  });

  function gameOrder(el) {
    let list = shuffle(ROUTE);
    while (list.join() === ROUTE.join()) list = shuffle(ROUTE);
    let checked = false;
    const draw = () => {
      el.innerHTML = `<p class="muted">Verschiebe die Stationen mit den Pfeilen. Oben beginnt die Reise.</p>
        <ol class="order-list">${list.map((o, i) => `<li class="${checked ? (o === ROUTE[i] ? "right" : "wrong") : ""}"><span class="pos">${i + 1}</span><span class="dot" style="--c:${ORGAN_COLORS[o]}"></span>${esc(ORGANS[o].name)}
          <span class="mv"><button data-up="${i}" aria-label="nach oben" ${i === 0 ? "disabled" : ""}>↑</button><button data-down="${i}" aria-label="nach unten" ${i === list.length - 1 ? "disabled" : ""}>↓</button></span></li>`).join("")}</ol>
        <div class="spacer"></div>
        <div id="ofb"></div>
        <div class="row"><button class="btn" id="ocheck">Prüfen</button><button class="btn secondary" id="onew">Neu mischen</button></div>`;
      $$("[data-up]", el).forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.up; [list[i - 1], list[i]] = [list[i], list[i - 1]]; checked = false; draw(); }));
      $$("[data-down]", el).forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.down; [list[i + 1], list[i]] = [list[i], list[i + 1]]; checked = false; draw(); }));
      $("#ocheck", el).addEventListener("click", () => {
        checked = true; draw();
        const ok = list.filter((o, i) => o === ROUTE[i]).length;
        const pct = Math.round((ok / ROUTE.length) * 100);
        S.games.reihenfolge = Math.max(S.games.reihenfolge || 0, pct); save();
        if (pct === 100) { award(25, "route:100", "Weg der Nahrung"); confetti(); } else checkBadges();
        $("#ofb", el).innerHTML = `<div class="feedback ${pct === 100 ? "ok" : "no"}">${pct === 100 ? "🎉 Perfekt! Mund → Speiseröhre → Magen → Dünndarm → Dickdarm → Mastdarm. Leber, Gallenblase und Bauchspeicheldrüse liegen nicht auf dem Weg – sie liefern Verdauungssäfte in den Dünndarm." : `${ok} von ${ROUTE.length} an der richtigen Stelle. Versuch es nochmal!`}</div><div class="spacer"></div>`;
      });
      $("#onew", el).addEventListener("click", () => { list = shuffle(ROUTE); checked = false; draw(); });
    };
    draw();
  }

  function gameLabel(el) {
    const ids = shuffle(Object.keys(ORGANS));
    let i = 0, score = 0, answered = false;
    el.innerHTML = `<div class="label-wrap"><div class="bodymap dim" id="lbmap">${bodySVG()}</div><div id="lbq"></div></div>`;
    const map = $("#lbmap", el), q = $("#lbq", el);
    $$(".organ", map).forEach((g) => { g.removeAttribute("tabindex"); g.removeAttribute("role"); g.setAttribute("aria-label", "Organ"); });
    const step = () => {
      answered = false;
      const id = ids[i];
      $$(".organ", map).forEach((g) => g.classList.toggle("on", g.dataset.organ === id));
      const opts = shuffle(Object.keys(ORGANS));
      q.innerHTML = `<div class="row" style="justify-content:space-between"><span class="chip">Organ ${i + 1} / ${ids.length}</span><span class="chip">${score} Punkte</span></div>
        <p class="quiz-q">Wie heißt das hervorgehobene Organ?</p>
        <div class="answers">${opts.map((o) => `<button data-o="${o}">${esc(ORGANS[o].name)}</button>`).join("")}</div><div id="lbfb"></div>`;
      $$("[data-o]", q).forEach((b) => b.addEventListener("click", () => {
        if (answered) return; answered = true;
        const ok = b.dataset.o === id; if (ok) score++;
        $$("[data-o]", q).forEach((x) => { x.disabled = true; if (x.dataset.o === id) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        $("#lbfb", q).innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><b>${esc(ORGANS[id].name)}:</b> ${esc(ORGANS[id].text)}</div><div class="spacer"></div><button class="btn" id="lbnext">${i + 1 < ids.length ? "Weiter →" : "Ergebnis"}</button>`;
        $("#lbnext", q).addEventListener("click", () => { i++; i < ids.length ? step() : end(); });
      }));
    };
    const end = () => {
      map.classList.remove("dim");
      const pct = Math.round((score / ids.length) * 100);
      S.games.beschriften = Math.max(S.games.beschriften || 0, pct); save();
      award(score * 3, null, "Beschriften"); if (pct === 100) award(30, "organs:100", "Fehlerfrei!");
      q.innerHTML = `<div class="big-score">${pct}%</div><p style="text-align:center">${score} von ${ids.length} Organen erkannt.</p><div class="row" style="justify-content:center"><button class="btn" id="lbagain">Nochmal</button></div>`;
      $("#lbagain", q).addEventListener("click", () => gameLabel(el));
    };
    step();
  }

  function gameSyllables(el) {
    const tokens = shuffle(SYLLABLE_WORDS.flatMap((w) => w.parts).map((p, i) => ({ p, i })));
    const used = new Set(), found = new Set();
    let current = [];
    const draw = (msg) => {
      el.innerHTML = `<p class="muted">Tippe Silben an, um ein Verdauungsorgan zu bilden. Tipp: Die <b>LEBER</b> ist schon gefunden. Es fehlen noch <b>${SYLLABLE_WORDS.length - found.size}</b> Wörter.</p>
        <div class="word-slot" id="slot" aria-live="polite">${current.map((t) => esc(t.p)).join("<span class='muted'>·</span>") || "<span class='muted small'>Dein Wort …</span>"}</div>
        <div class="spacer"></div>
        <div class="pool">${tokens.map((t) => `<button data-tok="${t.i}" ${used.has(t.i) || current.includes(t) ? "disabled" : ""}>${esc(t.p)}</button>`).join("")}</div>
        <div class="spacer"></div>
        <div class="row"><button class="btn" id="scheck" ${current.length ? "" : "disabled"}>Prüfen</button><button class="btn secondary" id="sback" ${current.length ? "" : "disabled"}>⌫ Zurück</button></div>
        ${msg ? `<div class="feedback ${msg.ok ? "ok" : "no"}">${msg.t}</div>` : ""}
        <div class="spacer"></div>
        <h3>Gefunden</h3><div class="found"><span class="chip done">LEBER</span>${[...found].map((w) => `<span class="chip done">${w}</span>`).join("")}</div>`;
      $$("[data-tok]", el).forEach((b) => b.addEventListener("click", () => { current.push(tokens.find((t) => t.i === +b.dataset.tok)); draw(); }));
      const back = $("#sback", el); if (back) back.addEventListener("click", () => { current.pop(); draw(); });
      $("#scheck", el).addEventListener("click", () => {
        const w = current.map((t) => t.p).join("");
        const match = SYLLABLE_WORDS.find((x) => x.word === w && !found.has(w));
        if (match) {
          found.add(w); current.forEach((t) => used.add(t.i)); current = [];
          if (found.size === SYLLABLE_WORDS.length) { S.games.silben = 100; save(); draw({ ok: true, t: "🏆 Alle Organe gefunden! Super!" }); award(30, "silben:100", "Silbenrätsel"); }
          else draw({ ok: true, t: `✅ ${w} – richtig!` });
        } else { current = []; draw({ ok: false, t: `„${w}“ ist kein gesuchtes Organ. Probier es nochmal!` }); }
      });
    };
    draw();
  }

  /* ---------- Lexikon ---------- */
  route(/^\/lexikon$/, () => {
    const terms = Object.keys(LEXIKON).sort((a, b) => a.localeCompare(b, "de"));
    const letters = [...new Set(terms.map((t) => t[0].toUpperCase()))];
    app.innerHTML = `<h1>Lexikon</h1><p class="muted">Alle Fachbegriffe kurz erklärt.</p>
      <input type="search" id="lexq" placeholder="🔎 Begriff suchen …" aria-label="Begriff suchen">
      <div class="alpha">${letters.map((l) => `<a href="#/lexikon" data-jump="${l}">${l}</a>`).join("")}</div>
      <div class="lex-list" id="lexlist"></div>`;
    const list = $("#lexlist");
    const draw = (f) => {
      const q = (f || "").toLowerCase();
      const res = terms.filter((t) => !q || t.toLowerCase().includes(q) || LEXIKON[t].toLowerCase().includes(q));
      list.innerHTML = res.map((t) => `<div class="card lex-item" id="lex-${esc(t[0].toUpperCase())}-${esc(t)}" data-letter="${esc(t[0].toUpperCase())}"><h3>${esc(t)}</h3><p style="margin:0">${esc(LEXIKON[t])}</p></div>`).join("") || `<div class="empty">Kein Begriff gefunden.</div>`;
    };
    $("#lexq").addEventListener("input", (e) => draw(e.target.value));
    $$("[data-jump]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); $("#lexq").value = ""; draw("");
      const el = $(`[data-letter="${a.dataset.jump}"]`, list); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    draw("");
  });

  /* ---------- Mein Heft ---------- */
  route(/^\/heft$/, () => {
    const noteCards = CARDS.filter((c) => S.cards[c.n]?.note?.trim());
    const exps = Object.entries(S.exp).filter(([, v]) => Object.values(v.fields || {}).some((x) => String(x).trim()));
    const labels = { hyp: "Vermutung", obs: "Beobachtung", erk: "Erklärung", ref: "Und du?", diff: "Hunger vs. Appetit", bexp: "Ballaststoffe", ice3: "Kugeln bei 3 Sorten", ice12: "Kugeln bei 12 Sorten", mensa: "Mensa-Ideen" };
    app.innerHTML = `<h1>📒 Mein Heft</h1><p class="muted">Hier sammelt die App alles, was du aufgeschrieben hast. Du kannst es ausdrucken oder als PDF speichern.</p>
      <div class="row no-print"><button class="btn" onclick="window.print()">🖨 Drucken / als PDF</button><a class="btn secondary" href="#/protokoll">📝 Eigene Experimente (${S.protocols.length})</a></div>
      <div class="spacer"></div>
      <h2>Fortschritt</h2>
      <div class="grid grid-3">${TOPICS.map((t) => `<div class="card" style="--c:${t.color}"><b>${t.icon} ${esc(t.short)}</b><div class="progress" style="margin-top:8px"><i style="width:${topicProgress(t)}%"></i></div><p class="small muted" style="margin:.4em 0 0">${topicProgress(t)} % · Quiz ${S.quiz[t.id] || 0} %</p></div>`).join("")}</div>
      <div class="spacer"></div>
      <h2>Aufgabenkarten (${noteCards.length})</h2>
      <div class="grid">${noteCards.map((c) => `<div class="card" style="--c:${topicById(c.topic).color}"><p class="small muted" style="margin:0;font-weight:800">Aufgabe ${c.n} · ${TYPE[c.type]}${S.cards[c.n].done ? " · ✓" : ""}</p><p style="font-weight:700">${esc(c.front)}</p><div class="box" style="white-space:pre-wrap;margin:0">${esc(S.cards[c.n].note)}</div></div>`).join("") || `<div class="empty">Noch keine Antworten notiert. <a href="#/karten">Zu den Aufgaben →</a></div>`}</div>
      <div class="spacer"></div>
      <h2>Experimente (${exps.length})</h2>
      <div class="grid">${exps.map(([id, v]) => `<div class="card"><p class="small muted" style="margin:0;font-weight:800">${id}</p><h3>${esc(EXPERIMENTS[id]?.title || id)}</h3>${Object.entries(v.fields).filter(([, x]) => String(x).trim()).map(([k, x]) => `<p class="small" style="margin:.4em 0 0;font-weight:800">${esc(labels[k] || k)}</p><div class="box" style="white-space:pre-wrap;margin:.2em 0 0">${esc(x)}</div>`).join("")}</div>`).join("") || `<div class="empty">Noch keine Experiment-Notizen.</div>`}</div>
      <div class="spacer"></div>
      <div class="card no-print"><h3>Alles zurücksetzen</h3><p class="small muted">Löscht deinen gesamten Fortschritt und alle Notizen auf diesem Gerät.</p><button class="btn secondary small" id="reset">Zurücksetzen</button></div>
      ${footer}`;
    $("#reset").addEventListener("click", (e) => {
      if (!e.target.dataset.sure) { e.target.dataset.sure = 1; e.target.textContent = "Wirklich alles löschen? Nochmal tippen"; return; }
      S = blank(); try { localStorage.removeItem(KEY); } catch (err) { /* ignorieren */ } toast("Zurückgesetzt"); render();
    });
  });

  route(/^\/$/, home);
  updateXPBar();
  render();
})();
