# Task Breakdown

This document defines the practical implementation order for the Wagou project.

The goal is to keep each task small enough to understand, review, write about, and turn into a pull request.

## Task Sizing Rule

Each issue should usually produce one pull request and should answer:

- What user-visible or project-visible value does this add?
- Which Figma frame or technical area does it touch?
- How can we verify it?
- What can be explained in a short blog note afterwards?

## Completed Foundation

These have already been completed in the initial repository setup:

- Next.js, TypeScript, Tailwind CSS setup
- microCMS SDK installation and fallback client helper
- Figma MCP access confirmation
- English README and documentation
- GitHub Actions CI
- Semantic PR title check
- Issue and PR templates
- GitHub remote setup and first push

## Recommended Issue Order

### 1. Implement design tokens and asset strategy

Branch: `feat/design-tokens`

Define colours, typography direction, section spacing, shared button styles, and how Figma assets will be stored.

Acceptance criteria:

- Project has reusable design tokens for Wagou colours.
- Shared section and button styles are documented or implemented.
- Figma asset handling strategy is documented.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass.

### 2. Implement layout shell and fixed navigation

Branch: `feat/layout-shell`

Build the page shell, responsive header, hamburger entry point, and floating reservation CTA.

Acceptance criteria:

- Desktop and mobile navigation structure exists.
- Floating reservation CTA behaviour is planned or implemented.
- Layout does not block future section work.
- Desktop and mobile screenshots are captured for review.

### 3. Implement first-view section

Branch: `feat/first-view`

Build the top hero section from the Figma desktop and mobile frames.

Figma references:

- Desktop first-view: `594:802`
- Mobile first-view: `612:1454`

Acceptance criteria:

- Hero image, logo placement, vertical copy, and slider dots are represented.
- Desktop and mobile layouts match the Figma direction.
- Assets have accessible `alt` text or are marked decorative.
- Visual QA screenshots are added to the PR.

### 4. Implement concept section

Branch: `feat/concept-section`

Build the concept section with Japanese copy, organic images, and decorative illustration.

Figma references:

- Desktop concept: `594:779`
- Mobile concept: `612:1439`

Acceptance criteria:

- Text content is structured semantically.
- Image positions and spacing are responsive.
- Mobile layout remains readable.
- Decorative assets do not harm accessibility.

### 5. Implement service section

Branch: `feat/service-section`

Build the service cards and tea meditation area.

Figma reference:

- Desktop service: `594:737`

Acceptance criteria:

- Service cards are reusable components.
- Meditation cards are reusable components.
- Buttons use shared styles.
- Layout works across desktop and mobile.

### 6. Implement menu section and modal UI

Branch: `feat/menu-modal`

Build menu cards and the detail modal interaction before connecting CMS data.

Figma reference:

- Desktop menu: `594:674`

Acceptance criteria:

- Menu cards are generated from local data.
- Detail modal opens and closes accessibly.
- Modal content supports multiple menu items.
- Keyboard and focus behaviour are considered.

### 7. Implement tea production flow section

Branch: `feat/flow-section`

Build the horizontal/scrollable flow cards for the tea production process.

Figma reference:

- Desktop flow: `594:649`

Acceptance criteria:

- Flow card component is reusable.
- Desktop layout preserves the wide card rhythm.
- Mobile layout is scrollable or stacked without overflow issues.
- Slider UI is implemented or documented as a follow-up.

### 8. Implement blog, media, access, and footer sections

Branch: `feat/supporting-sections`

Build the remaining top page sections with local data.

Figma references:

- Blog: `594:629`
- Media: `594:606`
- Access: `594:597`
- Footer: component instance in desktop/mobile frames

Acceptance criteria:

- Blog cards use reusable local data.
- Media list uses reusable local data.
- Access section includes address, phone, and map link.
- Footer matches the site structure.

### 9. Connect menu content to microCMS

Branch: `feat/cms-menu`

Replace local menu data with microCMS data while preserving fallback behaviour.

Acceptance criteria:

- Menu endpoint type is defined.
- CMS fetch works when credentials exist.
- Local fallback works when credentials are missing.
- Build passes without production credentials.

### 10. Connect blog and media content to microCMS

Branch: `feat/cms-blog-media`

Connect the blog and media sections to microCMS.

Acceptance criteria:

- Blog and media endpoint types are defined.
- CMS fetch works with local fallbacks.
- Empty states are handled.
- Build passes without production credentials.

### 11. Run responsive QA and accessibility pass

Branch: `fix/responsive-a11y-pass`

Review the implemented page across desktop, tablet, and mobile sizes.

Acceptance criteria:

- No obvious text overlap.
- Navigation and modal are keyboard usable.
- Images have appropriate alt text.
- Basic semantic structure is clear.
- QA notes are added to the PR.

### 12. Prepare deployment and portfolio README

Branch: `docs/portfolio-deployment`

Prepare the project for portfolio submission and deployment.

Acceptance criteria:

- README includes screenshots and live demo link placeholders or final URLs.
- Deployment notes are accurate.
- Environment variable setup is documented.
- The AI-assisted workflow is explained clearly.

## Working Rhythm

For each task:

1. Read the issue.
2. Inspect the relevant Figma frame.
3. Explain the plan in plain language.
4. Implement only that slice.
5. Run verification.
6. Write a short blog draft section.
7. Commit and open a PR with a semantic title.
