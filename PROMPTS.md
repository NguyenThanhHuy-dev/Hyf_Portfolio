# Banner prompts

Placeholder SVG banners live in `assets/banners/`. To replace one:
1. Generate the image with the prompt below.
2. Save it into `assets/banners/` (PNG or WebP, same aspect ratio).
3. Update the matching `src` in `index.html` (the filename extension).

Shared style line (paste at the end of every prompt):
> Soft pastel palette: powder blue #A9CBF5 as the main color, with lavender #DDD6F5, mint #CDEBDF and peach #FCE6D6 as accents, near-white background #F5F9FF, deep navy #1E2A3A for small details. Clean flat vector illustration with subtle soft shadows, rounded corners, generous whitespace, calm and professional mood. No text, no logos, no watermark, no people's faces.

---

## 1. hero.svg — 640 x 560 (8:7)
**Prompt:**
A modern workspace-style illustration: a floating browser window showing an e-commerce storefront with a large hero banner and three product cards, overlapped by a smartphone showing a colorful 2x2 task matrix app. Small floating pill badges around them. Rounded pastel gradient backdrop with two soft circles.

## 2. work-ecommerce.svg — 800 x 450 (16:9)
**Prompt:**
A wide banner of an online store interface: a browser window with a navigation bar, a pastel hero section, a row of four product cards with images, and beside it a floating shopping-cart panel with two items and a checkout button. Feels trustworthy and conversion-focused.

## 3. work-mobile.svg — 800 x 450 (16:9)
**Prompt:**
Two smartphones at a slight angle, front one showing a four-quadrant priority matrix (Eisenhower style) in blue, lavender, mint and peach tiles with small task chips, back one showing a clean task list with checkable rows and a pill button. Android-style rounded UI, no brand marks.

## 4. work-ai.svg — 800 x 450 (16:9)
**Prompt:**
An AI-assisted engineering scene: a central source node connected by dashed lines to three rounded agent cards, which connect to a dark code-editor window with colorful pastel syntax lines and a green "task done" badge. Conveys automation, review and speed. Mint and blue dominant.

## 5. freelance-translation.svg — 800 x 450 (16:9)
**Prompt:**
Two large overlapping speech bubbles, one white and one powder blue, with abstract text lines inside and two small arrows between them suggesting translation back and forth. Warm peach and lavender backdrop. Abstract letters only, no readable words.

## 6. freelance-video.svg — 800 x 450 (16:9)
**Prompt:**
A video editor interface: a large preview frame with a gradient scene, a play button and a dark subtitle bar below it, and under it a multi-track timeline with colored clips, a peach subtitle track, a vertical playhead and time markers. Blue and lavender backdrop.

---

### Optional extras
- **og-image** — 1200 x 630: wide version of prompt 1, with empty space on the left for a title. Save as `assets/banners/og.png` and point the `og:image` meta tag to it (social previews prefer PNG over SVG).
- **Profile avatar** — 512 x 512: friendly abstract geometric portrait silhouette in the same palette. Add it yourself to the hero if you want a face.
