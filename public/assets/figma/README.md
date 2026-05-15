# Figma Assets

Downloaded Figma assets should live here when they are required by the implementation.

## Naming

Use clear kebab-case names:

```txt
first-view-main.jpg
wagou-logo-black.png
menu-saemidori.jpg
concept-illustration.png
```

## Rules

- Prefer real image files in this folder over short-lived Figma MCP asset URLs.
- Keep decorative illustrations separate from content images when possible.
- Use `next/image` for content images once the final assets are available.
- Add meaningful `alt` text for content images.
- Use empty `alt=""` or `aria-hidden="true"` for decorative assets.
