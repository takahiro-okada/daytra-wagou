# Figma Notes

## Source

- File: Wagou Copy
- Figma file key: `j68hpzvdzNxPcLlxWriKgs`
- Root canvas node: `552:552`

## Main Frames

- Desktop top page: `594:577`
- Mobile top page: `612:1248`

## Desktop Sections

- First view: `594:802`
- Concept: `594:779`
- Service: `594:737`
- Menu: `594:674`
- Flow: `594:649`
- Blog: `594:629`
- Media: `594:606`
- Access: `594:597`

## Implementation Notes

- The design uses a warm base background, strong green accents, serif Japanese typography, organic image masks, and rounded leaf-like card shapes.
- The top page should be implemented as reusable sections rather than one large generated component.
- Figma-generated code is useful as a reference, but production code should be simplified into maintainable React components.
- Assets from Figma MCP should be downloaded into the project before final delivery where licensing and performance allow.

## Responsive Strategy

- Use the desktop and mobile frames as separate layout references.
- Prefer fluid CSS and shared data structures over duplicated markup.
- Use component variants only where desktop and mobile layout differences are significant.
