# 🍎 Der Weg der Nahrung – Lern-App (NaWi / Biologie, Sek I)

Eine interaktive Lern-App zum Thema **Verdauung** für Schülerinnen und Schüler der Sekundarstufe I.
Die Inhalte orientieren sich an der Materialsammlung „Der Weg der Nahrung“ (Bundeszentrum für Ernährung / BLE) und wurden für die App neu formuliert und aufbereitet.

Die App läuft komplett im Browser, auch auf dem Handy. Sie braucht keine Anmeldung und keinen Server. Der Fortschritt wird nur lokal auf dem Gerät gespeichert.

## Inhalte

| Bereich | Was drin ist |
|---|---|
| 🧭 **Körperkarte** | Interaktive Grafik: Organ antippen → Erklärung |
| 📖 **7 Lernstationen** | Weg der Nahrung · Mund & Speiseröhre · Magen · Dünndarm · Gallenblase & Bauchspeicheldrüse · Dickdarm · Hunger & Sättigung – jeweils in **Basis** und **Profi**, mit „Gut zu wissen“ und Lernzielen zum Abhaken |
| 🃏 **40 Aufgabenkarten** | Recherche, Experiment, Selbstbeobachtung – zum Umdrehen (Tipp/Zusatzaufgabe), mit Notizfeld und Lösungsideen |
| 🧪 **Experimente** | A5–A14 Schritt für Schritt: Vermutung, Durchführung, Beobachtung, Erklärung; eigenes Experiment-Protokoll (A1/A2) |
| 🎮 **Interaktiv** | Schluck-Modell (A6), Ballaststoff-Detektiv (A12), Hunger oder Appetit (A13), Optische Täuschungen (A14) |
| 🎯 **Üben** | Weg der Nahrung sortieren, Organe beschriften, Silbenrätsel, Quiz pro Station, großes Abschlussquiz (48 Fragen im Pool) |
| 📚 **Lexikon** | 36 Fachbegriffe, im Text antippbar |
| 📒 **Mein Heft** | Alle eigenen Antworten gesammelt – druckbar bzw. als PDF speicherbar |

## Gamification

- **XP & 9 Level** (vom „Krümel“ bis zum „Professor Pepsin“)
- **21 Abzeichen** (z. B. Leseratte, Laborchef, Quiz-Ass, Wochen-Serie)
- **Tages-Challenge**: jeden Tag 5 neue Fragen
- **Lern-Serie** 🔥 (Tage in Folge), Konfetti und Level-Ups

## Online stellen mit GitHub Pages

1. Im Repository auf **Settings → Pages** gehen.
2. Unter *Build and deployment* → *Source*: **Deploy from a branch**.
3. Branch **main** und Ordner **/ (root)** wählen → **Save**.
4. Nach ca. 1 Minute ist die App erreichbar unter
   `https://<benutzername>.github.io/<repository-name>/`

Diesen Link (oder einen QR-Code dazu) können die Schüler direkt im Browser öffnen.

## Lokal starten

Einfach `index.html` im Browser öffnen – oder im Ordner `python3 -m http.server` ausführen und `http://localhost:8000` aufrufen.

## Aufbau

```
index.html        Grundgerüst
css/style.css     Gestaltung
js/data.js        Alle Inhalte (Texte, Karten, Experimente, Quiz, Lexikon) – hier lässt sich alles anpassen
js/app.js         App-Logik, Spiele, Gamification
```

Neue Quizfragen oder Karten ergänzen: einfach in `js/data.js` nach dem vorhandenen Muster hinzufügen.

## Hinweis

Quelle der Unterrichtsinhalte: Bundeszentrum für Ernährung (BZfE) in der BLE, „Der Weg der Nahrung – Materialsammlung für die Sekundarstufe I“. Die Texte der App sind eigenständig formuliert. Experimente mit Jodtinktur (A8) nur im Chemieraum unter Aufsicht durchführen.
