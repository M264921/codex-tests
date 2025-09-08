# Repository Guidelines

## Project Structure & Module Organization

- Source code lives in `src/`; tests in `tests/`; scripts in `scripts/`; docs and assets in `docs/` and `assets/`.
- Keep modules small and purpose-driven. One module = one responsibility.
- Example layout:
  - `src/<package_or_app>/...`
  - `tests/unit/...`, `tests/integration/...`
  - `scripts/dev.ps1`, `scripts/test.ps1`

## Build, Test, and Development Commands

- Prefer project scripts when available:
  - `./scripts/dev.ps1` — starts a local dev session.
  - `./scripts/build.ps1` — builds/compiles the project.
  - `./scripts/test.ps1` — runs the full test suite.
- If scripts are absent, use the ecosystem defaults present in the repo:
  - Node: `npm i`, `npm run build`, `npm test`
  - Python: `pip install -r requirements.txt`, `pytest -q`
  - .NET: `dotnet build`, `dotnet test`

## Coding Style & Naming Conventions

- Use consistent, descriptive names: `kebab-case` for files, `snake_case` for variables/functions (Python), `camelCase` for JS variables, `PascalCase` for types/classes.
- Indentation: 2 spaces for config/MD; follow language norms for code.
- Run formatters/linters when available:
  - Node: `npm run lint`, `npm run format`
  - Python: `ruff`, `black`
  - .NET: `dotnet format`

## Testing Guidelines

- Organize tests mirroring `src/` paths. Name tests with clear intent (e.g., `test_<feature>_<behavior>.py`).
- Add unit tests for all new logic; include at least one integration path when touching I/O or external boundaries.
- Run `./scripts/test.ps1` (or the ecosystem test command) before pushing.

## Commit & Pull Request Guidelines

- Commits: concise, imperative subject (max ~72 chars), body for rationale and trade-offs.
- Reference issues with `#<id>` and include reproduction steps or screenshots when UI-affecting.
- PRs: clear description, linked issue, checklist of impacted areas, and notes on testing/rollout.

## Agent-Specific Instructions

- Follow this AGENTS.md for any files under the repo root.
- Keep patches focused; avoid unrelated refactors.
- Large reads: open files in chunks (≤250 lines) and prefer fast search tools when available.

## Security & Configuration Tips

- Never commit secrets. Use environment variables and local `.env` files (git-ignored).
- PowerShell example: `[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "<value>", "User")` then open a new console.
