/* Station 8: Zucker
 * Inhaltlich nach zwei Dokumentationen/Erklärvideos zum Thema Zucker, für Schülerinnen und Schüler neu formuliert.
 * Wird nach data.js und figures.js geladen und erweitert die vorhandenen Listen.
 */
const SUGAR_NAMES = [], SUGAR_PRODUCTS = [];
(function () {
  TOPICS.push({
    id: "zucker",
    title: "Zucker",
    short: "Zucker",
    icon: "🍬",
    color: "#d0507e",
    goals: [
      "Ich kann Einfach-, Zweifach- und Vielfachzucker unterscheiden und je ein Beispiel nennen.",
      "Ich kann erklären, was „freier Zucker“ ist und wie viel davon empfohlen wird.",
      "Ich kann erklären, wie Insulin den Blutzucker regelt und was eine Insulinresistenz ist.",
      "Ich kann versteckten Zucker auf Zutatenlisten erkennen.",
      "Ich kann erklären, warum Süßes so verlockend ist."
    ],
    basis: [
      "**Zucker ist nicht gleich Zucker.** Unser Haushaltszucker heißt in der Fachsprache [[Saccharose]]. Er besteht aus zwei Bausteinen: [[Glucose]] (Traubenzucker) und [[Fructose]] (Fruchtzucker). Darum ist er ein [[Zweifachzucker]]. Viele Bausteine in einer langen Kette ergeben einen [[Mehrfachzucker|Vielfachzucker]] – zum Beispiel [[Stärke]] in Kartoffeln und Brot.",
      "Durch die Darmwand passen nur [[Einfachzucker]]. Alle anderen Zucker werden deshalb erst zerlegt. Danach gelangt der Zucker ins Blut – der **Blutzucker** steigt. Jetzt schickt die Bauchspeicheldrüse das [[Insulin]] los. Es funktioniert wie ein **Paketbote**: Es bringt den Zucker aus dem Blut in die Körperzellen, wo er zu Energie wird.",
      "Zu viel Zucker schadet. Bakterien im Zahnbelag machen aus Zucker Säure, die den Zahnschmelz angreift – das führt zu [[Karies]]. Wer dauerhaft viel Zucker isst, hat außerdem ein höheres Risiko für Übergewicht, eine Fettleber und [[Diabetes Typ 2]].",
      "Die Weltgesundheitsorganisation (WHO) empfiehlt: höchstens **50 g** [[Freier Zucker|freien Zucker]] am Tag (etwa 16 Stück Würfelzucker), besser nur **25 g**. In Deutschland essen die Menschen im Schnitt fast **doppelt so viel** – vor allem, weil Zucker in vielen Fertigprodukten **versteckt** ist.",
      "Warum mögen wir Süßes so gern? Schon Babys lächeln, wenn sie etwas Süßes schmecken. In der Natur bedeutete süß: **ungiftig** und **schnelle Energie**. Unser Gehirn belohnt uns dafür mit dem Botenstoff [[Dopamin]] – wir fühlen uns gut und wollen mehr."
    ],
    profi: [
      "**Zuckerarten:** [[Einfachzucker]] (Monosaccharide) sind z. B. [[Glucose]] und [[Fructose]]. [[Zweifachzucker]] (Disaccharide) bestehen aus zwei Bausteinen: [[Saccharose]] (Haushaltszucker = Glucose + Fructose), Laktose (Milchzucker) und Maltose (Malzzucker). [[Mehrfachzucker]] wie [[Stärke]] sind lange Ketten. Fachleute unterscheiden außerdem **natürlich enthaltenen Zucker** (in Obst, Gemüse, Milch) von [[Freier Zucker|freiem Zucker]]: zugesetzter Zucker sowie Zucker aus Honig, Sirup, Säften und Konzentraten.",
      "**Apfel oder Apfelsaft?** Im ganzen Apfel stecken neben Zucker auch Vitamine und [[Ballaststoffe]]. Die Ballaststoffe verlangsamen die Zuckeraufnahme. Im Saft fehlen sie – der Zucker gelangt schneller ins Blut. Deshalb zählt Saftzucker zum freien Zucker, Apfelzucker nicht. 1 g Zucker liefert etwa 4 kcal. Was der Körper nicht als Energie braucht, kann er als Fett speichern. Fructose wird fast nur in der **Leber** verarbeitet; sehr viel Fructose kurbelt dort die Fettbildung an und kann zu einer **Fettleber** führen. Die WHO empfiehlt, weniger als 10 % der täglichen Energie aus freiem Zucker aufzunehmen (etwa 50 g), besser unter 5 % (etwa 25 g). In Deutschland liegt der Durchschnitt bei fast 100 g pro Tag.",
      "**Insulin und Insulinresistenz:** Steigt der Blutzucker, gibt die Bauchspeicheldrüse [[Insulin]] ins Blut ab. Es „klingelt“ an den Zellen, damit sie ihre Tür für Glucose öffnen – der Blutzucker sinkt. Klingelt der Bote aber ständig, weil dauernd viel Zucker kommt, reagieren die Zellen immer schwächer: eine [[Insulinresistenz]]. Die Bauchspeicheldrüse muss immer mehr Insulin bilden und kann sich über Jahre erschöpfen. So kann sich [[Diabetes Typ 2]] entwickeln. Wichtig: Auch Vererbung und andere Ursachen spielen eine Rolle – Zucker ist nicht immer allein schuld.",
      "**Belohnungssystem:** Essen wir Süßes, schütten Nervenzellen im Mittelhirn [[Dopamin]] aus. Dopamin steigert Motivation und hilft beim Lernen – das Gehirn merkt sich: „Das war toll, mach das wieder!“ In einer Studie aßen Erwachsene zwei Monate lang täglich einen sehr süßen, fetten Pudding. Danach reagierte ihr Belohnungssystem auf einen süßen Milchshake viel stärker als bei einer Vergleichsgruppe mit Light-Pudding. **Vorlieben lassen sich also verändern** – in beide Richtungen. Besonders schwer zu stoppen ist die Mischung aus viel Zucker und viel Fett (z. B. Nuss-Nougat-Creme, Schokolade): Sie überlistet unsere Sättigungssignale.",
      "**Macht Zucker süchtig?** Das ist umstritten. In Versuchen zeigten Ratten suchtähnliches Verhalten (Fressanfälle, starkes Verlangen, Entzugsanzeichen) – aber nur, wenn sie Zucker **zeitweise nicht** bekamen. Ratten mit ständigem Zugang zeigten das nicht. Für eine echte Zuckersucht beim Menschen gibt es **keine eindeutigen Belege** und keine offizielle Diagnose. Forschende untersuchen außerdem, ob dauerhaft sehr viel Zucker Entzündungen fördert, Eiweiße im Körper „verzuckert“ (ähnlich wie Fleisch beim Braten braun wird) und die [[Darmflora]] verändert – und ob das Gedächtnis und Stimmung beeinflusst. Viele dieser Hinweise stammen aus Tierversuchen und sind noch nicht abschließend geklärt."
    ],
    facts: [
      "Zuckerrohr ist die am meisten angebaute Pflanze der Welt – fast 2 Milliarden Tonnen werden jedes Jahr geerntet.",
      "Bei Karies zählt vor allem, wie oft man nascht: Häufiges Naschen über den Tag schadet den Zähnen mehr als einmal eine größere Portion.",
      "Zucker versteckt sich in Senf, Ketchup, Nudelsoße, Salatdressing, Kartoffelsalat, Rotkohl, Fruchtjoghurt, Brot und Wurst. Er ist billig, schmeckt gut und macht Produkte haltbarer.",
      "Auf Zutatenlisten heißt Zucker oft anders: Dextrose, Glucose-Fructose-Sirup, Maltodextrin, Gerstenmalzextrakt, Weizensirup, Saftkonzentrat. Auch Honig, Agavendicksaft und Datteln sind vor allem Zucker.",
      "Zucker gilt rechtlich als Lebensmittel, nicht als Zusatzstoff – deshalb gibt es keine Höchstmengen, wie viel davon in ein Produkt darf.",
      "Wir brauchen keinen freien Zucker, um uns gesund zu ernähren. Ab und zu etwas Süßes ist trotzdem okay – die Menge macht’s."
    ],
    cards: [41, 42, 43, 44, 45, 46, 47],
    experiments: ["Z1", "Z2"]
  });

  CARDS.push(
    { n: 41, topic: "zucker", type: "R", front: "Unterscheide Einfach-, Zweifach- und Vielfachzucker. Nenne für jede Gruppe mindestens ein Beispiel.", back: "Schau dir die Abbildung „Zuckerarten“ in der Station Zucker an.", solution: "Einfachzucker: ein Baustein, z. B. Glucose (Traubenzucker), Fructose (Fruchtzucker). Zweifachzucker: zwei Bausteine, z. B. Saccharose (Haushaltszucker = Glucose + Fructose), Laktose (Milchzucker), Maltose (Malzzucker). Vielfachzucker: lange Ketten aus vielen Bausteinen, z. B. Stärke in Kartoffeln, Brot und Nudeln." },
    { n: 42, topic: "zucker", type: "E", front: "Werde Zucker-Detektiv: Nimm drei verpackte Lebensmittel von zu Hause (z. B. Ketchup, Fruchtjoghurt, Müsli). Suche in der Zutatenliste nach Zucker – auch unter anderen Namen. Wie viel Zucker enthalten 100 g?", back: "In der Nährwerttabelle steht der Zucker unter „Kohlenhydrate – davon Zucker“. Teile die Grammzahl durch 3, dann weißt du ungefähr, wie viele Würfelzucker das sind.", solution: "Typische Fundstücke: Ketchup ca. 20–25 g Zucker pro 100 g (7–8 Würfel), Fruchtjoghurt ca. 12–15 g (4–5 Würfel), viele Frühstücksflocken 20–35 g. Versteckte Namen: Dextrose, Glucosesirup, Glucose-Fructose-Sirup, Maltodextrin, Gerstenmalzextrakt, Saftkonzentrat, Honig. Je weiter vorne eine Zutat in der Liste steht, desto mehr ist davon drin." },
    { n: 43, topic: "zucker", type: "S", front: "Schreibe einen Tag lang auf, was du Süßes isst und trinkst (auch Saft, Limo, Fruchtjoghurt). Schätze, wie viele Würfelzucker zusammenkommen.", back: "Zusatzaufgabe: Vergleiche mit der WHO-Empfehlung (höchstens 16 Würfel, besser 8). Wo steckte der meiste Zucker? Nutze auch das Spiel „Wie viele Würfel?“." },
    { n: 44, topic: "zucker", type: "R", profi: true, front: "Warum wird der Zucker aus einem Apfel anders bewertet als der Zucker aus Apfelsaft?", back: "Denke an die Ballaststoffe und lies den Profi-Text.", solution: "Im ganzen Apfel stecken Ballaststoffe, Vitamine und andere Nährstoffe. Die Ballaststoffe verlangsamen die Zuckeraufnahme, außerdem muss man kauen und wird satt. Im Saft fehlen die Ballaststoffe weitgehend – der Zucker gelangt schnell ins Blut und man trinkt leicht viel davon. Deshalb zählt Saftzucker zum „freien Zucker“, der Zucker im ganzen Apfel nicht." },
    { n: 45, topic: "zucker", type: "R", profi: true, front: "Erkläre mit dem Bild vom „Paketboten Insulin“, wie eine Insulinresistenz entsteht und wie daraus Diabetes Typ 2 werden kann.", back: "Schau dir die Abbildung zum Insulin in der Station Zucker an.", solution: "Insulin bringt Glucose aus dem Blut zu den Zellen und „klingelt“, damit sie die Tür öffnen. Isst man dauerhaft sehr viel Zucker, klingelt der Bote ständig. Die Zellen reagieren mit der Zeit immer schwächer – wie bei einem Klingelstreich: Sie lassen die Tür zu (Insulinresistenz). Der Blutzucker bleibt hoch, die Bauchspeicheldrüse bildet immer mehr Insulin und kann sich über Jahre erschöpfen. Dann reicht das Insulin nicht mehr: Diabetes Typ 2. Auch Vererbung und andere Ursachen spielen mit." },
    { n: 46, topic: "zucker", type: "R", profi: true, front: "„Zucker macht süchtig wie eine Droge.“ Stimmt das? Sammle Argumente dafür und dagegen und bilde dir eine eigene Meinung.", back: "Lies den Profi-Text (Belohnungssystem, Rattenversuche) und überlege, was du selbst erlebst.", solution: "Dafür: Zucker aktiviert das Belohnungssystem mit Dopamin – ähnlich wie Drogen. Viele kennen starkes Verlangen und „nicht aufhören können“. In einer Studie veränderten sich Vorlieben durch sehr süßes, fettes Essen. Dagegen: Suchtähnliches Verhalten zeigten Ratten nur, wenn sie Zucker zeitweise nicht bekamen. Beim Menschen gibt es keine eindeutigen Belege und keine offizielle Diagnose „Zuckersucht“. Fazit: Forschende sind sich nicht einig – sicher ist, dass Zucker ein starkes Verlangen auslösen kann." },
    { n: 47, topic: "zucker", type: "S", front: "Probiere eine Woche lang, auf süße Getränke (Limo, Saft, Eistee) zu verzichten. Wie geht es dir damit? Was fällt dir schwer, was leicht?", back: "Zusatzaufgabe: Was hilft dir, wenn du Lust auf etwas Süßes bekommst? Sammle Ideen (z. B. Wasser mit Zitrone, Obst, ablenken)." }
  );

  EXPERIMENTS.Z1 = {
    topic: "zucker",
    title: "Zucker-Detektiv: Versteckte Zucker finden",
    intro: "Auf Zutatenlisten versteckt sich Zucker oft hinter anderen Namen. Findest du alle?",
    interactive: "zuckerdetektiv",
    explanation: "Dextrose, Glucose-Fructose-Sirup, Maltodextrin, Gerstenmalzextrakt, Weizensirup, Saftkonzentrat, Honig, Agavendicksaft und Milchzucker sind alles Zuckerarten. Hersteller verwenden oft mehrere verschiedene Zucker – dann steht keiner davon ganz vorne in der Zutatenliste, obwohl zusammen viel Zucker drin ist. Ein guter Trick: In der Nährwerttabelle unter „davon Zucker“ nachsehen.",
    reflect: "In welchem Lebensmittel bei dir zu Hause hättest du am wenigsten Zucker erwartet?"
  };
  EXPERIMENTS.Z2 = {
    topic: "zucker",
    title: "Wie viele Würfel Zucker stecken drin?",
    intro: "Ein Stück Würfelzucker wiegt etwa 3 g. Schätze, wie viele Würfel in diesen Lebensmitteln stecken.",
    interactive: "wuerfel",
    explanation: "Die WHO empfiehlt höchstens 50 g freien Zucker pro Tag – das sind etwa 16 Würfel, besser nur 8. Schon eine Flasche Cola (0,5 l) liefert mehr als die ganze Tagesmenge. Süße Getränke sind die größte Zuckerfalle, weil Flüssigkeit kaum satt macht. Die Werte hier sind ungefähre Durchschnittswerte – schau bei deinen Produkten selbst nach!",
    reflect: "Welcher Wert hat dich am meisten überrascht? Wie könntest du hier Zucker sparen?"
  };

  SUGAR_NAMES.push(
    { name: "Dextrose", sugar: true }, { name: "Glucose-Fructose-Sirup", sugar: true }, { name: "Maltodextrin", sugar: true },
    { name: "Gerstenmalzextrakt", sugar: true }, { name: "Weizensirup", sugar: true }, { name: "Apfelsaftkonzentrat", sugar: true },
    { name: "Honig", sugar: true }, { name: "Agavendicksaft", sugar: true }, { name: "Milchzucker (Laktose)", sugar: true },
    { name: "Salz", sugar: false }, { name: "Tomatenmark", sugar: false }, { name: "Sonnenblumenöl", sugar: false },
    { name: "Essig", sugar: false }, { name: "Hefe", sugar: false }, { name: "Pfeffer", sugar: false }, { name: "Zitronensäure", sugar: false }
  );

  SUGAR_PRODUCTS.push(
    { name: "Cola (0,5-l-Flasche)", icon: "🥤", g: 53 },
    { name: "Gummibärchen (100-g-Tüte)", icon: "🐻", g: 46 },
    { name: "Apfelsaft (1 Glas, 0,2 l)", icon: "🧃", g: 20 },
    { name: "Fruchtjoghurt (150-g-Becher)", icon: "🍓", g: 20 },
    { name: "Nuss-Nougat-Creme (2 Portionen, 30 g)", icon: "🍫", g: 17 },
    { name: "Ketchup (1 Esslöffel)", icon: "🍅", g: 4 }
  );

  QUIZ.push(
    { t: "zucker", q: "Woraus besteht Haushaltszucker (Saccharose)?", a: ["Glucose + Fructose", "nur Glucose", "Stärke + Wasser", "Laktose + Maltose"], c: 0, e: "Saccharose ist ein Zweifachzucker aus Glucose und Fructose." },
    { t: "zucker", q: "Was ist Glucose?", a: ["Traubenzucker", "Fruchtzucker", "Milchzucker", "Malzzucker"], c: 0, e: "Glucose = Traubenzucker, Fructose = Fruchtzucker." },
    { t: "zucker", q: "Wie viel freien Zucker empfiehlt die WHO höchstens pro Tag?", a: ["50 g (besser 25 g)", "200 g", "100 g", "Es gibt keine Empfehlung"], c: 0, e: "Etwa 16 Würfel – besser nur die Hälfte." },
    { t: "zucker", q: "Was gehört NICHT zum „freien Zucker“?", a: ["Zucker im ganzen Apfel", "Honig", "Zucker in Limo", "Zucker in Apfelsaft"], c: 0, e: "Natürlich enthaltener Zucker in Obst, Gemüse und Milch zählt nicht dazu." },
    { t: "zucker", q: "Welches Hormon bringt Zucker aus dem Blut in die Zellen?", a: ["Insulin", "Dopamin", "Pepsin", "Amylase"], c: 0, e: "Insulin aus der Bauchspeicheldrüse – der „Paketbote“." },
    { t: "zucker", q: "Was ist eine Insulinresistenz?", a: ["Die Zellen reagieren kaum noch auf Insulin", "Man hat zu viel Speichel", "Der Magen bildet kein Pepsin", "Zucker wird zu Stärke"], c: 0, e: "Die Zellen „machen die Tür nicht mehr auf“ – der Blutzucker bleibt hoch." },
    { t: "zucker", q: "Wie entsteht Karies?", a: ["Bakterien im Zahnbelag machen aus Zucker Säure", "Zucker ist selbst eine Säure", "Durch zu viel Wasser", "Durch Kauen"], c: 0, e: "Die Säure greift den Zahnschmelz an." },
    { t: "zucker", q: "Welcher Botenstoff wird im Belohnungssystem ausgeschüttet, wenn wir Süßes essen?", a: ["Dopamin", "Insulin", "Bilirubin", "Salzsäure"], c: 0, e: "Dopamin sorgt für Motivation – „nochmal!“." },
    { t: "zucker", q: "Welche Zutat ist ein versteckter Zucker?", a: ["Maltodextrin", "Zitronensäure", "Tomatenmark", "Hefe"], c: 0, e: "Auch Dextrose, Glucosesirup und Gerstenmalzextrakt sind Zucker." },
    { t: "zucker", q: "Warum mögen schon Babys Süßes?", a: ["Süß bedeutete in der Natur: ungiftig und schnelle Energie", "Wegen der Werbung", "Weil Zucker gesund ist", "Das ist anerzogen"], c: 0, e: "Die Vorliebe ist angeboren – ein Erbe der Evolution." },
    { t: "zucker", q: "Wie viele Kilokalorien liefert 1 g Zucker etwa?", a: ["4 kcal", "1 kcal", "9 kcal", "0 kcal"], c: 0, e: "Zum Vergleich: 1 g Fett liefert etwa 9 kcal." },
    { t: "zucker", q: "Was sagt die Forschung zur „Zuckersucht“ beim Menschen?", a: ["Es gibt keine eindeutigen Belege – das Thema ist umstritten", "Sie ist eindeutig bewiesen", "Zucker ist eine Droge", "Nur Kinder können zuckersüchtig werden"], c: 0, e: "Zucker kann aber ein starkes Verlangen auslösen." }
  );
  [
    { s: "Stärke ist ein Vielfachzucker.", r: true, e: "Sie besteht aus langen Ketten von Glucose-Bausteinen." },
    { s: "Honig ist eine zuckerfreie Alternative.", r: false, e: "Honig besteht vor allem aus Zucker." },
    { s: "Fructose wird vor allem in der Leber verarbeitet.", r: true, e: "Sehr viel Fructose kann dort die Fettbildung ankurbeln." },
    { s: "Häufiges Naschen schadet den Zähnen mehr als einmal eine größere Portion.", r: true, e: "Die Zähne werden dann immer wieder von Säure angegriffen." },
    { s: "In Deutschland essen die Menschen im Schnitt weniger Zucker als empfohlen.", r: false, e: "Im Schnitt fast doppelt so viel wie die Höchstmenge." },
    { s: "Diabetes Typ 2 hat immer nur mit Zucker zu tun.", r: false, e: "Auch Vererbung und andere Ursachen spielen eine Rolle." },
    { s: "Ballaststoffe verlangsamen die Zuckeraufnahme.", r: true, e: "Darum ist ein Apfel besser als Apfelsaft." },
    { s: "Für Zucker gibt es gesetzliche Höchstmengen in Lebensmitteln.", r: false, e: "Zucker gilt als Lebensmittel, nicht als Zusatzstoff." }
  ].forEach((x) => { TF.push({ t: "zucker", ...x }); QUIZ.push({ t: "zucker", q: "Richtig oder falsch? " + x.s, a: ["Richtig", "Falsch"], c: x.r ? 0 : 1, e: x.e, tf: true }); });


  /* ---------- Abbildungen ---------- */
  const T = (x, y, t, a = "middle", ex = "") => `<text x="${x}" y="${y}" font-size="13" font-weight="700" fill="#4a4552" text-anchor="${a}" ${ex}>${t}</text>`;
  const t2 = (x, y, t, a = "middle") => `<text x="${x}" y="${y}" font-size="12" fill="#6b6575" text-anchor="${a}">${t}</text>`;
  const hex = (cx, cy, r, fill = "#5aa5d6", st = "#2f77a6") => `<polygon points="${[0, 1, 2, 3, 4, 5].map((i) => { const a = Math.PI / 3 * i + Math.PI / 6; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ")}" fill="${fill}" stroke="${st}" stroke-width="2"/>`;
  const pent = (cx, cy, r, fill = "#f2a65a", st = "#c46f1c") => `<polygon points="${[0, 1, 2, 3, 4].map((i) => { const a = (Math.PI * 2 / 5) * i - Math.PI / 2; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ")}" fill="${fill}" stroke="${st}" stroke-width="2"/>`;
  const arten = `<svg viewBox="0 0 430 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Einfachzucker, Zweifachzucker und Vielfachzucker">
    <g font-size="13" font-weight="800" fill="#d0507e" text-anchor="middle"><text x="62" y="18">Einfachzucker</text><text x="200" y="18">Zweifachzucker</text><text x="355" y="18">Vielfachzucker</text></g>
    <line x1="128" y1="28" x2="128" y2="190" stroke="#ebe3d7" stroke-width="2"/><line x1="276" y1="28" x2="276" y2="190" stroke="#ebe3d7" stroke-width="2"/>
    ${hex(62, 58, 20)}${T(62, 96, "Glucose")}${t2(62, 110, "Traubenzucker")}
    ${pent(62, 140, 21)}${T(62, 178, "Fructose")}${t2(62, 192, "Fruchtzucker")}
    <line x1="196" y1="92" x2="208" y2="92" stroke="#4a4552" stroke-width="3"/>${hex(176, 92, 20)}${pent(228, 92, 21)}
    ${T(202, 136, "Saccharose")}${t2(202, 151, "= Haushaltszucker")}${t2(202, 166, "Glucose + Fructose")}
    <path d="M296 70 Q318 52 340 70 T384 70 T418 70" stroke="#4a4552" stroke-width="3" fill="none"/>
    <path d="M296 112 Q318 94 340 112 T384 112 T418 112" stroke="#4a4552" stroke-width="3" fill="none"/>
    ${[296, 318, 340, 362, 384, 406].map((x, i) => hex(x, i % 2 ? 61 : 70, 10)).join("")}${[296, 318, 340, 362, 384, 406].map((x, i) => hex(x, i % 2 ? 103 : 112, 10)).join("")}
    ${T(355, 150, "Stärke")}${t2(355, 165, "lange Ketten aus Glucose")}${t2(355, 180, "Kartoffeln, Brot, Nudeln")}
  </svg>`;
  const glc = (x, y) => hex(x, y, 6);
  const cell = (x, open) => `<rect x="${x}" y="112" width="170" height="100" rx="26" fill="#fde8c8" stroke="#d9a35c" stroke-width="3"/>
    ${open ? `<rect x="${x + 70}" y="106" width="30" height="14" fill="#fde8c8"/><path d="M${x + 70} 112 L${x + 58} 98" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/>` : `<rect x="${x + 70}" y="106" width="30" height="12" rx="3" fill="#8a5a2b"/>`}`;
  const insulin = `<svg viewBox="0 0 430 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Insulin als Paketbote bringt Zucker in die Zelle; bei Insulinresistenz bleibt die Tür zu">
    <defs><marker id="za" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#4a4552"/></marker></defs>
    <g font-size="14" font-weight="800" text-anchor="middle"><text x="105" y="16" fill="#3f9b6e">✓ Normal</text><text x="320" y="16" fill="#d1495b">✗ Insulinresistenz</text></g>
    <line x1="214" y1="24" x2="214" y2="232" stroke="#ebe3d7" stroke-width="2"/>
    <rect x="10" y="28" width="192" height="40" rx="20" fill="#f6c9c9"/><rect x="226" y="28" width="196" height="40" rx="20" fill="#f6c9c9"/>
    ${t2(30, 52, "Blut", "start")}${t2(246, 52, "Blut", "start")}
    ${[[70, 48], [120, 42], [160, 54]].map(([x, y]) => glc(x, y)).join("")}
    ${[[290, 42], [308, 56], [326, 42], [344, 56], [366, 44], [390, 54], [404, 40]].map(([x, y]) => glc(x, y)).join("")}
    ${cell(20, true)}${cell(236, false)}
    <circle cx="140" cy="90" r="13" fill="#9a7cc0"/><text x="140" y="95" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">I</text>
    ${glc(160, 88)}
    <path d="M150 104 Q125 112 110 128" stroke="#4a4552" stroke-width="2" fill="none" marker-end="url(#za)"/>
    ${glc(96, 146)}${glc(118, 160)}
    ${T(105, 196, "⚡ Energie in der Zelle")}
    ${T(170, 88, "Insulin", "start", 'font-size="12"')}
    <circle cx="356" cy="92" r="13" fill="#9a7cc0"/><text x="356" y="97" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">I</text>
    <text x="378" y="90" font-size="16">🔔</text>${t2(392, 108, "klingel …", "middle")}
    ${[[264, 92], [278, 98], [292, 90], [272, 84], [286, 82]].map(([x, y]) => glc(x, y)).join("")}
    ${T(321, 166, "Tür bleibt zu!")}${t2(321, 184, "Zucker bleibt im Blut,")}${t2(321, 199, "Blutzucker bleibt hoch")}
    ${t2(26, 236, "⬡ = Glucose", "start")}
  </svg>`;
  const cubes = (n, y, fill, max = 31) => Array.from({ length: n }, (_, i) => `<rect x="${12 + i * 13.3}" y="${y}" width="11" height="11" rx="2" fill="${fill}" stroke="#bfb3a3"/>`).join("");
  const wuerfel = `<svg viewBox="0 0 430 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Würfelzucker pro Tag: WHO-Empfehlung im Vergleich zum Durchschnitt">
    ${T(12, 18, "WHO: besser höchstens 25 g", "start")}${t2(418, 18, "≈ 8 Würfel", "end")}${cubes(8, 26, "#e8f6ee")}
    ${T(12, 70, "WHO: höchstens 50 g", "start")}${t2(418, 70, "≈ 16 Würfel", "end")}${cubes(16, 78, "#fff7df")}
    ${T(12, 122, "Durchschnitt in Deutschland: ca. 95 g", "start", 'fill="#d1495b"')}${t2(418, 122, "≈ 31 Würfel", "end")}${cubes(31, 130, "#fdecee")}
  </svg>`;
  FIGURES.zucker = [
    { svg: arten, caption: "Zuckerarten: ein Baustein, zwei Bausteine oder lange Ketten.", after: 0 },
    { svg: insulin, caption: "Insulin ist wie ein Paketbote: Es klingelt an der Zelle, damit sie Zucker hereinlässt. Klingelt es ständig, reagiert die Zelle irgendwann nicht mehr.", after: { basis: 1, profi: 2 } },
    { svg: wuerfel, caption: "Ein Würfelzucker wiegt etwa 3 g. So viel Zucker pro Tag empfiehlt die WHO – und so viel essen wir im Schnitt.", after: { basis: 3, profi: 1 } }
  ];

  Object.assign(LEXIKON, {
    "Saccharose": "Fachwort für Haushaltszucker. Ein Zweifachzucker aus je einem Baustein Glucose und Fructose. Wird aus Zuckerrohr oder Zuckerrüben gewonnen.",
    "Fructose": "Fruchtzucker. Ein Einfachzucker, der z. B. in Obst und Honig vorkommt. Wird im Körper fast nur in der Leber verarbeitet.",
    "Freier Zucker": "Zucker, der Lebensmitteln zugesetzt wird, sowie Zucker aus Honig, Sirup, Fruchtsäften und Konzentraten. Nicht dazu zählt der Zucker, der natürlich in ganzem Obst, Gemüse und Milch steckt.",
    "Dopamin": "Botenstoff im Gehirn. Er wird im Belohnungssystem ausgeschüttet, wenn wir etwas Schönes erleben, und steigert Motivation und Antrieb. Auch Süßes löst eine Dopamin-Ausschüttung aus.",
    "Insulinresistenz": "Die Körperzellen reagieren nur noch schwach auf Insulin und nehmen weniger Glucose auf. Der Blutzucker bleibt hoch. Kann eine Vorstufe von Diabetes Typ 2 sein.",
    "Diabetes Typ 2": "Stoffwechselkrankheit, bei der der Blutzucker dauerhaft zu hoch ist, weil die Zellen schlecht auf Insulin reagieren und/oder zu wenig Insulin gebildet wird. Risikofaktoren: Übergewicht, Bewegungsmangel, viel Zucker, Vererbung.",
    "Karies": "Zahnfäule. Bakterien im Zahnbelag bilden aus Zucker Säuren, die den Zahnschmelz angreifen und Löcher entstehen lassen."
  });
})();
