# 🍎 Der Weg der Nahrung – Lern-App (NaWi / Biologie, Sek I)

Eine interaktive Lern-App zum Thema **Verdauung** für Schülerinnen und Schüler der Sekundarstufe I.
Die Inhalte orientieren sich an der Materialsammlung „Der Weg der Nahrung“ (Bundeszentrum für Ernährung / BLE) und wurden für die App neu formuliert und aufbereitet.

Die App läuft komplett im Browser, auch auf dem Handy. Sie braucht keine Anmeldung und keinen Server. Der Fortschritt wird nur lokal auf dem Gerät gespeichert.

## Aufbau für Schüler: 4 Bereiche

| Bereich | Was drin ist |
|---|---|
| 🏠 **Start** | Level & Serie, „Weiterlernen“, Schnell-Quiz, Tages-Challenge, interaktive Körperkarte |
| 📖 **Lernen** | 8 Stationen, jede als Lernpfad: **① Lesen** (Basis/Profi, mit beschrifteten Abbildungen) → **② Merke dir** → **③ Teste dich** (Quiz) → **④ Vertiefen** (Aufgabenkarten mit Tipps & Lösungsideen, Experimente, Lernziele) |
| ❓ **Quiz** | Schnell-Quiz, Blitzrunde (60 Sek. Richtig/Falsch), Tages-Challenge, Abschlussquiz, Quiz pro Station, Spiele (Reihenfolge, Organe beschriften, Silbenrätsel, Ballaststoff-Detektiv, Hunger oder Appetit, Schätzen, Schluck-Modell) |
| 🙂 **Ich** | Level, Abzeichen, Mein Heft (alle Notizen, druckbar), Lexikon, eigene Experimente |

Stationen: Weg der Nahrung · Mund & Speiseröhre · Magen · Dünndarm · Gallenblase & Bauchspeicheldrüse · Dickdarm · Hunger & Sättigung · **Zucker** (Zuckerarten, freier Zucker & WHO-Empfehlung, Insulin & Insulinresistenz, versteckter Zucker, Belohnungssystem & „Zuckersucht“ – mit Zucker-Detektiv und Würfelzucker-Schätzspiel).
Fragenpool: 107 Fragen (60 Multiple Choice + 47 Richtig/Falsch). 47 Aufgabenkarten, Experimente A5–A14 und Z1–Z2, 43 Lexikonbegriffe.

## Gamification

- **XP & 9 Level** (vom „Krümel“ bis zum „Professor Pepsin“)
- **23 Abzeichen**, **Serien-Bonus** im Quiz (3, 5, 10 richtige in Folge)
- **Blitzrunde** mit Rekord, **Tages-Challenge**, **Lern-Serie** 🔥 (Tage in Folge)

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
js/figures.js     Beschriftete Abbildungen (SVG)
js/zucker.js      Station 8 „Zucker“ (Texte, Abbildungen, Quiz, Karten, Spiele)
js/app.js         App-Logik, Spiele, Gamification
```

Neue Quizfragen oder Karten ergänzen: einfach in `js/data.js` nach dem vorhandenen Muster hinzufügen.

## Hinweis

Quelle der Unterrichtsinhalte: Bundeszentrum für Ernährung (BZfE) in der BLE, „Der Weg der Nahrung – Materialsammlung für die Sekundarstufe I“. Die Texte der App sind eigenständig formuliert. Experimente mit Jodtinktur (A8) nur im Chemieraum unter Aufsicht durchführen.
