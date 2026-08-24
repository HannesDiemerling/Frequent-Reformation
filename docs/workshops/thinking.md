---
title: Denke Bayesianisch · Workshop 01
---

{% set w = workshops.thinking %}

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

Bayesianische Statistik beginnt mit einer einfachen Idee: **Wahrscheinlichkeit ist ein Maß für
Überzeugung**, das sich durch Daten aktualisieren lässt. Dieser Workshop baut die Intuition
dafür von Grund auf, anschaulich am laufenden SmartRail-Szenario der Deutschen Bahn.

Du lernst, wie Prior, Likelihood und Posterior zusammenspielen, wie du Glaubwürdigkeitsintervalle
korrekt interpretierst und warum MCMC die Brücke von Theorie zur praktischen Anwendung ist.

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

- [x] Den Unterschied zwischen frequentistischer und bayesianischer Wahrscheinlichkeit erklären.
- [x] Das **Bayes-Theorem** Schritt für Schritt anwenden: Prior, Likelihood, Posterior.
- [x] Die Wahl eines Priors begründen und seine Wirkung einschätzen.
- [x] Glaubwürdigkeitsintervalle richtig **lesen, berichten und kommunizieren**.
- [x] Posterior-Predictive-Verteilungen für **Vorhersagen** nutzen.
- [x] Die Rolle von **MCMC** verstehen, wenn analytische Lösungen versagen.

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
- **Foliensatz für Vortragende:** [Vortrag zu diesem Workshop]({{ links['folien_' + w.key] }}), ca. 2 Stunden, mit Ablaufplan und Sprechernotizen

<div class="bp-soon">
  <span class="bp-pill bp-pill--soon">In Vorbereitung</span>
  <h3>Aufzeichnungen &amp; Übungs-PDFs</h3>
  <p>Wir bereiten zusätzlich kuratierte Aufzeichnungen, ein Quiz und Druck-Versionen für die Lehre vor. Veröffentlichung erfolgt sukzessive über das ZPID.</p>
</div>

## Verwandte Themen

<div class="bp-pillars">
  <a class="bp-pillar" href="../power/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ Workshop 02</div>
    <h3>Beyond Significance</h3>
    <p>Effekte verstehen statt p-Werte ablesen.</p>
  </a>
  <a class="bp-pillar" href="../reliability/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ Workshop 03</div>
    <h3>Repräsentativität &amp; Stichprobengröße</h3>
    <p>Wie verlässlich verallgemeinert deine Studie?</p>
  </a>
  <a class="bp-pillar" href="../../fragen/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ FRAGEN</div>
    <h3>Themenzentrierter Einstieg</h3>
    <p>Konkrete Fragen → passende Kapitel und Methoden.</p>
  </a>
</div>
