<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Store portfolio identity, skills and projects in `src/data/portfolio.ts`; centralized typed content makes details and media easy to update without changing page layouts.
- Use a shared portfolio layout around the root Outlet and separate content routes; navigation stays consistent and pages remain independently shareable.
- Keep the portfolio frontend-only with external profile links; no persistence or API integrations are needed.
- Use the Nitro Vercel preset outside Lovable; the platform wrapper preserves its own hosting target inside the sandbox.
