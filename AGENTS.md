# AGENTS.md

## Repository rules

This repository contains locked image assets that must never be altered unless explicitly requested by the user.

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

## How images must be used

- Only reference existing image files by exact path
- Prefer central references through /src/config/assets.js
- If an image mapping is unclear, report the ambiguity instead of guessing
- Do not infer which image to use from similar filenames

## Implementation scope

When working on UI tasks:
- change code only
- do not modify asset files unless explicitly instructed
- do not modify unrelated components
- keep edits tightly scoped to the requested section

## Required verification before finishing

Always report:
- which image paths were used
- which files were edited
- confirmation that no files in /public/brand or /public/images were changed, deleted, moved, or renamed
