# Design Style Guide — Dale Cosgrove

You are implementing UI for **Dale Cosgrove** — an independent operator working at the intersection of AI and the food industry. Dale is a person, not a company. Every design decision should reinforce that.

Think **editorial page printed on uncoated paper, slightly warm from age.** Ink, not pixels. Generous margins. Restrained color. One deep oxblood does most of the heading work; ochre is the only "bright" thing and it's used sparingly.

Use `tokens.css` (sibling to this file) as the source of truth for all color, type, spacing, radius, shadow, and motion values. Never invent values that aren't in that file.

---

## The one-line test

Before shipping any screen, ask: **does this look like a magazine page, or does it look like a SaaS product?** If it's the second, it's wrong.

Tell-tale signs it drifted into SaaS:
- Rounded cards with soft shadows floating on a gray background
- Purple or blue anywhere
- Gradients as decoration
- Emoji in buttons or headers
- Rounded squircle icons with colored fills
- "Glassmorphism," frosted-nav-bars, glow effects

---

## Voice & copy

**First person** (`I`, `my`) for personal surfaces — home, bio, journal, project writeups.
**Second person** (`you`, `your`) for functional copy — forms, buttons, confirmations.
**Never `we`.** There is no we.

Two registers, sitting side by side:
- **Narrative** — essays, writeups, long bios. Full sentences, comfortable cadence, specific nouns.
- **Declarative** — nav, buttons, headings, captions. Short. Often a single noun phrase. Lowercase reads human (`about`, `writing`, `work together`); Title Case reads formal (essay section headings).

**Banned, no exceptions:**
- Emoji — anywhere, ever. Paper-and-ink brand.
- Exclamation marks outside direct quotes.
- AI-speak: `unlock`, `supercharge`, `harness the power of`, `seamless`, `in today's fast-paced world`.
- Tech-hype adjectives: `revolutionary`, `cutting-edge`, `next-generation`, `game-changing`.
- Corporate hedging: `leverage`, `solutions`, `robust`, `synergies`.

**Numbers.** Spell out one through nine; numerals for 10+. Numerals always win in stats. Ranges use en-dashes: `2019–2024`.

---

## Color

| Token | Hex | Where it goes |
|---|---|---|
| `--color-primary` | `#4C061D` | Oxblood. Headings, primary ink, primary buttons. |
| `--color-accent`  | `#D17A22` | Ochre. Links, pullquotes, small moments of warmth. |
| `--color-soft`    | `#B4C292` | Sage. Tags, alternate surfaces, supporting blocks. |
| `--color-muted`   | `#736F4E` | Olive. Secondary text, captions, strong borders. |
| `--color-text`    | `#3B3923` | Deep olive ink. All body text. |

Paper scale `--paper-00 → --paper-40` = warm off-white to warm tan, for backgrounds.
Ink scale `--ink-10 → --ink-90` = olive family, for text hierarchy.

**Never used:** pure `#000`, pure `#FFF`, bright blue, purple, any candy color. Status colors are muted (`#6B7F4A`, `#C48A2E`, `#8A2E2E`) — not bootstrap green/yellow/red.

**Gradients:** the only legal gradient is a dark-to-transparent scrim at the bottom of a full-bleed image so overlaid text remains legible. No decorative gradients. Ever.

---

## Type

- **Display / headings:** `League Spartan`, weights 600–800. Negative tracking (`-0.02em` to `-0.025em`). Tight leading (1.02–1.15). Color `--color-primary`.
- **Body:** `Inter`, 400/500/600. 16px default. **Line-height 1.7.** This loose leading is critical — it's what makes pages feel like reading, not scanning.
- **Eyebrows / meta:** Inter 600, uppercase, 13px, `+0.14em` tracking, `--color-muted`.

Use `text-wrap: balance` on headings and `text-wrap: pretty` on body. These are in the token CSS already — don't override.

---

## Layout & surfaces

- **Default page background:** `--paper-10` (warm off-white).
- **Sections that need to separate:** step one warmer (`--paper-20`) or go full-bleed imagery.
- **Containers:** `--container-narrow` 720px (reading), `--container-text` 880px (journal), `--container-wide` 1200px (index), `--container-full` 1440px (max).
- **Spacing:** 4pt rhythm (`--sp-1` = 4px … `--sp-10` = 128px). Section spacing leans large — breathing room is part of the brand.
- **Asymmetry is fine.** A figure pulled to the left margin with a caption in the right gutter is on-brand. Perfect symmetry is fine too, for declarative content.
- **Sticky nav:** desktop only. Background matches page (`--paper-10`) — no frosted glass, no blur. Mobile nav is static at top.

---

## Borders, radii, shadows

- **Hairlines:** 1px `rgba(59,57,35,0.14)` is the default separator. Feels like a magazine rule.
- **Emphasis border:** 2px solid `--color-primary` for active nav, selected cards.
- **No colored left-border accent cards.** Ever.
- **Corner radii:** 0 or 2px for almost everything. Buttons 2px. Inputs 2px. Cards 0 (hairline border instead of radius). Pills (`--r-pill`) are for tag chips only. Never radius > 8px.
- **Shadows** are soft, warm, small — the `rgba(59,57,35, 0.06–0.10)` family.
  - `--shadow-1` for input focus rings and chips.
  - `--shadow-2` for cards that genuinely need to lift.
  - `--shadow-3` for modals only.
  - Never blue-tinted shadows. Never glows.

**Default card** = hairline border + warm surface + no radius + generous internal padding (`--sp-6`). A shadowed card is a *notable* card; most should not have one.

---

## Iconography

Icons are used **sparingly**. Most things other brands solve with icons, this brand solves with **text labels** and **layout**.

When icons are needed, use [Lucide](https://lucide.dev):
- 1.75px stroke at 24px
- `currentColor`, inherited from text — never a separate accent
- **Stroke only.** Filled icons look too product-y.
- 16px in dense UI, 20px in nav, 24px standalone
- Never larger than the text they sit next to

**Never:** emoji. Not in UI, not in copy, not in slides.

**Allowed unicode:** `·` for meta-row separators, `—` for em-dashes in pullquotes, `→` for "read more" text links.

**Logo:** the wordmark is `Dale Cosgrove` in League Spartan 700, `--color-primary`, tight tracking. Optional "DC" monogram for favicons and avatars.

---

## Imagery

- **Crops:** square or 4:5 portrait for people; 3:2 landscape for work and places.
- **Grade:** warm — slightly lifted shadows, warm highlights, a touch of grain. Never cold, never cool-blue-shadow.
- **No drop shadows** on images. Full-bleed beats rounded thumbnails.
- **Missing image?** Use an ochre or sage color block with a caption below — never a broken-image icon, never a gray placeholder box.
- **Grain utility** (`.paper-grain`): a very subtle SVG noise overlay for printed-paper feel. Hero blocks, deck backgrounds, card surfaces only. Not on every div.

---

## Motion

- **Default:** `260ms cubic-bezier(0.2, 0.7, 0.2, 1)` — a soft out-curve. Tokens: `--dur-med`, `--ease-out`.
- **Hover:** color shifts only (ochre → oxblood on links), plus subtle opacity. **No scale, no translate** on hover — too fidgety for this voice.
- **Press:** brief opacity dip to 0.85. No shrink, no bounce.
- **Page transitions:** cross-fade only. Think newspaper page turn, not app-store.
- **Cascade:** stacked list items fade in with 60ms stagger. That's it. No spring physics.

---

## Components, briefly

- **Button (primary):** oxblood fill, paper text, 2px radius, `--sp-3 --sp-5` padding, 600 weight. Hover: slight darken via opacity, no lift.
- **Button (secondary):** transparent fill, 1px oxblood border, oxblood text. Same geometry.
- **Link:** ochre, 1px underline at 3px offset. Hover → oxblood.
- **Input:** paper surface, 1px hairline border, 2px radius. Focus: 1px oxblood border + `--shadow-1`.
- **Tag chip:** sage (`--color-soft`) background, olive text, `--r-pill`, small padding, 13px.
- **Eyebrow label:** `.eyebrow` class — 13px Inter 600 uppercase +0.14em, olive muted.
- **Pullquote:** oversized League Spartan, ochre, narrow container, asymmetric placement ok.

---

## When in doubt

1. Remove something. Restraint is the brand.
2. Make the margin bigger.
3. Switch a rounded thing to a square thing.
4. Ask: *would a thoughtful print designer put this here?* If not, cut it.

---

## File contract

This folder contains:
- `CLAUDE.md` — this file. Read before doing any UI work.
- `tokens.css` — all design tokens as CSS variables, plus base reset and semantic type classes. Import this first in any stylesheet. Do not duplicate or override its values — if something's missing, ask, don't invent.

Load fonts via the `@import` in `tokens.css` (Google Fonts: Inter + League Spartan). Load Lucide from `https://unpkg.com/lucide@latest` when icons are needed.
