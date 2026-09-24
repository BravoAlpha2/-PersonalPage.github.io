# Nuno Garcia — portfolio

Static site built with [Astro](https://astro.build) + TypeScript. No React, no Tailwind, no runtime
dependencies. Total first-party JavaScript is ~10 kB; the map library (Leaflet) loads from a CDN only
when the "Where the work happened" section scrolls into view.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321/-PersonalPage.github.io
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Deploying to GitHub Pages

1. Push this repository to GitHub (`main` branch).
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

The site URL and base path are derived from the repository name, so:

| Repository name              | Live URL                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| `-PersonalPage.github.io`    | `https://bravoalpha2.github.io/-PersonalPage.github.io/`     |
| `bravoalpha2.github.io`      | `https://bravoalpha2.github.io/` (recommended — rename repo) |

If you rename the repository, nothing else needs to change. For a custom domain, add a `CNAME` file to
`public/` and set `SITE_URL` in the workflow (or `astro.config.mjs`) to that domain with `SITE_BASE=/`.

## Site structure

- `/` — hero, the story (six chapters, 2018 → now), how I can help, contact
- `/work` — six case studies + map of where the work happened; `/work/<slug>` for each case
- `/research` — all publications with context, question, method, contribution
- `/about` — portrait, how I think, experience, capabilities, education & certifications

## Editing content

Everything a visitor reads lives in a few places:

| What                              | Where                                             |
| --------------------------------- | ------------------------------------------------- |
| Availability status, links, email, analytics | `src/config/site.ts`                    |
| CV (PDF download)                 | `public/cv/Nuno_Garcia_CV.pdf` (path in `site.ts`) |
| Case studies (one file each)      | `src/content/projects/*.md`                       |
| Publications                      | `src/content/publications/*.md`                   |
| Story chapters (homepage)         | `src/components/Story.astro`                      |
| Roles / trajectory                | `src/components/Experience.astro`                 |
| Services (how I can help)         | `src/components/Help.astro`                       |
| Map places & scale strip          | `src/components/Geography.astro`                  |
| Education & certifications        | `src/pages/about.astro`                           |
| Map basemap (Esri World Imagery)  | `src/components/Geography.astro`                  |
| Images                            | `public/images/` (WebP, ≤1600 px wide)            |

A case study's frontmatter follows the format **challenge → data → intelligence → technology → outcome**;
the markdown body below the frontmatter is free-form ("why it was hard", "what it changed").
Adding a new `.md` file creates a new `/work/<slug>` page and a card on the homepage automatically.

### Content review checklist — things marked `TODO — Nuno`

Nothing on the site is invented; where information was missing it is marked. Search for `TODO` to find:

- `src/content/publications/time-series-niche-modelling.md` — add journal and DOI once published.
- `src/content/projects/forestry-operational-intelligence.md` — a dashboard/ODT screenshot, if the company allows.
- `src/content/projects/ai-environmental-evaluation.md` — one concrete (non-confidential) paragraph.
- `public/images/og.png` — replace the placeholder social-share image (1200×630).

## Analytics (optional, privacy-conscious)

In `src/config/site.ts` set `analytics.provider` to `'plausible'` or `'umami'` and fill in the domain /
website id. Tracked events (via `data-track` attributes): *Project viewed*, *CV downloaded*,
*Contact clicked*, *GitHub clicked*, *Explore work clicked*.

The map uses Esri World Imagery tiles (free with the attribution shown on the map). Set `paper: true` on an
image in a case-study file to show a white-background figure contained on a light frame instead of cropped. With `'none'` nothing is loaded.

## What was kept from the old repository

The old site was an HTML5 UP "Massively" template. Only the content and 17 screenshots were migrated
(converted from 21 MB of PNG/JPG to 1.6 MB of WebP). Removed: jQuery, Scrollex, Font Awesome webfonts,
SASS, `html5up-massively.zip`, `elements.html`, stock `pic01–09.jpg`, the Facebook link and the
phone number (add it back in `Contact.astro` if you want it public).

## Accessibility & performance notes

- Semantic landmarks, skip link, keyboard-operable tabs/palette, visible focus states.
- `prefers-reduced-motion` disables the hero animation sequence, number counters, map fly-to and reveals.
- Hero canvas stops its render loop after the intro unless the pointer moves; mobile gets a lighter field.
- Images are lazy-loaded except the first two cards and case-study covers.
- Fonts are loaded from Google Fonts with `display=swap`; to self-host, drop the files in `public/fonts/`
  and replace the `<link>` in `src/layouts/Base.astro` with `@font-face` rules.
