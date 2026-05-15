# Contributing

This project uses a small, portfolio-friendly workflow inspired by professional product teams.

## Branch Naming

Use short, descriptive branch names:

```txt
chore/project-foundation
feat/figma-first-view
feat/microcms-menu
fix/mobile-header-spacing
docs/update-readme
```

## Commit Messages

Use Conventional Commits for meaningful commits and pull request titles:

```txt
feat: implement first-view section
fix: correct mobile menu spacing
docs: add microCMS schema notes
chore: configure GitHub Actions
refactor: extract section heading component
```

Common commit types:

- `feat`: a new user-facing feature
- `fix`: a bug fix
- `docs`: documentation only
- `style`: formatting or CSS-only polish
- `refactor`: code restructuring without behaviour changes
- `test`: tests or test utilities
- `chore`: tooling, config, maintenance
- `ci`: CI/CD configuration

## Pull Request Titles

Pull request titles are checked by GitHub Actions and should use the same Conventional Commits format:

```txt
feat: implement first-view section
docs: add Figma implementation notes
ci: add semantic PR title check
```

This repository favours squash merging. The PR title should be written as the final merge commit message.

## Pull Requests

Each pull request should:

- Link to a GitHub Issue.
- Keep scope small enough to review.
- Include screenshots for visual changes.
- Pass lint, typecheck, and build.
- Explain any design or implementation trade-offs.

## Definition of Done

A task is done when:

- The implementation matches the relevant Figma frame or documented decision.
- Responsive behaviour has been checked for desktop and mobile.
- Accessibility basics are considered.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass.
- The PR description is clear enough for another developer to review.
