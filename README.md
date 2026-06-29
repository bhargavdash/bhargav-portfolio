# Bhargav Dash — Portfolio

A single-page portfolio implemented from a Claude Design canvas. Dark theme,
custom motion system (smooth scroll, custom cursor, scroll reveals, count-ups,
animated bars, 3D card tilt), fully responsive, reduced-motion aware.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion
(Framer Motion) · Lenis. Fonts: Clash Display (Fontshare), DM Sans + JetBrains
Mono (`next/font`).

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks + lints)
npm start        # serve the production build
```

## Architecture

```
app/
  layout.tsx     metadata/OG, fonts, smooth-scroll + cursor, Fontshare link
  page.tsx       composes the sections
  globals.css    design tokens (@theme), keyframes, grain, a11y, breakpoints
components/       Nav, Hero, Work, FeaturedProject, ProjectGrid, Craft,
                  Background, Contact, Footer, plus motion primitives
                  (Reveal, Magnetic, CountUp, AnimatedBar, Cursor, SmoothScroll)
lib/              site.ts (identity + links), projects.ts (work data),
                  motion.ts (easings), hooks.ts (anchor scroll)
```

Design tokens live in `app/globals.css` under `@theme`. The two responsive
seams (560px / 920px) are mapped onto Tailwind's `sm` / `md` keys — keep using
`sm:` and `md:` for layout so the breakpoint cascade stays correctly ordered.

## TODO — fill these in before publishing

All marked `PLACEHOLDER` in source:

- **Social / resume links** — `lib/site.ts` → `links.github`, `links.linkedin`,
  `links.resume`. Drop your resume PDF in `public/` and point `resume` at it
  (e.g. `/Bhargav-Dash-Resume.pdf`).
- **Project links** — `lib/projects.ts` → each project's `live` / `caseStudy` /
  `source` (currently `#`).
- **Demo videos** — the two featured cards have a drop-zone placeholder for
  `nomad-demo.mp4` / `helix-demo.mp4`. Wire up real video/embeds in
  `components/FeaturedProject.tsx`.
- **Domain / OG image** — `app/layout.tsx` → `metadataBase` (placeholder
  `bhargavdash.com`). Add an OG image and reference it in `openGraph.images`.
- **Clash Display** — loaded via Fontshare `<link>` in `app/layout.tsx`. For a
  fully self-hosted, zero-external-request build, download the woff2 files and
  switch to `next/font/local`.
