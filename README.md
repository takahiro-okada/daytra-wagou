# Wagou Website

A responsive website built from a Figma design using Next.js, TypeScript, Tailwind CSS, and microCMS.

This project also demonstrates an AI-assisted development workflow using Figma MCP, structured GitHub Issues, semantic pull request titles, pull request checks, and CI.

## Project Goals

- Rebuild the Wagou Figma design as a production-ready Next.js website.
- Connect editable content through microCMS.
- Keep the repository clean enough to present as a New Zealand portfolio project.
- Document the development process in English, including AI-assisted decisions and trade-offs.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- microCMS SDK
- Figma MCP for design-to-code reference
- GitHub Actions for CI

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and set your values.

```bash
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
MICROCMS_NEWS_ENDPOINT=news
```

If the variables are not set, the top page shows sample content so the site can still build.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Development Workflow

1. Create or pick up a GitHub Issue.
2. Create a feature branch from `main`.
3. Implement the smallest useful slice.
4. Run lint, typecheck, and build locally.
5. Open a pull request using a semantic title such as `feat: implement first-view section`.
6. Review CI results and visual output before merging.

## AI-Assisted Workflow

- Figma MCP is used to inspect frames, assets, layout, and text content.
- Codex is used for implementation planning, code changes, refactoring, and review.
- Human review remains responsible for design judgement, accessibility, content accuracy, and final delivery.

## Documentation

- [Project Plan](docs/project-plan.md)
- [Task Breakdown](docs/task-breakdown.md)
- [Figma Notes](docs/figma-notes.md)
- [microCMS Schema](docs/cms-schema.md)
- [Dependency Updates](docs/dependency-updates.md)
- [GitHub Issue Plan](docs/github-issues.md)
- [Deployment Notes](docs/deployment.md)
- [Contributing Guide](CONTRIBUTING.md)

## GitHub Setup

After creating a GitHub repository and authenticating GitHub CLI, create the initial labels and issues:

```bash
./scripts/create-github-issues.sh
```
