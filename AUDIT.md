# THONGYOY CAFE — Build Audit

A regal single-page tribute to THONGYOY CAFE (ทองย้อย คาเฟ่) — fashion designer Thongyoy Phaesuwan's three-branch Thai-dessert cafe.

## Verified before code

1. **Hive Life (Jul 2018, Chanya P)** — founder interview, brand voice, opening story
2. **TheSmartLocal (Oct 2020, Papoj Aksharanugraha)** — verified menu items + prices, 7 photos
3. **Time Out Bangkok (Apr 2021, Can Srisawat)** — Ari hours, Thai Dessert Set price, OG image
4. **Tripadvisor + Wanderlog** — corroborating ratings + branch list

## Hard rules — pass / fail

- "Thongyoy" (no "Thong Yoy" / "Tongyoy") used consistently — **PASS**
- Thai ทองย้อย at full weight via Noto Serif Thai — **PASS**
- "Cafe" (no acute) throughout — **PASS**
- Real photos only, every <img> source-commented — **PASS** (13 photos, 4 sources)
- WebP + srcset + lazy + LCP preload — **PASS** (52 variants)
- 8 brand-coherent animations — **PASS**
- 6 structural moves — **PASS**
- JSON-LD CafeOrCoffeeShop + 2 departments (Paragon + Ladprao) — **PASS**
- robots + sitemap + 404 + favicon — **PASS**
- 44x44 tap targets — **PASS**
- prefers-reduced-motion respected — **PASS**
- @supports gate on bg-clip:text — **PASS**

## What makes this distinctive vs the last build (Floral Cafe Napasorn)

Floral Cafe was vintage-rose Cormorant Garamond romance. Thongyoy is **regal-Didone-Playfair Display** — high-contrast italic display serif, deep-aubergine + rose-gold + gold-leaf palette, and a literal **gold platter ornament SVG** rotating slowly in the hero corner with a radial gradient that glows like leaf gold. The wordmark "THONG·YOY" uses the dessert-set photo bleeding through the letters; below it the Thai ทองย้อย คาเฟ่ in a smaller cursive Thai serif. The "gold-thread shimmer" animation runs across "gold" in the hero headline via animated background-gradient with background-clip:text. The menu bento alternates between cream, gold, rose, ink, and dark tiles for a richer palette than any previous build. The branches section is the centerpiece — three side-by-side cards on a deep-ink background with rose-gold + gold radial backdrops, each labelled with an italic "№ 01 Ari", "№ 02 Paragon", "№ 03 Ladprao" badge.

## Brand-coherent animations shipped (8)

1. **Gold-thread shimmer** — linear-gradient background animation on "gold" word in hero
2. **Hero crossfade** — two signature images opacity-swap every 8s
3. **Hero ken-burns** — slow scale 1.04→1.0 on load
4. **Rotating gold platter** — SVG ornament rotates 360° in 30s
5. **Royal-gilt glow on primary CTA** — radial-gradient halo + sweeping highlight on hover
6. **Receipt marquee** with rose-flower (❀) separators
7. **Branch-card lift + image scale** on hover
8. **Hand-drawn nav underlines** in gold

All gated on `prefers-reduced-motion`.

## "Not boring" structural moves shipped (6)

1. Asymmetric editorial 7/5 hero with rotating gold-platter SVG ornament
2. **Three-branch locator** — side-by-side cards on dark backdrop
3. **Type-through-photo wordmark** — THONG·YOY with the dessert-set photo bleeding through letters via background-clip:text (gold-light fallback), ทองย้อย คาเฟ่ below in Thai
4. **Bento dessert menu** — irregular grid mixing photo-tiles, gold/rose/ink/cream price tiles, and a "gold-thread cheesecake" callout
5. Editorial drop caps + italic pull quotes from the founder
6. Manifesto love-note built around the founder's actual quotes ("Thai desserts shouldn't be a rarity")

## Deploy

- Repo: github.com/kirbykung168-art/thongyoy-cafe
- Live: thongyoy-cafe.vercel.app

## To push

Once the empty repo exists, run `push-to-github.bat` then `login-then-deploy.bat`.
