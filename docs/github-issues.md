# GitHub Issue Plan

These issues are written in English so they can be copied into GitHub or created automatically after GitHub CLI authentication is ready.

```bash
./scripts/create-github-issues.sh
```

The detailed implementation order is documented in [Task Breakdown](task-breakdown.md).

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

## Milestone: Design Foundation

### Implement design tokens and asset strategy

Define colours, typography direction, section spacing, shared button styles, and how Figma assets will be stored.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

### Implement layout shell and fixed navigation

Build the page shell, responsive header, hamburger entry point, and floating reservation CTA.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

## Milestone: Figma Sections

### Implement first-view section

Build the responsive hero/first-view section from the desktop and mobile Figma frames.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

### Implement concept section

Build the concept section with Japanese copy, organic images, and decorative illustration.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:high`

### Implement service section

Build the service cards and tea meditation area.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

### Implement menu section and modal UI

Build menu cards and the detail modal interaction before connecting CMS data.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

### Implement tea production flow section

Build the horizontal/scrollable flow cards for the tea production process.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

### Implement blog, media, access, and footer sections

Build the remaining top page sections with local data.

Labels: `type:feature`, `area:figma`, `area:ui`, `priority:medium`

## Milestone: CMS Integration

### Connect menu content to microCMS

Replace local menu data with microCMS data while preserving fallback behaviour.

Labels: `type:feature`, `area:cms`, `priority:medium`

### Connect blog and media content to microCMS

Connect the blog and media sections to microCMS.

Labels: `type:feature`, `area:cms`, `priority:medium`

## Milestone: Quality and Portfolio

### Run responsive QA and accessibility pass

Review the implemented page across desktop, tablet, and mobile sizes.

Labels: `type:bug`, `area:ui`, `priority:high`

### Prepare deployment and portfolio README

Prepare the project for portfolio submission and deployment.

Labels: `type:docs`, `area:workflow`, `priority:medium`
