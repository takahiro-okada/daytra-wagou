# Deployment

## Target Platform

The recommended deployment target is Vercel because it works naturally with Next.js and provides preview deployments for pull requests.

## Required Environment Variables

Set these values in the Vercel project settings:

```txt
MICROCMS_SERVICE_DOMAIN
MICROCMS_API_KEY
MICROCMS_NEWS_ENDPOINT
```

## CI/CD Flow

1. Open a pull request.
2. GitHub Actions runs lint, typecheck, and build.
3. Vercel creates a preview deployment.
4. Review the preview URL against the Figma design.
5. Merge to `main` after CI and visual review pass.
6. Vercel deploys production from `main`.

## Production Checklist

- Environment variables are configured.
- The site builds on Vercel.
- Images load correctly.
- Metadata is updated.
- README includes the live URL.
- The final implementation has been checked on mobile and desktop.
