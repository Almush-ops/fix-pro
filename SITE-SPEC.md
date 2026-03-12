# Site Spec: פיקס פרו

**Domain**: fix-pro.co.il
**Type**: 2 — Professional (בעל מקצוע)
**Created**: 2026-03-12
**Status**: Draft

---

## Business Context

- **Goal**: Lead generation (טלפון + WhatsApp)
- **Niche**: מיזוג אוויר + אינסטלציה + הנדימן — צפון (חיפה והקריות)
- **Target query**: טכנאי מזגנים חיפה, אינסטלטור חיפה, הנדימן חיפה
- **Competition level**: Medium (ספריות שולטות, עסקים מקומיים חלשים)
- **Platform**: Astro

---

## Business Details

**Professional**: גל לוגסי
**Business**: גל קור יזמות
**Phone**: 055-432-9235

**Service Area**:
- חיפה (כל השכונות)
- קריית ביאליק, קריית מוצקין, קריית ים, קריית אתא
- נשר, טבעון, זכרון יעקב

**Competitive Advantage**:
- **One-stop-shop**: מזגנים + אינסטלציה + הנדימן (אף מתחרה לא מציע את שלושתם)
- **מחיר תחרותי**: ניקוי מיני מרכזי ב-450₪ (vs 600-700₪ בשוק)
- **זמינות**: 24/7 לחירום

---

## Brand Concept

**Business Name**: פיקס פרו / Fix Pro
**Type**: New brand (אנחנו יוצרים)

**Personality** (5 adjectives):
- אמין
- מקצועי
- זמין
- שקוף (מחירים)
- מקומי (צפון)

**Target Audience**:
- **Primary**: בעלי דירות 35-65, חיפה והקריות, צריכים שירות מהיר
- **Secondary**: משפחות צעירות שעברו דירה, צריכים התקנות
- **What makes them choose us**: מחיר שקוף, one-stop-shop, הגעה מהירה

**Trust Strategy**:
- תמונות אמיתיות של גל בעבודה
- מחירון שקוף באתר (יתרון בולט!)
- המלצות אמיתיות מ-GMB של גל קור
- GMB חדש בשם פיקס פרו עם ביקורות

**Niche Profile Match**: Home Services / HVAC
**Recommended Layout Archetype**: Service Hero + Trust + CTA

---

## Images Plan

**User will provide:**
- [x] תמונות של גל בעבודה (תיקון מזגן, אינסטלציה)
- [x] תמונות לפני/אחרי (לפחות 4 זוגות)
- [ ] לוגו (אם יש, אחרת ניצור)

**Location**: `h:\My Drive\systems\sites\fix-pro\images\`

**Generate with AI (Recraft/Ideogram):**
- [ ] לוגו פיקס פרו (אם צריך)
- [ ] אייקונים לשירותים
- [ ] hero background (אווירה של עבודה מקצועית)

**Find on Unsplash/Pexels:**
- [ ] תמונות ערים (חיפה, קריות) לדפי אזור
- [ ] תמונות כלי עבודה / מזגנים

---

## Page Inventory

### Core Pages (P1)

| URL | Hebrew Name | Template | Schema Types |
|-----|------------|---------|-------------|
| `/` | עמוד הבית | homepage | LocalBusiness, WebSite, HVACBusiness |
| `/contact/` | צור קשר | contact | LocalBusiness, PostalAddress |
| `/pricing/` | מחירון | pricing | - |

### Service Category Pages (P1)

| URL | Hebrew Name | Template | Schema |
|-----|------------|---------|--------|
| `/air-conditioning/` | מיזוג אוויר | service-category | Service, HVACBusiness |
| `/plumbing/` | אינסטלציה | service-category | Service, Plumber |
| `/handyman/` | הנדימן | service-category | Service, HomeAndConstructionBusiness |

### Service Pages (P1)

| URL | Hebrew Name | Schema |
|-----|------------|--------|
| `/air-conditioning/cleaning/` | ניקוי מזגנים | Service, FAQPage |
| `/air-conditioning/repair/` | תיקון מזגנים | Service, FAQPage |
| `/air-conditioning/installation/` | התקנת מזגנים | Service, FAQPage |
| `/air-conditioning/technician/` | טכנאי מזגנים | Service, FAQPage |

### Location Pages (P2)

| URL | Hebrew Name | Schema |
|-----|------------|--------|
| `/areas/haifa/` | חיפה | LocalBusiness, FAQPage |
| `/areas/kiryat-bialik/` | קריית ביאליק | LocalBusiness, FAQPage |
| `/areas/kiryat-motzkin/` | קריית מוצקין | LocalBusiness, FAQPage |
| `/areas/kiryat-yam/` | קריית ים | LocalBusiness, FAQPage |
| `/areas/kiryat-ata/` | קריית אתא | LocalBusiness, FAQPage |
| `/areas/tivon/` | טבעון | LocalBusiness, FAQPage |
| `/areas/zichron-yaakov/` | זכרון יעקב | LocalBusiness, FAQPage |
| `/areas/nesher/` | נשר | LocalBusiness, FAQPage |

### Brand Pages (P3)

| URL | Hebrew Name | Schema |
|-----|------------|--------|
| `/brands/tadiran/` | תדיראן | Service, FAQPage |
| `/brands/electra/` | אלקטרה | Service, FAQPage |
| `/brands/mitsubishi/` | מיצובישי | Service, FAQPage |
| `/brands/gree/` | GREE | Service, FAQPage |
| `/brands/lg/` | LG | Service, FAQPage |
| `/brands/samsung/` | סמסונג | Service, FAQPage |
| `/brands/daikin/` | דייקין | Service, FAQPage |
| `/brands/amcor/` | אמקור | Service, FAQPage |
| `/brands/carrier/` | Carrier | Service, FAQPage |
| `/brands/tornado/` | טורנדו | Service, FAQPage |

### Guide Pages (P4)

| URL | Hebrew Name | Schema |
|-----|------------|--------|
| `/guides/clean-ac-yourself/` | איך לנקות מזגן בעצמך | Article, FAQPage |
| `/guides/ac-needs-technician/` | סימנים שהמזגן צריך טכנאי | Article, FAQPage |
| `/guides/diy-vs-professional/` | ניקוי מזגן בעצמך או מקצועי | Article, FAQPage |
| `/guides/mini-central-vs-multi-split/` | מיני מרכזי או מולטי ספליט | Article, FAQPage |
| `/guides/ac-gas-refill/` | מילוי גז למזגן | Article, FAQPage |

### Info & Legal Pages (P3)

| URL | Hebrew Name | Template |
|-----|------------|---------|
| `/about/` | אודות | about |
| `/accessibility/` | הצהרת נגישות | legal |
| `/privacy/` | מדיניות פרטיות | legal |
| `/terms/` | תנאי שימוש | legal |

### Total: 34 pages

---

## URL Structure Rules

- All slugs in **English** (even for Hebrew content)
- Pattern: `/[category]/[item]/`
- City pages: `/areas/[city-romanized]/`
- Brand pages: `/brands/[brand-name]/`
- Guide pages: `/guides/[topic]/`
- Trailing slash: YES (consistent)
- www: NO (use non-www)

---

## UI Modules Per Page Type

### Homepage
1. **Hero**: 3 services highlight + phone CTA + emergency badge
2. **Trust bar**: שנות ניסיון, זמינות 24/7, מחיר שקוף
3. **Services grid**: 3 קטגוריות עם אייקונים
4. **Price highlights**: 450₪ ניקוי מיני מרכזי (יתרון!)
5. **Areas coverage**: מפה או רשימת ערים
6. **Testimonials**: 3 המלצות
7. **FAQ accordion**: 6-8 שאלות
8. **CTA sticky mobile**: טלפון + WhatsApp

### Service Category Page
1. Hero with service intro
2. Sub-services grid (links to service pages)
3. Pricing table (short version)
4. Process steps (4 steps)
5. Brands we service
6. Areas list
7. FAQ (6 questions)
8. CTA

### Service Page
1. Hero with price highlight (if applicable)
2. Intro + what's included
3. Detailed pricing
4. Process steps
5. Before/after gallery (if relevant)
6. FAQ (6 questions)
7. Related services
8. CTA

### Location Page
1. Hero with city name
2. City-specific intro (200 words)
3. Services available
4. Response time for this area
5. Local testimonial (if available)
6. Map embed
7. FAQ (3 questions)
8. CTA

### Brand Page
1. Hero with brand logo
2. Expertise intro
3. Common issues for this brand
4. Error codes (if available)
5. Pricing
6. Other brands we service
7. CTA

### Guide Page
1. Intro
2. Step-by-step content
3. Images/diagrams
4. When to call professional (CTA!)
5. FAQ
6. Related guides

---

## Content Requirements

### Homepage
- Word count: 800
- Must include: 3 services, pricing highlight, areas, testimonials
- Images: hero (גל), service icons

### Service Pages
- Word count: 1,200-1,500
- Must include: pricing, process, FAQ
- Images: service-specific (before/after if relevant)

### Location Pages
- Word count: 800-1,000
- Must include: unique intro (NOT template swap!), services, response time
- Images: city photo (can be stock)

### Brand Pages
- Word count: 1,000
- Must include: brand expertise, common issues, error codes
- Images: brand logo (official)

### Guide Pages
- Word count: 1,500-2,000
- Must include: step-by-step, images, CTA to service
- Images: process photos, diagrams

---

## Internal Linking Map

```
Homepage
  ├── /air-conditioning/ → /cleaning/, /repair/, /installation/, /technician/
  ├── /plumbing/
  ├── /handyman/
  ├── /pricing/
  ├── /areas/haifa/ (+ other cities in footer)
  ├── /about/
  └── /contact/

Service Category (/air-conditioning/)
  ├── All service pages
  ├── Brand pages
  ├── Location pages
  └── Related guides

Service Pages
  ├── Related services
  ├── Pricing page
  └── Contact/CTA

Location Pages
  ├── Homepage
  ├── All services
  └── Contact

Guide Pages
  ├── Related service pages (2-3 links)
  └── Contact/CTA
```

---

## SEO Implementation

### Primary Keywords (no cannibalization)

| Page URL | Primary Keyword | Intent |
|----------|----------------|--------|
| `/` | פיקס פרו חיפה | Navigational/Brand |
| `/air-conditioning/` | מיזוג אוויר חיפה | Commercial |
| `/air-conditioning/cleaning/` | ניקוי מזגנים חיפה | Commercial |
| `/air-conditioning/repair/` | תיקון מזגנים חיפה | Commercial |
| `/air-conditioning/installation/` | התקנת מזגן חיפה | Commercial |
| `/air-conditioning/technician/` | טכנאי מזגנים חיפה | Commercial |
| `/plumbing/` | אינסטלטור חיפה | Commercial |
| `/handyman/` | הנדימן חיפה | Commercial |
| `/pricing/` | מחירון מזגנים חיפה | Commercial |
| `/areas/[city]/` | טכנאי מזגנים [עיר] | Commercial |
| `/brands/[brand]/` | טכנאי מזגן [מותג] חיפה | Commercial |
| `/guides/[topic]/` | [topic keyword] | Informational |

### Noindex Pages
- `/thank-you/` (after form submit)
- `/404/`

### Canonical Strategy
- Self-referencing canonical on every page
- Trailing slash consistent
- non-www only

---

## Schema Implementation

### HVACBusiness (Homepage + AC pages)
```json
{
  "@type": "HVACBusiness",
  "name": "פיקס פרו",
  "telephone": "+972-55-432-9235",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 32.794, "longitude": 34.989},
    "geoRadius": "30000"
  },
  "areaServed": ["חיפה", "קריית ביאליק", "קריית מוצקין", "קריית ים", "קריית אתא", "נשר", "טבעון", "זכרון יעקב"]
}
```

### Plumber (Plumbing pages)
```json
{
  "@type": "Plumber",
  "name": "פיקס פרו - אינסטלציה",
  "telephone": "+972-55-432-9235"
}
```

### FAQPage (all service/guide pages)
- 4-6 questions per page
- Unique questions, not duplicated

### BreadcrumbList
- All pages except homepage

---

## Technical Requirements

### Astro-Specific
- [x] `<html lang="he" dir="rtl">`
- [ ] Self-hosted Hebrew font: Heebo (headings) + Assistant (body)
- [ ] GA4 tracking
- [ ] Security headers in `public/_headers`
- [ ] og:image unique per key page

### Performance Targets
- PageSpeed Mobile: 90+
- LCP: < 2.5s
- CLS: < 0.1

---

## Component Requirements

| Component | From astro-design-system | Pages Used |
|-----------|-------------------------|-----------|
| HeroService | YES | Homepage, Service pages |
| TrustBar | YES | Homepage |
| ServicesGrid | YES | Homepage, Category pages |
| PricingTable | YES | Pricing, Service pages |
| FAQ | YES | All service pages |
| Testimonials | YES | Homepage |
| CTASticky | YES | All pages (mobile) |
| BeforeAfter | Custom | Cleaning, Repair pages |
| AreasMap | Custom | Homepage, Location pages |

---

## GMB Setup (TODO)

- [ ] Create new GMB: "פיקס פרו - מיזוג אוויר, אינסטלציה והנדימן"
- [ ] Category: HVACBusiness (primary) + Plumber + Handyman
- [ ] Service area: חיפה, קריות, טבעון, זכרון יעקב
- [ ] Phone: 055-432-9235
- [ ] Website: fix-pro.co.il
- [ ] Add all services as Products
- [ ] Upload 5+ photos
- [ ] Get first 5 reviews from גל's existing clients

---

## Content Factory Integration

- [x] NO — manual content (Type 2 site)

---

## Launch Checklist

### Pre-Build
- [ ] SITE-SPEC.md approved by user
- [ ] All images uploaded to `sites/fix-pro/images/`
- [ ] Domain registered: fix-pro.co.il

### Build Phase
- [ ] DESIGN-BRIEF.md created (site-design-brief skill)
- [ ] Astro project initialized (vibe-site-builder)
- [ ] Design applied (astro-design-system)
- [ ] All 34 pages built

### Content Phase
- [ ] Homepage content written
- [ ] Service pages content written
- [ ] Location pages content written (unique per city!)
- [ ] Brand pages content written
- [ ] Guide pages content written
- [ ] Legal pages generated (legal-advisor skill)

### Post-Build
- [ ] Schema validated (Google Rich Results Test)
- [ ] GMB created and verified
- [ ] GSC domain property set up
- [ ] Sitemap submitted
- [ ] Top 10 pages manually indexed
- [ ] Cross-links from portfolio sites
- [ ] Site added to Uptime Monitor
- [ ] Site added to SEO Ranking Monitor
- [ ] Added to Airtable (link sales)

---

## Lead Form Configuration

**Form Fields (displayed):**
- שם מלא (required)
- טלפון (required)

**Webhook URL**: `https://hook.eu1.make.com/vafte51w7nn4tmtyejfl46cooalp0aru`

**Data sent:**
```json
{
  "your-name": "[מהטופס]",
  "phone": "[מהטופס]",
  "page-title": "[H1 של העמוד]",
  "website": "פיקס פרו",
  "category": "בעלי מקצוע"
}
```

**After Submit:**
- הודעת תודה באתר
- Track conversion in GA4

---

## Notes

### Competitive Advantages to Highlight
1. **450₪ ניקוי מיני מרכזי** — vs 600-700₪ בשוק (25-35% פחות!)
2. **One-stop-shop** — מזגנים + אינסטלציה + הנדימן (ייחודי!)
3. **מחירון שקוף** — רוב המתחרים מסתירים מחירים

### Content Gaps to Fill (from research)
1. מדריכי DIY עם CTA לשירות
2. דפי מותג (אף מתחרה לא מכסה)
3. דפי אזור ממוקדים (אף מתחרה לא מכסה ערים ספציפיות)
4. FAQ מקיף (PAA targeting)

### Language Rules
- First person: "אני גל, טכנאי מזגנים..."
- NOT: "אנחנו", "הצוות שלנו" (זה בעל מקצוע אחד)
- Professional but warm tone
