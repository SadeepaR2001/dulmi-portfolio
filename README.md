# Dulmi's professional portfolio

A local update of the existing portfolio. It preserves the established static HTML/CSS structure rather than introducing a new framework. The content layer is TypeScript; small reusable build functions render project fields and technology tags. There are no npm dependencies.

## Requirements and commands

Use Node.js 22.18+ or Node.js 24 LTS. No package installation is needed.

```sh
npm run build
npm run check
npm run dev
```

Open http://localhost:4173. The development command builds first; restart it after editing. `npm run preview` also serves the production output. You can open `dist/index.html` directly for a quick static preview.

## Editing

- `src/content.ts`: profile, introduction, project information, and trusted HTML sections for SafeDrive, About/skills, Experience/education, and Contact. TypeScript interfaces document the data structure. The build uses Node's type stripping, not a full TypeScript type checker.
- `src/template.html`: page structure and reusable content placeholders.
- `src/style.css`: typography, colours, responsive layouts, focus styles, and reduced-motion handling.
- `scripts/build.mjs`: static rendering, optional-asset visibility, and social metadata.
- `public/dulmi-portrait.webp`: optimized portrait. Replace this file or change `profile.portrait`.
- `public/Dulmi-CV.pdf`: downloadable CV copy, with the phone number removed. The original supplied CV was not changed. Review personal details before replacing this file.

Run the build after edits. Missing CV assets hide download links. Missing portrait assets use a text-only hero. Only trusted author-written HTML belongs in `sections` and `detailHtml`.

Project details use native `details`/`summary` elements for keyboard-accessible expansion. No fake screenshots, demo URLs, fabricated statistics or unconnected forms are included. Email links open the visitor's mail application.

## Factual note

The supplied CV lists Machine Learning under WavePOS. The website deliberately omits that technology until its actual use is confirmed, following the brief. SafeDrive is described as group research and design, and MySLT as a professional team contribution. No dataset, algorithm or evaluation result was inferred for AquaExpert.

## Validation

`npm run check` validates section anchors, local assets, project content, unresolved tokens, metadata, and the PDF signature. Build and checks passed. The CV copy was checked for removal of the phone number.

Browser-based desktop/mobile layout inspection and browser download interaction were not run in this environment. Responsive styles and native keyboard interactions are implemented, but should receive a visual check before public release. External profile URLs were supplied by the user and were not fetched or independently validated.

## Deployment build

```sh
npm run build
npm run check
```

The complete deployable site is in `dist/`; a static host should serve that directory. No server, environment variables, secrets or contact service are required. This update has not been deployed. The existing hosted version has not been changed.
