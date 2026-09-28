# AGENTS.md

Conventions for AI coding agents working in **events-near-me**. This file is the
canonical entry point under the [AGENTS.md](https://agents.md) standard, and it
is the first thing a Fredrin Worker reads.

## Project

Nearby: a weekly event-digest service for tech and startup founders (home city +
interests → in-person events nearby and online events anywhere, from Luma and
Eventbrite). Today the repo holds the marketing landing page only.

## Commands

- `npm install`
- `npm run dev` — local dev server
- `npm run build` — production build (also type-checks)
- `npm run typecheck`

## Conventions

- Next.js App Router + TypeScript + plain CSS custom properties. No Tailwind, no UI kit.
- All page copy, events, numbers and prices live in `site.config.ts`; components read from it. Don't hardcode copy in components.
- Palette tokens live at the top of `app/globals.css`. One accent (`--accent`); use the `--accent-text` / `--accent-on-dark` tints for small red text so contrast stays AA.
- Square corners, no gradients (the scanline pattern is the only exception), no shadows.
- Everything must honour `prefers-reduced-motion` and stay overflow-free down to 360px.
