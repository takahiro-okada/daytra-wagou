# Dependency Updates

This project uses Dependabot to keep npm packages and GitHub Actions up to date.

## Policy

- Dependabot runs weekly on Monday morning in the `Pacific/Auckland` timezone.
- Minor and patch updates are grouped to reduce pull request noise.
- Major updates are kept separate because they may require manual migration work.
- Automatic merging is not enabled at this stage.
- Every Dependabot pull request should pass CI before it is merged.

## How to Review Dependabot PRs

1. Check whether the update is a patch, minor, or major change.
2. Read the package release notes when the dependency is important to the app.
3. Confirm CI passes.
4. For UI-related packages, run the app locally and check the affected screen.
5. Merge small safe updates with a squash merge.
6. Turn breaking or unclear updates into a normal task issue if they need investigation.

## Suggested Handling

### Patch updates

Usually safe to merge after CI passes.

### Minor updates

Usually safe, but review release notes for framework packages such as Next.js, React, Tailwind CSS, and microCMS SDK.

### Major updates

Do not merge casually. Create a dedicated issue and migration branch.

Major ESLint updates are ignored for now because `eslint-config-next` and its ecosystem plugins may lag behind the latest ESLint major. Revisit this after the Next.js linting stack officially supports the new major version.

## Why No Auto-Merge Yet?

Auto-merge is useful once the project has stronger automated tests and visual checks. For now, manual review is better because this project is also a learning and portfolio project.
