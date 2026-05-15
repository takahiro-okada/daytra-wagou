# Building the Layout Shell Before the Hero Section

After adding design tokens, I moved to the next issue: the layout shell and fixed navigation.

I deliberately did not build the full first-view section yet. That will be a separate issue.

## What this step adds

This step adds the site chrome:

- fixed logo area
- desktop side navigation
- mobile hamburger entry point
- full-screen navigation overlay
- floating reservation CTA
- skip link for accessibility

The goal is to create the frame that future sections can live inside.

## Why not build the hero at the same time?

The Figma first-view section includes images, decorative shapes, vertical copy, slider dots, and responsive positioning.

If I build all of that together with navigation, the pull request becomes too large. It would be harder to review and harder to explain.

So I split the work:

1. layout shell and fixed navigation
2. first-view section

This keeps each pull request focused.

## Figma reference

For this task, I looked at the mobile first-view and the scroll-state note in Figma.

The key instruction is that the hamburger menu and reservation button should stay fixed across desktop and mobile.

## Implementation note

I first considered a React state-based hamburger menu, but switched to a CSS `:target` approach.

The menu opens when the URL hash becomes `#site-menu`, and closes when the user navigates to another anchor such as `#main-content`.

This keeps the navigation usable even before client-side JavaScript runs, which is a nice fit for a simple global site shell.

## What I learned

The layout shell is not the most visually exciting part, but it shapes the whole implementation.

By separating site chrome from page sections, the next tasks can focus on individual Figma sections without repeatedly changing navigation logic.

I also learned that a visual browser check can catch layout issues that linting never will. In this case, the first version of the desktop side navigation overlapped the temporary hero heading, so I added desktop left spacing to reserve room for fixed navigation.
