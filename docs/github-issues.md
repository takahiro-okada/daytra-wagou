# GitHub Issue Plan

These issues are written in English so they can be copied into GitHub once the repository and `gh` authentication are ready.

You can also create the labels and issues automatically after GitHub CLI authentication is ready:

```bash
./scripts/create-github-issues.sh
```

## Labels

- `type:feature`
- `type:bug`
- `type:docs`
- `type:ci`
- `type:chore`
- `area:figma`
- `area:cms`
- `area:ui`
- `area:workflow`
- `priority:high`
- `priority:medium`
- `priority:low`

## Milestone: Foundation

### Configure project documentation

Add English documentation for setup, workflow, Figma notes, CMS schema, deployment, and contribution rules.

Labels: `type:docs`, `area:workflow`, `priority:high`

### Set up GitHub Actions CI

Add a CI workflow that runs install, lint, typecheck, and build on pull requests.

Labels: `type:ci`, `area:workflow`, `priority:high`

### Add commit and pull request workflow

Add semantic pull request title guidance, pull request template, and issue templates.

Labels: `type:chore`, `area:workflow`, `priority:high`

### Define microCMS content model

Document the planned microCMS endpoints and fields before implementation.

Labels: `type:docs`, `area:cms`, `priority:medium`

## Milestone: Figma Implementation

### Implement global design tokens

Add project-level colours, typography, spacing, and shared UI primitives based on the Figma design.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

### Implement first-view section

Build the responsive hero/first-view section from the desktop and mobile Figma frames.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

### Implement concept section

Build the concept section with text layout, images, and decorative assets.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

### Implement service section

Build the service cards and tea meditation area.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

### Implement menu section with modal

Build the menu grid and modal interaction for item details.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

### Implement remaining top page sections

Build flow, blog, media, access, and footer sections.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

## Milestone: CMS Integration

### Connect menu content to microCMS

Fetch menu cards and modal content from microCMS with local fallbacks.

Labels: `type:feature`, `area:cms`, `priority:medium`

### Connect blog and media content to microCMS

Fetch blog cards and media list items from microCMS with local fallbacks.

Labels: `type:feature`, `area:cms`, `priority:medium`

## Milestone: Polish and Deployment

### Run responsive QA

Check the site at mobile, tablet, and desktop widths and fix layout issues.

Labels: `type:bug`, `area:ui`, `priority:high`

### Prepare portfolio README

Add screenshots, live demo link, implementation notes, and AI-assisted workflow notes.

Labels: `type:docs`, `area:workflow`, `priority:medium`

### Deploy to Vercel

Configure production environment variables and verify the deployed site.

Labels: `type:chore`, `area:workflow`, `priority:medium`
