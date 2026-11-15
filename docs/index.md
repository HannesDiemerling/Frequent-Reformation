---
hide:
  - navigation
  - toc
title: Beyond p-values · Hub für bessere Forschungspraxis
---

<section class="bp-hero">
  <div class="bp-hero__inner">
    <div>
      <span class="bp-hero__eyebrow"><span class="dot"></span> Workshops · Methoden · Werkzeuge</span>
      <h1>Jenseits des <span class="grad">p-Werts</span>.<br>Besser forschen.</h1>
      <p class="bp-hero__lead">
        Bessere Antworten als „signifikant oder nicht": Effektgrößen, repräsentative
        Stichproben und bayesianische Inferenz, verständlich erklärt und direkt im
        Browser zum Mitmachen.
      </p>
      <div class="bp-hero__ctas">
        <a class="bp-btn bp-btn--primary" href="workshops/">Workshops entdecken →</a>
        <a class="bp-btn bp-btn--ghost" href="fragen/">Mit deiner Frage starten</a>
      </div>
    </div>
    <div class="bp-hero__visual">
      <img src="assets/Logo2.png" alt="Beyond p-values Logo">
    </div>
  </div>
</section>

<div class="bp-stats">
  <div class="bp-stat">
    <span class="bp-stat__num">61&nbsp;%</span>
    <span class="bp-stat__label">Falsch-positiv-Rate, wenn fragwürdige Forschungspraktiken zusammenkommen <em>(Simmons et&nbsp;al., 2011)</em>.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">3</span>
    <span class="bp-stat__label">interaktive Workshops, vollständig im Browser, jederzeit im eigenen Tempo.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">{{ workshops.thinking.chapters_count + workshops.power.chapters_count + workshops.reliability.chapters_count }}</span>
    <span class="bp-stat__label">Kapitel mit Theorie und interaktiven Beispielen am SmartRail-Szenario.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">2015</span>
    <span class="bp-stat__label">verzichtet <em>Basic and Applied Social Psychology</em> als erstes Journal vollständig auf p-Werte.</span>
  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Überblick</span>
    <h2>Drei Wege ins Material</h2>
    <p class="bp-section-head__lead">
      Strukturiert über Workshops, themenzentriert über Fragen, vertieft über die
      Methoden-Seiten. Wähle den Einstieg, der zu dir passt.
    </p>
  </div>
  <a class="bp-section-head__link" href="ueber/">Mehr über das Projekt →</a>
</div>

<div class="bp-bento">

  <a class="bp-bento__cell x4 y2 tone-navy" href="workshops/">
    <span class="icon">▶</span>
    <div>
      <h3>Workshops, strukturiert lernen</h3>
      <p>
        Drei Workshops mit insgesamt {{ workshops.thinking.chapters_count + workshops.power.chapters_count + workshops.reliability.chapters_count }} Kapiteln. Vollständig im Browser, jederzeit
        im eigenen Tempo. Geführte Workshops sind in Planung.
      </p>
    </div>
  </a>

  <a class="bp-bento__cell x2 tone-coral" href="fragen/">
    <span class="icon">?</span>
    <h3>Fragen, themenzentriert</h3>
    <p>Klick auf deine Frage und springe direkt ins passende Kapitel.</p>
  </a>

  <a class="bp-bento__cell x2" href="methoden/p-werte/">
    <span class="icon">⚠</span>
    <h3>Probleme des p-Werts</h3>
    <p>Sieben verbreitete Fehlannahmen, kompakt erklärt.</p>
  </a>

  <a class="bp-bento__cell x3 tone-teal" href="ressourcen/tools/">
    <span class="icon">⚙</span>
    <h3>Tools & Software</h3>
    <p>Bayes-Analysen mit JASP, Jamovi, brms und PyMC: von Klick-GUI bis Code.</p>
  </a>

  <a class="bp-bento__cell x3 tone-sand">
    <span class="icon">✦</span>
    <div>
      <span class="quote">„The earth is round (p &lt; .05)."</span>
      <div class="quote-author">Jacob Cohen, 1994</div>
    </div>
  </a>

  <a class="bp-bento__cell x2" href="methoden/effektgroessen/">
    <span class="icon">d</span>
    <h3>Effektgrößen</h3>
    <p>Cohen's d, Hedges' g, η². Verstehen, einordnen, berichten.</p>
  </a>

  <a class="bp-bento__cell x2" href="methoden/stichproben/">
    <span class="icon">N</span>
    <h3>Stichproben & Präzision</h3>
    <p>Wie viele Probanden brauchst du wirklich? Simulation statt Daumenregel.</p>
  </a>

  <a class="bp-bento__cell x2" href="ressourcen/literatur/">
    <span class="icon">📚</span>
    <h3>Literatur</h3>
    <p>Kuratierte Bücher, Reviews und Schlüssel-Papers.</p>
  </a>

</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Workshops</span>
    <h2>Drei Lernpfade im eigenen Tempo</h2>
    <p class="bp-section-head__lead">
      Jeder Workshop läuft vollständig im Browser (Python via Shinylive, keine Installation).
      Alles ist kostenfrei zugänglich. Geführte Sessions für Teams sind in Planung.
    </p>
  </div>
  <a class="bp-section-head__link" href="workshops/">Alle Workshops →</a>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    {% for key in ["power", "reliability", "thinking"] %}
    {% set w = workshops[key] %}
    <a class="bp-card" href="workshops/{{ w.slug }}/" style="text-decoration:none;color:inherit;">
      <span class="bp-card__num">{{ w.number }}</span>
      <span class="bp-card__tag">{{ w.eyebrow }}</span>
      <h3 class="bp-card__title">{{ w.title }}</h3>
      <p class="bp-card__desc">{{ w.tagline }}</p>
      <div class="bp-card__meta">
        <span>📂 {{ w.chapters_count }} Kapitel</span>
        <span>⏱ {{ w.duration_self }} im eigenen Tempo</span>
      </div>
    </a>
    {% endfor %}

    <a class="bp-card" href="workshops/">
      <span class="bp-card__num">04</span>
      <span class="bp-card__tag">Train-the-Trainer</span>
      <h3 class="bp-card__title">Train-the-Trainer-Programm</h3>
      <p class="bp-card__desc">
        Bringe die Methodenwende an deine Hochschule oder Klinik. Mit Zertifizierung,
        fertigem Curriculum und allen nötigen Materialien.
      </p>
      <div class="bp-card__meta">
        <span>👥 Lehrende</span><span class="bp-pill bp-pill--soon">In Planung</span>
      </div>
    </a>

  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Fragen</span>
    <h2>Starte mit deiner Frage</h2>
    <p class="bp-section-head__lead">
      Statt Methoden-Kapitel zu durchsuchen, wähle eine konkrete Frage und springe direkt
      ins passende Workshop-Kapitel.
    </p>
  </div>
  <a class="bp-section-head__link" href="fragen/">Alle Fragen →</a>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">
    {% for q in questions[:6] %}
    <a class="bp-card" href="fragen/#{{ q.key }}">
      <span class="bp-card__tag">{{ q.icon }} &nbsp; Frage</span>
      <h3 class="bp-card__title">{{ q.title }}</h3>
      <p class="bp-card__desc">{{ q.lead }}</p>
      <div class="bp-card__meta">
        <span>🔗 {{ q.links | length }} Verweise</span>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Methoden</span>
    <h2>Die drei methodischen Säulen</h2>
    <p class="bp-section-head__lead">
      Drei Fragen, die jede empirische Studie beantworten sollte, und die Werkzeuge,
      mit denen sie sich tatsächlich beantworten lassen.
    </p>
  </div>
  <a class="bp-section-head__link" href="methoden/">Alle Methoden →</a>
</div>

<div class="bp-pillars">

  <a class="bp-pillar" href="methoden/effektgroessen/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">FRAGE 01</div>
    <h3>Gibt es einen Effekt, und wie groß?</h3>
    <p>
      Antwort: <strong>Effekte und Effektgrößen.</strong> Cohen's d, Hedges' g oder schlicht
      Mittelwertsdifferenzen liefern die Größe direkt. Der p-Wert kann das prinzipbedingt nicht.
    </p>
  </a>

  <a class="bp-pillar" href="methoden/stichproben/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">FRAGE 02</div>
    <h3>Wie verlässlich ist die Schätzung?</h3>
    <p>
      Antwort: <strong>Stichprobenqualität und Stichprobengröße.</strong> Repräsentativität,
      Drop-outs und Präzisions-Simulationen sagen mehr aus als jede pauschale Power-Tabelle.
    </p>
  </a>

  <a class="bp-pillar" href="methoden/bayesian/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">FRAGE 03</div>
    <h3>Was sagen die Daten über die Hypothese?</h3>
    <p>
      Antwort: <strong>Bayesianische Datenanalyse.</strong> Wahrscheinlichkeiten für Hypothesen,
      Bayes-Faktoren und sequenzielles Lernen, statt binärem Sieger-Verlierer-Schema.
    </p>
  </a>

</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Ressourcen</span>
    <h2>Software, Literatur und Talks</h2>
    <p class="bp-section-head__lead">
      Eine kuratierte Auswahl: Werkzeuge und Quellen, mit denen wir selbst arbeiten und
      die wir guten Gewissens weiterempfehlen.
    </p>
  </div>
  <a class="bp-section-head__link" href="ressourcen/">Alle Ressourcen →</a>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <a class="bp-card" href="{{ links.jasp }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Software · Open Source</span>
      <h3 class="bp-card__title">JASP</h3>
      <p class="bp-card__desc">
        Statistiksoftware mit grafischer Oberfläche und erstklassiger Bayes-Implementierung,
        niederschwellig für Lehre und eigene Analysen.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span></div>
    </a>

    <a class="bp-card" href="{{ links.jamovi }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Software · Open Source</span>
      <h3 class="bp-card__title">Jamovi</h3>
      <p class="bp-card__desc">
        Modulare Plattform auf R-Basis. Klassische und bayesianische Tests stehen
        nebeneinander, erweiterbar mit zahlreichen Modulen.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span></div>
    </a>

    <a class="bp-card" href="ressourcen/literatur/">
      <span class="bp-card__tag">Buch</span>
      <h3 class="bp-card__title">Statistical Rethinking</h3>
      <p class="bp-card__desc">
        Richard McElreaths Klassiker, wahrscheinlich der beste Einstieg in bayesianisches
        Denken überhaupt. Inklusive frei verfügbarer Vorlesungsreihe.
      </p>
      <div class="bp-card__meta"><span>📘 612 Seiten</span><span>🎥 Vorlesungsreihe</span></div>
    </a>

    <a class="bp-card" href="ressourcen/literatur/">
      <span class="bp-card__tag">Paper</span>
      <h3 class="bp-card__title">ASA Statement on p-Values</h3>
      <p class="bp-card__desc">
        Wasserstein und Lazar (2016): der offizielle Konsens der American Statistical
        Association zur Auslegung des p-Werts.
      </p>
      <div class="bp-card__meta"><span>📄 6 Seiten</span><span>🔗 DOI</span></div>
    </a>

    <a class="bp-card" href="ressourcen/videos/">
      <span class="bp-card__tag">Video</span>
      <h3 class="bp-card__title">Vorlesungsreihe McElreath</h3>
      <p class="bp-card__desc">
        Komplette „Statistical Rethinking"-Vorlesung, frei auf YouTube. Ideal als
        Begleitung zum Buch oder als eigenständiger Lernpfad.
      </p>
      <div class="bp-card__meta"><span>🎥 20 Folgen</span><span>⏱ 30+ h</span></div>
    </a>

    <a class="bp-card" href="ressourcen/journals/">
      <span class="bp-card__tag">Journal</span>
      <h3 class="bp-card__title">BASP: Publizieren ohne p-Werte</h3>
      <p class="bp-card__desc">
        <em>Basic and Applied Social Psychology</em> verzichtet seit 2015 vollständig auf
        p-Werte. Eine Blaupause für eine neue Berichtskultur.
      </p>
      <div class="bp-card__meta"><span>📰 Quarterly</span><span>🔗 Editorial</span></div>
    </a>

  </div>
</div>

<div class="bp-callout">
  <div style="grid-column: 1 / -1; text-align: center;">
    <h3>Fragen, Anfragen oder Kooperation?</h3>
    <p>
      Schreib uns direkt. Wir freuen uns über Nachrichten von Forschenden, Lehrenden und
      Institutionen, die die Methodenwende mittragen wollen.
    </p>
    <a class="bp-btn bp-btn--primary" href="mailto:{{ contact.email }}">E-Mail an {{ contact.name }} →</a>
  </div>
</div>

<div class="bp-fundstrip">
  <span class="bp-fundstrip__intro">In Trägerschaft der HMU Erfurt, gefördert durch die VolkswagenStiftung.</span>
  <div class="bp-logobar">
    <div class="bp-logobar__item">
      <span class="bp-logobar__label">In Trägerschaft</span>
      <a class="bp-logobar__card" href="{{ links.hmu }}" target="_blank" rel="noopener">
        <img src="assets/HMU_Logo_Erfurt_transparent.png" alt="HMU Health and Medical University Erfurt">
      </a>
    </div>
    <div class="bp-logobar__item">
      <span class="bp-logobar__label">Gefördert durch</span>
      <a class="bp-logobar__card" href="{{ links.volkswagenstiftung }}" target="_blank" rel="noopener">
        <img src="assets/volkswagenstiftung.png" alt="VolkswagenStiftung">
      </a>
    </div>
  </div>
</div>
