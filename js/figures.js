/* Beschriftete Abbildungen (eigene, schematische Zeichnungen) für die Lernstationen.
 * Jede Abbildung: { svg, caption, after } – "after" = nach welchem Absatz (Index) sie im Text erscheint.
 */
const FIGURES = (function () {
  const LBL = 'font-size="13" font-weight="700" fill="#4a4552"';
  const LINE = 'stroke="#8a8392" stroke-width="1.3" fill="none"';
  const lab = (x, y, text, anchor = "start", extra = "") => `<text x="${x}" y="${y}" ${LBL} text-anchor="${anchor}" ${extra}>${text}</text>`;
  const ptr = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" ${LINE}/><circle cx="${x2}" cy="${y2}" r="2.6" fill="#8a8392"/>`;
  const arrowDef = (id, color) => `<marker id="${id}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="${color}"/></marker>`;
  const svg = (vb, body, label) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${body}</svg>`;

  /* ---------- Mund: Seitenansicht ---------- */
  const mund = svg("0 0 420 310", `
    <g transform="translate(60,0)">
      <path d="M-10 36 Q120 18 252 32 L262 310 L192 310 L186 192 Q120 202 30 182 Q-6 160 -10 120 Z" fill="#f6d9c8"/>
      <path d="M40 52 L210 52 L210 80 L40 80 Z" fill="#e3f0fa"/>
      <path d="M30 112 L200 112 Q206 140 200 160 L30 160 Z" fill="#fde6e3"/>
      <path d="M206 52 L248 52 L248 210 L206 210 Z" fill="#e3f0fa"/>
      <path d="M206 210 L223 210 L223 310 L206 310 Z" fill="#e3f0fa"/>
      <g stroke="#bcd3e6" stroke-width="2">${[225, 245, 265, 285, 305].map((y) => `<line x1="206" x2="223" y1="${y}" y2="${y}"/>`).join("")}</g>
      <path d="M227 210 L248 210 L248 310 L227 310 Z" fill="#f7c4bc"/>
      <path d="M36 160 Q110 116 194 150 L194 160 Z" fill="#e57373"/>
      <g fill="#fff" stroke="#d8cfc4"><rect x="34" y="112" width="12" height="11" rx="2"/><rect x="47" y="112" width="12" height="9" rx="2"/><rect x="34" y="149" width="12" height="11" rx="2"/><rect x="47" y="151" width="12" height="9" rx="2"/></g>
      <path d="M18 104 Q34 104 36 114 L36 120 Q24 120 14 116 Z M18 168 Q34 168 36 158 L36 152 Q24 152 14 156 Z" fill="#e76f51"/>
      <line x1="196" y1="96" x2="214" y2="140" stroke="#c75b5b" stroke-width="9" stroke-linecap="round"/>
      <line x1="206" y1="204" x2="203" y2="178" stroke="#7b6bb0" stroke-width="7" stroke-linecap="round"/>
    </g>
    ${lab(130, 70, "Nasenraum")}${lab(118, 127, "Mundhöhle")}${lab(176, 157, "Zunge", "start", 'fill="#fff"')}
    ${lab(8, 96, "Lippen")}${ptr(30, 100, 80, 110)}
    ${lab(8, 200, "Zähne")}${ptr(30, 194, 106, 156)}
    ${lab(8, 238, "Gaumen")}${ptr(60, 232, 120, 112)}
    ${lab(330, 118, "Gaumen-")}${lab(330, 133, "segel")}${ptr(328, 124, 272, 126)}
    ${lab(330, 186, "Kehl-")}${lab(330, 201, "deckel")}${ptr(328, 192, 264, 188)}
    ${lab(160, 296, "Luftröhre", "end")}${ptr(164, 291, 270, 291)}
    ${lab(330, 296, "Speiseröhre")}${ptr(328, 291, 300, 291)}
  `, "Seitenansicht von Mundhöhle, Rachen, Luft- und Speiseröhre");

  /* ---------- Amylase spaltet Stärke ---------- */
  const bead = (x, y, c = "#f1c453") => `<circle cx="${x}" cy="${y}" r="10" fill="${c}" stroke="#c99a1f" stroke-width="2"/>`;
  const amylase = svg("0 0 420 150", `
    <defs>${arrowDef("a1", "#e07a5f")}</defs>
    <path d="M22 70 H176" stroke="#c99a1f" stroke-width="3"/>
    ${Array.from({ length: 8 }, (_, i) => bead(22 + i * 22, 70)).join("")}
    ${lab(99, 108, "Stärke", "middle")}<text x="99" y="124" font-size="12" fill="#6b6575" text-anchor="middle">lange Zuckerkette</text>
    <path d="M196 70 H252" stroke="#e07a5f" stroke-width="4" marker-end="url(#a1)"/>
    <text x="224" y="56" font-size="22" text-anchor="middle">✂️</text>
    ${lab(224, 96, "Amylase", "middle", 'fill="#e07a5f"')}<text x="224" y="111" font-size="12" fill="#6b6575" text-anchor="middle">(im Speichel)</text>
    ${[[278, 48], [340, 48], [278, 92], [340, 92]].map(([x, y]) => `<path d="M${x} ${y} H${x + 22}" stroke="#c99a1f" stroke-width="3"/>${bead(x, y, "#f6d77f")}${bead(x + 22, y, "#f6d77f")}`).join("")}
    ${lab(320, 128, "Malzzucker", "middle")}<text x="320" y="143" font-size="12" fill="#6b6575" text-anchor="middle">Zweifachzucker – schmeckt süß</text>
  `, "Die Amylase zerschneidet die lange Stärkekette in Malzzucker");

  /* ---------- Magen ---------- */
  const stomachPath = "M150 50 C95 70 85 170 140 225 C185 268 280 250 335 205 L335 178 C300 195 250 190 225 160 C205 135 195 80 172 52 Z";
  const magen = svg("0 0 420 300", `
    <defs><clipPath id="stc"><path d="${stomachPath}"/></clipPath></defs>
    <path d="M161 0 V60" stroke="#f4a261" stroke-width="22"/>
    <path d="M338 191 H372 Q392 191 392 213 V300" stroke="#6fb08f" stroke-width="26" fill="none"/>
    <path d="${stomachPath}" fill="#f3d9a4"/>
    <g clip-path="url(#stc)"><path d="${stomachPath}" fill="none" stroke="#f7c1c4" stroke-width="32"/><path d="${stomachPath}" fill="none" stroke="#cf6f78" stroke-width="14"/></g>
    <path d="${stomachPath}" fill="none" stroke="#a9505b" stroke-width="2"/>
    <g fill="#e8c178" opacity=".8"><ellipse cx="160" cy="180" rx="14" ry="9"/><ellipse cx="200" cy="215" rx="10" ry="7"/><ellipse cx="135" cy="130" rx="9" ry="6"/><ellipse cx="245" cy="225" rx="11" ry="7"/></g>
    <rect x="329" y="174" width="12" height="36" rx="4" fill="#8d3f4a"/>
    <text x="190" y="190" font-size="12" font-weight="800" fill="#7a5a1e" text-anchor="middle">Speisebrei +</text>
    <text x="190" y="205" font-size="12" font-weight="800" fill="#7a5a1e" text-anchor="middle">Magensaft</text>
    ${lab(186, 18, "Speiseröhre")}${ptr(184, 14, 172, 14)}
    ${lab(8, 46, "Magenmund")}${ptr(82, 50, 152, 56)}
    ${lab(8, 128, "Schleimhaut")}${ptr(84, 133, 116, 146)}
    ${lab(8, 204, "Muskelschicht")}${ptr(98, 199, 117, 189)}
    ${lab(262, 134, "Magenpförtner")}<text x="262" y="149" font-size="12" fill="#6b6575">(Schließmuskel)</text>${ptr(320, 152, 334, 174)}
    ${lab(380, 292, "Zwölffingerdarm", "end")}${ptr(382, 288, 388, 270)}
  `, "Der Magen mit Magenmund, Schleimhaut, Muskelschicht und Magenpförtner");

  /* ---------- Protein wird entfaltet und gespalten ---------- */
  const pbead = (x, y) => `<circle cx="${x}" cy="${y}" r="8" fill="#e5989b" stroke="#b86369" stroke-width="2"/>`;
  const protein = svg("0 0 420 140", `
    <defs>${arrowDef("a2", "#b86369")}</defs>
    <path d="M20 70 C30 30 70 30 70 60 C70 90 30 95 40 70 C50 45 90 50 80 80 C72 105 40 100 46 84" fill="none" stroke="#b86369" stroke-width="5" stroke-linecap="round"/>
    ${lab(52, 124, "Protein", "middle")}<text x="52" y="138" font-size="12" fill="#6b6575" text-anchor="middle">gefaltet</text>
    <path d="M104 70 H140" stroke="#b86369" stroke-width="3" marker-end="url(#a2)"/><text x="122" y="40" font-size="12" font-weight="800" fill="#4a4552" text-anchor="middle">Salzsäure</text>
    <path d="M152 70 H262" stroke="#b86369" stroke-width="3"/>${Array.from({ length: 6 }, (_, i) => pbead(152 + i * 22, 70)).join("")}
    ${lab(207, 110, "entfaltet", "middle")}
    <path d="M276 70 H312" stroke="#b86369" stroke-width="3" marker-end="url(#a2)"/><text x="294" y="34" font-size="12" font-weight="800" fill="#4a4552" text-anchor="middle">Pepsin ✂️</text>
    ${[[330, 50], [372, 50], [330, 92], [372, 92]].map(([x, y], i) => `<path d="M${x} ${y} H${x + 18}" stroke="#b86369" stroke-width="3"/>${pbead(x, y)}${i % 2 ? "" : pbead(x + 18, y)}`).join("")}
    ${lab(362, 126, "kleinere Stücke", "middle")}
  `, "Salzsäure entfaltet ein Protein, Pepsin zerschneidet es in kleinere Stücke");

  /* ---------- Dünndarm + Zotten ---------- */
  const villi = (() => {
    let out = "";
    const humps = [[275, 360], [360, 445]];
    humps.forEach(([x0, x1]) => {
      const cx = (x0 + x1) / 2;
      for (let x = x0 + 8; x < x1 - 4; x += 11) {
        const t = (x - x0) / (x1 - x0);
        const y = (1 - t) ** 2 * 200 + 2 * (1 - t) * t * 120 + t ** 2 * 200;
        out += `<rect x="${x - 4}" y="${y - 24}" width="8" height="28" rx="4" fill="#a9d8bd" stroke="#5f9e7e" stroke-width="1.2"/><line x1="${x}" y1="${y - 18}" x2="${x}" y2="${y + 2}" stroke="#d1495b" stroke-width="1.6"/>`;
      }
      void cx;
    });
    return out;
  })();
  const duenndarm = svg("0 0 460 290", `
    <defs><clipPath id="zc"><circle cx="360" cy="150" r="88"/></clipPath></defs>
    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16">
      <path d="M20 40 H90 Q110 40 110 60 V80 Q110 100 90 100 H40" stroke="#3f8a68"/>
      <path d="M40 100 Q20 100 20 120 Q20 140 40 140 H180 Q200 140 200 160 Q200 180 180 180 H40" stroke="#6fb08f"/>
      <path d="M40 180 Q20 180 20 200 Q20 220 40 220 H180 Q200 220 200 240 V258" stroke="#9fd0b4"/>
      <path d="M200 262 H232" stroke="#3d8bbd" stroke-width="22"/>
    </g>
    <text x="16" y="24" font-size="12" fill="#6b6575">vom Magen ↓</text>
    ${lab(120, 56, "Zwölffingerdarm")}${lab(216, 124, "Leerdarm")}${lab(216, 204, "Krummdarm")}${lab(240, 267, "→ Dickdarm")}
    <path d="M150 140 L282 92 M150 140 L300 226" stroke="#c9c2b8" stroke-width="1.2" stroke-dasharray="4 4"/>
    <circle cx="150" cy="140" r="12" fill="none" stroke="#4a4552" stroke-width="2"/>
    <circle cx="360" cy="150" r="88" fill="#fffaf2"/>
    <g clip-path="url(#zc)">
      <rect x="260" y="196" width="200" height="60" fill="#6fb08f"/>
      <path d="M262 204 Q317 116 360 204 Q403 116 458 204 Z" fill="#8cc5a5"/>
      ${villi}
      <path d="M262 232 H458" stroke="#d1495b" stroke-width="3"/>
    </g>
    <circle cx="360" cy="150" r="88" fill="none" stroke="#4a4552" stroke-width="2.5"/>
    ${lab(360, 52, "Blick ins Innere (vergrößert)", "middle", 'font-size="12"')}
    ${lab(330, 284, "Darmzotten", "middle")}${ptr(318, 272, 316, 140)}
    ${lab(420, 284, "Darmfalte", "middle")}${ptr(420, 272, 402, 190)}
  `, "Die drei Abschnitte des Dünndarms und eine Vergrößerung der Darmwand mit Falten und Zotten");

  /* ---------- Gallenblase & Bauchspeicheldrüse ---------- */
  const galle = svg("0 0 420 270", `
    <path d="M262 30 Q330 18 382 60 Q392 120 330 130 Q280 128 268 90 Z" fill="none" stroke="#e5989b" stroke-width="3" stroke-dasharray="6 5"/>
    <text x="326" y="80" font-size="12" font-weight="700" fill="#b86369" text-anchor="middle">Magen</text>
    <path d="M18 62 Q118 10 250 50 Q262 92 200 108 Q120 124 40 118 Q8 98 18 62 Z" fill="#9c5b46"/>
    <text x="110" y="76" font-size="15" font-weight="800" fill="#fff" text-anchor="middle">Leber</text>
    <path d="M150 108 Q160 150 186 186" stroke="#5f8f2e" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="128" cy="138" rx="15" ry="24" transform="rotate(-25 128 138)" fill="#8ab64a" stroke="#5f8f2e" stroke-width="2"/>
    <path d="M138 120 Q150 130 160 142" stroke="#5f8f2e" stroke-width="5" fill="none"/>
    <path d="M250 150 Q172 146 172 200 Q172 252 250 252" stroke="#6fb08f" stroke-width="24" fill="none" stroke-linecap="round"/>
    <path d="M206 192 Q262 166 332 172 Q392 160 410 176 Q398 198 332 198 Q266 204 210 210 Z" fill="#f1c453" stroke="#c99a1f" stroke-width="2"/>
    <path d="M400 181 Q300 182 192 196" stroke="#c99a1f" stroke-width="3" fill="none"/>
    ${lab(8, 168, "Gallenblase")}${ptr(46, 172, 116, 150)}
    ${lab(8, 214, "Gallengang")}${ptr(72, 210, 170, 168)}
    ${lab(8, 262, "Zwölffingerdarm")}${ptr(104, 257, 170, 230)}
    ${lab(410, 236, "Bauchspeicheldrüse", "end")}${ptr(350, 224, 350, 198)}
    <text x="410" y="252" font-size="12" fill="#6b6575" text-anchor="end">bildet auch Insulin</text>
    <g font-size="12" font-weight="800"><text x="174" y="126" fill="#5f8f2e">Gallensaft ↓</text><text x="280" y="160" fill="#a87e12">Bauchspeichel</text></g>
  `, "Leber, Gallenblase, Gallengang, Bauchspeicheldrüse und Zwölffingerdarm");

  /* ---------- Emulsion ---------- */
  const glass = (x) => `<path d="M${x} 20 V118 Q${x} 128 ${x + 10} 128 H${x + 100} Q${x + 110} 128 ${x + 110} 118 V20" fill="none" stroke="#9aa9b5" stroke-width="3"/><rect x="${x + 2}" y="50" width="106" height="76" rx="8" fill="#dcecf7"/>`;
  const drops = (() => { let s = ""; const pts = [[262, 62], [280, 78], [300, 64], [318, 88], [338, 70], [352, 96], [270, 100], [294, 110], [326, 112], [348, 116], [286, 92], [312, 74], [340, 86], [260, 84], [306, 98], [330, 60]]; pts.forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="4.5" fill="#f1c453" stroke="#c99a1f"/>`; }); return s; })();
  const emulsion = svg("0 0 420 160", `
    <defs>${arrowDef("a3", "#5f8f2e")}</defs>
    ${glass(20)}<ellipse cx="75" cy="56" rx="50" ry="10" fill="#f1c453" stroke="#c99a1f" stroke-width="2"/>
    ${lab(75, 150, "Fett schwimmt oben", "middle")}
    <path d="M144 76 H222" stroke="#5f8f2e" stroke-width="4" marker-end="url(#a3)"/>
    <text x="183" y="64" font-size="12" font-weight="800" fill="#5f8f2e" text-anchor="middle">+ Gallensaft</text>
    ${glass(250)}${drops}
    ${lab(305, 150, "viele winzige Tröpfchen", "middle")}
  `, "Gallensaft verteilt Fett in viele winzige Tröpfchen: eine Emulsion");

  /* ---------- Dickdarm ---------- */
  const colonPath = "M90 236 V80 Q90 60 110 60 H310 Q330 60 330 80 V196 Q330 232 268 238";
  const dickdarm = svg("0 0 420 300", `
    <defs>${arrowDef("a4", "#5aa5d6")}</defs>
    <path d="M196 214 Q150 214 112 222" stroke="#6fb08f" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path d="${colonPath}" stroke="#3d8bbd" stroke-width="34" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${colonPath}" stroke="#2f77a6" stroke-width="34" fill="none" stroke-dasharray="2 20"/>
    <path d="M268 238 Q226 244 222 276" stroke="#2a6590" stroke-width="26" fill="none" stroke-linecap="round"/>
    <rect x="208" y="276" width="28" height="9" rx="4" fill="#173f5c"/>
    <path d="M84 250 Q76 272 92 284" stroke="#3d8bbd" stroke-width="8" fill="none" stroke-linecap="round"/>
    <g fill="#f1c453">${[[96, 120], [88, 170], [150, 62], [210, 58], [270, 64], [326, 120], [334, 170]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="2.2"/>`).join("")}</g>
    <g stroke="#5aa5d6" stroke-width="2.5" fill="none" marker-end="url(#a4)"><path d="M150 82 Q160 110 176 120"/><path d="M250 82 Q240 110 226 120"/><path d="M310 140 Q280 150 262 150"/></g>
    <text x="210" y="140" font-size="13" font-weight="800" fill="#2f6f9e" text-anchor="middle">💧 Wasser zurück</text><text x="210" y="156" font-size="12" fill="#6b6575" text-anchor="middle">ins Blut</text>
    ${lab(210, 30, "Grimmdarm", "middle")}${ptr(210, 35, 210, 52)}
    ${lab(8, 200, "Blinddarm")}${ptr(66, 204, 84, 228)}
    ${lab(8, 278, "Wurmfortsatz")}${ptr(90, 276, 86, 268)}
    ${lab(124, 200, "Dünndarm")}${ptr(150, 204, 156, 214)}
    ${lab(410, 238, "Mastdarm", "end")}${ptr(350, 234, 262, 244)}
    ${lab(410, 286, "Schließmuskel", "end")}${ptr(318, 282, 238, 281)}
    ${lab(256, 194, "Darmflora", "middle")}<text x="256" y="209" font-size="12" fill="#6b6575" text-anchor="middle">(Bakterien)</text>${ptr(290, 190, 326, 170)}
  `, "Der Dickdarm mit Blinddarm, Wurmfortsatz, Grimmdarm und Mastdarm");

  /* ---------- Sättigung ---------- */
  const hunger = svg("0 0 420 270", `
    <defs>${arrowDef("a5", "#9a7cc0")}</defs>
    <ellipse cx="210" cy="50" rx="62" ry="38" fill="#f4c7d6" stroke="#c98aa4" stroke-width="2"/>
    <path d="M168 44 Q178 28 192 42 Q204 24 218 42 Q232 26 246 44 M172 62 Q188 52 202 64 Q218 52 236 64" stroke="#c98aa4" stroke-width="2" fill="none"/>
    ${lab(282, 44, "Gehirn")}<text x="282" y="62" font-size="12" font-weight="800" fill="#c45a85">„Ich bin satt!“</text>
    <path d="M70 172 C40 176 40 228 82 240 C118 250 150 232 156 206 L156 192 C140 204 120 206 108 194 C98 182 98 170 88 166 Z" fill="#e5989b" stroke="#b86369" stroke-width="2"/>
    ${lab(98, 266, "Magen", "middle")}
    <path d="M178 196 Q216 172 266 190 Q272 214 240 222 Q206 230 182 222 Q170 210 178 196 Z" fill="#9c5b46"/>
    ${lab(222, 250, "Leber", "middle")}
    <path d="M300 200 h60 q8 0 8 8 t-8 8 h-60 q-8 0 -8 8 t8 8 h60" stroke="#6fb08f" stroke-width="8" fill="none" stroke-linecap="round"/>
    ${lab(330, 258, "Darm", "middle")}
    <g stroke="#9a7cc0" stroke-width="3" fill="none" stroke-dasharray="6 5" marker-end="url(#a5)">
      <path d="M100 162 Q110 110 152 76"/><path d="M222 172 Q220 140 214 100"/><path d="M330 190 Q330 120 270 74"/>
    </g>
    <g font-size="12" font-weight="800" fill="#6a4f99"><text x="10" y="136">Dehnung der</text><text x="10" y="151">Magenwand</text><text x="226" y="146">Nährstoffe</text><text x="340" y="146">Nährstoffe</text></g>
    <g transform="translate(60 38)"><circle r="26" fill="#fff" stroke="#9a7cc0" stroke-width="3"/><path d="M0 0 V-16 M0 0 L11 6" stroke="#4a4552" stroke-width="3" stroke-linecap="round"/></g>
    <text x="60" y="84" font-size="12" font-weight="800" fill="#4a4552" text-anchor="middle">nach 15–20 Min.</text>
  `, "Magen, Leber und Darm senden Sättigungssignale an das Gehirn");

  return {
    mund: [{ svg: mund, caption: "Die Mundhöhle von der Seite. Beim Schlucken verschließen Gaumensegel und Kehldeckel den Weg in Nase und Luftröhre.", after: 0 }, { svg: amylase, caption: "Das Enzym Amylase zerschneidet lange Stärkeketten in Malzzucker.", after: 2 }],
    magen: [{ svg: magen, caption: "Der Magen: Die Muskelschicht knetet, die Schleimhaut schützt, der Magenpförtner gibt den Brei portionsweise weiter.", after: 0 }, { svg: protein, caption: "Salzsäure entfaltet Proteine, damit Pepsin sie zerschneiden kann.", after: 1 }],
    duenndarm: [{ svg: duenndarm, caption: "Links: die drei Abschnitte des Dünndarms. Rechts: Falten und Zotten vergrößern die Oberfläche enorm.", after: 0 }],
    galle: [{ svg: galle, caption: "Gallensaft und Bauchspeichel fließen gemeinsam in den Zwölffingerdarm.", after: 0 }, { svg: emulsion, caption: "Gallensaft emulgiert Fett – wie Spülmittel im Abwaschwasser.", after: 1 }],
    dickdarm: [{ svg: dickdarm, caption: "Der Dickdarm holt Wasser zurück. Bakterien der Darmflora zersetzen Reste wie Ballaststoffe.", after: 0 }],
    hunger: [{ svg: hunger, caption: "So entsteht Sättigung: Magen, Leber und Darm melden dem Gehirn, dass genug gegessen wurde.", after: 1 }]
  };
})();

/* Leiste „Was passiert wo?“ für die Station Weg der Nahrung */
const ROUTE_STRIP = [
  { o: "mund", verb: "zerkleinern & einspeicheln" },
  { o: "speiseroehre", verb: "transportieren" },
  { o: "magen", verb: "kneten & ansäuern" },
  { o: "duenndarm", verb: "spalten & aufnehmen" },
  { o: "dickdarm", verb: "Wasser zurückholen" },
  { o: "mastdarm", verb: "sammeln & ausscheiden" }
];
