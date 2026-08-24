#!/usr/bin/env python3
"""Erzeugt die generierten Folien-Assets aus mkdocs.yml.

mkdocs.yml ist die einzige Quelle fuer Workshop-Metadaten, Kontaktdaten und
alle externen URLs. Quarto kann die Datei nicht direkt lesen, weil die
!!python/name:-Tags in markdown_extensions jeden normalen YAML-Parser brechen.
Dieses Skript ueberbrueckt das und schreibt zwei Dinge:

  folien/_data.yml        Quarto-Metadaten, eingebunden ueber metadata-files.
                          In den .qmd danach nutzbar als {{< meta links.hub >}},
                          {{< meta ch.power2.url >}}, {{< meta contact.email >}}.

  folien/assets/qr/*.svg  Je Ziel ein QR-Code in Markenfarbe. Der Dateiname ist
                          der Schluessel: assets/qr/hub_fragen.svg gehoert zu
                          links.hub_fragen.

  folien/_demo/*.qmd      Je Kapitel eine fertige Vollflaechen-Demofolie. Die
                          background-iframe-Adresse steht in einem Folien-
                          Attribut, dort expandiert kein {{< meta >}}. Deshalb
                          wird die Folie hier erzeugt statt von Hand geschrieben.
                          Einbinden mit {{< include ../_demo/power2.qmd >}}.

  folien/_daten.html      Script-Block mit zwei Objekten fuer die Folien-Skripte
                          in theme/: BP_QR_URLS (Schluessel -> Adresse, damit der
                          QR-Code klickbar ist) und BP_NAV (Hub-Adresse und die
                          Deck-Reihenfolge aus extra.folien fuer die
                          Navigationsleiste).

Damit gilt: eine URL aendern heisst eine Zeile in mkdocs.yml aendern. In den
.qmd-Dateien steht nie ein https://.

Aufruf (aus dem Repo-Root oder von ueberall):  python folien/gen-assets.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.exit("pyyaml fehlt. Bitte 'pip install -r folien/requirements.txt' ausfuehren.")

try:
    import segno
except ImportError:
    sys.exit("segno fehlt. Bitte 'pip install -r folien/requirements.txt' ausfuehren.")

FOLIEN = Path(__file__).resolve().parent
ROOT = FOLIEN.parent
MKDOCS = ROOT / "mkdocs.yml"
DATA_OUT = FOLIEN / "_data.yml"
SCRIPT_OUT = FOLIEN / "_daten.html"
QR_DIR = FOLIEN / "assets" / "qr"
DEMO_DIR = FOLIEN / "_demo"

# Markenfarbe Navy aus docs/stylesheets/extra.css
QR_DARK = "#2A3F66"

# Diese extra-Schluessel sind reine MkDocs-Belange und gehen Quarto nichts an.
SKIP_KEYS = {"generator", "social"}


def load_mkdocs() -> dict:
    """mkdocs.yml laden und die Python-Tags dabei ignorieren."""

    class Loader(yaml.SafeLoader):
        pass

    Loader.add_multi_constructor(
        "tag:yaml.org,2002:python/name:", lambda loader, suffix, node: None
    )
    Loader.add_multi_constructor("!!python/name:", lambda loader, suffix, node: None)

    with MKDOCS.open(encoding="utf-8") as fh:
        return yaml.load(fh, Loader=Loader)


def build_data(extra: dict) -> dict:
    """Den extra-Block in Quarto-Metadaten umbauen."""
    data = {k: v for k, v in extra.items() if k not in SKIP_KEYS}

    # Kapitel flach ablegen. {{< meta >}} kommt mit Listen-Indizes nicht
    # zuverlaessig zurecht, deshalb bekommt jedes Kapitel einen eigenen
    # Schluessel: ch.power2.url, ch.thinking5.title, ...
    chapters: dict[str, dict] = {}
    for key, ws in (extra.get("workshops") or {}).items():
        base = (ws.get("base") or "").rstrip("/")
        for ch in ws.get("chapters") or []:
            chapters[f"{key}{ch['num']}"] = {
                "num": ch["num"],
                "title": ch["title"],
                "time": ch.get("time", ""),
                "level": ch.get("level", ""),
                "url": f"{base}/{ch['file']}",
                "workshop": ws.get("title", ""),
                "qr": f"assets/qr/ch-{key}{ch['num']}.svg",
            }
    data["ch"] = chapters
    return data


def decks(extra: dict) -> list[dict]:
    """Die Foliensaetze aus extra.folien, Adresse aus hub_folien plus slug."""
    base = ((extra.get("links") or {}).get("hub_folien") or "").rstrip("/")
    out = []
    for d in extra.get("folien") or []:
        out.append(
            {
                "slug": d["slug"],
                "title": d.get("title", d["slug"]),
                "note": d.get("note", ""),
                "url": f"{base}/{d['slug']}/",
            }
        )
    return out


def collect_targets(extra: dict, data: dict) -> dict[str, str]:
    """Alle Ziele sammeln, fuer die ein QR-Code entsteht: name -> URL."""
    targets: dict[str, str] = {}

    for name, url in (extra.get("links") or {}).items():
        if isinstance(url, str) and url.startswith("http"):
            targets[name] = url

    # Workshop-Startseiten
    for key, ws in (extra.get("workshops") or {}).items():
        if ws.get("base"):
            targets[f"ws-{key}"] = ws["base"].rstrip("/") + "/"

    # Einzelkapitel
    for name, ch in data["ch"].items():
        targets[f"ch-{name}"] = ch["url"]

    # Anker der Fragen-Seite, direkt aus extra.questions abgeleitet
    fragen = (extra.get("links") or {}).get("hub_fragen")
    if fragen:
        for q in extra.get("questions") or []:
            targets[f"frage-{q['key']}"] = f"{fragen}#{q['key']}"

    # Die Foliensaetze selbst, Adresse aus hub_folien plus slug
    for deck in decks(extra):
        targets[f"folien-{deck['slug']}"] = deck["url"]

    # Direktkontakt
    contact = (extra.get("contact") or {}).get("email")
    if contact:
        targets["kontakt-mail"] = f"mailto:{contact}"

    return targets


def write_qr(name: str, url: str) -> None:
    qr = segno.make(url, error="m")
    # omitsize haengt eine viewBox an und laesst width/height weg, damit die
    # Groesse allein aus dem SCSS kommt.
    qr.save(
        QR_DIR / f"{name}.svg",
        kind="svg",
        scale=10,
        border=2,
        dark=QR_DARK,
        light=None,
        omitsize=True,
        xmldecl=False,
        svgclass=None,
        lineclass=None,
    )


DEMO_TEMPLATE = """<!-- Erzeugt von folien/gen-assets.py. Nicht von Hand bearbeiten. -->

## {title} {{.bp-slide--full background-iframe="{url}" background-interactive="true" data-qr="ch-{key}" data-qr-cap="Selbst ausprobieren"}}

::: {{.bp-demo-hinweis}}
{workshop}, Kapitel {num} · live im Browser · {time}
:::

::: notes
Live-Demo, Kapitel {num}: {title}.

Vor dieser Folie mindestens 30 Sekunden reden. Die Anwendung startet erst, wenn
die Folie in Reichweite kommt, und braucht bis zu einer halben Minute, bis sie
rechnet.

Plan B, falls das eingebettete Fenster nicht laedt: dasselbe Kapitel parallel in
einem zweiten Browserfenster offen halten und dorthin wechseln. Der QR oben
rechts fuehrt zur selben Seite, der Raum kann also sofort mitmachen.

Nicht vergessen: die Folie ist bedienbar. Ein Klick landet in der Anwendung, nicht
im Vortrag. Zum Weiterblattern zuerst neben die Anwendung klicken oder die
Pfeiltasten benutzen.
:::
"""


SITE_TEMPLATE = """<!-- Erzeugt von folien/gen-assets.py. Nicht von Hand bearbeiten. -->

## {title} {{.bp-slide--full background-iframe="{url}" background-interactive="true" data-qr="{key}" data-qr-cap="Direkt aufrufen"}}

::: {{.bp-demo-hinweis}}
Live auf der Website · scrollbar und klickbar
:::

::: notes
Die echte Seite, eingebettet und bedienbar. Hier wirklich scrollen und klicken,
nicht nur zeigen. Der Raum soll sehen, dass das kein Screenshot ist.

Falls die Einbettung nicht laedt: der QR oben rechts fuehrt zur selben Adresse,
dann im Browser danebenlegen.
:::
"""

# Diese Hub-Seiten bekommen eine eingebettete Live-Folie fuer die Website-Tour.
SITE_TITLES = {
    "hub": "Der Hub",
    "hub_workshops": "Die Workshops",
    "hub_fragen": "Starte mit deiner Frage",
    "hub_methoden": "Die Methoden-Seiten",
}


def write_demo_slides(chapters: dict[str, dict], links: dict) -> None:
    """Fertige Vollflaechen-Folien schreiben: je Kapitel und je Hub-Seite."""
    DEMO_DIR.mkdir(parents=True, exist_ok=True)
    for old in DEMO_DIR.glob("*.qmd"):
        old.unlink()

    for key, ch in chapters.items():
        (DEMO_DIR / f"{key}.qmd").write_text(
            DEMO_TEMPLATE.format(
                key=key,
                title=ch["title"],
                url=ch["url"],
                num=ch["num"],
                time=ch["time"],
                workshop=ch["workshop"],
            ),
            encoding="utf-8",
        )

    for key, title in SITE_TITLES.items():
        url = links.get(key)
        if not url:
            continue
        (DEMO_DIR / f"site-{key}.qmd").write_text(
            SITE_TEMPLATE.format(key=key, title=title, url=url),
            encoding="utf-8",
        )


def write_script_data(extra: dict, targets: dict[str, str]) -> None:
    """Adressen und Navigationsdaten als Script-Block fuer die Folien ablegen."""
    links = extra.get("links") or {}
    nav = {
        "hub": links.get("hub", ""),
        "uebersicht": links.get("hub_folien", ""),
        "decks": decks(extra),
    }
    SCRIPT_OUT.write_text(
        "<!-- Erzeugt von folien/gen-assets.py aus mkdocs.yml. "
        "Nicht von Hand bearbeiten. -->\n"
        "<script>\n"
        "  window.BP_QR_URLS = "
        + json.dumps(targets, ensure_ascii=False, sort_keys=True, indent=2)
        + ";\n  window.BP_NAV = "
        + json.dumps(nav, ensure_ascii=False, indent=2)
        + ";\n</script>\n",
        encoding="utf-8",
    )


def main() -> None:
    if not MKDOCS.exists():
        sys.exit(f"mkdocs.yml nicht gefunden unter {MKDOCS}")

    config = load_mkdocs()
    extra = config.get("extra") or {}
    if not extra:
        sys.exit("mkdocs.yml enthaelt keinen extra-Block.")

    data = build_data(extra)

    DATA_OUT.write_text(
        "# Automatisch erzeugt von folien/gen-assets.py aus mkdocs.yml.\n"
        "# Nicht von Hand bearbeiten, Aenderungen gehen beim naechsten Lauf verloren.\n"
        + yaml.safe_dump(data, allow_unicode=True, sort_keys=False, default_flow_style=False),
        encoding="utf-8",
    )
    print(f"geschrieben: {DATA_OUT.relative_to(ROOT)}")

    QR_DIR.mkdir(parents=True, exist_ok=True)
    for old in QR_DIR.glob("*.svg"):
        old.unlink()

    targets = collect_targets(extra, data)
    for name, url in sorted(targets.items()):
        write_qr(name, url)
    print(f"geschrieben: {len(targets)} QR-Codes in {QR_DIR.relative_to(ROOT)}")

    write_demo_slides(data["ch"], extra.get("links") or {})
    print(
        f"geschrieben: {len(list(DEMO_DIR.glob('*.qmd')))} Demofolien "
        f"in {DEMO_DIR.relative_to(ROOT)}"
    )

    write_script_data(extra, targets)
    print(
        f"geschrieben: {SCRIPT_OUT.relative_to(ROOT)} "
        f"({len(decks(extra))} Decks in der Navigation)"
    )


if __name__ == "__main__":
    main()
