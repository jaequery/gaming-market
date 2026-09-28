# Nearby — events near me

Landing page for **Nearby**, a weekly event digest for tech and startup founders:
pick a home city and your interests, get in-person events near you plus online
events from anywhere, pulled from Luma and Eventbrite, every Monday.

Built with Next.js (App Router), React Server Components, TypeScript and plain
CSS. No API keys, no database, no external assets. The sign-up form validates
locally and sends nothing anywhere.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
npm run typecheck
```

## Change things

Almost everything lives in **`site.config.ts`**, one typed object:

| What | Where in `site.config.ts` |
| --- | --- |
| Brand / wordmark | `brand` (the hero wordmark always stretches to fill the 1200px column) |
| Hero copy | `tagline` (2 lines), `invitation` (3 lines) |
| Red stamp ("dates" and "city") | `stamp.dates`, `stamp.city` |
| Marquee facts | `marquee` (joined with ✦) |
| Feed events ("speakers" grid) | `feed.events` — initials, title, when, where, source, panel tone |
| Weekly digest schedule | `digest.tabs` — each tab has 7 rows; `kind: "quiet"` rows render muted |
| City block and numbers | `city.notes`, `city.stats` |
| Prices / plans | `plans.tiers` — set `featured: true` on the one to outline in red |
| Sign-up interests and confirmation | `signup.interests`, `signup.success` |
| Footer links and sample-content notice | `footer` |

**Palette** — the CSS custom properties at the top of `app/globals.css`
(`--bg`, `--surface`, `--ink`, `--muted`, `--accent`, `--on-accent`, `--border`).
`--accent-text` and `--accent-on-dark` are AA-safe tints of the accent for small
red text; retune them if you change `--accent`.

**Fonts** — `--display` and `--mono` in the same file. Both are system stacks.

## Layout

- `app/page.tsx` — composes the sections
- `components/` — one file per section; `DigestTabs`, `RevealGrid` and `SignupForm` are the only client components
