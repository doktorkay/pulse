# Pulse — website

Marketing landing page for the Pulse macOS audio player.
Stack: **Next.js 15 (App Router) + TypeScript**, deployed on **Vercel**.

## Local development

```bash
cd web
npm install
cp .env.example .env.local   # then set ADMIN_TOKEN
npm run dev
```

Open <http://localhost:3000>.

The email-gate form posts to `/api/subscribe`. In local development each
submission is appended to `data/emails.jsonl` (one JSON object per line). The
file is git-ignored.

## The DMG artifact

Place the real signed DMG at `web/public/downloads/Pulse-1.0.dmg`. The download
button points at `process.env.NEXT_PUBLIC_DMG_URL` (default
`/downloads/Pulse-1.0.dmg`). On Vercel, large binary artifacts are normally
hosted externally (S3, Vercel Blob, etc.) — just set `NEXT_PUBLIC_DMG_URL` to
that URL.

## How email collection works

| Environment | What happens when a user submits the form |
| --- | --- |
| **Local dev** | Email + metadata appended to `data/emails.jsonl`. |
| **Vercel (prod)** | Email + metadata written to Function Logs as a single line tagged `[pulse:subscribe]`. The Vercel filesystem is read-only outside `/tmp` (and `/tmp` is ephemeral), so we don't try to persist to a file there. |

### Reading the list

* **Local**: `curl -H "Authorization: Bearer $ADMIN_TOKEN" http://localhost:3000/api/admin/emails`
  returns the full JSON list parsed from `data/emails.jsonl`.
* **Production**: open the Vercel dashboard → your project → **Logs**, filter by
  `[pulse:subscribe]`. You can also use the Vercel CLI:
  `vercel logs <deployment-url> --output=raw | grep pulse:subscribe`.

### Upgrading to a real DB (later)

Storage is isolated in `lib/storage.ts` (two functions: `saveEmail` and
`readEmails`). When you want to swap to e.g. Vercel Postgres, Vercel KV, or
Supabase, edit that single file — the rest of the app keeps working.

## Deploy to Vercel

1. Push this repo to GitHub.
2. On <https://vercel.com> create a new project pointing at the `web/` directory
   (set the **Root Directory** to `web`).
3. Environment variables to set in the Vercel dashboard:
   * `ADMIN_TOKEN` — a long random string. Required to access
     `/api/admin/emails`.
   * `NEXT_PUBLIC_DMG_URL` — public URL of the signed DMG. Only needed if you
     host the artifact off-Vercel.
4. Deploy. The default Next.js build settings work out of the box.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Marketing landing page (hero, features, specs, download gate). |
| `/privacy` | Privacy policy. |
| `/terms` | Terms of use. |
| `/acknowledgements` | Open-source credits, shortcuts, FAQ, release notes. |
| `POST /api/subscribe` | Stores an email submission. |
| `GET /api/admin/emails` | Returns saved emails (token-gated). |

## File map

```
web/
├── app/
│   ├── layout.tsx            ← root layout (fonts, metadata)
│   ├── page.tsx              ← landing page
│   ├── globals.css           ← all site styles, ported from the prototype
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── acknowledgements/page.tsx
│   └── api/
│       ├── subscribe/route.ts
│       └── admin/emails/route.ts
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── DownloadGate.tsx      ← client component, handles the email form
├── lib/
│   └── storage.ts            ← single place that knows where emails live
├── public/
│   ├── assets/               ← logo, icon, app screenshot
│   └── downloads/            ← put Pulse-1.0.dmg here
└── data/                     ← (local dev only) emails.jsonl is created here
```

## Notes & follow-ups

* **Legal pages** use the fictional brand "Pulse Audio Labs", Italian
  jurisdiction, and `hello@pulse.app` as contact. Replace these with the real
  company data before going live.
* **Sparkle update feed**, **release notes**, and the DMG SHA-256 are
  placeholders — wire them up once the app ships.
* No analytics, no cookies, no tracking. The only `localStorage` key the site
  writes is `pulse:email`, used to remember that the user has already unlocked
  the download.
