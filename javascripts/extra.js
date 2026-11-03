/* Beyond p-values, kleine UI-Helfer */

(function () {
  // ============================================================
  // GLOSSAR: Tooltip-Begriffe
  // ============================================================
  // Pflege ausschließlich hier. Eine Zeile pro Begriff:
  //   "Begriff": "Kurze Erklärung in einem Satz."
  //
  // Hinweise:
  // - Groß-/Kleinschreibung wird beachtet.
  // - Für Plural/Genitiv ggf. zweite Zeile mit gleichem Text.
  // - Wortgrenzen werden automatisch erkannt (auch Umlaute).
  // - In Überschriften, Links, Code-Blöcken und Header/Tabs/Footer
  //   wird NICHT umgewandelt (siehe SKIP-Regeln unten).
  // ============================================================
  const BP_GLOSSARY = {
    "p-Wert":
      "Wahrscheinlichkeit, ein mindestens so extremes Ergebnis wie das beobachtete zu sehen, wenn die Nullhypothese wahr wäre. Er sagt nichts darüber, wie wahrscheinlich die Hypothese selbst ist.",
    "p-Werts":
      "Wahrscheinlichkeit, ein mindestens so extremes Ergebnis wie das beobachtete zu sehen, wenn die Nullhypothese wahr wäre.",
    "p-Werte":
      "Wahrscheinlichkeit, ein mindestens so extremes Ergebnis wie das beobachtete zu sehen, wenn die Nullhypothese wahr wäre.",
    "p-Werten":
      "Wahrscheinlichkeit, ein mindestens so extremes Ergebnis wie das beobachtete zu sehen, wenn die Nullhypothese wahr wäre.",

    "Signifikanztest":
      "Klassisches Testverfahren, das prüft, ob ein Ergebnis unter Annahme der Nullhypothese „überraschend“ ist. Beantwortet nicht, ob ein Effekt real oder bedeutsam ist.",
    "Signifikanztests":
      "Klassisches Testverfahren, das prüft, ob ein Ergebnis unter Annahme der Nullhypothese „überraschend“ ist.",
    "Signifikanz":
      "Aussage, dass ein Ergebnis unter der Nullhypothese unwahrscheinlich genug ist, um sie zu verwerfen, sagt aber nichts über Effektgröße oder Bedeutsamkeit.",

    "Nullhypothese":
      "Annahme „kein Effekt / kein Unterschied / kein Zusammenhang“, gegen die der Signifikanztest argumentiert.",
    "Alternativhypothese":
      "Die zu prüfende Hypothese, meist „es gibt einen Effekt“, in Abgrenzung zur Nullhypothese.",

    "Konfidenzintervall":
      "Wertebereich aus einer frequentistischen Schätzung. NICHT „der wahre Wert liegt mit X % Wahrscheinlichkeit darin“, das ist die häufige Fehlinterpretation.",
    "Konfidenzintervalle":
      "Wertebereiche aus frequentistischen Schätzungen. NICHT mit Bayesianischen Glaubwürdigkeitsintervallen verwechseln.",

    "Glaubwürdigkeitsintervall":
      "Bayesianisches Pendant zum Konfidenzintervall. Hier IST die Aussage „der wahre Wert liegt mit X % Wahrscheinlichkeit im Intervall“ korrekt.",
    "Glaubwürdigkeitsintervalle":
      "Bayesianische Intervalle: hier ist die intuitive Lesart „mit X % Wahrscheinlichkeit liegt der Wert darin“ tatsächlich korrekt.",
    "Credible Interval":
      "Bayesianisches Intervall: „der wahre Wert liegt mit X % Wahrscheinlichkeit in diesem Bereich“.",
    "HDI":
      "Highest Density Interval: der schmalste Bereich der Posterior-Verteilung, der eine bestimmte Wahrscheinlichkeitsmasse (z. B. 95 %) enthält.",
    "ROPE":
      "Region of Practical Equivalence: vorab festgelegter Wertebereich um null, innerhalb dessen ein Effekt als praktisch bedeutungslos gilt.",

    "Prior":
      "Wahrscheinlichkeitsverteilung, die deine Annahmen über einen Parameter VOR der Datenbeobachtung formalisiert.",
    "Priors":
      "Wahrscheinlichkeitsverteilungen, die Annahmen über Parameter VOR der Datenbeobachtung formalisieren.",
    "Posterior":
      "Aktualisierte Wahrscheinlichkeitsverteilung über einen Parameter NACH Berücksichtigung der beobachteten Daten, Hauptergebnis bayesianischer Analysen.",
    "Likelihood":
      "Wahrscheinlichkeit, die beobachteten Daten unter einer bestimmten Annahme (Parameterwert) zu sehen. Verbindet Daten und Hypothese.",
    "Posterior-Predictive":
      "Bayesianische Vorhersageverteilung für neue, noch unbeobachtete Datenpunkte, berücksichtigt sowohl Parameterunsicherheit als auch natürliches Rauschen.",

    "Bayes-Theorem":
      "Mathematische Regel, mit der Vorwissen (Prior) und neue Daten (Likelihood) zur aktualisierten Überzeugung (Posterior) kombiniert werden.",
    "Bayes-Faktor":
      "Verhältnis der Wahrscheinlichkeit der Daten unter zwei konkurrierenden Hypothesen, das bayesianische Maß für die Stärke der Evidenz.",
    "Bayes-Faktoren":
      "Verhältnisse der Wahrscheinlichkeit der Daten unter konkurrierenden Hypothesen, das bayesianische Maß für die Stärke der Evidenz.",

    "Effektgröße":
      "Standardisiertes oder unstandardisiertes Maß dafür, wie groß ein Unterschied oder Zusammenhang tatsächlich ist, der eigentliche „Was?“ hinter einem Ergebnis.",
    "Effektgrößen":
      "Standardisierte oder unstandardisierte Maße dafür, wie groß Unterschiede oder Zusammenhänge tatsächlich sind.",
    "Effekt":
      "Tatsächlich messbare Veränderung in der realen Welt, die einzig wirklich relevante Größe für Theorie und Praxis.",
    "Effekte":
      "Tatsächlich messbare Veränderungen: Unterschiede zwischen Gruppen oder Zusammenhänge zwischen Variablen.",
    "Effektstärke":
      "Synonym für Effektgröße: Maß dafür, wie groß ein Effekt tatsächlich ist.",
    "Effektstärken":
      "Synonym für Effektgrößen: Maße dafür, wie groß Effekte tatsächlich sind.",

    "Cohen's d":
      "Standardisierte Effektgröße für Mittelwertsdifferenzen: Differenz geteilt durch die gepoolte Standardabweichung. Daumenregeln: 0.2 klein, 0.5 mittel, 0.8 groß.",
    "Hedges' g":
      "Cohen's d mit Korrektur für kleine Stichproben, in Meta-Analysen oft bevorzugt.",
    "η²":
      "Eta-Quadrat: Anteil der Gesamtvarianz, der durch einen Faktor in einer ANOVA aufgeklärt wird.",
    "Eta-Quadrat":
      "η²: Anteil der Gesamtvarianz, der in einer ANOVA durch einen Faktor aufgeklärt wird.",
    "ω²":
      "Omega-Quadrat: wenig verzerrte Variante von η² für ANOVA-Effekte.",
    "Pearson's r":
      "Korrelationskoeffizient: Stärke und Richtung eines linearen Zusammenhangs zweier Variablen, im Bereich [-1, 1].",
    "Odds Ratio":
      "Quotenverhältnis: Standard-Effektmaß für 2×2-Tabellen, häufig in Medizin und Epidemiologie.",
    "Risk Ratio":
      "Risikoverhältnis: relatives Risiko zwischen zwei Gruppen; intuitiver als Odds Ratio.",

    "p-Hacking":
      "Wiederholtes Variieren von Datenanalyse-Schritten mit dem Ziel, einen p-Wert unter 0.05 zu erreichen. Treibt die Falsch-positiv-Rate massiv nach oben.",
    "HARKing":
      "„Hypothesizing After the Results are Known“: Hypothesen erst nach Sicht der Daten formulieren und sie als a-priori präsentieren.",
    "Publikationsbias":
      "Verzerrung der Literatur dadurch, dass signifikante Ergebnisse häufiger publiziert werden als nicht-signifikante. Folge: Effekte werden im Mittel überschätzt.",
    "Publication Bias":
      "Verzerrung der Literatur dadurch, dass signifikante Ergebnisse häufiger publiziert werden. Effekte werden im Mittel überschätzt.",
    "QRP":
      "Questionable Research Practices: methodisch fragwürdige Vorgehensweisen wie p-Hacking, HARKing oder selektives Reporting.",
    "QRPs":
      "Questionable Research Practices: methodisch fragwürdige Vorgehensweisen wie p-Hacking, HARKing oder selektives Reporting.",

    "Reproduzierbarkeit":
      "Eigenschaft eines Ergebnisses, sich bei unabhängiger Wiederholung der Studie zu bestätigen. Tritt seit ca. 2005 als systemisches Problem in vielen Disziplinen zutage.",
    "Reproduzierbarkeitskrise":
      "Beobachtung, dass viele publizierte Befunde sich in Replikationsstudien nicht bestätigen, wesentlicher Treiber methodischer Reformen.",
    "Replikation":
      "Unabhängige Wiederholung einer Studie zur Überprüfung der Befunde, entscheidend für die Verlässlichkeit wissenschaftlicher Erkenntnisse.",
    "Replikationsstudie":
      "Studie, die einen früheren Befund unter möglichst gleichen Bedingungen erneut prüft.",
    "Meta-Analyse":
      "Statistische Synthese mehrerer Einzelstudien zu einem gemeinsamen Effektschätzer, quantifiziert Evidenz über Studien hinweg.",
    "Preregistration":
      "Vor der Datenerhebung registrierter Analyseplan, schützt vor p-Hacking und HARKing.",
    "Registered Report":
      "Publikationsformat, bei dem Studiendesign und Hypothesen vor Datenerhebung begutachtet und akzeptiert werden, unabhängig vom Ergebnis.",
    "Registered Reports":
      "Publikationsformat, bei dem Studiendesigns vor Datenerhebung begutachtet werden: Annahme unabhängig vom Ergebnis.",
    "Open Science":
      "Bewegung für transparente, nachvollziehbare und offen geteilte Forschungspraxis (Daten, Code, Materialien, Preregistration).",
    "Sensitivitätsanalyse":
      "Wiederholung der Analyse mit veränderten Annahmen, um zu prüfen, wie robust die Schlussfolgerung ist.",

    "MCMC":
      "Markov Chain Monte Carlo: numerischer Algorithmus, der die Posterior-Verteilung durch intelligentes Sampling approximiert, wenn analytische Lösungen nicht möglich sind.",
    "Power":
      "Wahrscheinlichkeit, einen tatsächlich vorhandenen Effekt mit dem Test auch zu finden. Hängt von Effektstärke, Stichprobengröße und Alpha ab.",
    "Power-Analyse":
      "Berechnung der nötigen Stichprobengröße, um einen angenommenen Effekt mit gewünschter Wahrscheinlichkeit signifikant zu finden.",

    "Stichprobengröße":
      "Anzahl der Untersuchungseinheiten in einer Studie. Bestimmt mit der Effektstärke die Power und Schätzgenauigkeit.",
    "Standardfehler":
      "Maß für die Streuung einer Schätzung über hypothetische Stichprobenwiederholungen. Schrumpft mit wachsender Stichprobe.",
    "Standardabweichung":
      "Maß für die Streuung einer Variable um ihren Mittelwert.",
    "Repräsentativität":
      "Eigenschaft einer Stichprobe, die Zielpopulation in den relevanten Merkmalen unverzerrt abzubilden.",
    "WEIRD":
      "Akronym für Western, Educated, Industrialized, Rich, Democratic: Stichproben, die in der psychologischen Forschung dominieren und nicht repräsentativ für die Weltbevölkerung sind.",

    "Drop-out":
      "Vorzeitiges Ausscheiden von Studienteilnehmenden, kann die Stichprobe systematisch verzerren, wenn das Ausscheiden nicht zufällig geschieht.",
    "Drop-outs":
      "Vorzeitig ausgeschiedene Studienteilnehmende, können die Stichprobe verzerren, wenn das Ausscheiden nicht zufällig geschieht.",
    "Dropouts":
      "Vorzeitig ausgeschiedene Studienteilnehmende, können die Stichprobe verzerren, wenn das Ausscheiden nicht zufällig geschieht.",
    "Missings":
      "Fehlende Werte in einem Datensatz, können je nach Mechanismus zu erheblichen Verzerrungen führen.",

    "Falsch-positiv":
      "Fälschliche Annahme eines Effekts (Ablehnung der Nullhypothese), obwohl in Wahrheit kein Effekt existiert. Auch: Alpha-Fehler oder Typ-I-Fehler.",
    "falsch-positiv":
      "Fälschliche Annahme eines Effekts, obwohl in Wahrheit kein Effekt existiert. Auch: Alpha-Fehler oder Typ-I-Fehler.",
    "Falsch-negativ":
      "Übersehen eines tatsächlichen Effekts. Auch: Beta-Fehler oder Typ-II-Fehler.",
    "Alpha-Fehler":
      "Typ-I-Fehler: fälschliche Ablehnung der Nullhypothese, obwohl sie wahr ist. Konventionell auf 5 % begrenzt.",
    "Beta-Fehler":
      "Typ-II-Fehler: fälschliche Beibehaltung der Nullhypothese, obwohl sie falsch ist.",

    "Frequentismus":
      "Statistik-Schule, die Wahrscheinlichkeit als langfristige relative Häufigkeit über unendlich viele Wiederholungen interpretiert.",
    "frequentistisch":
      "Bezogen auf den Frequentismus: Wahrscheinlichkeit als langfristige Häufigkeit verstanden.",
    "Bayesianismus":
      "Statistik-Schule, die Wahrscheinlichkeit als Grad der Überzeugung versteht, der durch Daten aktualisiert wird.",
    "bayesianisch":
      "Bezogen auf den Bayesianismus: Wahrscheinlichkeit als aktualisierbare Überzeugung verstanden.",
    "Bayesianische":
      "Bezogen auf den Bayesianismus: Wahrscheinlichkeit als aktualisierbare Überzeugung verstanden.",

    "BFDA":
      "Bayes Factor Design Analysis: Methode zur Stichprobenplanung mit Ziel-Bayes-Faktor und Simulation.",
    "ASA":
      "American Statistical Association: Berufsverband; veröffentlichte 2016 das einflussreiche Statement zu p-Werten.",
    "BASP":
      "Basic and Applied Social Psychology: Journal, das seit 2015 keine p-Werte mehr in Artikeln zulässt.",
    "OSF":
      "Open Science Framework: Plattform für Preregistration, Datenarchivierung und offenes Forschungsmanagement.",
    "ZPID":
      "Leibniz-Institut für Psychologie (Trier): zentrale Open-Science-Infrastruktur für Psychologie im DACH-Raum.",
    "JASP":
      "Open-Source-Statistiksoftware (Universität Amsterdam) mit erstklassiger Bayes-Implementierung und klassischer GUI.",
    "Jamovi":
      "Open-Source-Statistik-Plattform auf R-Basis, modular, mit GUI und Bayes-Modulen.",
    "brms":
      "R-Paket für bayesianische Regression auf Stan-Basis: Formel-Syntax wie lme4, deutlich flexibler.",
    "Stan":
      "Probabilistische Programmiersprache mit modernen MCMC-Samplern (HMC/NUTS): Standard für komplexe bayesianische Modelle.",
    "PyMC":
      "Bibliothek für probabilistisches Programmieren in Python: saubere API mit ArviZ-Visualisierungen.",
    "Quarto":
      "System für reproduzierbares wissenschaftliches Publizieren: Markdown + R/Python/Julia, Nachfolger von R Markdown.",
    "Shinylive":
      "Technologie, mit der Python-Anwendungen direkt im Browser laufen, keine Installation nötig.",
    "SmartRail":
      "Fiktives Pilot-System der Deutschen Bahn, das in den Workshops als durchgängiges Beispiel dient.",

    "Pioniervorhaben":
      "Förderlinie der VolkswagenStiftung für transformative Grundlagenforschung mit Pilot-Charakter, adressiert ungelöste Probleme des Wissenschaftssystems.",
    "Faktenbox":
      "Standardisiertes, evidenzbasiertes Informationsformat, etabliert vom Harding-Zentrum für Risikokompetenz, das Nutzen und Schaden medizinischer Maßnahmen in absoluten Zahlen darstellt.",
    "Faktenboxen":
      "Standardisiertes, evidenzbasiertes Informationsformat, etabliert vom Harding-Zentrum, das Nutzen und Schaden medizinischer Maßnahmen in absoluten Zahlen darstellt.",
    "RCT":
      "Randomisierte kontrollierte Studie: Goldstandard für kausale Wirksamkeitsnachweise; Teilnehmende werden zufällig auf Interventions- und Kontrollgruppe verteilt.",
    "Convenience-Sample":
      "Anfallstichprobe: Teilnehmende werden nach Verfügbarkeit ausgewählt (z. B. Studierende einer Vorlesung). Selten repräsentativ für die Zielpopulation.",
    "Convenience-Stichprobe":
      "Anfallstichprobe: Teilnehmende werden nach Verfügbarkeit ausgewählt. Selten repräsentativ.",
    "Self-Selection":
      "Selbstselektion: Personen entscheiden selbst, ob sie an einer Studie teilnehmen. Erzeugt systematische Verzerrungen, weil Motivation und Merkmale korrelieren.",
    "Hierarchisches Modell":
      "Statistisches Modell mit mehreren Ebenen (z. B. Lernende in Klassen). Erlaubt partielles Pooling: Schätzungen pro Gruppe profitieren von der Information aller Gruppen.",
    "Hierarchische Modelle":
      "Statistische Modelle mit mehreren Ebenen, erlauben partielles Pooling über Gruppen hinweg und liefern dadurch stabilere Schätzungen.",
    "Codebook":
      "Dokument, das alle Variablen eines Datensatzes mit Bedeutung, Wertebereich und Kodierung beschreibt, Voraussetzung für Nachvollziehbarkeit und Reanalyse.",
    "DSGVO":
      "EU-Datenschutz-Grundverordnung: regelt seit 2018 die Verarbeitung personenbezogener Daten in der Europäischen Union.",
    "R̂":
      "R-Hat: Konvergenz-Diagnostik für MCMC-Verfahren. Werte nahe 1.00 zeigen, dass mehrere Sampling-Ketten dieselbe Verteilung erreicht haben.",
    "ESS":
      "Effective Sample Size: Anzahl effektiv unabhängiger Stichproben aus einer MCMC-Kette. Niedrige Werte signalisieren autokorrelierte oder ineffiziente Inferenz.",
    "MCMC-Konvergenz":
      "Zustand, in dem die MCMC-Ketten die Posterior-Verteilung stabil approximieren, geprüft mit R̂, ESS und Trace-Plots.",
    "Trace-Plot":
      "Verlaufs-Diagramm einer MCMC-Kette, zeigt, ob die Ketten sich gut durchmischen oder hängenbleiben.",
    "Variational Inference":
      "Approximative Bayes-Inferenz: ersetzt das Sampling durch Optimierung einer einfacheren Verteilung. Schneller als MCMC, aber weniger genau.",
    "ANOVA":
      "Varianzanalyse: testet Mittelwerts-Unterschiede zwischen mehreren Gruppen, indem sie die Gesamtvarianz in erklärte und nicht erklärte Anteile zerlegt.",
    "Cohens d":
      "Standardisierte Effektgröße für Mittelwertsdifferenzen: Differenz geteilt durch die gepoolte Standardabweichung. Daumenregeln: 0.2 klein, 0.5 mittel, 0.8 groß.",
  };

  // ============================================================
  // GLOSSAR-SCANNER: wandelt Vorkommen in <abbr data-tip="…"> um
  // ============================================================
  const SKIP_TAGS = new Set([
    "SCRIPT", "STYLE", "CODE", "PRE", "KBD", "SAMP", "VAR",
    "TEXTAREA", "INPUT", "ABBR", "BUTTON",
    "H1", "H2", "H3", "H4", "H5", "H6"
  ]);
  // Tooltips erscheinen einheitlich im gesamten Fließtext. Ausgeschlossen
  // sind nur Navigations-Chrome (vor allem die großen Tabs), Überschriften
  // und kurze Label-/Badge-/Icon-Elemente, in denen ein unterstrichener
  // Fachbegriff stören oder die Optik brechen würde.
  const SKIP_ANCESTOR_SELECTOR = [
    ".md-header", ".md-tabs", ".md-footer",
    ".md-nav", ".md-search", ".md-sidebar",
    ".bp-card__title", ".bp-card__tag", ".bp-card__num", ".bp-card__meta",
    ".bp-pillar__num",
    ".bp-stat__num",
    ".bp-section-head__eyebrow",
    ".bp-hero__eyebrow",
    ".bp-pill",
    ".bp-bento__cell .icon",
    ".bp-question__icon", ".bp-question__chev",
    ".bp-workshop__num", ".bp-workshop__eyebrow",
    ".bp-mode__head",
    ".bp-timeline__date",
    "h1, h2, h3, h4, h5, h6",
    "a[href^=\"mailto:\"]",  // mailto-CTAs nicht decorieren
    ".bp-btn",               // Buttons nicht decorieren
    "code, pre, kbd, abbr"
  ].join(", ");

  const WORD_RE = /[A-Za-z0-9_äöüÄÖÜß]/;

  function buildGlossaryRegex() {
    const terms = Object.keys(BP_GLOSSARY).sort((a, b) => b.length - a.length);
    if (!terms.length) return null;
    const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return new RegExp("(" + escaped.join("|") + ")", "g");
  }

  function applyGlossary(root) {
    const regex = buildGlossaryRegex();
    if (!regex) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.closest(SKIP_ANCESTOR_SELECTOR)) return NodeFilter.FILTER_REJECT;
          regex.lastIndex = 0;
          return regex.test(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach((node) => {
      const text = node.nodeValue;
      const frag = document.createDocumentFragment();
      let lastIdx = 0;
      let matched = false;
      regex.lastIndex = 0;

      let m;
      while ((m = regex.exec(text)) !== null) {
        const term = m[0];
        const start = m.index;
        const prev = text.charAt(start - 1);
        const next = text.charAt(start + term.length);
        // Wortgrenzen-Check (umlaut-aware): beidseitig kein Wortzeichen
        if (WORD_RE.test(prev) || WORD_RE.test(next)) continue;

        if (start > lastIdx) {
          frag.appendChild(document.createTextNode(text.substring(lastIdx, start)));
        }
        const abbr = document.createElement("abbr");
        abbr.setAttribute("data-tip", BP_GLOSSARY[term]);
        abbr.setAttribute("tabindex", "0");
        abbr.textContent = term;
        frag.appendChild(abbr);
        lastIdx = start + term.length;
        matched = true;
      }

      if (matched) {
        if (lastIdx < text.length) {
          frag.appendChild(document.createTextNode(text.substring(lastIdx)));
        }
        node.parentNode.replaceChild(frag, node);
      }
    });
  }

  // ============================================================
  // PORTAL-TOOLTIP-MANAGER
  // Eine einzige .bp-tip-Box am <body>. Vermeidet Clipping
  // innerhalb von Karten und z-index-Konflikte komplett.
  // ============================================================
  let bpTip = null;
  let bpTipTimer = null;
  let bpTipCurrent = null;

  function bpEnsureTip() {
    if (bpTip) return bpTip;
    bpTip = document.createElement("div");
    bpTip.className = "bp-tip";
    bpTip.setAttribute("role", "tooltip");
    document.body.appendChild(bpTip);
    return bpTip;
  }

  function bpShowTip(target) {
    const text = target.getAttribute("data-tip");
    if (!text) return;

    const t = bpEnsureTip();
    t.textContent = text;
    t.classList.remove("bp-tip--visible");

    // Reset für saubere Messung
    t.dataset.placement = "top";
    t.style.left = "0px";
    t.style.top = "0px";

    // Force reflow → Maße holen
    const tipRect = t.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const margin = 12;
    let left = targetRect.left + targetRect.width / 2 - tipRect.width / 2;
    let top = targetRect.top - tipRect.height - 10;
    let placement = "top";

    // Nicht über den oberen Viewport-Rand → unten anzeigen
    if (top < margin) {
      top = targetRect.bottom + 10;
      placement = "bottom";
    }

    // Horizontal in den Viewport zwingen
    const minLeft = margin;
    const maxLeft = window.innerWidth - tipRect.width - margin;
    if (left < minLeft) left = minLeft;
    if (left > maxLeft) left = Math.max(minLeft, maxLeft);

    // Pfeil-X relativ zum Tooltip-Anfang (zeigt auf Term-Mitte)
    const arrowX = targetRect.left + targetRect.width / 2 - left;

    // position: fixed -> Viewport-Koordinaten, kein Scroll-Offset addieren
    t.style.left = left + "px";
    t.style.top = top + "px";
    t.dataset.placement = placement;
    t.style.setProperty("--bp-tip-arrow-x", arrowX + "px");

    bpTipCurrent = target;
    requestAnimationFrame(() => t.classList.add("bp-tip--visible"));
  }

  function bpHideTip() {
    if (bpTip) bpTip.classList.remove("bp-tip--visible");
    bpTipCurrent = null;
  }

  function bpInitTooltipDelegation() {
    if (document.body.dataset.bpTipsBound === "1") return;
    document.body.dataset.bpTipsBound = "1";

    document.addEventListener("mouseover", (e) => {
      const abbr = e.target.closest && e.target.closest("abbr[data-tip]");
      if (!abbr) return;
      clearTimeout(bpTipTimer);
      if (bpTipCurrent !== abbr) bpShowTip(abbr);
    });

    document.addEventListener("mouseout", (e) => {
      const abbr = e.target.closest && e.target.closest("abbr[data-tip]");
      if (!abbr) return;
      // Bewegt sich Maus zu Kindelement des abbr → nicht ausblenden
      if (e.relatedTarget && abbr.contains(e.relatedTarget)) return;
      bpTipTimer = setTimeout(bpHideTip, 90);
    });

    document.addEventListener("focusin", (e) => {
      const abbr = e.target.closest && e.target.closest("abbr[data-tip]");
      if (abbr) bpShowTip(abbr);
    });
    document.addEventListener("focusout", (e) => {
      const abbr = e.target.closest && e.target.closest("abbr[data-tip]");
      if (abbr) bpHideTip();
    });

    window.addEventListener("scroll", bpHideTip, { passive: true });
    window.addEventListener("resize", bpHideTip);
    document.addEventListener("click", (e) => {
      // Tap außerhalb auf Touch-Geräten → Tooltip schließen
      if (!e.target.closest || !e.target.closest("abbr[data-tip]")) bpHideTip();
    });
  }

  // ============================================================
  // REVEAL-Animation
  // ============================================================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  function initReveal() {
    const targets = document.querySelectorAll(
      ".bp-bento__cell, .bp-card, .bp-pillar, .bp-stat, .bp-person"
    );
    targets.forEach((el, i) => {
      if (el.dataset.bpReveal === "1") return;
      el.dataset.bpReveal = "1";
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition =
        "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) " +
        Math.min(i * 40, 320) +
        "ms, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) " +
        Math.min(i * 40, 320) +
        "ms";
      observer.observe(el);
    });
  }

  function init() {
    initReveal();
    // Glossar nur im Hauptinhalt anwenden, nicht in Header/Sidebar/Footer
    const main = document.querySelector(".md-content") || document.body;
    if (main && main.dataset.bpGlossaryApplied !== "1") {
      applyGlossary(main);
      main.dataset.bpGlossaryApplied = "1";
    }
    // Tooltip-Event-Delegation binden (idempotent, prüft bpTipsBound)
    bpInitTooltipDelegation();
  }

  // ============================================================
  // Init bei Page-Load und bei navigation.instant Page-Wechsel
  // ============================================================
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      // Bei Page-Wechsel ist der DOM frisch, also reset des "applied"-Flags
      const main = document.querySelector(".md-content");
      if (main) main.dataset.bpGlossaryApplied = "";
      init();
    });
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
