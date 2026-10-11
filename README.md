# Abdul Sami Sheraz — Engineering Portfolio

Responsive, accessible React 19 portfolio using TypeScript, Tailwind CSS v4 and TanStack Start. No database, authentication, paid API dependency, or secrets are required.

## Local development

Install Bun, clone your connected GitHub repository, then run:

```sh
bun install
bun run dev
bun run test
```

For a production build outside Lovable: `bun run build`.

## Update content

- `src/data/portfolio.ts`: identity, actual email, profile URLs, project descriptions, technologies, optional real image and repository URLs, and skills.
- `src/components/portfolio-sections.tsx`: about, education and internship narrative.
- `src/routes/index.tsx`: introduction and homepage arrangement.
- `src/assets/`: imported photographs. Import a real photograph into the content module and assign it to the project's `image` field. The current homepage image is AI-generated illustrative imagery, not evidence of a personal project.
- `src/styles.css`: design tokens and shared styling.

An empty email intentionally shows a placeholder, not a broken email action. Project images and repository URLs are intentionally missing until real ones are supplied. Project details are accessible dialogs. Each content page has its own search and social metadata.

## GitHub

Connect GitHub in Lovable to sync the source repository. No GitHub repository has been created by this implementation. Do not commit credentials, `.env` files, dependency directories, or build output.

## Vercel

The Vite configuration selects Nitro's Vercel deployment preset outside Lovable. Lovable-managed builds retain the platform's own target.

1. Import the connected GitHub repository into Vercel.
2. Select framework preset **Other**.
3. Install command: `bun install`.
4. Build command: `bun run build`.
5. Nitro emits Vercel Build Output API assets to `.vercel/output`; allow Vercel to consume that output (do not override it with `dist`).
6. No environment variables are required for this portfolio.

Vercel deployment has not been executed here; your own Vercel project must be connected to the repository. The portfolio uses the existing TanStack framework's page rendering, with no custom backend functionality.
