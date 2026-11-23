---
name: Baked By Adeela
description: Original floral cake photography on a pastel editorial canvas.
colors:
  ivory: "#faf7f1"
  paper: "#fffdf9"
  ink: "#473a3c"
  muted: "#685658"
  pink: "#e9d4d5"
  rose: "#76505a"
  lilac: "#e9e1ec"
  sage: "#e1e5da"
  line: "#d5c7c3"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(48px, 5vw, 76px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(38px, 4vw, 58px)"
    fontWeight: 400
    lineHeight: 1.07
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.8
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "11px"
    letterSpacing: "0.12em"
rounded:
  square: "0px"
  swatch: "50%"
spacing:
  field-gap: "22px"
  collection-gap: "30px"
  mobile-gutter: "23px"
  desktop-gutter: "60px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "14px 25px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "14px 25px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px"
  masthead:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
  filter:
    textColor: "{colors.ink}"
    padding: "10px 20px"
---

# Design System: Baked By Adeela

## Overview

**Creative North Star: "The floral cake studio"**

Original client photographs carry the identity, supported by soft pastel fields and expressive serif typography. The approved Olive & Mac reference informs the wide blush masthead and restrained editorial presentation; the website uses the text Baked By Adeela wordmark.

The system is spacious and mostly flat. Quiet controls and warm ink let the details of hand-piped flowers remain the focus. This document records the implementation in `dist/style.css` and `build.py`; the composition contract remains in `DIRECTION.md`.

**Key Characteristics:**
- Original photography and a typographic brand.
- Blush, lilac, sage and ivory surfaces.
- Serif headings, square imagery and fine rules.

## Colors

### Primary
Blush (`pink`) anchors the masthead and invitation sections. Muted rose (`rose`) supplies actions, emphasis and focus indicators.

### Secondary
Lilac (`lilac`) and sage (`sage`) separate supporting sections; sage also grounds the footer.

### Neutral
Ivory (`ivory`) is the page canvas and image-caption surface. Warm paper (`paper`) fills inputs and supplies primary-button text. Warm ink (`ink`) carries headings and copy; muted ink (`muted`) supports notes. The soft rule (`line`) defines filters and content dividers. Exact palette values are normative in the frontmatter.

## Typography

**Display Font:** Cormorant Garamond with Georgia and serif fallbacks.
**Body Font:** DM Sans with Arial and sans-serif fallbacks. Both families are served locally.

Display and headline roles use light-looking regular serif forms; italic emphasis uses rose. Body text uses an open sans serif. The home headline has its own responsive range (43ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“66px), becoming 43px on mobile and 38px below 400px. Standard third-level headings are 33px; mobile body copy is 14px. Action labels are uppercase with generous tracking. Navigation uses semibold serif text.

## Layout

The general container is capped at 1340px, with desktop gutters from the frontmatter, 36px gutters below 1180px and mobile gutters below 700px. Sections reduce from 80px to 65px below 1180px and 48px below 700px.

The masthead is 126px minimum on desktop, 106px below 1180px and 100px below 700px. The opening gallery uses three columns (1:1.13:1); mobile displays two images and hides the central wedding image. Weddings remain available through navigation and the collections section. Collection, journey and journal grids become single columns below 700px; Instagram changes from four columns to two. The form stays two columns until 400px. Product grids accommodate one, two or three items.

## Elevation & Depth

Flat pastel surfaces, photo crops and fine borders establish separation. The expanded mobile menu alone has a structural shadow (`0 15px 20px #473a3c12`). Portfolio items have no raised card shell.

## Shapes

Images and controls have square corners. Collection/product crops are generally 3:4 on desktop and 4:5 on mobile; maker portraits use 4:5. Instagram is square on desktop and 4:5 on mobile. Colour swatches are circular (38px), with fine borders. Rules and control outlines are 1px.

## Components

### Buttons
Restrained rectangular actions use rose with paper text, a 1px rose border and a 50px minimum height. Hover switches to ink over 200ms. Secondary buttons are transparent with ink text. Disabled submission buttons use 65% opacity and a waiting cursor. Visible focus uses a 2px rose outline offset by 6px.

### Chips
Collection filters use transparent backgrounds and a fine soft border; hover and selected states use rose with paper text. Selection is exposed with `aria-pressed`.

### Cards / Containers
Collections and products are unboxed image-and-caption compositions. Captions use serif type and small enquiry actions. Product links prefill collection and design on the single enquiry page. Collection/product image hover scales to 1.025 over 650ms with `cubic-bezier(.16,1,.3,1)`.

### Inputs / Fields
Paper fields have square corners, a muted rose-grey outline (`#ac9699`), 49px minimum height and explicit labels. Textareas are 160px tall and vertically resizable. Native constraints handle required values. Submission status appears below the button; errors receive a blush panel and retain input. Form integration activation is documented in README.

### Navigation
The header uses a single-line BAKED by ADEELA text wordmark with a smaller italic by and no circular logo. The footer retains the stacked signature. Serif links underline on hover/current-page state. Below 1180px a menu control opens a two-column panel with a full-width enquiry action. Keyboard/Escape support and the skip link are part of the implementation.

### Photographic opening
Ivory caption strips sit near the lower edge of each image with small diagonal arrows. Image hover scales to 1.025 over 800ms. The linked Instagram portfolio uses a 400ms scale to 1.04 and remains truthful about its static content until an authorised backend supplies media. Reduced-motion preference disables transitions and animations and restores ordinary scrolling.

## Do's and Don'ts

### Do:
- Do preserve original cake details and client photography.
- Do use the text Baked By Adeela wordmark on the website.
- Do retain visible keyboard focus and reduced-motion support.
- Do send enquiry actions to the single enquiry page.

### Don't:
- Don't replace the wide blush masthead with a circular-logo header.
- Don't add raised app-style shells around portfolio items.
- Don't describe the static Instagram portfolio as a connected live feed.

Implementation handoff: reviewer disposition **ship**. Desktop/mobile evidence is in `../review-redesign/`. Netlify Forms activation, a verified submission and notification setup remain operational steps in README; authorised Instagram activation is optional and pending.

### Header wordmark refinement
The header uses an inline SVG typographic wordmark: larger italic B and A initials, fine Cormorant Garamond capitals, smaller italic by, two fine flourishes and a small five-petal flower. It retains an accessible text label and remains single-line. Ink is the rose token. Desktop width is 350px, 300px at 1181Ã¢â‚¬â€œ1300px, and clamp(190px,60vw,280px) on phones. The footer retains the established stacked signature. The vector lettering inherits the locally hosted font and scales cleanly.

### Navigation emphasis
Main navigation links use 19px bold (700) serif lettering; compact desktops use 17px, tablet menus 23px and phone menus 22px. Phone menus use one column for legibility. Enquiry button styling is unchanged.

### Header Instagram link
A 21px outlined Instagram SVG links to @bakedbyadeela beside the desktop enquiry action. At 1180px and below it stays visible beside the menu toggle; its duplicate inside the collapsed navigation is hidden. Accessible labels describe its destination and new tab behaviour.
