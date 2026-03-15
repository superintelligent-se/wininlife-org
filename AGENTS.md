# AGENTS.md

## Repository rules

This repository contains locked image assets that must never be altered unless explicitly requested by the user.

This website currently supports these languages only:
- English (`/index.html`)
- Swedish (`/sv/index.html`)

All frontend changes must be implemented across all supported languages in the same task unless the user explicitly requests otherwise.

## Asset locations

Production image assets live here:
- /public/brand
- /public/images

## Non-negotiable asset rules

- Never delete files from /public/brand or /public/images
- Never rename files from /public/brand or /public/images
- Never move files from /public/brand or /public/images
- Never convert PNG files to SVG
- Never replace provided images with placeholders
- Never crop, redraw, regenerate, or optimize provided image files
- Never remove assets because they seem unused
- Treat all files in /public/brand and /public/images as locked source assets
- Never inline images as base64 or data URIs
- Never create substitute assets when a real approved asset already exists

## How images must be used

- Only reference existing image files by exact path
- Prefer central references through /src/config/assets.js when applicable
- Use absolute root-relative paths for shared assets, starting with `/`
- Never use relative shared asset paths like `public/...` or `../public/...`
- If an image mapping is unclear, report the ambiguity instead of guessing
- Do not infer which image to use from similar filenames
- Use the same approved asset paths across all supported languages unless explicitly instructed otherwise

## Supported languages

The website currently supports:
- English (`/index.html`)
- Swedish (`/sv/index.html`)

No other language versions should be added unless explicitly requested.

## Required multilingual consistency

For any frontend change, always update all supported language versions in the same task unless the user explicitly requests otherwise.

This rule applies to:
- navigation
- header and footer
- buttons and calls to action
- section structure
- layout
- component styling
- icons and brand asset usage
- metadata and favicon references
- new sections
- removed sections
- reordered sections
- links between language versions
- any other user-visible frontend behavior

## Language-specific content rules

- Keep structure, hierarchy, and UX aligned across all supported languages
- Translate visible text appropriately for each supported language
- Do not leave one language outdated when the other has been changed
- Do not add a frontend feature to only one supported language unless explicitly instructed
- If a page exists in one supported language, the corresponding page must also exist in the other supported languages unless explicitly instructed otherwise
- Keep navigation labels, CTA intent, and section order synchronized across supported languages
- Keep brand usage, layout logic, spacing intent, and visual hierarchy consistent across supported languages

## Path rules for multilingual pages

- English root page: `/index.html`
- Swedish page: `/sv/index.html`

When changing frontend code, always check both language entry pages and keep them synchronized.

## Asset rules across languages

- Use the same approved brand assets across all supported languages
- Use absolute root-relative paths for shared assets
- Never use different asset paths for different language versions unless explicitly instructed
- Never let one language version reference outdated asset paths while another uses updated ones

## Approved conversion destinations

Only these two conversion destinations are approved for user-facing CTA links unless explicitly instructed otherwise:

- Meeting booking with the founding team:
  `https://outlook.office.com/book/FoundationTeam@superintelligent.se/?ismsaljsauthenabled`

- Join the community on Skool:
  `https://www.skool.com/the-athlete-skills-institute-4906/`

## Required CTA source of truth

All user-facing CTA destinations must be centralized in:
- `/src/config/cta.js`

Frontend code must reuse the CTA URLs from `/src/config/cta.js` and must not hardcode conversion URLs directly in page files unless explicitly instructed otherwise.

## CTA routing rules

All user-facing CTA links must resolve logically to one of the two approved conversion destinations above.

Use the meeting booking URL for CTAs related to:
- booking a meeting
- book a call
- talk to the team
- speak with the founding team
- contact the founding team
- schedule a conversation
- partnership or donor conversations
- sponsor conversations
- strategic collaboration discussions
- any CTA whose primary intent is direct human contact or scheduled discussion

Use the Skool community URL for CTAs related to:
- applying
- joining
- getting started
- becoming part of the school
- entering the program
- seeing how the school works
- exploring the setup
- exploring the education
- trying free courses
- free access
- community access
- learning more about the program experience
- any CTA whose primary intent is joining, exploring, starting, or participating

## CTA implementation rules

- Never invent a third CTA destination unless explicitly instructed
- Never use placeholder `#` links for real CTA buttons unless explicitly instructed
- Never leave CTA destinations inconsistent across supported languages
- Never hardcode approved conversion URLs directly in page markup if `/src/config/cta.js` can be used
- Always use `/src/config/cta.js` as the source of truth for conversion links
- If an existing CTA does not clearly match one of the two approved destinations, choose the closest logical approved destination based on intent
- If the intended CTA purpose is genuinely ambiguous, report the ambiguity instead of inventing a new URL
- Keep CTA behavior consistent across all repeated sections, cards, nav areas, and footers unless explicitly instructed otherwise

## Preferred CTA model

Use intention-based CTA mapping from `/src/config/cta.js`.

Preferred logical mapping:
- meeting CTAs -> founding team booking URL
- join/apply/explore/start/free-course CTAs -> Skool community URL

Preferred names:
- `CTA_URLS`
- `CTA_TYPES`
- `getCtaUrl(type)`

## Implementation scope

When working on UI tasks:
- change code only
- do not modify asset files unless explicitly instructed
- do not modify unrelated components
- keep edits tightly scoped to the requested section
- for frontend changes, always update all supported languages in the same task unless explicitly instructed otherwise
- for CTA changes, always map links to the approved conversion destinations defined in this file
- always reuse `/src/config/cta.js` for user-facing CTA destinations when possible

## Rules for missing images

If a section needs imagery and no approved real image file exists yet:
- do not create a placeholder image file
- do not invent a new asset path
- do not reuse a random existing asset
- keep the section visually strong using layout, typography, spacing, gradients, background colors, borders, shadows, or abstract CSS shapes
- use no image at all until a real approved file is provided

## Required verification before finishing

Always report:
- which files were changed
- which image paths were used
- confirmation that no files in /public/brand or /public/images were changed, deleted, moved, or renamed
- which supported language files were updated
- confirmation that all supported languages were kept in sync
- which CTA destinations were used
- confirmation that all user-facing CTAs were mapped only to the approved conversion destinations
- confirmation that `/src/config/cta.js` was used as the CTA source of truth when applicable
- any intentional language-specific differences, only if explicitly requested by the user
