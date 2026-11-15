# Beyond p-values: hub for better research practice

Source of the project website https://hannesdiemerling.github.io/Frequent-Reformation/
(in German). The hub belongs to the project "Beyond p-values" at the
HMU Health and Medical University Erfurt and collects workshops, methods and
resources on effect sizes, representativeness and Bayesian reasoning.

## Workshops

The three interactive workshops live in their own repositories and run in the browser.

| Workshop | Site | Repository |
|---|---|---|
| 01 Beyond Significance | https://hannesdiemerling.github.io/Beyond_Significance/ | [Beyond_Significance](https://github.com/HannesDiemerling/Beyond_Significance) |
| 02 Repräsentativität und Stichprobengröße | https://hannesdiemerling.github.io/True_Reliability/ | [True_Reliability](https://github.com/HannesDiemerling/True_Reliability) |
| 03 Denke Bayesianisch | https://hannesdiemerling.github.io/Thinking_Bayesian/ | [Thinking_Bayesian](https://github.com/HannesDiemerling/Thinking_Bayesian) |

## Contents

| Path | Contents |
|---|---|
| `docs/` | Website pages (MkDocs with the Material theme): workshops, methods, resources, FAQ, blog |
| `folien/` | Slide decks for presenters (Quarto), see `folien/KONZEPT.md` |
| `mkdocs.yml` | Site configuration and navigation |

## Build locally

```bash
pip install -r requirements.txt
mkdocs serve
```

The slides are a separate Quarto project:

```bash
pip install -r folien/requirements.txt
python folien/gen-assets.py
quarto render folien
```

Every push to `main` builds the slides and publishes the site to GitHub Pages.

## License

Code: MIT. Site content: CC BY 4.0.
