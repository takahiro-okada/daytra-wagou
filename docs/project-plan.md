# Project Plan

## Overview

Wagou is a portfolio website implementation based on a Figma design. The site will be built with Next.js, TypeScript, Tailwind CSS, and microCMS.

The repository is intentionally structured to show a practical development workflow: design inspection with Figma MCP, issue-based task planning, semantic pull request titles, pull request templates, and CI checks.

## Success Criteria

- The top page closely follows the provided Figma design for desktop and mobile.
- Editable content is modelled clearly in microCMS.
- The app builds successfully without requiring production CMS credentials.
- The repository reads professionally in English.
- The GitHub Issue and PR history demonstrates structured delivery.

## Milestones

### 1. Foundation

- Set up repository documentation.
- Add contribution and pull request title rules.
- Add GitHub Issue and PR templates.
- Add GitHub Actions CI.
- Define microCMS schemas.

### 2. Design Implementation

- Implement global design tokens and asset strategy.
- Implement layout shell and fixed navigation.
- Implement first-view section.
- Implement concept section.
- Implement service section.
- Implement menu section and modal behaviour.
- Implement flow section.
- Implement blog, media, access, and footer sections.

### 3. CMS Integration

- Connect microCMS client.
- Fetch menu items.
- Fetch blog posts.
- Fetch media items.
- Add fallback states for local development and CI.

### 4. Quality and Deployment

- Run accessibility review.
- Run responsive visual QA.
- Optimise images and performance.
- Deploy to Vercel.
- Add screenshots and live demo link to README.

## Working Assumptions

- Figma MCP access is available through the copied Wagou file in the JUMBO WORLD team.
- microCMS credentials will be stored in `.env.local` locally and in deployment environment variables.
- The first production deployment target is Vercel.
- Documentation, issues, PRs, and commits are written in English.

## Out of Scope for the First Release

- E-commerce checkout.
- User accounts.
- Multilingual content management.
- Full automated visual regression testing.

## Task Breakdown

See [Task Breakdown](task-breakdown.md) for the implementation-ready issue order and branch naming plan.
