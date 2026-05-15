#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is required. Install gh first."
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not authenticated. Run: gh auth login -h github.com"
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "No git remote named origin found. Add the GitHub repository as origin first."
  exit 1
fi

create_label() {
  local name="$1"
  local color="$2"
  local description="$3"

  if gh label list --search "$name" --json name --jq '.[].name' | grep -Fx "$name" >/dev/null; then
    echo "Label exists: $name"
  else
    gh label create "$name" --color "$color" --description "$description"
  fi
}

create_issue() {
  local title="$1"
  local labels="$2"
  local body="$3"

  if gh issue list --state all --search "$title in:title" --json title --jq '.[].title' | grep -Fx "$title" >/dev/null; then
    echo "Issue exists: $title"
  else
    gh issue create \
      --title "$title" \
      --label "$labels" \
      --body "$body"
  fi
}

echo "Creating labels..."
create_label "type:feature" "0E8A16" "New feature or user-facing enhancement"
create_label "type:bug" "D73A4A" "Bug or regression"
create_label "type:docs" "0075CA" "Documentation"
create_label "type:ci" "5319E7" "CI/CD configuration"
create_label "type:chore" "C5DEF5" "Tooling or maintenance"
create_label "area:figma" "FBCA04" "Figma design implementation"
create_label "area:cms" "1D76DB" "microCMS integration"
create_label "area:ui" "BFDADC" "User interface"
create_label "area:workflow" "D4C5F9" "Project workflow"
create_label "priority:high" "B60205" "High priority"
create_label "priority:medium" "FBCA04" "Medium priority"
create_label "priority:low" "0E8A16" "Low priority"

echo "Creating issues..."
create_issue "Implement design tokens and asset strategy" "type:feature,area:figma,area:ui,priority:high" "$(cat <<'BODY'
Define colours, typography direction, section spacing, shared button styles, and how Figma assets will be stored.

Branch: `feat/design-tokens`

Acceptance criteria:
- Project has reusable design tokens for Wagou colours.
- Shared section and button styles are documented or implemented.
- Figma asset handling strategy is documented.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass.
BODY
)"

create_issue "Implement layout shell and fixed navigation" "type:feature,area:figma,area:ui,priority:high" "$(cat <<'BODY'
Build the page shell, responsive header, hamburger entry point, and floating reservation CTA.

Branch: `feat/layout-shell`

Acceptance criteria:
- Desktop and mobile navigation structure exists.
- Floating reservation CTA behaviour is planned or implemented.
- Layout does not block future section work.
- Desktop and mobile screenshots are captured for review.
BODY
)"

create_issue "Implement first-view section" "type:feature,area:figma,area:ui,priority:high" "$(cat <<'BODY'
Build the responsive hero/first-view section from the desktop and mobile Figma frames.

Branch: `feat/first-view`

Figma references:
- Desktop first-view: `594:802`
- Mobile first-view: `612:1454`

Acceptance criteria:
- Hero image, logo placement, vertical copy, and slider dots are represented.
- Desktop and mobile layouts match the Figma direction.
- Assets have accessible `alt` text or are marked decorative.
- Visual QA screenshots are added to the PR.
BODY
)"

create_issue "Implement concept section" "type:feature,area:figma,area:ui,priority:high" "$(cat <<'BODY'
Build the concept section with Japanese copy, organic images, and decorative illustration.

Branch: `feat/concept-section`

Figma references:
- Desktop concept: `594:779`
- Mobile concept: `612:1439`

Acceptance criteria:
- Text content is structured semantically.
- Image positions and spacing are responsive.
- Mobile layout remains readable.
- Decorative assets do not harm accessibility.
BODY
)"

create_issue "Implement service section" "type:feature,area:figma,area:ui,priority:medium" "$(cat <<'BODY'
Build the service cards and tea meditation area.

Branch: `feat/service-section`

Figma reference:
- Desktop service: `594:737`

Acceptance criteria:
- Service cards are reusable components.
- Meditation cards are reusable components.
- Buttons use shared styles.
- Layout works across desktop and mobile.
BODY
)"

create_issue "Implement menu section and modal UI" "type:feature,area:figma,area:ui,priority:medium" "$(cat <<'BODY'
Build menu cards and the detail modal interaction before connecting CMS data.

Branch: `feat/menu-modal`

Figma reference:
- Desktop menu: `594:674`

Acceptance criteria:
- Menu cards are generated from local data.
- Detail modal opens and closes accessibly.
- Modal content supports multiple menu items.
- Keyboard and focus behaviour are considered.
BODY
)"

create_issue "Implement tea production flow section" "type:feature,area:figma,area:ui,priority:medium" "$(cat <<'BODY'
Build the horizontal/scrollable flow cards for the tea production process.

Branch: `feat/flow-section`

Figma reference:
- Desktop flow: `594:649`

Acceptance criteria:
- Flow card component is reusable.
- Desktop layout preserves the wide card rhythm.
- Mobile layout is scrollable or stacked without overflow issues.
- Slider UI is implemented or documented as a follow-up.
BODY
)"

create_issue "Implement blog, media, access, and footer sections" "type:feature,area:figma,area:ui,priority:medium" "$(cat <<'BODY'
Build the remaining top page sections with local data.

Branch: `feat/supporting-sections`

Figma references:
- Blog: `594:629`
- Media: `594:606`
- Access: `594:597`

Acceptance criteria:
- Blog cards use reusable local data.
- Media list uses reusable local data.
- Access section includes address, phone, and map link.
- Footer matches the site structure.
BODY
)"

create_issue "Connect menu content to microCMS" "type:feature,area:cms,priority:medium" "$(cat <<'BODY'
Replace local menu data with microCMS data while preserving fallback behaviour.

Branch: `feat/cms-menu`

Acceptance criteria:
- Menu endpoint type is defined.
- CMS fetch works when credentials exist.
- Local fallback works when credentials are missing.
- Build passes without production credentials.
BODY
)"

create_issue "Connect blog and media content to microCMS" "type:feature,area:cms,priority:medium" "$(cat <<'BODY'
Connect the blog and media sections to microCMS.

Branch: `feat/cms-blog-media`

Acceptance criteria:
- Blog and media endpoint types are defined.
- CMS fetch works with local fallbacks.
- Empty states are handled.
- Build passes without production credentials.
BODY
)"

create_issue "Run responsive QA and accessibility pass" "type:bug,area:ui,priority:high" "$(cat <<'BODY'
Review the implemented page across desktop, tablet, and mobile sizes.

Branch: `fix/responsive-a11y-pass`

Acceptance criteria:
- No obvious text overlap.
- Navigation and modal are keyboard usable.
- Images have appropriate alt text.
- Basic semantic structure is clear.
- QA notes are added to the PR.
BODY
)"

create_issue "Prepare deployment and portfolio README" "type:docs,area:workflow,priority:medium" "$(cat <<'BODY'
Prepare the project for portfolio submission and deployment.

Branch: `docs/portfolio-deployment`

Acceptance criteria:
- README includes screenshots and live demo link placeholders or final URLs.
- Deployment notes are accurate.
- Environment variable setup is documented.
- The AI-assisted workflow is explained clearly.
BODY
)"

echo "Done."
