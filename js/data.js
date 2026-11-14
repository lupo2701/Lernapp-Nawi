/* Inhalte der Lern-App „Der Weg der Nahrung“
 * Inhaltlich aufbereitet nach der Materialsammlung „Der Weg der Nahrung“
 * (Bundeszentrum für Ernährung / BLE, Sekundarstufe I). Alle Texte wurden
 * für die App neu formuliert. Begriffe in [[…]] verlinken ins Lexikon.
 */

const TOPICS = [
  {
    id: "weg",
    title: "Weg der Nahrung",
    short: "Überblick",
    icon: "🧭",
    color: "#e07a5f",
    goals: [
      "Ich kann den Weg der Nahrung durch den Körper beschreiben.",
      "Ich kann alle Verdauungsorgane benennen und im Körper zeigen.",
      "Ich kann erklären, wie Bewegung die Verdauung beeinflusst."
    ],
    basis: [
      "Alles, was du isst, legt einen langen Weg durch deinen Körper zurück. Unterwegs wird es zerkleinert, vermischt und in winzige Bausteine zerlegt – das nennt man **Verdauung**.",
      "Die Reise beginnt im **Mund**. Über die **Speiseröhre** gelangt der Speisebrei in den **Magen**. Von dort geht es in den **Dünndarm**, in den auch **Leber/Gallenblase** und **Bauchspeicheldrüse** ihre Säfte abgeben. Im Dünndarm werden die [[Nährstoffe]] ins Blut aufgenommen.",
      "Was übrig bleibt, wandert in den **Dickdarm**. Dort holt sich der Körper Wasser zurück. Der eingedickte Rest heißt Kot und wird im **Mastdarm** gesammelt, bis du zur Toilette gehst."
    ],
    profi: [
      "Verdauung bedeutet: Große Nährstoffmoleküle aus der Nahrung werden mechanisch (kauen, kneten, mischen) und chemisch (durch [[Enzym|Enzyme]], Säure und Verdauungssäfte) so lange zerlegt, bis sie klein genug sind, um durch die Darmwand ins Blut oder in die [[Lymphe]] zu gelangen.",
      "Station für Station: **Mund** (zerkleinern, einspeicheln, [[Stärke]] anverdauen) → **Speiseröhre** (Transport durch [[Peristaltik]]) → **Magen** (Säure, Eiweißverdauung, portionsweise Abgabe) → **Dünndarm** mit Gallensaft und Bauchspeichel (Spaltung in kleinste Bausteine, [[Resorption]]) → **Dickdarm** (Wasserrückgewinnung, [[Darmflora]]) → **Mastdarm** (Sammeln und kontrolliertes Entleeren).",
      "Interessant: Werden Menschen künstlich ernährt, kann ein Teil dieses Weges übersprungen werden. Bei der **enteralen** Ernährung gelangt flüssige Nahrung über einen Schlauch direkt in den Magen. Bei der **parenteralen** Ernährung werden fertige Bausteine wie [[Einfachzucker]], [[Aminosäuren]] und [[Fettsäuren]] direkt in die Vene gegeben – die Verdauung wird komplett umgangen."
    ],
    facts: [
      "Durchschnittlich verbringen Menschen in Deutschland etwa 1 Stunde 45 Minuten pro Tag mit Essen und Trinken, in Frankreich etwa 2 Stunden 15 Minuten.",
      "Bewegung regt die Darmtätigkeit an.",
      "Rote Bete kann den Urin rot färben – ein harmloser Farbstoff-Effekt."
    ],
    cards: [1, 2, 3, 4, 5],
    experiments: ["A5"]
  },
  {
    id: "mund",
    title: "Mund und Speiseröhre",
    short: "Mund",
    icon: "👄",
    color: "#f2a65a",
    goals: [
      "Ich kann den Aufbau meiner Mundhöhle beschreiben.",
      "Ich kann erklären, warum Kauen wichtig ist.",
      "Ich kann erklären, was beim Schlucken passiert und warum man dabei nicht atmen kann.",
      "Ich kann am Beispiel der Amylase erklären, wie Verdauungsenzyme wirken."
    ],
    basis: [
      "Egal ob Apfel, Pausenbrot oder Nudeln: Zuerst landet alles im **Mund**. Die Zähne zerkleinern die Nahrung. Das ist wichtig, denn kleine Stücke kann der Körper später viel besser verdauen.",
      "Beim Kauen vermischt sich das Essen mit [[Speichel]]. Dadurch wird der Brei feucht und rutscht leicht durch die **Speiseröhre** in den Magen.",
      "Im Speichel steckt ein [[Enzym]]. Es zerlegt lange Zuckerketten – zum Beispiel [[Stärke]] aus Brot oder Nudeln – in kleinere Stücke. Die Verdauung beginnt also schon im Mund!"
    ],
    profi: [
      "Die Verdauung startet in der Mundhöhle: Die Zähne zerkleinern die Nahrung und vergrößern so ihre Oberfläche. Verdauungsenzyme können dadurch später besser angreifen, und der Dünndarm kann die [[Nährstoffe]] leichter aufnehmen.",
      "Beim Kauen wird die Nahrung mit [[Speichel]] vermischt. Er besteht größtenteils aus Wasser und enthält das Enzym [[Amylase]]. Die Amylase spaltet lange [[Kohlenhydrate|Kohlenhydratketten]] wie [[Stärke]] in [[Zweifachzucker]] (Malzzucker). Deshalb schmeckt Brot süßlich, wenn man es lange kaut.",
      "Beim Schlucken arbeiten mehr als 20 Muskeln zusammen. Das [[Gaumensegel]] verschließt den Weg zur Nase, der [[Kehldeckel]] klappt über die Luftröhre. So gelangt der Bissen in die Speiseröhre – und nicht in die Luftröhre. Deshalb kann man nicht gleichzeitig schlucken und atmen.",
      "Die Speiseröhre transportiert den Bissen mit wellenartigen Muskelbewegungen ([[Peristaltik]]) aktiv in den Magen – das funktioniert sogar im Liegen oder im Kopfstand."
    ],
    facts: [
      "Ein Mensch bildet pro Tag etwa 1,5 Liter Speichel.",
      "Die Zunge schmeckt nur süß, sauer, bitter, salzig und umami (herzhaft). Alle anderen Aromen nimmt die Nase wahr – deshalb schmeckt mit zugehaltener Nase vieles gleich.",
      "Schärfe ist kein Geschmack, sondern ein Hitze- und Schmerzreiz."
    ],
    cards: [6, 7, 8, 9, 10, 11],
    experiments: ["A6", "A7", "A8"]
  },
  {
    id: "magen",
    title: "Magen",
    short: "Magen",
    icon: "🫃",
    color: "#e5989b",
    goals: [
      "Ich kann die Aufgaben des Magens erklären.",
      "Ich kann beschreiben, woraus Magensaft besteht und was er bewirkt.",
      "Ich kann begründen, welches Frühstück vor einer Prüfung gut geeignet ist.",
      "Ich kann meine Körpersignale (leerer/voller Magen) wahrnehmen und beschreiben."
    ],
    basis: [
      "Der **Magen** sammelt den Speisebrei aus der Speiseröhre. Er knetet ihn kräftig durch, vermischt ihn mit Magensaft und zerkleinert ihn weiter. Schlecht gekautes Essen macht dem Magen mehr Arbeit.",
      "Der Magensaft ist sehr sauer. Die Säure tötet Bakterien ab und schützt dich so vor Krankheiten. Im Magen beginnt außerdem die Verdauung der [[Proteine]] (Eiweiße): Das [[Enzym]] [[Pepsin]] zerlegt sie in kleinere Bausteine.",
      "Am Ausgang des Magens sitzt ein [[Schließmuskel]], der **Magenpförtner**. Er gibt den Speisebrei immer nur in kleinen Portionen an den Dünndarm weiter."
    ],
    profi: [
      "Der Magen nimmt den Speisebrei über den **Magenmund** auf, durchmischt ihn mit Magensaft und zerkleinert ihn weiter. Der Magensaft enthält **Salzsäure** und das Enzym [[Pepsin]].",
      "Die Salzsäure verändert die räumliche Struktur der [[Proteine]] – sie „entfaltet“ sie. Dadurch kann Pepsin die Eiweißketten besser angreifen und in kleinere Stücke spalten. Pepsin wird als inaktive Vorstufe gebildet und erst im sauren Magensaft aktiviert.",
      "Damit sich der Magen nicht selbst verdaut, schützt ihn die **Magenschleimhaut** mit einer Schleimschicht. Gelangt saurer Magensaft in die ungeschützte Speiseröhre, entsteht **Sodbrennen**.",
      "Die Salzsäure tötet außerdem Krankheitserreger ab. Der **Magenpförtner** mit seinem [[Schließmuskel]] gibt den Speisebrei portionsweise in den Dünndarm ab. Wie lange Essen im Magen bleibt, hängt von seiner Zusammensetzung ab: Getränke passieren schnell, fettreiche Speisen bleiben am längsten."
    ],
    facts: [
      "Den sauren Geschmack beim Erbrechen oder Aufstoßen verursacht die Salzsäure im Magensaft.",
      "Magenknurren entsteht, wenn sich der leere Magen zusammenzieht. Wie genau das Geräusch entsteht, wird unterschiedlich erklärt.",
      "Stress und Aufregung können tatsächlich „auf den Magen schlagen“."
    ],
    cards: [12, 13, 14, 15, 16, 17],
    experiments: ["A9"]
  },
  {
    id: "duenndarm",
    title: "Dünndarm",
    short: "Dünndarm",
    icon: "🌀",
    color: "#81b29a",
    goals: [
      "Ich kann die Aufgaben des Dünndarms beschreiben.",
      "Ich kann erklären, welche Verdauungssäfte im Dünndarm wirken und woher sie kommen.",
      "Ich kann mit dem Prinzip der Oberflächenvergrößerung erklären, wie der Dünndarm aufgebaut ist."
    ],
    basis: [
      "Im **Dünndarm** wird der Speisebrei aus dem Magen mit weiteren Verdauungssäften vermischt. Sie kommen zum Beispiel aus der **Gallenblase** und aus der **Bauchspeicheldrüse**.",
      "Der Gallensaft hilft bei der Verdauung von [[Fette|Fetten]]. Der Saft der Bauchspeicheldrüse enthält [[Verdauungsenzym|Verdauungsenzyme]]. Sie zerlegen die [[Nährstoffe]] in ihre kleinsten Bausteine.",
      "Diese Bausteine – und auch viel Wasser – nimmt die Darmwand auf und gibt sie ans Blut weiter. Die Muskeln der Darmwand bewegen sich wellenartig und schieben den Rest in Richtung Dickdarm."
    ],
    profi: [
      "Der Dünndarm führt die im Mund und Magen begonnene Verdauung zu Ende. Er besteht aus drei Abschnitten: **Zwölffingerdarm**, **Leerdarm** und **Krummdarm**. Insgesamt ist er mindestens drei Meter lang – er passt nur in den Bauch, weil er in vielen Schlingen liegt.",
      "Hier treffen drei Säfte auf den Speisebrei: Der **Gallensaft** wirkt als [[Emulgator]] und zerteilt Fett in feine Tröpfchen. Der **Bauchspeichel** [[Neutralisation|neutralisiert]] den sauren Speisebrei aus dem Magen. Enzyme aus Bauchspeichel und Dünndarmwand spalten die Nährstoffe in kleinste Bausteine: [[Aminosäuren]], [[Einfachzucker]] und [[Fettsäuren]].",
      "Die Dünndarmwand hat eine riesige Oberfläche: Sie ist in **Falten** gelegt, und auf den Falten sitzen unzählige fingerförmige [[Darmzotten]]. So kann sie die Bausteine sehr gut aufnehmen ([[Resorption]]) – vor allem im oberen Teil. Blut und [[Lymphe]] bringen sie dorthin, wo der Körper sie braucht.",
      "Gleichzeitig nimmt die Darmwand große Mengen Wasser auf – aus Getränken, aus der Nahrung und aus den Verdauungssäften. Wellenartige Bewegungen ([[Peristaltik]]) schieben den Darminhalt weiter zum Dickdarm."
    ],
    facts: [
      "Über seine große Oberfläche holt sich der Darm täglich bis zu acht Liter Flüssigkeit zurück. Ohne diese Rückgewinnung müssten wir etwa sieben Liter am Tag trinken.",
      "Jugendliche brauchen etwa 1,5 Liter Getränke pro Tag.",
      "Bei Laktoseintoleranz fehlt im Dünndarm ein Enzym, das Milchzucker spaltet. Bei Zöliakie ist die Dünndarmschleimhaut durch Gluten geschädigt."
    ],
    cards: [18, 19, 20, 21, 22],
    experiments: ["A10"]
  },
  {
    id: "galle",
    title: "Gallenblase und Bauchspeicheldrüse",
    short: "Galle & Pankreas",
    icon: "💧",
    color: "#c9b458",
    goals: [
      "Ich kann erklären, wie Gallensaft bei der Fettverdauung hilft.",
      "Ich kann die Aufgaben der Bauchspeicheldrüse beschreiben.",
      "Ich kann begründen, welches Essen vor dem Sport gut bekömmlich ist."
    ],
    basis: [
      "Die **Leber** stellt Gallensaft her. Ein Teil davon wird in der **Gallenblase** gesammelt, der größere Teil fließt direkt in den Dünndarm.",
      "Gallensaft wirkt ähnlich wie Spülmittel: Er zerteilt [[Fette|Fett]] in winzige Tröpfchen und verteilt sie im Wasser. Man sagt: Er [[Emulgator|emulgiert]] das Fett. Die kleinen Fetttröpfchen können die Verdauungsenzyme dann viel besser angreifen.",
      "Die **Bauchspeicheldrüse** gibt ihren Saft ebenfalls in den Dünndarm. Er macht den sauren Speisebrei aus dem Magen wieder neutral und enthält [[Verdauungsenzym|Enzyme]], die [[Kohlenhydrate]], [[Proteine]] und Fette in kleinste Bausteine zerlegen."
    ],
    profi: [
      "**Gallenblase:** Die Leber produziert den Gallensaft; die Gallenblase speichert einen Teil davon und gibt ihn bei Bedarf ab. Die enthaltenen **Gallensäuren** sind [[Emulgator|Emulgatoren]]: Sie zerteilen Fett in feinste Tröpfchen und bilden mit Wasser eine [[Emulsion]]. Die Oberfläche des Fettes wird dadurch riesig – eine gute Angriffsfläche für fettspaltende Enzyme.",
      "Die gelbgrüne Farbe der Galle stammt vom [[Bilirubin]], einem Abbauprodukt des roten Blutfarbstoffs. Bakterien im Dickdarm bauen es weiter ab – daher kommt die typische braune Farbe des Kots.",
      "**Bauchspeicheldrüse:** Ihr Saft [[Neutralisation|neutralisiert]] den sauren Speisebrei und enthält Enzyme für Kohlenhydrate, Proteine und Fette. Damit sie sich nicht selbst verdaut, bildet sie diese Enzyme als **inaktive Vorstufen**, die erst im Dünndarm aktiviert werden.",
      "Außerdem bildet die Bauchspeicheldrüse das [[Hormon]] [[Insulin]]. Es wird nicht in den Darm, sondern direkt ins Blut abgegeben. Insulin schleust Zucker ([[Glucose]]) aus dem Blut in die Körperzellen und senkt so den Blutzuckerspiegel."
    ],
    facts: [
      "Scharfe Gewürze wie Senf regen die Bildung von Speichel und Gallensaft an.",
      "Gallseife (Seife mit Rindergalle) ist ein altes Hausmittel gegen Fettflecken – sie nutzt die emulgierende Wirkung der Galle.",
      "Fehlt Bauchspeichel (z. B. bei einer Entzündung), wird ein Teil des Fettes unverdaut wieder ausgeschieden."
    ],
    cards: [23, 24, 25, 26, 27, 28],
    experiments: ["A11"]
  },
  {
    id: "dickdarm",
    title: "Dickdarm",
    short: "Dickdarm",
    icon: "🦠",
    color: "#3d8bbd",
    goals: [
      "Ich kann den Aufbau und die Aufgaben des Dickdarms erklären.",
      "Ich kann erklären, was bei Durchfall und Verstopfung im Darm passiert.",
      "Ich kann erklären, warum Ballaststoffe wichtig sind, und ballaststoffreiche Lebensmittel nennen."
    ],
    basis: [
      "Der **Dickdarm** ist der letzte Teil des Verdauungssystems. Er bewegt den Speisebrei hin und her und entzieht ihm dabei Wasser. Der Brei wird dadurch fester – jetzt heißt er **Kot**.",
      "Im Dickdarm leben unzählige Bakterien, die [[Darmflora]]. Sie zersetzen einen Teil der Nahrungsreste. Dabei können übel riechende Gase entstehen.",
      "Der letzte Abschnitt, der **Mastdarm**, sammelt den Kot. Mit einem [[Schließmuskel]] am Darmausgang kannst du steuern, wann du auf die Toilette gehst."
    ],
    profi: [
      "Der Dickdarm ist die letzte Station der Verdauung. Ein [[Schließmuskel]] trennt ihn vom Dünndarm und verhindert, dass Speisebrei zurückfließt. Er gliedert sich in **Blinddarm** (mit dem **Wurmfortsatz**), **Grimmdarm** und **Mastdarm**.",
      "Die Darmwand bildet Schleim, der den Inhalt gleitfähig macht. Durch gegenläufige Bewegungen ([[Antiperistaltik]]) wird der Inhalt langsam hin und her geschoben – so kann der Körper einen großen Teil des Wassers zurückgewinnen. Der eingedickte Brei heißt Kot.",
      "Die Bakterien im Dickdarm nennt man [[Darmflora]] oder Mikrobiota. Sie nutzen Nahrungsreste – vor allem [[Ballaststoffe]] – als Energiequelle. Dabei entstehen Gase. Eine gesunde Darmflora erschwert es Krankheitserregern, sich zu vermehren.",
      "Der **Mastdarm** sammelt den Kot bis zur kontrollierten Entleerung über den Schließmuskel am Darmausgang. Wandert der Brei zu schnell durch den Dickdarm, wird zu wenig Wasser entzogen → **Durchfall**. Wandert er zu langsam, wird zu viel Wasser entzogen → **Verstopfung**."
    ],
    facts: [
      "Ballaststoffe gibt es nur in pflanzlichen Lebensmitteln: Obst, Gemüse, Hülsenfrüchte, Kartoffeln und Vollkorngetreide.",
      "Gegen Verstopfung helfen: viel trinken, ballaststoffreich essen und sich bewegen.",
      "Bei einer Blinddarm-Operation wird meist nur der Wurmfortsatz entfernt."
    ],
    cards: [29, 30, 31, 32, 33, 34],
    experiments: ["A12"]
  },
  {
    id: "hunger",
    title: "Hunger und Sättigung",
    short: "Hunger",
    icon: "🍽️",
    color: "#9a7cc0",
    goals: [
      "Ich kann meine Körpersignale (Hunger, Sättigung, Durst) wahrnehmen und beschreiben.",
      "Ich kann Hunger von Appetit unterscheiden.",
      "Ich kann erklären, wie Sättigung entsteht.",
      "Ich kann äußere Einflüsse auf mein Essverhalten erkennen und Ideen entwickeln, wie ich damit umgehe."
    ],
    basis: [
      "Wir essen, wenn wir Hunger haben, und hören auf, wenn wir satt sind – stimmt das wirklich? Fachleute unterscheiden drei Dinge, die unser Essen steuern: **innere Signale**, **äußere Reize** und **bewusste Entscheidungen**.",
      "**Innere Signale** sind Durst, Hunger und Sättigung. Hunger entsteht, wenn der Magen leer ist oder dem Körper Nährstoffe fehlen. Sättigung ist das Stoppsignal: Der Körper merkt unter anderem, wie stark sich der Magen dehnt.",
      "Wichtig: Das Sattgefühl kommt erst nach etwa **15 bis 20 Minuten**. Wer langsam isst und sich nicht vom Handy ablenken lässt, merkt rechtzeitig, wann er genug hat.",
      "**Äußere Reize** sind zum Beispiel der Duft von Essen, Werbung oder die Stimmung am Tisch. Lust auf etwas, obwohl man nicht hungrig ist, nennt man **Appetit**."
    ],
    profi: [
      "Ob, was und wie viel wir essen, hängt von vielen Faktoren ab. Unterschieden werden **innere Signale**, **äußere Reize** und **bewusste Entscheidungen**.",
      "**Innere Signale:** Durst zeigt Flüssigkeitsmangel an. Hunger entsteht bei leerem Magen oder wenn bestimmte Nährstoffe fehlen. Die Sättigung ist noch nicht vollständig erforscht. Sicher ist: Der Körper misst die **Dehnung der Magenwand**, und **Darm und Leber** messen den Nährstoffgehalt einer Mahlzeit. Sie senden Sättigungssignale an das **Gehirn**.",
      "Erste Sättigungsgefühle stellen sich 15 bis 20 Minuten nach Beginn einer Mahlzeit ein; richtig gut funktioniert das Zusammenspiel von Magen, Leber, Darm und Gehirn erst nach etwa 30 Minuten. Wer schnell oder abgelenkt (Fernseher, Handy) isst, „überhört“ die Sättigungssignale leicht.",
      "Auch die Art der Nahrung zählt: Langkettige Kohlenhydrate (Kartoffeln, Getreide, Gemüse) und [[Proteine]] (Hülsenfrüchte, Fisch, Fleisch, Milchprodukte) sättigen gut und lange. [[Ballaststoffe]] aus Vollkorn, Obst und Gemüse quellen im Magen auf und dehnen die Magenwand.",
      "**Äußere Reize** sind z. B. Duft, Aussehen, Portionsgröße, Tellergröße, Werbung, die Stimmung am Tisch und die verfügbare Zeit. Auch Erziehung, Kultur, Religion und Schönheitsideale prägen unser Essverhalten. **Bewusste Entscheidungen** werden mit dem Alter wichtiger – etwa seltener, dafür Bio-Fleisch zu essen oder regelmäßig zu frühstücken, weil man merkt, dass es fit hält."
    ],
    facts: [
      "Optische Täuschungen beeinflussen, wie viel wir uns nehmen: Auf einem großen Teller wirkt dieselbe Portion kleiner (Delboeuf-Täuschung).",
      "Breite Gläser enthalten oft mehr, als man denkt – hohe, schmale Gläser wirken voller.",
      "Je größer die Auswahl, desto mehr essen wir meistens.",
      "Was gut sichtbar und mundgerecht bereitsteht, wird eher gegessen – das lässt sich auch für Obst und Gemüse nutzen."
    ],
    cards: [35, 36, 37, 38, 39, 40],
    experiments: ["A13", "A14"]
  }
];

/* Organe für die interaktive Körperkarte */
const ORGANS = {
  mund:     { name: "Mund", topic: "mund", text: "Zähne zerkleinern die Nahrung, Speichel macht sie feucht. Die Amylase im Speichel beginnt, Stärke zu spalten." },
  speiseroehre: { name: "Speiseröhre", topic: "mund", text: "Ein Muskelschlauch, der den Bissen mit wellenartigen Bewegungen (Peristaltik) in den Magen befördert." },
  leber:    { name: "Leber", topic: "galle", text: "Die Leber produziert den Gallensaft, der bei der Fettverdauung hilft." },
  gallenblase: { name: "Gallenblase", topic: "galle", text: "Speichert einen Teil des Gallensafts und gibt ihn in den Dünndarm ab. Gallensäuren emulgieren Fett." },
  magen:    { name: "Magen", topic: "magen", text: "Knetet den Speisebrei, mischt ihn mit saurem Magensaft (Salzsäure + Pepsin) und gibt ihn portionsweise weiter." },
  bauchspeicheldruese: { name: "Bauchspeicheldrüse", topic: "galle", text: "Ihr Saft neutralisiert den sauren Brei und enthält Enzyme für Kohlenhydrate, Proteine und Fette. Sie bildet auch Insulin." },
  duenndarm: { name: "Dünndarm", topic: "duenndarm", text: "Hier werden die Nährstoffe in kleinste Bausteine gespalten und über die Darmzotten ins Blut aufgenommen." },
  dickdarm: { name: "Dickdarm", topic: "dickdarm", text: "Entzieht dem Brei Wasser. Die Darmflora zersetzt Reste wie Ballaststoffe – dabei entstehen Gase." },
  mastdarm: { name: "Mastdarm", topic: "dickdarm", text: "Sammelt den Kot. Ein Schließmuskel am Darmausgang ermöglicht die kontrollierte Entleerung." }
};

/* Reihenfolge für das Sortierspiel */
const ROUTE = ["mund", "speiseroehre", "magen", "duenndarm", "dickdarm", "mastdarm"];

/* Aufgabenkarten 1–40. type: R = Recherche, E = Experiment, S = Selbstbeobachtung.
 * profi: höheres Niveau. back: Tipp/Zusatzaufgabe. solution: Lösungsidee (nicht bei Selbstbeobachtung). */
const CARDS = [
  { n: 1, topic: "weg", type: "R", front: "Was passiert alles während der Verdauung? Schreibe möglichst viele Verben auf.", back: "Lies die Texte zu allen Verdauungsorganen und sammle alle Verben, die mit Verdauung zu tun haben (z. B. „kauen“).", solution: "Zum Beispiel: kauen, zerkleinern, einspeicheln, schlucken, befördern, kneten, mischen, ansäuern, spalten, zerlegen, emulgieren, neutralisieren, aufnehmen (resorbieren), transportieren, eindicken, zersetzen, sammeln, ausscheiden." },
  { n: 2, topic: "weg", type: "R", front: "Welchen Weg nimmt die Nahrung durch deinen Körper? Notiere die Verdauungsorgane in der richtigen Reihenfolge und beschreibe, was jeweils passiert.", back: "Du kannst alle Lerntexte lesen oder die Körperkarte auf der Startseite nutzen.", solution: "Mund (zerkleinern, einspeicheln) → Speiseröhre (Transport) → Magen (Säure, Eiweißverdauung) → Dünndarm mit Gallensaft und Bauchspeichel (Spaltung in Bausteine, Aufnahme ins Blut) → Dickdarm (Wasser zurückgewinnen, Darmflora) → Mastdarm (Kot sammeln, ausscheiden)." },
  { n: 3, topic: "weg", type: "E", profi: true, front: "Führe das Experiment „Was passiert mit dem Essen in deinem Körper?“ (A5) durch. Beurteile den Versuchsaufbau: Welche Verdauungsschritte werden vereinfacht, welche fehlen ganz?", back: "In den Lerntexten zu Mund, Magen, Dünndarm und Dickdarm sind alle Verdauungsschritte beschrieben.", solution: "Vereinfacht: Kauen (Mund), Essig statt Magensäure, Spülmittel statt Gallensaft, Filter statt Aufnahme durch die Darmwand, Ausdrücken im Tuch statt Wasserentzug im Dickdarm. Es fehlen z. B.: die Enzyme (Amylase, Pepsin, Enzyme der Bauchspeicheldrüse), das Neutralisieren durch den Bauchspeichel, die Muskelbewegungen (Peristaltik), die Darmflora, die Körpertemperatur und die lange Zeit, die Verdauung wirklich braucht." },
  { n: 4, topic: "weg", type: "R", profi: true, front: "Bewusstlose Menschen können auf zwei Arten künstlich ernährt werden: a) parenteral oder b) enteral. Welche Verdauungsschritte werden dabei jeweils übersprungen?", back: "a) Parenteral: Flüssigkeit, Einfachzucker, Aminosäuren, Fettsäuren, Vitamine und Mineralstoffe werden direkt in die Vene gegeben. b) Enteral: Flüssige Nahrung kommt über einen Schlauch direkt in den Magen.", solution: "a) Parenteral wird die gesamte Verdauung übersprungen – Mund, Magen, Darm und die Aufnahme durch die Darmwand. Die Bausteine gelangen direkt ins Blut. b) Enteral werden nur Mund und Speiseröhre übersprungen (kein Kauen, kein Speichel, kein Schlucken). Ab dem Magen läuft die Verdauung normal ab." },
  { n: 5, topic: "weg", type: "S", front: "Kennst du den Spruch „Nach dem Essen sollst du ruhen oder 1000 Schritte tun“? Wie ist das bei dir: Geht es dir besser, wenn du dich nach dem Essen ausruhst oder wenn du spazieren gehst?", back: "Probiere beides aus und notiere deine Beobachtungen." },
  { n: 6, topic: "mund", type: "E", front: "Wie ist deine Mundhöhle aufgebaut? Betrachte deinen geöffneten Mund im Spiegel. Zeichne und beschrifte, was du erkennst.", back: "Tipp: Man kann mehr als zehn verschiedene Bereiche oder Strukturen unterscheiden (z. B. Zähne).", solution: "Z. B.: Lippen, Schneidezähne, Eckzähne, Backenzähne, Zahnfleisch, Zunge, Zungenbändchen, Wangeninnenseite, harter Gaumen, weicher Gaumen (Gaumensegel), Zäpfchen, Gaumenmandeln, Rachen." },
  { n: 7, topic: "mund", type: "E", front: "Kannst du im Liegen essen und trinken? Plane ein Experiment, führe es durch, dokumentiere es und erkläre deine Beobachtung.", back: "Tipp fürs Trinken: Nimm einen Strohhalm. Tipp fürs Essen: Nimm ein weiches Stück Brot und kaue gut. Nur kleine Bissen und am besten mit einer zweiten Person!", solution: "Ja, das funktioniert. Die Speiseröhre ist kein einfaches Rohr, durch das das Essen nach unten fällt. Ihre Muskeln ziehen sich wellenartig zusammen (Peristaltik) und schieben den Bissen aktiv in den Magen – unabhängig von der Schwerkraft." },
  { n: 8, topic: "mund", type: "S", front: "Nimm einen Apfel: Sieh ihn an und rieche daran. Woran denkst du? Was passiert in deinem Mund? Was in deinem Magen? Notiere deine Gedanken und Beobachtungen.", back: "Zusatzaufgabe: Beiße anschließend in den Apfel. Was passiert beim Kauen in deinem Mund? Notiere möglichst genau." },
  { n: 9, topic: "mund", type: "R", front: "Welche Aufgaben hat der Speichel bei der Verdauung? Nenne und erkläre sie.", back: "Du kannst den Lerntext „Mund und Speiseröhre“ lesen.", solution: "1. Er befeuchtet die Nahrung und macht den Bissen gleitfähig, damit er leicht durch die Speiseröhre rutscht. 2. Er enthält das Enzym Amylase, das Stärke in Zweifachzucker (Malzzucker) spaltet – die Verdauung beginnt also schon im Mund." },
  { n: 10, topic: "mund", type: "R", profi: true, front: "Wofür braucht der Körper Verdauungsenzyme? Erkläre ihre Wirkung am Beispiel der Amylase.", back: "Du kannst das Experiment „Was bewirkt das Enzym Amylase?“ (A8) durchführen.", solution: "Nährstoffe wie Stärke, Proteine und Fette sind zu groß, um durch die Darmwand ins Blut zu gelangen. Verdauungsenzyme zerlegen sie in kleine Bausteine, die aufgenommen werden können. Enzyme beschleunigen diese Reaktion und werden dabei nicht verbraucht. Beispiel: Die Amylase im Speichel spaltet lange Stärkeketten in Malzzucker – deshalb schmeckt Brot nach langem Kauen süß." },
  { n: 11, topic: "mund", type: "R", front: "Was hilft, wenn man etwas sehr Scharfes gegessen hat? Sammle verschiedene „Hausmittel“. Erkläre für mindestens eines, wie es wirkt, und bewerte es.", back: "Du kannst mindestens zehn Leute befragen oder im Internet recherchieren.", solution: "Schärfe ist kein Geschmack, sondern ein Hitze- und Schmerzreiz. Der Scharfstoff in Chili löst sich kaum in Wasser, aber gut in Fett. Deshalb helfen Milch, Joghurt oder Käse meist besser als Wasser, das den Stoff nur im Mund verteilt. Auch Brot oder etwas Zucker können die Schärfe mildern." },
  { n: 12, topic: "magen", type: "R", front: "Welche Aufgaben hat der Magen bei der Verdauung? Nenne und erkläre sie.", back: "Du kannst den Lerntext „Magen“ lesen.", solution: "Der Magen sammelt den Speisebrei, knetet und zerkleinert ihn weiter und mischt ihn mit Magensaft. Die Salzsäure tötet Bakterien ab und entfaltet die Proteine; das Enzym Pepsin beginnt die Eiweißverdauung. Der Magenpförtner gibt den Brei portionsweise an den Dünndarm ab." },
  { n: 13, topic: "magen", type: "R", front: "Stell dir vor, du hast in drei Stunden eine wichtige Prüfung. Was würdest du frühstücken – eine Tasse Tee, Müsli mit Obst und Milch oder Rührei mit Speck? Begründe.", back: "Überlege, wie lange die Speisen im Magen bleiben und wie lange sie satt machen.", solution: "Am besten eignet sich das Müsli mit Obst und Milch: Es liefert langkettige Kohlenhydrate, Ballaststoffe und Eiweiß, hält lange satt und liegt nicht schwer im Magen. Tee allein macht nicht satt. Rührei mit Speck ist sehr fettreich, bleibt lange im Magen und kann träge machen." },
  { n: 14, topic: "magen", type: "R", front: "Welchen Bestandteil des Magensaftes „schmeckt“ man beim Erbrechen und manchmal beim Aufstoßen?", back: "Versuche dich an den Geschmack zu erinnern und verbinde ihn mit einem Bestandteil des Magensaftes.", solution: "Die Salzsäure. Sie macht den Magensaft stark sauer – deshalb schmeckt Erbrochenes sauer und kann im Hals brennen." },
  { n: 15, topic: "magen", type: "R", profi: true, front: "Sodbrennen entsteht, wenn saurer Magensaft in die Speiseröhre gelangt. Wie schützt sich die Magenwand vor dem Magensaft?", back: "Du kannst den Lerntext „Magen“ (Profi-Version) lesen.", solution: "Die Magenschleimhaut bildet eine schützende Schleimschicht, die verhindert, dass Säure und Pepsin die Magenwand angreifen. Außerdem wird Pepsin als inaktive Vorstufe gebildet und erst im Magensaft aktiviert. Die Speiseröhre hat diesen Schutz nicht – deshalb brennt es dort." },
  { n: 16, topic: "magen", type: "S", front: "Wie fühlst du dich, wenn dein Magen leer ist? Wie fühlst du dich, wenn er gut gefüllt ist? Beschreibe.", back: "Beantworte die erste Frage, wenn du hungrig bist. Iss dann etwas und beantworte die zweite Frage." },
  { n: 17, topic: "magen", type: "S", profi: true, front: "Was bedeutet die Redensart „Das Problem schlägt mir auf den Magen“? Wenn dir das schon einmal passiert ist: Beschreibe die Situation und was dabei geschehen ist.", back: "Überlege, wie Gefühle wie Stress oder Angst mit deinem Bauch zusammenhängen.", solution: "Die Redensart stimmt tatsächlich: Gehirn und Verdauungssystem sind über Nerven eng verbunden. Stress, Sorgen oder Aufregung können Bauchschmerzen, Übelkeit, Appetitlosigkeit oder Durchfall auslösen – zum Beispiel vor einer Prüfung." },
  { n: 18, topic: "duenndarm", type: "R", front: "Welche Aufgaben hat der Dünndarm bei der Verdauung? Nenne und erkläre sie.", back: "Du kannst den Lerntext „Dünndarm“ lesen.", solution: "Er mischt den Speisebrei mit Gallensaft, Bauchspeichel und Darmsaft, spaltet die Nährstoffe vollständig in kleinste Bausteine, nimmt diese über seine große Oberfläche ins Blut bzw. in die Lymphe auf (Resorption), nimmt viel Wasser auf und schiebt den Rest durch Peristaltik in den Dickdarm." },
  { n: 19, topic: "duenndarm", type: "R", front: "Welche Verdauungssäfte treffen im Dünndarm auf den Speisebrei? Nenne mindestens zwei, beschreibe woher sie kommen und welche Aufgabe sie haben.", back: "Du kannst die Lerntexte „Dünndarm“ und „Gallenblase und Bauchspeicheldrüse“ lesen.", solution: "Gallensaft – aus der Leber (teils in der Gallenblase gespeichert): emulgiert Fett. Bauchspeichel – aus der Bauchspeicheldrüse: neutralisiert den sauren Brei und enthält Enzyme für Kohlenhydrate, Proteine und Fette. Darmsaft – aus der Dünndarmwand: enthält ebenfalls Verdauungsenzyme." },
  { n: 20, topic: "duenndarm", type: "R", profi: true, front: "Warum leiden Menschen, denen ein Großteil des Dünndarms entfernt werden musste, an Nährstoffmangel? Begründe.", back: "Der Lerntext „Dünndarm“ gibt dir einen Hinweis.", solution: "Die Aufnahme der Nährstoffe (Resorption) findet fast nur im Dünndarm statt. Fehlt ein großer Teil, fehlt auch ein großer Teil der Oberfläche mit Falten und Darmzotten. Dann können nicht mehr genug Nährstoffe ins Blut gelangen – sie werden unverdaut ausgeschieden." },
  { n: 21, topic: "duenndarm", type: "E", front: "Der Dünndarm ist mindestens drei Meter lang. Warum passt er trotzdem in deinen Bauch? Baue ein Modell, um es deinen Mitschülerinnen und Mitschülern zu erklären.", back: "2D-Modell: ein A4-Blatt und ein 3–5 m langes Band. 3D-Modell: ein Schuhkarton und ein 3–5 m langes Seil oder ein biegsamer Schlauch.", solution: "Der Dünndarm liegt in vielen Schlingen eng zusammengelegt im Bauchraum – so wie ein langes Seil, das man in einen Schuhkarton legt. Er ist an einer dünnen Haut (dem Gekröse) befestigt, die ihn in Position hält." },
  { n: 22, topic: "duenndarm", type: "E", front: "Darmfalten und Darmzotten vergrößern die Oberfläche des Dünndarms. Stelle mit zwei gleich langen Fäden dar, wie das funktioniert. Klebe dein Ergebnis auf und erkläre es.", back: "Klebe einen Faden schnurgerade auf. Klebe den zweiten Faden in Wellen so auf, dass er nur halb so viel Platz einnimmt (z. B. 10 cm Faden auf 5 cm Strecke).", solution: "Der gewellte Faden ist genauso lang, braucht aber nur halb so viel Platz. Genauso ist es im Dünndarm: Durch Falten und Zotten passt auf kleinem Raum eine riesige Oberfläche, über die viele Nährstoffe gleichzeitig aufgenommen werden können." },
  { n: 23, topic: "galle", type: "R", profi: true, front: "Warum scheiden Menschen, deren Bauchspeicheldrüse wegen einer Entzündung zu wenig Bauchspeichel bildet, einen Teil der Nahrungsfette unverdaut wieder aus? Begründe.", back: "Du kannst den Lerntext „Gallenblase und Bauchspeicheldrüse“ lesen.", solution: "Der Bauchspeichel enthält die wichtigsten fettspaltenden Enzyme. Fehlen sie, kann das Fett nicht in Fettsäuren und Glycerin zerlegt werden. Unzerlegtes Fett kann die Darmwand nicht aufnehmen – es wird mit dem Kot ausgeschieden." },
  { n: 24, topic: "galle", type: "E", profi: true, front: "Was bewirkt der Gallensaft im Dünndarm?", back: "Du kannst den Lerntext lesen oder das Experiment „Hilft Senf eine Bratwurst zu verdauen?“ (A11) durchführen.", solution: "Die Gallensäuren wirken als Emulgator: Sie zerteilen Fett in winzige Tröpfchen und verteilen es im wässrigen Speisebrei (Emulsion). Dadurch wird die Oberfläche des Fettes viel größer, und die fettspaltenden Enzyme können besser angreifen." },
  { n: 25, topic: "galle", type: "R", profi: true, front: "Gallseife ist ein altes Hausmittel gegen Flecken. Sie enthält Seife und Rindergalle. Erkläre, warum Gallseife Fettflecken aus Kleidung entfernen kann.", back: "Informiere dich im Lexikon über Emulgatoren.", solution: "Rindergalle enthält Gallensäuren – genau wie unser Gallensaft. Sie wirken (wie die Seife) als Emulgator: Sie lösen das Fett in feine Tröpfchen auf, die sich im Wasser verteilen und ausgewaschen werden können." },
  { n: 26, topic: "galle", type: "R", profi: true, front: "Warum hat Kot fast immer dieselbe Farbe – egal, was wir essen? Kennst du Ausnahmen?", back: "Du kannst den Lerntext „Gallenblase und Bauchspeicheldrüse“ lesen.", solution: "Die Farbe stammt vom Gallensaft: Er enthält Bilirubin, ein Abbauprodukt des roten Blutfarbstoffs. Bakterien im Dickdarm bauen es weiter ab – daraus entsteht die typische braune Farbe. Ausnahmen: Rote Bete kann den Stuhl rötlich färben, viel Spinat grünlich, Heidelbeeren oder Lakritz dunkel." },
  { n: 27, topic: "galle", type: "S", profi: true, front: "Magst du scharfe Speisen? Nimm ein paar Senfkörner in den Mund und kaue sie einige Zeit. Was passiert in deinem Mund? Notiere deine Beobachtungen.", back: "Zusatzaufgabe: Was bewirkt Senf in deinem Darm? Übertrage deine Beobachtungen aus dem Mund auf den Darm." },
  { n: 28, topic: "galle", type: "E", profi: true, front: "Im Experiment A11 wird Spülmittel statt Gallensaft verwendet. Wie könntest du überprüfen, ob Spülmittel ein geeigneter Ersatz ist? Plane ein eigenes Experiment, führe es durch und dokumentiere es.", back: "Tipp: Echten Gallensaft (Rindergalle) bekommst du eventuell in einer Metzgerei oder Hofschlachterei. Nutze den Planungsbogen in der App.", solution: "Idee: Drei Gläser mit Wasser und Öl vorbereiten – eines ohne Zusatz, eines mit Spülmittel, eines mit (gleich viel) Rindergalle. Alle gleich lange schütteln und beobachten, wie schnell sich Öl und Wasser wieder trennen. Bilden beide Zusätze eine ähnlich stabile, trübe Emulsion, ist Spülmittel ein brauchbares Modell." },
  { n: 29, topic: "dickdarm", type: "R", front: "Welche Aufgaben haben der Dickdarm und die Darmflora? Fasse sie möglichst kurz zusammen.", back: "Du kannst den Lerntext „Dickdarm“ lesen.", solution: "Dickdarm: entzieht dem Speisebrei Wasser (Kot entsteht), macht ihn mit Schleim gleitfähig, sammelt den Kot im Mastdarm bis zur Entleerung. Darmflora: zersetzt Nahrungsreste (v. a. Ballaststoffe) und schützt davor, dass sich Krankheitserreger vermehren." },
  { n: 30, topic: "dickdarm", type: "R", profi: true, front: "Was haben der Dickdarm und Biogasanlagen gemeinsam?", back: "Finde mit dem Lerntext „Dickdarm“ heraus, was die Bakterien im Dickdarm bewirken.", solution: "In beiden zersetzen Bakterien organische Reste (Pflanzenfasern, Ballaststoffe) unter Luftabschluss. Dabei entstehen Gase – in der Biogasanlage wird das Gas (v. a. Methan) zur Energiegewinnung genutzt, im Darm entweicht es als Blähung." },
  { n: 31, topic: "dickdarm", type: "R", front: "Dein Freund wurde am Blinddarm operiert. Welcher Teil des Darms wird dabei entfernt? Wie beeinflusst das seine Verdauung? Begründe.", back: "Schau dir die Abbildung des Dickdarms in der App an.", solution: "Entfernt wird meist der Wurmfortsatz – ein kleines Anhängsel am Blinddarm (dem Anfang des Dickdarms). Er ist an der Verdauung kaum beteiligt. Deshalb verändert sich die Verdauung nach der Operation praktisch nicht." },
  { n: 32, topic: "dickdarm", type: "E", profi: true, front: "Im Dickdarm wird der Speisebrei antiperistaltisch hin und her bewegt. Informiere dich im Lexikon über Antiperistaltik und erkläre sie mit einem einfachen Modell. Wofür ist diese Bewegung gut?", back: "Du brauchst einen länglichen, leicht aufgeblasenen Luftballon ODER einen langen Nylonstrumpf mit einem Tischtennisball. Zu zweit klappt es besser!", solution: "Mit den Händen drückt man den Strumpf hinter dem Ball zusammen und schiebt ihn vor – dann wieder zurück. Durch das Hin-und-Her bleibt der Speisebrei länger im Dickdarm und wird gut durchmischt. So kann der Körper mehr Wasser zurückgewinnen." },
  { n: 33, topic: "dickdarm", type: "R", profi: true, front: "Was ist Durchfall? Was ist Verstopfung? Erkläre jeweils, was dabei im Darm passiert.", back: "Du kannst im Internet recherchieren (z. B. www.bzfe.de).", solution: "Durchfall: Der Darminhalt wandert zu schnell durch den Dickdarm (z. B. durch Krankheitserreger oder Stress). Es wird zu wenig Wasser zurückgewonnen – der Stuhl ist flüssig. Verstopfung: Der Darminhalt wandert zu langsam (z. B. durch wenig Bewegung, wenig Trinken, wenig Ballaststoffe). Es wird zu viel Wasser entzogen – der Stuhl wird hart und lässt sich schwer ausscheiden." },
  { n: 34, topic: "dickdarm", type: "R", profi: true, front: "Was hilft bei Durchfall, was bei Verstopfung? Sammle verschiedene Hausmittel (keine Medikamente). Erkläre und bewerte je eines.", back: "Du kannst mindestens fünf Leute befragen oder eine Expertin/einen Experten (z. B. Ärztin, Ernährungsberater) interviewen.", solution: "Durchfall: viel trinken (Wasser, Tee) und Salz ersetzen (z. B. Salzstangen, Brühe), leicht verdauliche Kost wie Zwieback, geriebener Apfel oder Banane. Verstopfung: viel trinken, ballaststoffreich essen (Vollkorn, Gemüse, Obst, Trockenpflaumen), sich bewegen. Halten die Beschwerden länger an: ärztlich abklären lassen!" },
  { n: 35, topic: "hunger", type: "S", front: "Wie fühlt es sich an, wenn du Hunger hast? Wie fühlt es sich an, wenn du satt bist? Beschreibe.", back: "Beantworte die erste Frage, wenn du hungrig bist. Iss dann genug und beantworte die zweite Frage." },
  { n: 36, topic: "hunger", type: "S", front: "Wie fühlt sich Durst an? Wie fühlt es sich an, wenn du keinen Durst mehr hast? Beschreibe.", back: "Warte mit der ersten Frage, bis du durstig bist. Trinke dann genug und beantworte die zweite Frage." },
  { n: 37, topic: "hunger", type: "S", front: "Welches Frühstück hält dich mindestens drei Stunden satt? Probiere an verschiedenen Tagen verschiedene Frühstücke aus. Notiere und begründe deine Beobachtungen.", back: "Zusatzaufgabe: Waren alle Testtage gleich? Was außer dem Frühstück beeinflusst, wie lange du satt bleibst?" },
  { n: 38, topic: "hunger", type: "S", profi: true, front: "Ein kleiner Apfel hat etwa genauso viele Kalorien wie 200 g ungesüßtes Apfelmus. Was sättigt besser? Probiere es aus und notiere deine Erfahrungen.", back: "Zusatzaufgabe: Erkläre deine Beobachtungen mit dem Begriff „Magendehnung“.", solution: "Den meisten Menschen macht der ganze Apfel satter: Er muss gekaut werden, man isst ihn langsamer (die Sättigung hat Zeit) und seine feste Struktur mit Schale und Ballaststoffen dehnt den Magen stärker. Apfelmus ist schnell gegessen und passiert den Magen rascher." },
  { n: 39, topic: "hunger", type: "S", profi: true, front: "Welche äußeren Reize steuern deine Nahrungsaufnahme? Fertige eine Mindmap an.", back: "Denke an Traditionen in deiner Familie oder Religion, an Gewohnheiten im Freundeskreis oder in der Schule." },
  { n: 40, topic: "hunger", type: "S", front: "Beeinflusst das Besteck, wie viel du isst? Iss dein nächstes Mittagessen mit einem Teelöffel und einer Kuchengabel. Isst du mehr oder weniger als sonst?", back: "Zusatzaufgabe: Was beeinflusst sonst noch, wie viel du isst? Notiere deine Ideen." }
];

/* Experimente / Arbeitsblätter (interaktiv aufbereitet) */
const EXPERIMENTS = {
  A5: {
    topic: "weg",
    title: "Was passiert mit dem Essen in deinem Körper?",
    intro: "Mit einem einfachen Modell spielst du nach, was nach dem Schlucken mit dem Essen passiert.",
    material: ["1 großes Stück Knäckebrot", "1 TL Butter", "Messer und Teller", "1 kleine, dichte, durchsichtige Tüte", "2 EL Essig", "1 Tropfen Spülmittel", "1 Kaffeefiltertüte und 1 Tasse", "1 Mulltuch und 1 Schüssel"],
    steps: [
      { do: "Bestreiche das Knäckebrot mit Butter. Kaue es 30-mal. Schlucke es nicht, sondern spucke es in die Tüte.", organ: "Mund", explain: "Die Zähne zerkleinern das Essen, Speichel macht es feucht. Die Amylase beginnt, Stärke zu spalten." },
      { do: "Gib zwei Esslöffel Essig in die Tüte, halte sie zu und knete alles gut durch.", organ: "Magen", explain: "Der Essig steht für den sauren Magensaft. Der Magen knetet und durchmischt den Brei." },
      { do: "Gib einen Tropfen Spülmittel dazu, halte die Tüte zu und mische vorsichtig.", organ: "Dünndarm (Gallensaft)", explain: "Das Spülmittel spielt den Gallensaft: Es zerteilt das Fett der Butter in feine Tröpfchen (Emulsion)." },
      { do: "Gieße den Brei in eine Filtertüte über einer Tasse und warte zwei Minuten. Was bleibt im Filter, was sammelt sich in der Tasse?", organ: "Dünndarm (Aufnahme)", explain: "Was durch den Filter läuft, steht für die Nährstoffe und das Wasser, die durch die Darmwand ins Blut gelangen." },
      { do: "Gib den Filter mit Brei in ein Mulltuch und drücke das Wasser über einer Schüssel heraus. Wie sieht der Brei jetzt aus?", organ: "Dickdarm", explain: "Der Dickdarm entzieht dem Rest Wasser. Übrig bleibt ein fester, eingedickter Brei – der Kot." }
    ],
    reflect: "Welche Organe deiner Verdauung hast du selbst schon einmal gespürt oder gehört? Beschreibe."
  },
  A6: {
    topic: "mund",
    title: "Warum kann man beim Schlucken nicht atmen?",
    intro: "Im Original baut ihr ein Pappmodell. Hier kannst du das Schlucken in der Animation Schritt für Schritt steuern.",
    interactive: "swallow",
    explanation: "Beim Schlucken drückt die Zunge den Bissen nach hinten. Das Gaumensegel hebt sich und verschließt den Weg zur Nase. Der Kehldeckel klappt über den Eingang der Luftröhre. Solange der Bissen vorbeigleitet, ist der Luftweg also verschlossen – deshalb kann man nicht gleichzeitig schlucken und atmen. „Verschlucken“ bedeutet: Etwas ist doch in die Luftröhre geraten, und der Körper hustet es wieder heraus."
  },
  A7: {
    topic: "mund",
    title: "Warum läuft dir das Wasser im Mund zusammen?",
    intro: "Du siehst oder riechst etwas Leckeres – und schon „läuft dir das Wasser im Mund zusammen“. Warum?",
    material: ["2 Bissen weiches Brot"],
    hypothesis: "Warum sammelt sich Speichel im Mund? Wofür wird er gebraucht? Notiere deine Vermutung.",
    steps: [
      { do: "Nimm einen Bissen Brot in den Mund und schlucke ihn ohne zu kauen hinunter." },
      { do: "Nimm einen zweiten Bissen. Kaue ihn 30-mal, bevor du ihn hinunterschluckst." }
    ],
    observe: "Was hat sich durch das Kauen verändert?",
    explanation: "Ungekaut ist der Bissen trocken und lässt sich schwer schlucken. Beim Kauen wird das Brot zerkleinert und mit Speichel vermischt – es wird weich, feucht und gleitfähig und rutscht leicht durch die Speiseröhre. Schon beim Sehen oder Riechen von Essen bereitet sich der Körper vor und bildet vorsorglich Speichel.",
    reflect: "Wie oft kaust du normalerweise ein Stück Brot? Zähl beim nächsten Essen mit!"
  },
  A8: {
    topic: "mund",
    title: "Was bewirkt das Enzym Amylase?",
    profi: true,
    intro: "Speichel enthält das Enzym Amylase. Teil 1 kannst du überall machen, Teil 2 nur im Chemieraum.",
    material: ["1 großes Stück Weizenmischbrot", "für Teil 2: 2 Reagenzgläser + Ständer, 4 ml Speichel, Jodtinktur (Iod-Kaliumiodid-Lösung), Stärkelösung, Zuckerlösung"],
    hypothesis: "Kaue ein Stück Brot mindestens zwei Minuten, ohne es zu schlucken. Wie schmeckt es am Anfang, wie am Ende? Verwandelt die Amylase Stärke in Malzzucker – oder umgekehrt?",
    steps: [
      { do: "Teil 1: Brot mindestens zwei Minuten kauen und auf den Geschmack achten." },
      { do: "Teil 2: Reagenzglas 1 halb mit Stärkelösung, Reagenzglas 2 halb mit Zuckerlösung füllen. In beide 2–3 Tropfen Jodtinktur geben und vorsichtig schütteln. Achtung: Jod färbt stark!" },
      { do: "Speichel gleichmäßig auf beide Gläser verteilen, vorsichtig schütteln und nach 0, 3 und 15 Minuten beobachten (gegen das Licht halten)." }
    ],
    observe: "Wie verändert sich die Farbe in Glas 1 und Glas 2?",
    explanation: "Das Brot schmeckt nach einiger Zeit süßlich. Die Amylase spaltet also Stärke in Malzzucker (Pfeil: Stärke → Malzzucker). Im Reagenzglas zeigt Jod Stärke durch eine blau-schwarze Farbe an. Glas 1 (Stärke) färbt sich zunächst blau-schwarz und wird mit Speichel nach und nach heller, weil die Stärke abgebaut wird. Glas 2 (Zucker) bleibt gelb-braun, denn hier ist keine Stärke. Da die Amylase einige Minuten braucht, wirkt sie nur gut, wenn man gründlich kaut.",
    reflect: "Wie lange kaust du normalerweise ein Stück Brot? Hat die Amylase in dieser Zeit eine Chance?"
  },
  A9: {
    topic: "magen",
    title: "Was passiert mit einem Gummibärchen im Magen?",
    profi: true,
    intro: "Im Magen trifft ein Gummibärchen auf das Enzym Pepsin, das Proteine spaltet. In Kiwis steckt ein ähnliches Enzym – damit kannst du den Vorgang nachstellen.",
    material: ["3 rote Gummibärchen", "1 halbe grüne Kiwi", "2 kleine, dichte, durchsichtige Tüten + wasserfester Stift", "Esslöffel, kleine Schüssel, Gabel", "1 EL Leitungswasser", "2 kleine weiße Teller (für den nächsten Tag)"],
    hypothesis: "Wie wird sich das Gummibärchen verändern, wenn du Kiwi dazugibst? Begründe.",
    steps: [
      { do: "Beschrifte die Tüten mit 1 und 2. Zerdrücke das Fruchtfleisch der halben Kiwi in der Schüssel zu Mus." },
      { do: "Gib in jede Tüte ein Gummibärchen. Das dritte hebst du zum Vergleich auf." },
      { do: "Tüte 1: 2 EL Kiwimus dazu. Tüte 2: 2 EL Wasser dazu (Blindprobe ohne Enzym)." },
      { do: "Verknote die Tüten, knete sie 15 Sekunden durch und lass sie über Nacht stehen." },
      { do: "Schütte am nächsten Tag beide Tüten auf je einen Teller und lege das Vergleichsbärchen daneben." }
    ],
    observe: "Wie haben sich die Gummibärchen verändert? Beschreibe oder fotografiere.",
    explanation: "Gummibärchen bestehen größtenteils aus Gelatine – einem Protein. Das Enzym der Kiwi spaltet die Proteinketten, so wie Pepsin im Magen: Das Bärchen in Tüte 1 wird weich, verliert seine Form oder löst sich teilweise auf. Das Bärchen mit Wasser quillt nur etwas auf, behält aber seine Form. Die Blindprobe zeigt: Die Veränderung kommt vom Enzym, nicht von der Flüssigkeit.",
    reflect: "Wie kannst du deinem Magen die Arbeit erleichtern? (Tipp: Je kleiner die Stücke, desto besser können Enzyme angreifen – also gründlich kauen!)"
  },
  A10: {
    topic: "duenndarm",
    title: "Wie sieht der Dünndarm von innen aus?",
    intro: "Der Dünndarm soll möglichst viele Nährstoffe und viel Wasser aufnehmen. Dafür hat er eine besondere innere Oberfläche.",
    material: ["1 Lupe", "1 helles Geschirrtuch", "1 gleich großes helles Frotteetuch", "Rote-Bete-Saft, 2 Teelöffel", "2 kleine Teller"],
    hypothesis: "Welches Tuch ähnelt der Dünndarmwand mehr – Geschirrtuch oder Frotteetuch? Begründe.",
    steps: [
      { do: "Betrachte beide Tücher unter der Lupe und zeichne die Strukturen ab." },
      { do: "Lege jedes Tuch mittig auf einen Teller. Lass jeweils einen Teelöffel Rote-Bete-Saft langsam in die Mitte tropfen." },
      { do: "Vergleiche nach fünf Minuten die beiden Flecken." }
    ],
    observe: "Worin unterscheiden sich die Flecken? Welches Tuch nimmt mehr Flüssigkeit auf?",
    explanation: "Das Frotteetuch ähnelt der Dünndarmwand: Seine vielen kleinen Schlaufen entsprechen den Darmzotten. Sie vergrößern die Oberfläche enorm. Deshalb saugt das Frotteetuch den Saft schneller auf, und der Fleck bleibt kleiner. Genauso kann der Dünndarm über seine Falten und Zotten auf kleinem Raum sehr viel Flüssigkeit und Nährstoffe aufnehmen.",
    reflect: "Der Darm holt sich täglich bis zu acht Liter Flüssigkeit zurück; Jugendliche müssen nur etwa 1,5 Liter trinken. Wie viel hast du gestern getrunken?"
  },
  A11: {
    topic: "galle",
    title: "Hilft Senf eine Bratwurst zu verdauen?",
    profi: true,
    intro: "Wenn du Senf isst, bildet deine Leber mehr Gallensaft. Wird die Bratwurst mit Senf deshalb besser verdaut?",
    material: ["2 Schraubgläser mit Deckel", "Wasser (am besten destilliert)", "Speiseöl", "Spülmittel (als Ersatz für Gallensaft)", "Uhr"],
    hypothesis: "Wird eine Bratwurst mit Senf besser verdaut als ohne? Begründe deine Vermutung.",
    steps: [
      { do: "Fülle beide Gläser zur Hälfte mit Wasser. Gieße vorsichtig Öl dazu, bis eine fingerbreite Schicht entsteht." },
      { do: "Gib in ein Glas 1–2 Tropfen Spülmittel und markiere es." },
      { do: "Verschließe beide Gläser, schüttle sie kräftig und lass sie stehen." },
      { do: "Beobachte direkt nach dem Schütteln und nach einer Minute." }
    ],
    observe: "Was passiert in den beiden Gläsern direkt nach dem Schütteln – und nach einer Minute?",
    explanation: "Ohne Spülmittel trennen sich Öl und Wasser schnell wieder; das Öl schwimmt oben. Mit Spülmittel entsteht eine trübe Mischung, in der das Öl in feinen Tröpfchen verteilt bleibt (Emulsion). So wirkt auch der Gallensaft: Er emulgiert das Fett, die Oberfläche wird riesig, und Enzyme können das Fett leichter spalten. Senf regt die Gallenbildung an und kann die Fettverdauung also etwas erleichtern – eine fettige Bratwurst liegt aber trotzdem schwer im Magen.",
    reflect: "Du bist in zwei Stunden zum Sport verabredet und holst dir vorher in der Stadt etwas zu essen. Was wählst du, das dir schmeckt und dich fit hält?"
  },
  A12: {
    topic: "dickdarm",
    title: "Wo stecken die Ballaststoffe?",
    intro: "Ein Freund leidet seit Wochen unter Verstopfung. Der Arzt rät: mehr bewegen, viel trinken und ballaststoffreich essen. Hilf ihm!",
    interactive: "ballast",
    explanation: "Ballaststoffe quellen mit Flüssigkeit stark auf, machen den Darminhalt weicher und voluminöser und sorgen dafür, dass er schneller weitertransportiert wird – das schützt vor Verstopfung. Sie kommen nur in pflanzlichen Lebensmitteln vor: Obst, Gemüse, Hülsenfrüchte, Kartoffeln und vor allem Vollkorngetreide. Fleisch, Fisch, Eier, Milchprodukte, Fette, Süßigkeiten und Getränke enthalten kaum Ballaststoffe.",
    reflect: "Welche ballaststoffreichen Lebensmittel schmecken dir besonders gut? Welches Gericht könntest du daraus kochen?"
  },
  A13: {
    topic: "hunger",
    title: "Hunger oder Appetit?",
    intro: "Lies die Geschichten und entscheide spontan: Isst die Person aus Hunger, aus Appetit oder aus anderen Gründen?",
    interactive: "hunger",
    explanation: "Hunger ist ein inneres Signal: Der Körper braucht Energie oder Nährstoffe, der Magen ist leer – man wird unkonzentriert, der Magen knurrt, und fast jedes Essen ist willkommen. Appetit ist die Lust auf etwas Bestimmtes, ausgelöst durch äußere Reize wie Duft, Anblick oder Werbung – auch dann, wenn man eigentlich satt ist."
  },
  A14: {
    topic: "hunger",
    title: "Wie gut kannst du schätzen?",
    intro: "Teste dich selbst: Lass dich nicht von optischen Täuschungen hereinlegen!",
    interactive: "illusion",
    explanation: "Unsere Augen lassen sich leicht täuschen. Auf einem großen Teller wirkt dieselbe Portion kleiner (Delboeuf-Täuschung) – man nimmt sich mehr. Breite Gläser fassen mehr, als sie aussehen. Und je größer die Auswahl, desto mehr essen wir. Eine Mensa könnte das nutzen: kleine Gläser und Dessertschälchen, große Teller für Salat und Nudeln, Salat gut sichtbar an den Anfang des Büfetts.",
    reflect: "Ist es dir schon einmal passiert, dass du wegen äußerer Reize mehr oder weniger gegessen hast, als dein Körper gebraucht hätte?"
  }
};

/* Daten für Mini-Spiele */
const SYLLABLE_WORDS = [
  { word: "MUNDHÖHLE", parts: ["MUND", "HÖH", "LE"] },
  { word: "SPEISERÖHRE", parts: ["SPEI", "SE", "RÖH", "RE"] },
  { word: "MAGEN", parts: ["MA", "GEN"] },
  { word: "GALLENBLASE", parts: ["GAL", "LEN", "BLA", "SE"] },
  { word: "BAUCHSPEICHELDRÜSE", parts: ["BAUCH", "SPEI", "CHEL", "DRÜ", "SE"] },
  { word: "DÜNNDARM", parts: ["DÜNN", "DARM"] },
  { word: "DICKDARM", parts: ["DICK", "DARM"] }
];

const HUNGER_STORIES = [
  { name: "Laura", text: "Auf dem Schulweg kommt Laura an einer Bäckerei vorbei, in der gerade Croissants aus dem Ofen kommen. Sie hat eben erst gefrühstückt, aber weil ihr das Wasser im Mund zusammenläuft, kauft sie sich eins.", answer: "Appetit", why: "Laura hat gerade gefrühstückt. Der Duft (ein äußerer Reiz) weckt Lust auf das Croissant – das ist Appetit." },
  { name: "Tim", text: "Tim hat verschlafen und nur schnell ein Glas Milch getrunken. In der zweiten Stunde knurrt sein Magen, er ist unkonzentriert. Wasser hilft nicht. In der Pause kauft er sich ein belegtes Brötchen und einen Apfel.", answer: "Hunger", why: "Magenknurren, Konzentrationsprobleme und ein leerer Magen sind innere Signale: Tims Körper braucht Energie – echter Hunger." },
  { name: "Sara", text: "Sara sitzt nach dem Mittagessen vor dem Fernseher. In der Werbepause bekommt sie Lust auf Schokolade und läuft extra in den Keller, obwohl es in der Küche Obst und Salzstangen gibt.", answer: "Appetit", why: "Sara ist satt. Die Werbung löst Lust auf etwas ganz Bestimmtes aus – Appetit (vielleicht auch Langeweile)." },
  { name: "Marco", text: "Marco war an einem heißen Sommertag mit dem Fahrrad unterwegs. Seine Kehle ist trocken, er braucht dringend etwas Erfrischendes. Im Tiefkühlfach findet er Zitroneneis und isst es direkt aus der Packung.", answer: "andere Gründe", why: "Marco hat vor allem Durst und will sich abkühlen. Besser wäre ein großes Glas Wasser gewesen." }
];

const FOODS = [
  { name: "Vollkornbrot", icon: "🍞", fiber: true },
  { name: "Linsen", icon: "🫘", fiber: true },
  { name: "Apfel mit Schale", icon: "🍎", fiber: true },
  { name: "Möhren", icon: "🥕", fiber: true },
  { name: "Haferflocken", icon: "🥣", fiber: true },
  { name: "Brokkoli", icon: "🥦", fiber: true },
  { name: "Himbeeren", icon: "🫐", fiber: true },
  { name: "Kartoffeln", icon: "🥔", fiber: true },
  { name: "Käse", icon: "🧀", fiber: false },
  { name: "Hähnchen", icon: "🍗", fiber: false },
  { name: "Ei", icon: "🥚", fiber: false },
  { name: "Milch", icon: "🥛", fiber: false },
  { name: "Gummibärchen", icon: "🍬", fiber: false },
  { name: "Apfelsaft", icon: "🧃", fiber: false },
  { name: "Butter", icon: "🧈", fiber: false },
  { name: "Fisch", icon: "🐟", fiber: false }
];

const TRAVEL_CHOICES = [
  { q: "Vollkornbrot oder Weißbrot?", options: ["Vollkornbrot", "Weißbrot"], answer: 0, why: "Im Vollkornbrot stecken die ballaststoffreichen Randschichten des Getreidekorns." },
  { q: "Geschälte oder ungeschälte Birne?", options: ["geschält", "ungeschält"], answer: 1, why: "Viele Ballaststoffe sitzen in und direkt unter der Schale." },
  { q: "Apfelsaft oder frischer Apfel und ein Glas Wasser?", options: ["Apfelsaft", "Apfel + Wasser"], answer: 1, why: "Im Saft fehlen die Ballaststoffe fast völlig. Ballaststoffe brauchen außerdem Flüssigkeit, um aufzuquellen." }
];

/* Quizfragen. c = Index der richtigen Antwort. */
const QUIZ = [
  // Weg der Nahrung
  { t: "weg", q: "In welcher Reihenfolge durchläuft die Nahrung den Körper?", a: ["Mund – Magen – Speiseröhre – Dünndarm – Dickdarm", "Mund – Speiseröhre – Magen – Dünndarm – Dickdarm", "Mund – Speiseröhre – Magen – Dickdarm – Dünndarm", "Mund – Speiseröhre – Dünndarm – Magen – Dickdarm"], c: 1, e: "Mund → Speiseröhre → Magen → Dünndarm → Dickdarm → Mastdarm." },
  { t: "weg", q: "Was bedeutet „Verdauung“?", a: ["Nahrung wird im Magen gespeichert", "Nahrung wird in kleinste Bausteine zerlegt, die der Körper aufnehmen kann", "Nahrung wird direkt ins Blut gegeben", "Nahrung wird zu Kot umgewandelt"], c: 1, e: "Nur kleinste Bausteine können durch die Darmwand ins Blut gelangen." },
  { t: "weg", q: "Bei welcher künstlichen Ernährung wird die gesamte Verdauung umgangen?", a: ["enteral (Schlauch in den Magen)", "parenteral (direkt in die Vene)", "bei beiden", "bei keiner"], c: 1, e: "Parenteral gelangen fertige Bausteine direkt ins Blut." },
  { t: "weg", q: "Welche Organe gehören zum Verdauungssystem, obwohl die Nahrung nicht durch sie hindurchwandert?", a: ["Lunge und Herz", "Leber und Bauchspeicheldrüse", "Nieren und Blase", "Milz und Herz"], c: 1, e: "Leber (mit Gallenblase) und Bauchspeicheldrüse geben ihre Säfte in den Dünndarm ab." },
  { t: "weg", q: "Was regt die Darmtätigkeit an?", a: ["langes Sitzen", "Bewegung", "wenig trinken", "Weißbrot"], c: 1, e: "Bewegung bringt den Darm in Schwung." },
  // Mund
  { t: "mund", q: "Welches Enzym im Speichel beginnt die Verdauung?", a: ["Pepsin", "Amylase", "Insulin", "Bilirubin"], c: 1, e: "Die Amylase spaltet Stärke in Zweifachzucker (Malzzucker)." },
  { t: "mund", q: "Warum schmeckt Brot süßlich, wenn man es lange kaut?", a: ["Speichel enthält Zucker", "Amylase spaltet Stärke in Malzzucker", "Die Zunge wird müde", "Brot enthält Honig"], c: 1, e: "Aus Stärke entsteht Malzzucker – und der schmeckt süß." },
  { t: "mund", q: "Was verhindert, dass beim Schlucken Essen in die Luftröhre gelangt?", a: ["das Zäpfchen", "der Kehldeckel", "die Zunge", "der Magenpförtner"], c: 1, e: "Der Kehldeckel klappt über den Eingang der Luftröhre." },
  { t: "mund", q: "Wie viel Speichel bildet ein Mensch etwa pro Tag?", a: ["0,1 Liter", "1,5 Liter", "5 Liter", "10 Liter"], c: 1, e: "Etwa 1,5 Liter – ungefähr eine große Flasche." },
  { t: "mund", q: "Warum kann man sogar im Liegen schlucken?", a: ["Wegen der Schwerkraft", "Die Speiseröhre transportiert aktiv mit Muskelwellen (Peristaltik)", "Weil der Magen ansaugt", "Das geht gar nicht"], c: 1, e: "Peristaltik schiebt den Bissen – egal wie herum du liegst." },
  { t: "mund", q: "Welche Geschmacksrichtungen nimmt die Zunge wahr?", a: ["nur süß und salzig", "süß, sauer, bitter, salzig, umami", "alle Aromen", "süß, sauer, scharf"], c: 1, e: "Scharf ist ein Schmerzreiz, alle anderen Aromen riecht die Nase." },
  { t: "mund", q: "Warum ist gründliches Kauen wichtig?", a: ["Es vergrößert die Oberfläche der Nahrung, Enzyme greifen besser an", "Es macht das Essen kälter", "Es macht das Essen saurer", "Es ist eigentlich unwichtig"], c: 0, e: "Kleine Stücke = große Oberfläche = bessere Verdauung." },
  // Magen
  { t: "magen", q: "Welche Säure enthält der Magensaft?", a: ["Essigsäure", "Zitronensäure", "Salzsäure", "Milchsäure"], c: 2, e: "Salzsäure – sie tötet Bakterien und entfaltet Proteine." },
  { t: "magen", q: "Welche Nährstoffe beginnt der Magen zu verdauen?", a: ["Fette", "Proteine (Eiweiße)", "Ballaststoffe", "Vitamine"], c: 1, e: "Das Enzym Pepsin spaltet Proteine." },
  { t: "magen", q: "Warum verdaut sich der Magen nicht selbst?", a: ["Er ist aus Knochen", "Eine Schleimschicht schützt die Magenwand", "Der Magensaft ist neutral", "Er verdaut sich doch"], c: 1, e: "Die Magenschleimhaut bildet eine schützende Schleimschicht." },
  { t: "magen", q: "Was ist der Magenpförtner?", a: ["Ein Schließmuskel am Magenausgang", "Ein Enzym", "Eine Bakterienart", "Der Eingang zum Magen"], c: 0, e: "Er gibt den Speisebrei portionsweise in den Dünndarm ab." },
  { t: "magen", q: "Wie entsteht Sodbrennen?", a: ["Zu viel Speichel", "Saurer Magensaft gelangt in die Speiseröhre", "Der Dünndarm ist entzündet", "Man hat zu viel Wasser getrunken"], c: 1, e: "Die Speiseröhre hat keine schützende Schleimschicht wie der Magen." },
  { t: "magen", q: "Welches Frühstück eignet sich am besten vor einer Prüfung?", a: ["Nur eine Tasse Tee", "Müsli mit Obst und Milch", "Rührei mit viel Speck", "Gar nichts"], c: 1, e: "Es hält lange satt und liegt nicht schwer im Magen." },
  { t: "magen", q: "Warum zerfällt ein Gummibärchen in Kiwimus?", a: ["Wegen des Zuckers", "Ein Kiwi-Enzym spaltet das Protein Gelatine – wie Pepsin", "Wegen der Kälte", "Wegen der grünen Farbe"], c: 1, e: "Gelatine ist ein Protein, das Kiwi-Enzym spaltet es." },
  // Dünndarm
  { t: "duenndarm", q: "Wie lang ist der Dünndarm mindestens?", a: ["30 Zentimeter", "1 Meter", "3 Meter", "30 Meter"], c: 2, e: "Mindestens drei Meter – er liegt in vielen Schlingen." },
  { t: "duenndarm", q: "Was vergrößert die innere Oberfläche des Dünndarms?", a: ["Darmfalten und Darmzotten", "Zähne", "Bakterien", "Schleim"], c: 0, e: "Falten und fingerförmige Zotten machen die Fläche riesig." },
  { t: "duenndarm", q: "Was bedeutet „Resorption“?", a: ["Ausscheidung von Kot", "Aufnahme von Stoffen durch die Darmwand", "Spaltung von Fett", "Bildung von Speichel"], c: 1, e: "Bausteine gelangen durch die Darmwand ins Blut oder in die Lymphe." },
  { t: "duenndarm", q: "Welches Tuch ist ein gutes Modell für die Dünndarmwand?", a: ["Geschirrtuch", "Frotteetuch", "Plastiktüte", "Alufolie"], c: 1, e: "Die Schlaufen des Frotteetuchs entsprechen den Darmzotten." },
  { t: "duenndarm", q: "Wie heißen die drei Abschnitte des Dünndarms?", a: ["Blinddarm, Grimmdarm, Mastdarm", "Zwölffingerdarm, Leerdarm, Krummdarm", "Magenmund, Magenpförtner, Magenwand", "Leber, Galle, Bauchspeicheldrüse"], c: 1, e: "Zwölffingerdarm → Leerdarm → Krummdarm." },
  { t: "duenndarm", q: "In welche kleinsten Bausteine werden Proteine zerlegt?", a: ["Fettsäuren", "Einfachzucker", "Aminosäuren", "Ballaststoffe"], c: 2, e: "Proteine bestehen aus Aminosäuren." },
  { t: "duenndarm", q: "Wie viel Flüssigkeit nimmt der Darm täglich bis zu auf?", a: ["0,5 Liter", "2 Liter", "8 Liter", "20 Liter"], c: 2, e: "Bis zu acht Liter – aus Getränken und Verdauungssäften." },
  // Galle & Bauchspeicheldrüse
  { t: "galle", q: "Welches Organ produziert den Gallensaft?", a: ["Gallenblase", "Leber", "Magen", "Bauchspeicheldrüse"], c: 1, e: "Die Leber produziert ihn, die Gallenblase speichert einen Teil." },
  { t: "galle", q: "Was bewirkt Gallensaft?", a: ["Er spaltet Stärke", "Er emulgiert Fett in feine Tröpfchen", "Er tötet Bakterien", "Er senkt den Blutzucker"], c: 1, e: "Wie Spülmittel zerteilt er Fett – Enzyme können dann besser angreifen." },
  { t: "galle", q: "Was ersetzt im Experiment A11 den Gallensaft?", a: ["Essig", "Spülmittel", "Salz", "Zucker"], c: 1, e: "Spülmittel ist ebenfalls ein Emulgator." },
  { t: "galle", q: "Welches Hormon bildet die Bauchspeicheldrüse?", a: ["Adrenalin", "Insulin", "Pepsin", "Amylase"], c: 1, e: "Insulin senkt den Blutzuckerspiegel." },
  { t: "galle", q: "Warum verdaut sich die Bauchspeicheldrüse nicht selbst?", a: ["Sie bildet ihre Enzyme als inaktive Vorstufen", "Sie hat Zähne", "Sie bildet gar keine Enzyme", "Sie ist mit Fett überzogen"], c: 0, e: "Aktiviert werden die Enzyme erst im Dünndarm." },
  { t: "galle", q: "Woher stammt die braune Farbe des Kots?", a: ["Von der Schokolade", "Vom Bilirubin aus dem Gallensaft", "Vom Magensaft", "Von den Ballaststoffen"], c: 1, e: "Bakterien bauen Bilirubin (aus dem roten Blutfarbstoff) weiter ab." },
  { t: "galle", q: "Was macht der Bauchspeichel mit dem sauren Speisebrei?", a: ["Er macht ihn noch saurer", "Er neutralisiert ihn", "Er macht ihn fester", "Nichts"], c: 1, e: "Neutralisieren = die Säure ausgleichen." },
  // Dickdarm
  { t: "dickdarm", q: "Was ist die Hauptaufgabe des Dickdarms?", a: ["Proteine spalten", "Wasser aus dem Speisebrei zurückgewinnen", "Insulin bilden", "Stärke spalten"], c: 1, e: "Der Brei wird eingedickt – so entsteht Kot." },
  { t: "dickdarm", q: "Wie nennt man die Bakterien im Dickdarm?", a: ["Darmzotten", "Darmflora (Mikrobiota)", "Enzyme", "Lymphe"], c: 1, e: "Sie zersetzen Reste und schützen vor Krankheitserregern." },
  { t: "dickdarm", q: "Was ist Antiperistaltik?", a: ["Bewegung gegen die Hauptrichtung – hin und her", "Erbrechen", "Schlucken", "Darmlähmung"], c: 0, e: "So bleibt der Brei länger im Dickdarm, mehr Wasser wird zurückgewonnen." },
  { t: "dickdarm", q: "Was passiert bei Durchfall?", a: ["Der Brei wandert zu langsam, zu viel Wasser wird entzogen", "Der Brei wandert zu schnell, zu wenig Wasser wird entzogen", "Der Magen ist leer", "Die Leber arbeitet nicht"], c: 1, e: "Bei Verstopfung ist es genau umgekehrt." },
  { t: "dickdarm", q: "Wo kommen Ballaststoffe vor?", a: ["Nur in tierischen Lebensmitteln", "Nur in pflanzlichen Lebensmitteln", "Vor allem in Getränken", "In Süßigkeiten"], c: 1, e: "Obst, Gemüse, Hülsenfrüchte, Kartoffeln, Vollkorn." },
  { t: "dickdarm", q: "Was wird bei einer „Blinddarm-OP“ meist entfernt?", a: ["Der ganze Dickdarm", "Der Wurmfortsatz", "Der Mastdarm", "Der Magen"], c: 1, e: "Der kleine Wurmfortsatz am Blinddarm." },
  { t: "dickdarm", q: "Was hilft gegen Verstopfung?", a: ["Weißbrot und Pudding", "Viel trinken, Ballaststoffe, Bewegung", "Wenig trinken", "Viel sitzen"], c: 1, e: "Ballaststoffe quellen mit Flüssigkeit auf, Bewegung regt den Darm an." },
  // Hunger
  { t: "hunger", q: "Nach wie vielen Minuten stellt sich das erste Sättigungsgefühl ein?", a: ["nach 1–2 Minuten", "nach 15–20 Minuten", "nach 2 Stunden", "sofort"], c: 1, e: "Wer langsam isst, merkt rechtzeitig, wann er satt ist." },
  { t: "hunger", q: "Was ist Appetit?", a: ["Ein leerer Magen", "Lust auf etwas Bestimmtes, ausgelöst z. B. durch Duft oder Werbung", "Durst", "Ein Enzym"], c: 1, e: "Hunger ist ein inneres Signal, Appetit wird oft von außen ausgelöst." },
  { t: "hunger", q: "Was misst der Körper, um Sättigung festzustellen?", a: ["Die Dehnung der Magenwand", "Die Länge des Darms", "Die Zahl der Zähne", "Die Körpertemperatur"], c: 0, e: "Außerdem messen Darm und Leber den Nährstoffgehalt." },
  { t: "hunger", q: "Welches Organ empfängt die Sättigungssignale?", a: ["das Herz", "das Gehirn", "die Lunge", "die Niere"], c: 1, e: "Magen, Darm und Leber senden Signale ans Gehirn." },
  { t: "hunger", q: "Was sättigt besonders lange?", a: ["Limonade", "Gummibärchen", "Vollkornbrot mit Käse", "Apfelsaft"], c: 2, e: "Langkettige Kohlenhydrate, Ballaststoffe und Proteine sättigen lange." },
  { t: "hunger", q: "Warum isst man vor dem Handy oft mehr als nötig?", a: ["Das Handy macht hungrig", "Man überhört die Sättigungssignale", "Das Essen schmeckt besser", "Man kaut zu gründlich"], c: 1, e: "Ablenkung lässt uns die Signale des Körpers leicht übersehen." },
  { t: "hunger", q: "Dieselbe Portion auf einem großen Teller wirkt …", a: ["größer", "kleiner", "genau gleich", "bunter"], c: 1, e: "Das ist die Delboeuf-Täuschung." },
  { t: "hunger", q: "Welche Faktoren beeinflussen unser Essen? Wähle die vollständigste Antwort.", a: ["Nur Hunger", "Innere Signale, äußere Reize und bewusste Entscheidungen", "Nur Werbung", "Nur die Uhrzeit"], c: 1, e: "Alle drei spielen zusammen." }
];

/* Lexikon (neu formuliert) */
const LEXIKON = {
  "Aminosäuren": "Die kleinsten Bausteine der Proteine (Eiweiße). Der Körper braucht sie als lebenswichtige „Baustoffe“.",
  "Amylase": "Verdauungsenzym im Speichel (und im Bauchspeichel), das Stärke in Zweifachzucker (Malzzucker) zerlegt.",
  "Antiperistaltik": "Wellenartige Bewegung der Darmwand entgegen der Hauptrichtung. Der Darminhalt wird hin und her geschoben, gut durchmischt, und mehr Wasser kann zurückgewonnen werden.",
  "Ballaststoffe": "Stoffe aus pflanzlichen Lebensmitteln, die im Magen und Dünndarm nicht verdaut werden. Sie quellen mit Flüssigkeit stark auf, dehnen den Magen (machen satt) und sorgen für einen zügigen Transport im Darm – das schützt vor Verstopfung. Vorkommen: Schale und Fruchtfleisch von Obst und Gemüse, Vollkorngetreide, Hülsenfrüchte.",
  "Bilirubin": "Gelber Farbstoff im Gallensaft. Er entsteht beim Abbau des roten Blutfarbstoffs. Bakterien im Dickdarm bauen ihn weiter ab – dadurch wird der Kot braun.",
  "Darmflora": "Alle Bakterien, die im letzten Teil des Dünndarms und im Dickdarm leben (auch Mikrobiota genannt). Sie zersetzen Nahrungsreste und erschweren es Krankheitserregern, in den Körper einzudringen.",
  "Darmzotten": "Fingerförmige Ausstülpungen der Dünndarmschleimhaut. Sie vergrößern die Oberfläche, damit möglichst viele Nährstoffe aufgenommen werden können.",
  "Einfachzucker": "Die kleinsten Bausteine der Kohlenhydrate (Monosaccharide), z. B. Glucose (Traubenzucker) und Fructose (Fruchtzucker).",
  "Emulsion": "Feine Mischung aus zwei Flüssigkeiten, die sich eigentlich nicht mischen (z. B. Öl und Wasser). Eine Flüssigkeit ist in winzigen Tröpfchen in der anderen verteilt. Beispiele: Milch (Öl in Wasser), Butter (Wasser in Öl).",
  "Emulgator": "Stoff, der zwei nicht mischbare Flüssigkeiten wie Öl und Wasser miteinander verbinden kann und verhindert, dass sie sich wieder trennen. Beispiele: Gallensäuren, Spülmittel, Seife. Verb: emulgieren.",
  "Enzym": "Stoff, der chemische Vorgänge im Körper beschleunigt und steuert. Es wird dabei selbst nicht verbraucht. Verdauungsenzyme zerlegen Nährstoffe.",
  "Fette": "Nährstoffgruppe, die der Körper vor allem zur Energiegewinnung und -speicherung braucht. Die meisten Nahrungsfette bestehen aus Glycerin und drei Fettsäuren (Triglyceride).",
  "Fettsäuren": "Die kleinsten Bausteine der meisten Nahrungsfette.",
  "Gaumensegel": "Der weiche hintere Teil des Gaumens, an dem das Zäpfchen hängt. Beim Schlucken drückt es sich gegen die Rachenwand und verhindert, dass Nahrung in die Nase gelangt.",
  "Glucose": "Ein Einfachzucker (Traubenzucker). Stärke ist aus vielen Glucose-Bausteinen aufgebaut.",
  "Glycerin": "Ein Zuckeralkohol, an den drei Fettsäuren gebunden werden können – so entsteht ein Fett (Triglycerid).",
  "Hormon": "Botenstoff, der im Körper gebildet wird und über Blut oder Lymphe zu seinem Zielorgan gelangt. Dort steuert er bestimmte Abläufe. Beispiel: Insulin.",
  "Insulin": "Hormon aus der Bauchspeicheldrüse. Es gelangt ins Blut, schleust Glucose in die Körperzellen und senkt so den Blutzuckerspiegel.",
  "Jod-Kalium-Jodidlösung": "Braune Flüssigkeit, die sich nur bei Anwesenheit von Stärke blau-schwarz färbt. Sie wird als Nachweis für Stärke verwendet.",
  "Kehldeckel": "Knorpelige Klappe am Eingang des Kehlkopfs. Beim Schlucken verschließt sie die Luftröhre.",
  "Kohlenhydrate": "Nährstoffe, die der Körper vor allem zur Energiegewinnung braucht. Dazu gehören Einfach-, Zweifach- und Mehrfachzucker (z. B. Stärke).",
  "Lymphe": "Klare bis hellgelbe Körperflüssigkeit, die alle Zellen umspült. Sie transportiert unter anderem Nährstoffbausteine (vor allem aus Fetten) im Körper.",
  "Mehrfachzucker": "Kohlenhydrate, die aus vielen Einfachzuckern aufgebaut sind (Polysaccharide). Beispiel: Stärke.",
  "Nährstoffe": "Inhaltsstoffe der Nahrung, die für den Aufbau und die Funktion des Körpers lebensnotwendig sind. Energie liefern Kohlenhydrate, Fette und Proteine. Keine Energie liefern Wasser, Mineralstoffe und Vitamine.",
  "Neutralisation": "Ausgleichen einer Säure durch eine Base (ihren „Gegenspieler“). Es entsteht eine neutrale Flüssigkeit. Verb: neutralisieren. Der Bauchspeichel neutralisiert den sauren Speisebrei.",
  "Pepsin": "Enzym im Magen, das Proteine in kleinere Stücke spaltet. Es wird als inaktive Vorstufe (Pepsinogen) gebildet und im sauren Magensaft aktiviert.",
  "Peristaltik": "Wellenförmiges Zusammenziehen der Muskeln von Speiseröhre, Magen und Darm. Es befördert den Speisebrei in Richtung Darmausgang.",
  "Proteine": "Nährstoffe (Eiweiße), die der Körper u. a. für Muskeln, Enzyme und Hormone braucht. Ihre kleinsten Bausteine sind die Aminosäuren.",
  "Resorption": "Aufnahme von Stoffen aus dem Speisebrei durch die Darmwand ins Blut oder in die Lymphe. Dafür müssen die Nährstoffe in ihre kleinsten Bausteine zerlegt sein. Verb: resorbieren.",
  "Schärfe": "Kein Geschmack, sondern ein Hitze- und Schmerzgefühl. Scharfe Stoffe reizen die Wärme- und Schmerzfühler im Mund.",
  "Schließmuskel": "Ringförmiger Muskel, der ein hohles Organ (z. B. Magen oder Mastdarm) verschließen kann.",
  "Speichel": "Flüssigkeit aus den Speicheldrüsen im Mund („Spucke“). Ein Mensch bildet etwa 1,5 Liter pro Tag. Speichel enthält das Enzym Amylase.",
  "Stärke": "Langkettiger Mehrfachzucker, mit dem Pflanzen Kohlenhydrate speichern. Vorkommen: Getreideprodukte, Kartoffeln.",
  "Triglyceride": "Fette aus einem Glycerin-Molekül und drei Fettsäuren. Sie machen den größten Teil der Nahrungsfette aus.",
  "Verdauungsenzym": "Enzym, das Nährstoffe in kleinere Bausteine zerlegt. Nur diese können vom Dünndarm ins Blut oder in die Lymphe aufgenommen werden.",
  "Zweifachzucker": "Kohlenhydrate aus zwei Einfachzuckern (Disaccharide). Beispiele: Haushaltszucker (Saccharose), Milchzucker (Laktose), Malzzucker (Maltose)."
};

/* Richtig-oder-falsch-Fragen (für Blitzrunde und Stations-Quiz). r = true, wenn die Aussage stimmt. */
const TF = [
  { t: "weg", s: "Die Nahrung wandert vom Magen direkt in den Dickdarm.", r: false, e: "Dazwischen liegt der Dünndarm." },
  { t: "weg", s: "Leber und Bauchspeicheldrüse gehören zum Verdauungssystem.", r: true, e: "Sie liefern Gallensaft und Bauchspeichel in den Dünndarm." },
  { t: "weg", s: "Die Nahrung fließt auch durch die Leber hindurch.", r: false, e: "Die Leber liegt nicht auf dem Weg – sie gibt nur Gallensaft ab." },
  { t: "weg", s: "Bei der parenteralen Ernährung kommt die Nahrung direkt in den Magen.", r: false, e: "Parenteral = direkt in die Vene. In den Magen = enteral." },
  { t: "weg", s: "Bewegung nach dem Essen kann die Verdauung anregen.", r: true, e: "Bewegung bringt den Darm in Schwung." },
  { t: "mund", s: "Die Verdauung beginnt erst im Magen.", r: false, e: "Sie beginnt schon im Mund – mit Kauen und der Amylase." },
  { t: "mund", s: "Speichel macht den Bissen gleitfähig.", r: true, e: "So rutscht er leichter durch die Speiseröhre." },
  { t: "mund", s: "Der Kehldeckel verschließt beim Schlucken die Speiseröhre.", r: false, e: "Er verschließt die Luftröhre." },
  { t: "mund", s: "Scharf ist eine Geschmacksrichtung wie süß oder salzig.", r: false, e: "Schärfe ist ein Hitze- und Schmerzreiz." },
  { t: "mund", s: "Ohne Nase schmecken viele Lebensmittel fast gleich.", r: true, e: "Die meisten Aromen nehmen wir über die Nase wahr." },
  { t: "mund", s: "Amylase spaltet Stärke.", r: true, e: "In Malzzucker – deshalb schmeckt Brot beim Kauen süß." },
  { t: "magen", s: "Der Magensaft ist stark sauer.", r: true, e: "Er enthält Salzsäure." },
  { t: "magen", s: "Pepsin spaltet Fette.", r: false, e: "Pepsin spaltet Proteine (Eiweiße)." },
  { t: "magen", s: "Die Magensäure tötet Bakterien ab.", r: true, e: "So schützt sie uns vor Krankheiten." },
  { t: "magen", s: "Der Magenpförtner gibt den Speisebrei portionsweise weiter.", r: true, e: "Er ist ein Schließmuskel am Magenausgang." },
  { t: "magen", s: "Fettiges Essen verlässt den Magen besonders schnell.", r: false, e: "Fettreiche Speisen bleiben am längsten im Magen." },
  { t: "magen", s: "Stress kann auf den Magen schlagen.", r: true, e: "Gehirn und Verdauung sind über Nerven verbunden." },
  { t: "duenndarm", s: "Im Dünndarm werden die Nährstoffe ins Blut aufgenommen.", r: true, e: "Das nennt man Resorption." },
  { t: "duenndarm", s: "Der Dünndarm ist kürzer als ein Meter.", r: false, e: "Er ist mindestens drei Meter lang." },
  { t: "duenndarm", s: "Darmzotten vergrößern die Oberfläche des Dünndarms.", r: true, e: "Wie die Schlaufen eines Frotteetuchs." },
  { t: "duenndarm", s: "Der Zwölffingerdarm ist der erste Abschnitt des Dünndarms.", r: true, e: "Danach folgen Leerdarm und Krummdarm." },
  { t: "duenndarm", s: "Fette werden in Aminosäuren zerlegt.", r: false, e: "Fette → Fettsäuren und Glycerin. Proteine → Aminosäuren." },
  { t: "galle", s: "Die Gallenblase stellt den Gallensaft her.", r: false, e: "Die Leber stellt ihn her, die Gallenblase speichert ihn." },
  { t: "galle", s: "Gallensaft wirkt ähnlich wie Spülmittel.", r: true, e: "Beide emulgieren Fett." },
  { t: "galle", s: "Insulin wird in den Dünndarm abgegeben.", r: false, e: "Insulin gelangt direkt ins Blut." },
  { t: "galle", s: "Der Bauchspeichel neutralisiert den sauren Speisebrei.", r: true, e: "Er gleicht die Magensäure aus." },
  { t: "galle", s: "Senf regt die Bildung von Gallensaft an.", r: true, e: "Scharfe Gewürze fördern Speichel und Galle." },
  { t: "dickdarm", s: "Im Dickdarm wird dem Speisebrei Wasser entzogen.", r: true, e: "So entsteht fester Kot." },
  { t: "dickdarm", s: "Bakterien im Darm sind immer schädlich.", r: false, e: "Die Darmflora ist nützlich und schützt vor Krankheitserregern." },
  { t: "dickdarm", s: "Fleisch enthält viele Ballaststoffe.", r: false, e: "Ballaststoffe gibt es nur in pflanzlichen Lebensmitteln." },
  { t: "dickdarm", s: "Bei Verstopfung hilft es, viel zu trinken.", r: true, e: "Ballaststoffe brauchen Flüssigkeit zum Aufquellen." },
  { t: "dickdarm", s: "Der Wurmfortsatz hängt am Blinddarm.", r: true, e: "Er wird bei einer Blinddarm-OP entfernt." },
  { t: "dickdarm", s: "Apfelsaft enthält genauso viele Ballaststoffe wie ein Apfel.", r: false, e: "Im Saft fehlen die Ballaststoffe fast ganz." },
  { t: "hunger", s: "Hunger und Appetit sind dasselbe.", r: false, e: "Hunger ist ein Körpersignal, Appetit die Lust auf etwas Bestimmtes." },
  { t: "hunger", s: "Das Sattgefühl kommt sofort beim ersten Bissen.", r: false, e: "Erst nach etwa 15–20 Minuten." },
  { t: "hunger", s: "Wer langsam isst, merkt besser, wann er satt ist.", r: true, e: "Die Sättigungssignale haben dann Zeit, im Gehirn anzukommen." },
  { t: "hunger", s: "Werbung kann Appetit auslösen.", r: true, e: "Sie ist ein äußerer Reiz." },
  { t: "hunger", s: "Auf einem großen Teller wirkt eine Portion größer.", r: false, e: "Sie wirkt kleiner – deshalb nimmt man sich oft mehr." },
  { t: "hunger", s: "Ballaststoffe dehnen den Magen und machen satt.", r: true, e: "Sie quellen im Magen auf." }
];
/* Richtig/Falsch-Fragen ins normale Quiz übernehmen */
TF.forEach((x) => QUIZ.push({ t: x.t, q: "Richtig oder falsch? " + x.s, a: ["Richtig", "Falsch"], c: x.r ? 0 : 1, e: x.e, tf: true }));
