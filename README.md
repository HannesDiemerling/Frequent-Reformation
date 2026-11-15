# Beyond p-values: hub for better research practice

Source of the project website https://hannesdiemerling.github.io/Frequent-Reformation/
(in German). The hub belongs to the project "Beyond p-values" at the
HMU Health and Medical University Erfurt and collects workshops, methods and
resources on effect sizes, representativeness and Bayesian reasoning.
Project lead is Prof. Dr. Thomas Schäfer; the workshops, materials and website
are developed by Hannes Diemerling (see the team page on the site).

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
| `folien/_quellen/` | Source documents for the slides (survey and reading list), not published |
| `mkdocs.yml` | Site configuration, navigation and all shared data (workshops, links, contact) |

## Build locally

Run all commands from the repository root; the macros plugin resolves
`docs/_includes` relative to the working directory.

```bash
pip install -r requirements.txt
mkdocs serve
```

The slides are a separate Quarto project and need [Quarto](https://quarto.org/)
(the workflow uses version 1.8.26):

```bash
pip install -r folien/requirements.txt
python folien/gen-assets.py
quarto render folien
```

The decks are written to `folien/_site/`. Every push to `main` runs
`.github/workflows/deploy.yml`: it renders the slides, copies them to `docs/folien/` and
publishes the site with `mkdocs gh-deploy` to the `gh-pages` branch.

## License

Code: MIT (see `LICENSE`). Site content: CC BY 4.0, except the logo (all rights reserved).
