---
title: Repräsentativität & Stichprobengröße · Workshop 03
---

{% set w = workshops.reliability %}

# {{ w.title }}

> **{{ w.eyebrow }}.** {{ w.tagline }}

<div class="bp-workshop__meta" style="margin: 1rem 0 1.5rem 0;">
  <span><strong>{{ w.chapters_count }}</strong> Kapitel</span>
  <span>· {{ w.level }}</span>
  <span>· Eigenes Tempo: {{ w.duration_self }}</span>
  <span>· Geführt: {{ w.duration_guided }}</span>
</div>

<div class="bp-workshop__modes" style="margin-bottom: 2rem;">

  <div class="bp-mode bp-mode--self">
    <div class="bp-mode__head">
      <span class="bp-pill bp-pill--live">Im eigenen Tempo</span>
      <strong>kostenfrei · jederzeit</strong>
    </div>
    <p>{{ w.goal_self }}</p>
    <a class="bp-btn bp-btn--primary" href="{{ w.base }}/" target="_blank" rel="noopener">
      Workshop starten →
    </a>
  </div>

  <div class="bp-mode bp-mode--guided" id="booking">
    <div class="bp-mode__head">
      <span class="bp-pill bp-pill--soon">In Planung</span>
      <strong>noch nicht buchbar</strong>
    </div>
    <p>{{ w.goal_guided }} Geführte Workshops bieten wir derzeit noch nicht an, das Format ist in Vorbereitung.</p>
  </div>

</div>

## Worum geht es?

Eine Stichprobe ist nur so gut wie ihre **Repräsentativität** und ihre **Größe**. Dieser
Workshop zeigt, wann eine Studie tatsächlich auf die Grundgesamtheit verallgemeinert und
wann nicht. Wir behandeln Verzerrungen durch Drop-outs, p-Hacking, Schätzgenauigkeit nach dem
Wurzelgesetz und das ehrliche Quantifizieren von Unsicherheit, wieder am SmartRail-Szenario.

## Für wen ist der Workshop?

{{ w.audience }}

## Kapitelübersicht

<div class="bp-carousel">
  <div class="bp-carousel__track">
    {% for ch in w.chapters %}
    <a class="bp-card" href="{{ w.base }}/{{ ch.file }}" target="_blank" rel="noopener">
      <span class="bp-card__num">{{ "%02d" | format(ch.num) }}</span>
      <span class="bp-card__tag">Kapitel {{ ch.num }}</span>
      <h3 class="bp-card__title">{{ ch.title }}</h3>
      <p class="bp-card__desc">Theorie + interaktives Beispiel im Browser.</p>
      <div class="bp-card__meta">
        <span>⏱ {{ ch.time }}</span><span>🎚 {{ ch.level }}</span>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

## Was du danach kannst

- [x] Repräsentativität bewerten und systematische Verzerrungen erkennen.
- [x] Drop-outs und Missings als **Auswahlmechanismus** lesen.
- [x] **p-Hacking** identifizieren und seine Folgen für die Falsch-positiv-Rate einschätzen.
- [x] Stichprobenpläne nach dem **Wurzelgesetz** und mit Simulationen erstellen.
- [x] Unsicherheit ehrlich kommunizieren, über das binäre „signifikant" hinaus.

## Format & Termine

| Aspekt      | Im eigenen Tempo                  | Geführt (in Planung)                   |
|-------------|-----------------------------------|----------------------------------------|
| Dauer       | {{ w.duration_self }}             | {{ w.duration_guided }}                |
| Tempo       | individuell                       | strukturiert, mit Pausen               |
| Interaktion | Browser-Apps, Fragen via Kontakt  | Live-Diskussion, Q&A, Übungsbetreuung  |
| Kosten      | kostenfrei                        | noch offen                             |
| Termin      | jederzeit                         | in Planung                             |

## Begleitmaterial

- **Workshop-Seite (Quarto):** [{{ w.base }}/]({{ w.base }}/)
- **Quellcode &amp; Issues:** [{{ w.repo }}]({{ w.repo }})
- **Foliensatz für Vortragende:** [Vortrag zu diesem Workshop]({{ links.hub_folien }}{{ w.key }}/), ca. 2 Stunden, mit Ablaufplan und Sprechernotizen

<div class="bp-soon">
  <span class="bp-pill bp-pill--soon">In Vorbereitung</span>
  <h3>Sample-Size-Explorer (interaktiv)</h3>
  <p>Wir bauen ein kleines Web-Tool, mit dem du für gängige Designs Präzisions- und Power-Pläne erkunden und gegen Simulationen abgleichen kannst.</p>
</div>

## Verwandte Themen

<div class="bp-pillars">
  <a class="bp-pillar" href="../thinking/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ Workshop 01</div>
    <h3>Denke Bayesianisch</h3>
    <p>Bayesianische Intuition aufbauen.</p>
  </a>
  <a class="bp-pillar" href="../power/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ Workshop 02</div>
    <h3>Beyond Significance</h3>
    <p>Effekte verstehen statt p-Werte ablesen.</p>
  </a>
  <a class="bp-pillar" href="../../fragen/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ FRAGEN</div>
    <h3>Themenzentrierter Einstieg</h3>
    <p>Konkrete Fragen → passende Kapitel und Methoden.</p>
  </a>
</div>
