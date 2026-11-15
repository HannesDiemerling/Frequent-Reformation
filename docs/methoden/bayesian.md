---
title: Bayesianische Datenanalyse
---

# Bayesianische Datenanalyse

> **Frage 03, beantwortet.** Wie stark sprechen die Daten für eine bestimmte Hypothese?
> Bayesianische Methoden geben dir genau diese Antwort, als Wahrscheinlichkeit, nicht als
> binäres Urteil.

## Die Grundidee in einem Satz

> **Aktualisiere deine Überzeugung über eine Hypothese, indem du Vorwissen und Daten
> kombinierst, und beschreibe das Ergebnis als Wahrscheinlichkeitsverteilung.**

Mathematisch:

$$
P(H \mid D) \;=\; \frac{P(D \mid H) \cdot P(H)}{P(D)}
$$

In Worten: **Posterior = (Likelihood × Prior) / Evidenz**.

## Drei Bausteine

<div class="bp-pillars">

  <div class="bp-pillar">
    <div class="bp-pillar__num">BAUSTEIN 01</div>
    <h3>Prior</h3>
    <p>Was glaubst du über die Hypothese, bevor du die Daten siehst? Kann von "uninformativ" bis "stark theoriegestützt" reichen.</p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">BAUSTEIN 02</div>
    <h3>Likelihood</h3>
    <p>Wie wahrscheinlich sind deine Daten unter verschiedenen möglichen Werten der Hypothese? Genau das, was auch klassische Inferenz nutzt.</p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">BAUSTEIN 03</div>
    <h3>Posterior</h3>
    <p>Deine aktualisierte Überzeugung, die Verteilung, die du für Schlüsse, Punktschätzer und Intervalle verwendest.</p>
  </div>

</div>

## Was du daraus bekommst

### 1. Punktschätzer mit echtem Intervall

Statt eines Konfidenzintervalls (das viele falsch interpretieren) erhältst du ein
**Glaubwürdigkeitsintervall (Credible Interval, HDI)**, und es bedeutet genau das, was die
Intuition vermutet: *„Mit 95 % Wahrscheinlichkeit liegt der wahre Wert im Intervall."*

### 2. Bayes-Faktor

Das Verhältnis der Wahrscheinlichkeit deiner Daten unter zwei Hypothesen:

$$
\text{BF}_{10} \;=\; \frac{P(D \mid H_1)}{P(D \mid H_0)}
$$

| BF₁₀     | Lesart (Lee & Wagenmakers, 2013) |
|----------|----------------------------------|
| 1 – 3    | Anekdotische Evidenz für H₁      |
| 3 – 10   | Moderate Evidenz                 |
| 10 – 30  | Starke Evidenz                   |
| 30 – 100 | Sehr starke Evidenz              |
| > 100    | Extreme Evidenz                  |

Symmetrisch funktionieren die gleichen Stufen für **BF₀₁**, also Evidenz **für** die
Nullhypothese. Genau das ist eine Stärke, die der Signifikanztest nicht hat.

### 3. Posterior-Wahrscheinlichkeiten

Direkte Aussagen wie *„Mit 87 % Wahrscheinlichkeit ist der Effekt mindestens d = 0.3."*,
formuliert in genau der Sprache, die Forschende, Anwendende und Öffentlichkeit
verstehen.

## Ein typischer Workflow

<div class="bp-timeline">
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt 01</div>
    <h3 class="bp-timeline__title">Modell spezifizieren</h3>
    <p>Likelihood, Parameter, Priors. Das Modell muss zur Frage passen, nicht zur Software.</p>
  </div>
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt 02</div>
    <h3 class="bp-timeline__title">Prior-Predictive Check</h3>
    <p>Generiere Daten aus dem Prior. Sieht das plausibel aus? Falls nein: Prior schärfen oder Modell überdenken.</p>
  </div>
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt 03</div>
    <h3 class="bp-timeline__title">Inferenz durchführen</h3>
    <p>MCMC (Stan/PyMC), Variational Inference oder analytisch, je nach Modell.</p>
  </div>
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt 04</div>
    <h3 class="bp-timeline__title">Diagnostik</h3>
    <p>Konvergenz prüfen (R̂, ESS, Trace-Plots). Ohne saubere Diagnostik ist Posterior wertlos.</p>
  </div>
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt 05</div>
    <h3 class="bp-timeline__title">Posterior-Predictive Check</h3>
    <p>Repliziert das Modell die Daten? Wo nicht? Modellkritik gehört zum bayesianischen Workflow.</p>
  </div>
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt 06</div>
    <h3 class="bp-timeline__title">Schlüsse formulieren</h3>
    <p>Effekt, Glaubwürdigkeitsintervall, ggf. Bayes-Faktor, und alles als Wahrscheinlichkeitsaussage.</p>
  </div>
</div>

## Software: mit was anfangen?

=== "Einsteigende: JASP / Jamovi"

    Beide Programme bieten **klickbare Bayes-Tests** (t-Test, ANOVA, Korrelation, Regression)
    mit sinnvollen Default-Priors. Ideal für die Lehre, für erste eigene Analysen und für
    Forschende, die keine Programmiersprache lernen möchten.

    [JASP herunterladen]({{ links.jasp }}){ .md-button }
    [Jamovi herunterladen]({{ links.jamovi }}){ .md-button }

=== "Fortgeschritten: R / brms"

    Für komplexere Modelle (hierarchisch, multivariat, nicht-linear) ist **`brms`**
    (auf Stan-Basis) der Goldstandard im R-Universum.

    ```r
    library(brms)
    fit <- brm(y ~ x + (1 | id), data = dat, family = gaussian())
    summary(fit)
    ```

    [brms-Dokumentation öffnen]({{ links.brms }}){ .md-button }

=== "Power-User: Stan / PyMC"

    **Stan** und **PyMC** geben dir vollständige Modellspezifikation. Maximale Flexibilität,
    aber höhere Einstiegshürde.

    [Stan]({{ links.stan }}){ .md-button }
    [PyMC]({{ links.pymc }}){ .md-button }

## Häufige Sorgen: kurz beantwortet

<div class="bp-faq">

  <details>
    <summary>„Aber Priors sind doch subjektiv!"</summary>
    <p>Jede statistische Analyse trifft Annahmen, Priors machen sie nur explizit. Sensitivitätsanalysen zeigen, wie stark die Schlüsse vom Prior abhängen. Bei genug Daten dominiert die Likelihood ohnehin.</p>
  </details>

  <details>
    <summary>„Brauche ich einen Supercomputer?"</summary>
    <p>Nein. Standardmodelle laufen in Sekunden bis Minuten auf einem normalen Notebook. Auch komplexere Modelle sind heute alltagstauglich, die Hardware ist selten der Engpass.</p>
  </details>

  <details>
    <summary>„Was sage ich Begutachtenden, die mit Bayes nicht vertraut sind?"</summary>
    <p>Berichte Effektgröße und HDI immer in der intuitiven Sprache, biete den Bayes-Faktor zusätzlich an und verweise auf das ASA-Statement sowie das Editorial von <em>Basic and Applied Social Psychology</em>. Die <a href="../../ressourcen/literatur/">Literaturseite</a> liefert die Referenzen.</p>
  </details>

  <details>
    <summary>„Kann ich beides berichten, Bayes und p-Wert?"</summary>
    <p>Ja, in vielen Journals ist das aktuell der pragmatische Weg. Wenn beide Ergebnisse einander widersprechen, liegt das meist daran, dass der p-Wert die Frage falsch beantwortet, nicht der Bayes-Faktor.</p>
  </details>

</div>

## Übungs-Kapitel: direkt anwenden

Diese Workshop-Kapitel vertiefen das Thema mit interaktiven Beispielen im Browser:

<div class="bp-carousel">
  <div class="bp-carousel__track">
    {% for ref in [
      {"workshop": "thinking", "chapter": 2},
      {"workshop": "thinking", "chapter": 3},
      {"workshop": "thinking", "chapter": 4},
      {"workshop": "thinking", "chapter": 5},
      {"workshop": "thinking", "chapter": 6},
      {"workshop": "thinking", "chapter": 7}
    ] %}
      {% set ws = workshops[ref.workshop] %}
      {% set ch = ws.chapters[ref.chapter - 1] %}
      <a class="bp-card" href="{{ ws.base }}/{{ ch.file }}" target="_blank" rel="noopener">
        <span class="bp-card__num">{{ "%02d" | format(ch.num) }}</span>
        <span class="bp-card__tag">{{ ws.title }}</span>
        <h3 class="bp-card__title">{{ ch.title }}</h3>
        <p class="bp-card__desc">Theorie + interaktive Browser-App. ↗ extern.</p>
        <div class="bp-card__meta"><span>⏱ {{ ch.time }}</span><span>🎚 {{ ch.level }}</span></div>
      </a>
    {% endfor %}
  </div>
</div>

<div class="bp-soon">
  <span class="bp-pill bp-pill--soon">In Arbeit</span>
  <h3>Interaktive Bayes-Demos</h3>
  <p>Wir bauen kleine, im Browser laufende Visualisierungen für Prior + Likelihood = Posterior, sequenzielles Updating und Bayes-Faktor-Skala. Geplant für Q3 2026.</p>
</div>

## Schlüsselliteratur

- **McElreath, R. (2020).** *Statistical Rethinking* (2nd ed.). CRC Press.
- **Kruschke, J. (2014).** *Doing Bayesian Data Analysis* (2nd ed.).
- **Lee, M. D. & Wagenmakers, E.-J. (2013).** *Bayesian Cognitive Modeling.*
- **Gelman, A. et al. (2013).** *Bayesian Data Analysis* (3rd ed.).

→ Vollständig in den [Ressourcen](../ressourcen/literatur.md).
