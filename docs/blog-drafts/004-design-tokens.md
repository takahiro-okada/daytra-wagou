# Starting the Wagou Implementation with Design Tokens

Before building the actual Figma sections, I started with design tokens.

This step may look small, but it is important. If I jump straight into the first-view section, I will probably copy colours, border radius values, and button styles directly into individual components. That works for one section, but it becomes messy as the page grows.

## What I extracted from Figma

Using Figma MCP, I confirmed the main colour tokens used in the Wagou design:

```txt
primary:   #047836
dot:       #b6b9b0
white:     #ffffff
contrast:  #333333
accent:    #8b1c1a
border:    #939393
base-body: #f9f6f1
```

I added these as CSS variables in `globals.css` and exposed them to Tailwind CSS.

## Why this matters

Design tokens make later implementation easier.

Instead of writing `#047836` in many components, I can use a named token such as `--wagou-primary` or a Tailwind utility such as `bg-wagou-primary`.

This is easier to read and easier to change.

## Shared primitives

I also added two small UI primitives:

- `WagouButton`
- `SectionHeading`

These are not meant to solve the whole design system yet. They are a starting point so future sections can share the same button and heading language.

## Asset strategy

Figma MCP can return asset URLs, but those URLs are short-lived and should not be used directly in production code.

So I added a place for downloaded Figma assets:

```txt
public/assets/figma/
```

The rule is simple: if an image is needed by the website, it should eventually live in the repository or come from the CMS, not from a temporary Figma URL.

## What I learned

This step helped me understand that design implementation is not just about matching pixels.

It is also about creating a small language for the project: colours, spacing, typography, buttons, image shapes, and asset rules.

That language will make the next issues easier to implement and review.
