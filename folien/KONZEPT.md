# Konzept: Folien bauen und Vortrag halten

Gilt für die Überblicks-Vorträge in `ueber/` (ca. 45 min) und `ueber-kurz/` (ca. 15 min).
Die Workshop-Decks folgen denselben Regeln für Folien und Notizen, haben aber eigene
Ablaufpläne mit Übungen.

Wer den Vortrag nur **halten** will, liest Abschnitt 8 und 9. Wer Folien **baut**, liest
alles. Offene Entscheidungen stehen in Abschnitt 12.

---

## 1. Wofür die Folien da sind

- Die Folien **unterlegen** den Vortrag. Sie ersetzen ihn nicht. Niemand muss eine Folie
  lesen, um dem Vortrag zu folgen.
- **Ein Gedanke pro Folie.** Wer die Folie drei Sekunden sieht, weiß, worum es geht.
- Der Vortrag muss von **jeder Person** gehalten werden können, die die Notizen liest.
  Die Notizen sind deshalb keine Erinnerungsstütze für eine Person, sondern eine
  Regieanweisung für alle.

Drei Zielgruppen gleichzeitig, jede Folie muss für alle drei funktionieren:

| Wer | Braucht |
|---|---|
| Die Person, die gerade vorträgt | Einen Kernsatz, der in zwei Sekunden auffindbar ist |
| Jemand, der den Vortrag übernimmt | Woher die Folie kommt, wohin sie führt, was bei Stille zu tun ist |
| Das Publikum, später im Hub | Den QR oben rechts, der auf die Nachlese-Stelle zeigt |

## 2. Dramaturgie

Der Bogen bleibt. Er funktioniert, weil er den Raum erst beteiligt, dann belastet und
dann entlastet.

| Akt | Folien | Was passiert | Gefühl |
|---|---|---|---|
| 1 Haken | Quiz | Der Raum merkt am eigenen Leib, dass er p falsch liest | Überraschung |
| 2 Problem | p-Wert, Zahlen, Folgekette, Preis | Was p ist, was es nicht ist, was es kostet | Beunruhigung |
| 3 Spiegel | Selbstprüfung | Jede Person ist Teil des Systems, ohne Schuld | Tiefpunkt, ehrlich |
| 4 Wende | Trenner, drei Fragen | Die Lösungen gibt es seit Jahrzehnten | Erleichterung |
| 5 Antworten | Effekte, Stichprobe, Bayes | Je eine Folie Kern, eine Folie Vorsicht | Klarheit |
| 6 Beweis | Demo | Das Problem in 60 Sekunden gesehen | Aha |
| 7 Träger | Projekt, Team | Wer das trägt, warum jetzt | Vertrauen |
| 8 Angebot | Hub, Workshops | Wo es weitergeht | Einladung |
| 9 Mitnahme | Fünf Dinge für morgen | Was ab morgen anders geht | Handlung |
| 10 Schluss | Danke, Anhang | Fragen, Reserve | Offen |

**Regel zum Tiefpunkt:** Akt 3 endet spätestens bei Minute 18. Danach geht es nur noch
aufwärts. Wer die Selbstprüfung länger als drei Minuten laufen lässt, verliert den Raum.

### Zeitgerüst 45 Minuten (lang)

40 Minuten Vortrag, 5 Minuten Fragen (Entscheidung, siehe Abschnitt 12). Die Soll-Zeiten
in den Notizen der geteilten Folien gelten für die Langfassung; die Kurzfassung folgt
der zweiten Tabelle.

| Soll | Block | Folien | Dauer | Kürzbar |
|---|---|---|---|---|
| 00:00 | Titel, Mitlesen | 2 | 1:30 | nein |
| 01:30 | Quiz | 3 | 5:00 | nein |
| 06:30 | Was p ist, was p nicht sagt | 2 | 3:00 | nein |
| 09:30 | Kein Randproblem | 1 | 2:00 | nein |
| 11:30 | Folgekette, Preis, seit sechzig Jahren gesagt | 3 | 3:00 | Preis und Titel-Folie ja |
| 14:30 | Selbstprüfung | 1 | 2:30, plus 0:30 Puffer | nein |
| 17:30 | Wende, drei Fragen | 2 | 2:30 | nein |
| 20:00 | Antwort 01 Effekte | 2 | 3:00 | Faustregel-Folie ja |
| 23:00 | Antwort 02 Stichprobe, Rechner vorstellen, Rechner live | 4 | 4:00 | Drei Wege und Rechner ja |
| 27:00 | Antwort 03 Bayes | 2 | 3:30 | nein |
| 30:30 | Demo | 3 | 4:00 | nein, aber Plan B |
| 34:30 | Projekt | 4 | 2:30 | Warum-jetzt-Folie ja |
| 37:00 | Angebot | 4 | 2:00 | Site-Demo ja |
| 39:00 | Morgen anders | 1 | 1:30 | nein |
| 40:30 | Danke, Fragen | 1 | 4:30 | nein |

Kürzbar heißt: bei Zeitdruck überspringen, der Vortrag bleibt vollständig. Nie kürzen:
Quiz, Selbstprüfung, Demo, Morgen anders, Förderhinweis.

### Zeitgerüst 15 Minuten (kurz)

| Soll | Block | Dauer |
|---|---|---|
| 00:00 | Titel, Mitlesen | 1:00 |
| 01:00 | Quiz | 4:00 |
| 05:00 | Kein Randproblem | 2:00 |
| 07:00 | Wende, drei Antworten auf einer Folie | 3:30 |
| 10:30 | Angebot | 2:30 |
| 13:00 | Morgen anders, Danke | 2:00 |

## 3. Folientypen

Jede Folie ist genau ein Typ. Der Typ steht in der ersten Zeile der Notizen.

| Typ | Zweck | Baustein | Maximal drauf | Dauer |
|---|---|---|---|---|
| **Trenner** | Kapitelwechsel, Luft holen | `# Titel {.bp-trenner}` plus Eyebrow | eine Zeile | 10 s |
| **Frage** | Handzeichen, Antwort rufen | `.bp-aufgabe`, Fragments, Hand-Symbol | 6 Punkte | 2 bis 4 min |
| **Aha** | Eine Zahl, ein Satz, ein Zitat | `.bp-stats`, `.bp-quote`, `.bp-callout` | 12 Wörter Kern | 45 bis 90 s |
| **Säulen** | Struktur zeigen | `.bp-drei` mit `.bp-pillar` und Symbol | je Säule: Symbol, Titel bis 4 Wörter, ein Satz | 1 bis 2 min |
| **Abbildung** | Mechanismus zeigen | `![](../assets/fig/x.svg)` plus ein Satz | eine Grafik, eine Aussage | 1 bis 2 min |
| **Demo** | Live zeigen | `_demo/*.qmd`, generiert | nichts, die App ist die Folie | 3 bis 4 min |
| **Wegweiser** | Wo es weitergeht | QR groß, drei Wege | 3 Wege | 1 min |
| **Anhang** | Reserve für Fragen | beliebig | wie Aha oder Säulen | nie im Durchlauf |

Vor jeder **Demo**-Folie steht eine Folie, über die mindestens 30 Sekunden geredet wird.
Die App lädt währenddessen.

## 4. Was auf eine Folie darf

- **Überschrift bis sechs Wörter**, und sie ist eine Aussage oder eine Frage, kein Thema.
  „Alle sechs sind falsch", nicht „Auflösung".
- **Höchstens drei Elemente** pro Folie. Ein Element ist ein Kasten, eine Grafik, eine
  Liste, ein Zitat.
- **Kein Absatz über zwei Zeilen.** Was länger ist, gehört in die Notizen (wird gesagt)
  oder in den Hub (wird nachgelesen).
- **Zahlen groß, Quellen klein.** Die Quelle steht in `.bp-quelle`, nicht im Satz.
- **Farben sind Bedeutung, nie Dekoration.** Coral = Effekte und Workshop 01. Teal =
  Stichprobe und Workshop 02. Navy = Bayes und Workshop 03. Sand = Projekt und Neutrales.
  Das Publikum erkennt die Farben später auf der Website wieder.
- **Jede Folie passt bei 1280 × 720 ohne Überlauf.** Prüfung: die Seitenzahl des
  PDF-Exports ist gleich der Folienzahl. Ist sie größer, läuft eine Folie über.
- **Schrittweiser Aufbau (Fragments) nur, wenn die Reihenfolge Inhalt ist.** Die sechs
  Quiz-Aussagen, die fünf Praktiken, die Liste „sagt nichts über". Nicht als Effekt.
- **Englische Zitate bleiben englisch**, mit Quelle. Alles andere deutsch, Du-Form,
  Sprach-Konventionen aus `CLAUDE.md`: keine Gedankenstriche, kein Gendern mit
  Sonderzeichen.
- **Der QR oben rechts gehört zur Folie.** Jede Inhaltsfolie setzt `data-qr` auf die
  Stelle im Hub, an der man das Gezeigte nachliest.

## 5. Symbole

Ein kleines, festes Vokabular. Jedes Symbol bedeutet im ganzen Vortrag genau eine Sache.
Das Publikum lernt die Bedeutung nebenbei, niemand erklärt sie.

| Symbol | Bedeutung | Steht bei |
|---|---|---|
| Hand | Jetzt bist du dran: Antwort rufen | Demo-Frage |
| Umfrage-Balken | Anonym abstimmen, per QR | Quiz |
| Warndreieck | Fehlannahme, Falle | `.bp-warn` |
| Glühbirne | Merksatz, Antwort | `.bp-callout` |
| Pfeil rechts | Folge, Übergang, „und deshalb" | Folgekette, Übergänge |
| Lineal | Effektgröße, Workshop 01 | Antwort 01, Workshop-Karte |
| Menschen | Stichprobe, Workshop 02 | Antwort 02, Workshop-Karte |
| Würfel oder Waage | Wahrscheinlichkeit, Bayes, Workshop 03 | Antwort 03, Workshop-Karte |
| Play | Live-Demo | Puffer-Folie vor der Demo |
| Buch | Nachlesen im Hub | Wegweiser, Quellen |
| Uhr | Zeit, Ablauf | Ablauf-Folien der Workshops |
| Anführungszeichen | Zitat | `.bp-quote` (schon im Theme) |

Regeln:

- Symbole sind **einfarbig** in der Tone-Farbe des Kontexts oder in Navy. Keine bunten
  Emoji, sie rendern auf jedem System anders.
- Ein Symbol **ersetzt ein Wort**, es steht nicht daneben. „Hand" statt „Handzeichen
  bitte" als Überschrift.
- Technik: Entscheidung offen, siehe Abschnitt 12. Empfehlung ist die Quarto-Extension
  `fontawesome`, Schreibweise `{{< fa hand >}}`, Schriftdateien lokal, Größe und Farbe
  über eine `.bp-icon`-Klasse im Theme.

## 6. Abbildungen

Eine Abbildung ersetzt einen Absatz, nie umgekehrt.

Regeln:

- Markenfarben, sonst nichts. Hintergrund transparent oder Creme.
- **Der Titel der Abbildung ist ihre Aussage.** „Mehr Fälle, schmaleres Intervall. Viermal
  so viele für die Hälfte." Nicht „Abbildung 3: Standardfehler".
- Beschriftung direkt an der Linie oder am Balken, keine Legende.
- Höchstens zwei Reihen, eine Botschaft.
- Format SVG, Ablage in `folien/assets/fig/`, in `_quarto.yml` als Ressource eingetragen.
  SVG skaliert im Beamer und im PDF.
- Einbindung inline über `{{< include ../assets/fig/NAME.svg >}}` in einem
  `::: {.bp-fig}`-Block. So erbt die Grafik Schrift und Farbvariablen des Themes.
- **Keine Leerzeile in einer SVG-Datei.** Pandoc liest den Block nur bis zur ersten
  Leerzeile als rohes HTML, danach zerlegt es den Rest als Markdown und die Grafik ist
  kaputt. Prüfung: `grep -c '^$' datei.svg` muss 0 ergeben.
- Steht unter oder über der Grafik noch ein Kasten, `.bp-fig--klein` dazunehmen, sonst
  läuft die Folie über.
- Jede Abbildung hat am Anfang der SVG-Datei einen Kommentar: Datenquelle und wie sie
  erzeugt wurde. Dann kann jemand sie in zwei Jahren nachbauen.

Geplante Abbildungen für den langen Vortrag:

| Nr. | Folie | Abbildung | Warum ein Bild |
|---|---|---|---|
| F1 | Alle sechs sind falsch | Drei Balken: Studierende 100 %, Forschende 90 %, Methoden-Lehrende 80 % mit mindestens einer Fehlinterpretation (Haller & Krauss 2002) | Die Pointe „auch die Lehrenden" steht im Bild, nicht im Text |
| F2 | Folgekette | Kreislauf mit drei Pfeilen: Publikationsbias, fragwürdige Praktiken, gescheiterte Replikation | Ein Kreislauf ist das Argument. Drei Säulen nebeneinander suggerieren eine Reihenfolge, aber keine Rückkopplung |
| F3 | Antwort 02 | Kurve: Breite des Intervalls gegen n, Markierung „×4 für die Hälfte" | Das Wurzelgesetz in einem Blick |
| F4 | Antwort 03 | Drei Kurven: Prior, Likelihood, Posterior | Die Formel wird zum Bild, der Kompromiss ist sichtbar |
| F5 | Was wir gesehen haben | p gegen n bei festem Effekt von 12 Sekunden, Schwelle .05 markiert | Plan B, wenn die Demo nicht lädt. Und die einzige Form, in der die Demo im PDF existiert |

Dazu drei gelieferte Bilder, keine eigenen Grafiken (Feedback von Thomas, 2026-11-02):

| Datei | Folie | Herkunft |
|---|---|---|
| `cult-of-statistical-significance.jpg` | Nicht im Journal | Buchcover Ziliak & McCloskey 2008 |
| `umfrage-menti.jpg` | Quiz | Menti-QR, von Thomas erzeugt. Ändert sich die Umfrage, kommt ein neues Bild |
| `effektgroessen-verteilung.webp` | Faustregeln | Grafik aus Schäfer & Schwarz 2019 |

Nicht geplant: Stock-Grafiken, Screenshots der Website (dafür gibt es die
Live-Einbettung). Die Textquellen zu Umfrage und Literaturliste liegen in
`folien/_quellen/`, sie werden nicht ausgeliefert.

## 7. Interaktion und Humor

### Fragen an den Raum

- **Keine Handzeichen, nirgends.** Weder vom Raum noch von der vortragenden Person.
  Konformitäts- und Peinlichkeitseffekte verfälschen das Bild, und bei diesem Publikum
  funktioniert es schlicht nicht.
- **Das Quiz läuft anonym** über eine digitale Umfrage (Menti, QR auf der Folie). Die
  Aussagen stehen vollständig auf der Folie, in der App sind sie gekürzt. Fällt die
  Umfrage aus, zählt jede Person still für sich.
- **Die Selbstprüfung ist still.** Liste lesen, für sich mitzählen, niemand fragt nach.
  Die Folie wirkt über die Stille nach jedem Punkt, nicht über eine Abfrage.
- **Eine einzige offene Frage** an den Raum, vor der Demo: Antwort rufen, nicht melden.
  Sie hat in den Notizen die erwartete Antwort, was bei Stille zu tun ist und was bei
  der falschen Antwort zu sagen ist.
- Die offene Frage trägt das Hand-Symbol, damit das Publikum lernt: jetzt bin ich dran.
- Eine Frage, auf die niemand antworten kann, ist keine Frage, sondern eine Pause. Auch
  die darf man machen, aber dann als Pause, nicht als gescheiterte Frage.

### Humor

- **Register:** trocken, auf Kosten der Disziplin und der Methode. Nie auf Kosten des
  Publikums, einzelner Forschender oder einzelner Fächer.
- **Running Gag erlaubt:** SmartRail und die Pünktlichkeit der Bahn tragen von selbst.
  „The earth is round (p < .05)" ist der zweite.
- **Drei bis fünf Stellen pro Vortrag**, in den Notizen als „Pointe" markiert. Sie sind
  optional. Wer sie nicht mag, lässt sie weg, und der Vortrag funktioniert trotzdem.
- **Nie einen Witz erklären.** Steht er auf der Folie, muss er allein zünden. Steht er in
  den Notizen, steht er als Satz zum Sagen, nicht als Beschreibung.
- Humor steht **nie** auf der Preis-Folie (Jobs, Justice, Lives) und nie auf der
  Team-Folie.

## 8. Sprechernotizen: das Erfassungsraster

Jede Folie hat Notizen in demselben Raster. Dieselben fünf Beschriftungen, dieselbe
Reihenfolge, immer fett. Das Raster ist dafür gebaut, dass man **während des Vortrags**
darin nachschaut: im Speaker-View (Taste `s`) steht es neben der Folie.

```
::: notes
**Typ** Aha · **Soll** 06:30 · **Dauer** 1:30 · kürzbar: nein

**Woher** Das Quiz hat gezeigt, dass der Raum p falsch liest. Jetzt die korrekte
Definition, damit die Fehler einen Maßstab bekommen.

**Hier** „Der p-Wert beschreibt die Daten unter einer Annahme. Nicht die Hypothese."
Definition wörtlich vorlesen, langsam. Dann die Regen-Analogie: nass zu sein, wenn es
regnet, ist etwas anderes als Regen, wenn ich nass bin.

**Wohin** Die nächste Folie zählt auf, was p alles nicht sagt. Die Liste ist identisch
mit dem, was wir eigentlich wissen wollen.

**Wenn** Widerstand („p ist doch nicht nutzlos"): zustimmen. Nicht p ist das Problem,
sondern p als einziges Kriterium.
:::
```

Die fünf Beschriftungen und was hineingehört:

| Beschriftung | Entspricht | Inhalt | Länge |
|---|---|---|---|
| **Typ · Soll · Dauer** | Kopfzeile | Folientyp aus Abschnitt 3, Soll-Zeit beim Erreichen, geplante Dauer, kürzbar ja oder nein | 1 Zeile |
| **Woher** | Einleitung | Was davor kam und warum diese Folie jetzt kommt | 1 bis 2 Zeilen |
| **Hier** | Hauptteil | Zuerst der **Kernsatz in Anführungszeichen**. Dann: was gezeigt wird, was gesagt wird, in welcher Reihenfolge | 3 bis 5 Zeilen |
| **Wohin** | Folge | Was als Nächstes kommt und warum es anschließt. Der Übergangssatz | 1 bis 2 Zeilen |
| **Wenn** | Fallback | Was bei Stille, bei Zeitdruck, bei Technikausfall oder bei der typischen Nachfrage zu tun ist | 1 bis 3 Zeilen |

Regeln:

- **Der Kernsatz steht an erster Stelle unter „Hier", in Anführungszeichen.** Das ist der
  Satz, den man sagt, wenn man hängt. Er muss allein tragen.
- **Woher und der Kernsatz stehen in den ersten acht Zeilen.** Das ist der Teil, der im
  Speaker-View ohne Scrollen sichtbar sein muss. Der ganze Block hat höchstens 16
  Zeilen (Stand 2026-10-31: Durchschnitt 11, Maximum 16). Was nicht passt, gehört in
  den Hub.
- **Imperativ oder neutral, keine Ich-Form.** „Definition vorlesen", nicht „ich lese die
  Definition vor". Persönliche Anekdoten sind erlaubt, aber als **(persönlich)** markiert,
  damit andere sie weglassen können.
- **Nichts in den Notizen, was nicht gesagt wird.** Hintergrundwissen steht im Hub, der QR
  zeigt darauf.
- **Jede Zahl, die genannt wird, steht ausgeschrieben in den Notizen**, mit Quelle. Nicht
  „die Zahl von vorhin".
- **Pointen stehen als Satz**, markiert mit „Pointe:". Nicht als Beschreibung („hier
  einen Witz über die Bahn machen").
- Trenner-Folien haben nur die Kopfzeile und „Hier". Demo-Folien haben zusätzlich
  „Plan B" unter „Wenn".
- Sprach-Konventionen gelten in den Notizen genauso wie auf den Folien.

Eine Folie ohne vollständiges Raster gilt als unfertig.

## 9. Realbetrieb: den Vortrag halten

### Zehn Minuten vorher

1. Deck im Browser öffnen, Taste `s`. Der Speaker-View geht in einem zweiten Fenster
   auf: links die aktuelle Folie, rechts die nächste, unten die Notizen, oben der Timer.
   Das Fenster mit den Folien auf den Beamer, den Speaker-View auf den Laptop. Oben im
   Speaker-View das Layout auf **Tall** oder **Notes only** stellen, dann ist das ganze
   Raster ohne Scrollen lesbar.
2. Internet prüfen. Das Demo-Kapitel (Workshop 01, Kapitel 2) in einem **zweiten Tab**
   öffnen und laden lassen. Das ist Plan B.
3. Den QR der Mitlesen-Folie mit dem eigenen Handy scannen. Öffnet sich der Hub?
4. Einmal `b` drücken (Tafel) und `c` (Stift), dann wieder `b`. Funktioniert, dann
   schließen.
5. Timer: er startet beim ersten Folienwechsel von selbst. Bei Verzögerung im Speaker-View
   auf die Uhr klicken, sie setzt sich auf null.

### Während des Vortrags

- `?` zeigt alle Tastenkürzel. `o` die Übersicht aller Folien. `m` das Menü, um zu einer
  Folie zu springen (für Anhang-Folien bei Fragen).
- **Wenn du hängst:** Blick in den Speaker-View, fette Zeile **Hier**, den Satz in
  Anführungszeichen sagen. Dann weiter.
- **Wenn die Zeit knapp wird:** die Soll-Zeit in der Kopfzeile der Notizen mit dem Timer
  vergleichen. Liegst du mehr als zwei Minuten hinten, die nächste kürzbare Folie
  überspringen. Welche das sind, steht im Zeitgerüst in Abschnitt 2 und in jeder
  Kopfzeile.
- **Wenn die Demo nicht lädt:** zweiter Tab. Wenn auch der nicht lädt: zur nächsten Folie
  gehen, dort steht die Abbildung F5 mit dem Ergebnis, und sagen, was die Demo gezeigt
  hätte. Das steht unter „Wenn" in den Notizen der Demo-Folie.
- **Wenn niemand die Hand hebt:** die Ersatzfrage unter „Wenn". Jede Frage-Folie hat eine.
- **Nie kürzen:** Quiz, Selbstprüfung, Demo, Morgen anders, Förderhinweis.

### Zu zweit vortragen

Wenn zwei Personen vortragen, steht in der Kopfzeile der Notizen **Wer**. Ohne Angabe
spricht die Hauptperson. Regeln:

- **Wenige, klare Übergaben.** Höchstens drei im ganzen Vortrag, immer an einem
  Trenner oder an einer Folie, die ohnehin die Person wechselt. Kein Ping-Pong.
- **Jede Übergabe hat einen Satz.** Er steht unter „Wohin" der Folie davor. Die
  übernehmende Person beginnt mit dem Kernsatz unter „Hier", nicht mit „Ja, also".
- **Die zweite Person hat während des anderen Teils eine Aufgabe:** Umfrage-Ergebnis
  zeigen, zweiten Tab mit der Demo bereithalten, Zeit im Blick.
- **Fragen am Ende moderiert die Person, die zuletzt gesprochen hat.** Die andere
  ergänzt.

Für den Vortrag am 4.11. (Hannes und Thomas): Hannes trägt Problem und Antworten,
Thomas übernimmt die Faustregel-Folie (seine Studie), den Stichprobenrechner (seine
App) und den Projektteil (seine Leitung). Beim Quiz moderiert Hannes, Thomas zeigt das
Menti-Ergebnis. Fragen: beide.

### Danach

- Die Schlussfolie stehen lassen, solange Fragen kommen. Der QR ist groß, damit noch
  gescannt werden kann.
- Fragen, die der Anhang beantwortet (Priors subjektiv, beides berichten, Werkzeuge,
  Literatur): mit `m` dorthin springen, nicht durchklicken.

### Export

PDF und PPTX entstehen über den in `CLAUDE.md` beschriebenen Weg und landen in
`folien/_export/`. Der Ordner ist gitignored. Das PDF ist das Format zum Verschicken.
Das PPTX ist editierbar, aber ohne das Folien-Layout.

## 10. Pflege

- Lang und kurz teilen die Dateien in `_ueber/`. Eine Änderung dort ändert beide Decks.
  Die Kurzfassung hat genau eine eigene Folie (`_kurz-antworten.qmd`).
- Nur `#` und `##` erzeugen eine Folie. `###` ist eine Überschrift innerhalb einer Folie.
- Keine ausgeschriebene Adresse in einer `.qmd`. Alle Ziele über `{{< meta links.KEY >}}`.
- **Wer eine Folie ändert, ändert die Notizen im selben Commit.** Sonst stimmt das Raster
  nicht mehr, und die nächste Person steht mit falschen Anweisungen da.
- Vor dem Commit: `quarto render folien`, PDF-Seitenzahl gleich Folienzahl, Quick-Check
  der Sprach-Konventionen (`—|:innen|:in[^a-zäöüß]`).
- Ändert sich die Dauer einer Folie, wird das Zeitgerüst in Abschnitt 2 und der
  Kopfkommentar des Decks nachgezogen.

## 11. Die Folien des langen Vortrags, einzeln begründet

Umgesetzt am 2026-10-31. Die Tabelle bleibt als Begründung stehen: warum es die Folie
gibt, was sie leistet, und was bei der Überarbeitung entschieden wurde. „Bleibt" heißt:
Inhalt blieb, Form wurde auf Abschnitt 4 gebracht, Notizen kamen ins Raster.

| Folie | Typ | Leistet | Entscheidung |
|---|---|---|---|
| Titel | Trenner | Erster Eindruck | Bleibt. Option: das neue Icon aufnehmen |
| Mitlesen | Wegweiser | Entlastung, niemand schreibt mit | Bleibt. Drei Symbole statt drei Halbsätze: kostenfrei, ohne Anmeldung, im Browser |
| Quiz Trenner | Trenner | Ankündigung Mitmachen | Bleibt |
| Sieben Aussagen | Frage | Der Haken des Vortrags | Umbau nach Feedback von Thomas: Originalformulierung aus Haller & Krauss plus siebte Aussage (Zufall), anonym per Menti-QR statt Handzeichen |
| Alle sieben falsch | Abbildung | Die Pointe, ohne Triumph | Umbau: Abbildung F1 statt zwei Statistik-Kacheln |
| Was p ist | Aha | Der Maßstab für alle Fehler | Bleibt. Nur die Definition, sonst nichts |
| Sagt nichts über | Aha | Die Liste dessen, was wir wissen wollen | Bleibt. Ist schon incremental |
| Kein Randproblem | Aha | Vier Zahlen | Bleibt. Die vier Kacheln sind richtig |
| Folgekette | Abbildung | Der Kreislauf | Umbau: Abbildung F2 statt drei Säulen |
| Sagt nichts über | Aha | Die Liste dessen, was wir wissen wollen | Bleibt, plus siebter Punkt „durch Zufall zustande gekommen" (Feedback) |
| Nicht im Journal | Aha | Der Preis, Tiefpunkt | Umbau: Buchcover, Ziliak-Titel, Hill 1965 (Feedback). Meehl wandert auf die nächste Folie |
| Seit über sechzig Jahren gesagt | Aha | Keine Einzelmeinung | Neu (Feedback): Meehl 1978 plus zehn Titel von Rozeboom 1960 bis Stang 2010, kürzbar |
| Selbstprüfung | Frage | Der Spiegel | Umbau: still, ohne Handzeichen, jede Person zählt für sich. Fragments |
| Wende Trenner | Trenner | Erleichterung | Bleibt |
| Drei Fragen | Säulen | Das Rückgrat des Vortrags und der Website | Bleibt. Symbole je Säule, Text auf Frage plus Zwei-Wort-Antwort |
| Antwort 01 | Aha | Zwei Zahlen: 4,2 Punkte, d = 0.42 | Bleibt. Die beiden Zahlen groß, Cohen-Zitat klein |
| Faustregeln | Abbildung | Das Ritual nicht ersetzen | Umbau (Feedback): Verteilungsgrafik aus Schäfer & Schwarz 2019, kürzbar |
| Antwort 02 | Abbildung | Mehr Fälle heilen keine Verzerrung | Umbau: Kernsatz plus Abbildung F3 |
| Drei Wege | Säulen | Power, Präzision, Bayes-Faktor | Bleibt, kürzbar. Je Säule nur die Frage, darunter Gosset 1937 (Feedback) |
| Stichprobenrechner | Demo | Das Werkzeug zu Weg 02, live | Neu (Feedback): die App eingebettet, Drei Wege ist die Puffer-Folie, kürzbar |
| Antwort 03 | Abbildung | Die Frage umdrehen | Umbau: Satz im Kasten plus Abbildung F4, Formel klein |
| Sagen dürfen | Aha | CI gegen HDI, Bayes-Faktor symmetrisch | Bleibt. BF-Tabelle bleibt, Fließtext halbieren |
| Demo Puffer | Demo | Ladezeit kaufen, Frage stellen | Bleibt. Play-Symbol, Frage an den Raum mit Hand |
| Demo | Demo | Live | Bleibt, generiert |
| Gesehen | Abbildung | Die Auflösung | Umbau: Abbildung F5 als Plan B und PDF-Form |
| Projekt Trenner | Trenner | Wechsel zum Träger | Bleibt |
| Warum jetzt | Säulen | Drei Faktoren | Bleibt, kürzbar. Symbole |
| Was wir tun | Säulen | Vier Stufen | Bleibt. Symbole, Text halbieren |
| Wer dahintersteht | Säulen | Legitimation, Förderhinweis | Bleibt. Pflicht |
| Angebot Trenner | Trenner | Wechsel zum Angebot | Bleibt |
| Drei Wege ins Material | Säulen | Die Landkarte der Website | Bleibt. Symbole |
| Site Demo | Demo | Die Fragen-Seite live | Bleibt, kürzbar |
| Drei Workshops | Säulen | Das Angebot konkret | Bleibt, kommt aus `mkdocs.yml` |
| Morgen anders | Aha | Die Mitnahme | Bleibt. Fragments, Symbole je Punkt |
| Danke | Wegweiser | Offen bleiben | Bleibt. Icon aufnehmen |
| Anhang (4) | Anhang | Reserve | Bleibt |

Die Kurzfassung erbt alle Änderungen über die Includes. Eigene Arbeit dort: die Folie
„Drei Fragen, drei Antworten" bekommt Symbole, und die Notizen kommen ins Raster.

## 12. Getroffene Entscheidungen

Stand 2026-10-31, für den Vortrag am Mittwoch.

1. **Publikum: Forschende und Doktorierende.** Leute, die selbst auswerten und
   publizieren. Beispiele bleiben bei SmartRail als rotem Faden, die Antworten nutzen
   die Forschungsbeispiele (BDI-II, Suizidprävention). Die Selbstprüfung ist die Folie,
   die dieses Publikum am direktesten trifft, sie bekommt volle drei Minuten.
2. **Zeit: 40 Minuten Vortrag, 5 Minuten Fragen.** Das Zeitgerüst in Abschnitt 2 gilt so.
3. **Symbole: Font Awesome als Quarto-Extension.** Schreibweise `{{< fa hand >}}`,
   Schriftdateien liegen lokal in `_extensions/`, kein externer Dienst. Größe und
   Farbe über `.bp-icon` im Theme.
4. **Abbildungen: alle fünf** aus Abschnitt 6, als SVG in `assets/fig/`, inline
   eingebunden, damit sie die Seitenschrift und die Farben des Themes erben.

Annahmen: Beamer mit Internet, das Publikum hat Handys für den QR, der Vortrag wird mit
dem Speaker-View gehalten. Die Demo hat Plan B (zweiter Tab) und Plan C (Abbildung F5).
