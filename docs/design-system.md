# Design System Notes

This document records the first pass of Wagou design tokens extracted from Figma MCP.

## Figma Source

- File key: `j68hpzvdzNxPcLlxWriKgs`
- Desktop top page: `594:577`
- Mobile top page: `612:1248`

## Colour Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--wagou-primary` | `#047836` | Primary green, filled buttons, highlights |
| `--wagou-dot` | `#b6b9b0` | Slider dot and muted decorative detail |
| `--wagou-white` | `#ffffff` | Cards, labels, button text |
| `--wagou-contrast` | `#333333` | Main text |
| `--wagou-accent` | `#8b1c1a` | Small accent details |
| `--wagou-border` | `#939393` | Thin dividers and media list borders |
| `--wagou-base-body` | `#f9f6f1` | Page background |

## Typography

The Figma export uses `Noto Serif JP` for most visible Japanese text. The first implementation pass defines a Japanese serif stack through `--font-serif-ja`:

```css
"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif
```

The current app still uses the default sans font for temporary foundation copy. The actual Wagou sections should use the `wagou-serif` utility or a dedicated component style.

## Radius and Shape Language

The design uses a mix of small cards and organic leaf-like corners.

| Token | Value | Use |
| --- | --- | --- |
| `--wagou-radius-card` | `10px` | Menu and blog cards |
| `--wagou-radius-leaf-sm` | `20px 1px 20px 1px` | Buttons |
| `--wagou-radius-leaf-md` | `60px 10px 60px 10px` | Flow cards and medium image masks |
| `--wagou-radius-leaf-lg` | `100px 10px 100px 10px` | Service image masks |

## Shared Primitives

- `WagouButton`: base button/link style matching the Figma button shape.
- `SectionHeading`: heading structure with a decorative leaf placeholder.
- `.wagou-container`: default section width helper.
- `.wagou-section`: default vertical section spacing helper.
- `.wagou-serif`: Japanese serif text utility.

## Asset Strategy

See `public/assets/figma/README.md`.

Short-lived Figma MCP asset URLs should not be committed as production image sources. During implementation, download required assets into `public/assets/figma/` and reference them from the app.
