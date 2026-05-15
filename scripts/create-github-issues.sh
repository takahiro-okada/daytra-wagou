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
  echo "No git remote named origin found. Create a GitHub repository and add it as origin first."
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

  gh issue create \
    --title "$title" \
    --label "$labels" \
    --body "$body"
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
create_issue "Configure project documentation" "type:docs,area:workflow,priority:high" "Add English documentation for setup, workflow, Figma notes, CMS schema, deployment, and contribution rules."
create_issue "Set up GitHub Actions CI" "type:ci,area:workflow,priority:high" "Add a CI workflow that runs install, lint, typecheck, and build on pull requests."
create_issue "Add semantic pull request title workflow" "type:chore,area:workflow,priority:high" "Validate pull request titles using Conventional Commit style so squash merge history stays clean."
create_issue "Define microCMS content model" "type:docs,area:cms,priority:medium" "Document the planned microCMS endpoints and fields before implementation."
create_issue "Implement global design tokens" "type:feature,area:figma,area:ui,priority:high" "Add project-level colours, typography, spacing, and shared UI primitives based on the Figma design."
create_issue "Implement first-view section" "type:feature,area:figma,area:ui,priority:high" "Build the responsive hero/first-view section from the desktop and mobile Figma frames."
create_issue "Implement concept section" "type:feature,area:figma,area:ui,priority:high" "Build the concept section with text layout, images, and decorative assets."
create_issue "Implement service section" "type:feature,area:figma,area:ui,priority:medium" "Build the service cards and tea meditation area."
create_issue "Implement menu section with modal" "type:feature,area:figma,area:ui,priority:medium" "Build the menu grid and modal interaction for item details."
create_issue "Implement remaining top page sections" "type:feature,area:figma,area:ui,priority:medium" "Build flow, blog, media, access, and footer sections."
create_issue "Connect menu content to microCMS" "type:feature,area:cms,priority:medium" "Fetch menu cards and modal content from microCMS with local fallbacks."
create_issue "Connect blog and media content to microCMS" "type:feature,area:cms,priority:medium" "Fetch blog cards and media list items from microCMS with local fallbacks."
create_issue "Run responsive QA" "type:bug,area:ui,priority:high" "Check the site at mobile, tablet, and desktop widths and fix layout issues."
create_issue "Prepare portfolio README" "type:docs,area:workflow,priority:medium" "Add screenshots, live demo link, implementation notes, and AI-assisted workflow notes."
create_issue "Deploy to Vercel" "type:chore,area:workflow,priority:medium" "Configure production environment variables and verify the deployed site."

echo "Done."
