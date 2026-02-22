# Architecture

This is a small, static portfolio site optimized for **fast review** and **easy edits**.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Vitest (unit tests)
- GitHub Pages deploy via Actions

## Key design choices

### Content as code

Portfolio content lives in `src/content.ts` so updates are:

- type-checked
- reviewed like code
- easy to diff

### Simple rendering

The app is intentionally small:

- `src/App.tsx` composes sections
- components are lightweight and mostly presentational

## Build & deploy

- CI runs typecheck + tests.
- GitHub Pages workflow builds and publishes to Pages.

## Repo layout

- `src/` app + content
- `public/` static files
- `.github/workflows/` CI + deploy
