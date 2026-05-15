# How I Decided to Handle Dependabot PRs in My Portfolio Project

After setting up GitHub Actions and Dependabot, I noticed that Dependabot can automatically create pull requests for dependency updates.

This is useful, but it also creates a new question:

> Should I merge these PRs automatically, or review them manually?

For this project, I decided not to enable auto-merge yet.

## Why I am not using auto-merge yet

This project is not only a website implementation. It is also a learning project and a portfolio project.

Because of that, I want to understand what changes are being introduced. If I automatically merge every dependency update, I might miss important changes in packages such as Next.js, React, Tailwind CSS, or GitHub Actions.

I also do not have full automated visual regression tests yet. CI can tell me whether the project builds, but it cannot fully tell me whether the design still looks correct.

## The policy I chose

I configured Dependabot with a simple policy:

- run weekly
- group minor and patch updates
- keep major updates separate
- do not auto-merge yet
- merge only after CI passes

This keeps the repository active and up to date without creating too much noise.

## How I will review Dependabot PRs

For patch updates, I will usually merge them after CI passes.

For minor updates, I will quickly check release notes if the package is important to the app.

For major updates, I will not merge them casually. Instead, I will create a dedicated issue and handle the migration as a normal development task.

## What I learned

Dependabot is not just a tool that updates packages. It is part of the project workflow.

If it creates too many pull requests, it becomes noise. If it is configured carefully, it becomes a useful maintenance assistant.

For a portfolio project, I think the best balance is to show that dependency updates are handled intentionally, but not blindly.
