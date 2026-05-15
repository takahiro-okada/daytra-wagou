# microCMS Schema

This document records the planned content structure before connecting production CMS data.

## Environment Variables

```txt
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
MICROCMS_NEWS_ENDPOINT=news
```

## Proposed Endpoints

### `menu`

Used for the tea menu cards and modal details.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | Text | Yes | Example: `さえみどり` |
| `description` | Textarea | Yes | Modal body text |
| `image` | Image | Yes | Menu card image |
| `sortOrder` | Number | Yes | Manual display order |
| `isFeatured` | Boolean | No | Optional highlight control |

### `blog`

Used for the "日々のこと" section.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | Text | Yes | Blog card title |
| `category` | Text | Yes | Example: `COLUMN` |
| `eyecatch` | Image | Yes | Blog card image |
| `body` | Rich editor | Yes | Detail page content |
| `publishedAt` | Date and time | Yes | Display and sorting |

### `media`

Used for the media information list.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `title` | Text | Yes | Media item title |
| `date` | Date | Yes | Display date |
| `url` | Text | No | External link if available |

### `siteSettings`

Used for reusable shop information.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `shopName` | Text | Yes | Example: `茶舗 和合` |
| `address` | Text | Yes | Address text |
| `accessText` | Text | Yes | Example: station access |
| `phone` | Text | Yes | Phone number |
| `googleMapUrl` | Text | Yes | External map link |

## Local Fallback Strategy

The app should build without CMS credentials. If environment variables are missing, server-side data functions should return small sample datasets.
