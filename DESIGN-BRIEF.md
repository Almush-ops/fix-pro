# Design Brief: פיקס פרו

> Created: 2026-03-12
> Niche: Home Services (HVAC, Plumbing, Handyman)
> URL: fix-pro.co.il

---

## 1. Brand Identity

### Basics
- **Brand name**: פיקס פרו / Fix Pro
- **Tagline**: מיזוג אוויר, אינסטלציה והנדימן בחיפה והקריות
- **Target audience**: בעלי דירות 35-65, חיפה והקריות, צריכים שירות מהיר ואמין
- **Primary goal**: Lead generation (טלפון + WhatsApp)
- **Brand personality** (5 words): אמין, מקצועי, זמין, שקוף, מקומי

### Tone of Voice
- מקצועי אך חם, ישיר, ללא מכירתיות
- Sample sentence: "אני גל, טכנאי מזגנים עם 15+ שנות ניסיון. אני מגיע, בודק, נותן מחיר מראש - בלי הפתעות."

---

## 2. Color System

### Brand Palette
- **Palette name**: Professional Blue
- **Creation method**: Personality mapping (אמין + מקצועי = blue) + urgency accent (orange)

| Shade | Hex | Usage |
|-------|-----|-------|
| 50 | #EFF6FF | Subtle backgrounds, tints |
| 100 | #DBEAFE | Hover states, light backgrounds |
| 200 | #BFDBFE | Badges, light accents |
| 300 | #93C5FD | Decorative elements |
| 400 | #60A5FA | Secondary buttons |
| **500** | **#3B82F6** | **Primary brand color** |
| 600 | #2563EB | Button backgrounds, links |
| 700 | #1D4ED8 | Text on light backgrounds |
| 800 | #1E40AF | Dark headings |
| 900 | #1E3A8A | Near-black with brand tint |

### Accent Palette (Emergency/CTA)
| Shade | Hex | Usage |
|-------|-----|-------|
| 400 | #FB923C | Secondary CTA hover |
| **500** | **#F97316** | **Primary CTA, urgent badges** |
| 600 | #EA580C | CTA backgrounds |
| 700 | #C2410C | CTA hover |

### Semantic Colors
| Token | Hex | Purpose |
|-------|-----|---------|
| dark | #1C2024 | Primary text, headings |
| surface | #F4F4F5 | Alternating section backgrounds |
| border | #E4E4E7 | Borders, dividers |
| accent | #F97316 | CTAs, highlights (orange) |
| muted | #71717A | Secondary text, captions |

### Contrast Check
- brand-700 (#1D4ED8) on white: 5.2:1 PASS AA
- white on brand-600 (#2563EB): 4.6:1 PASS AA
- dark (#1C2024) on surface (#F4F4F5): 14.7:1 PASS AAA

---

## 3. Typography

### Fonts
- **Primary font**: Heebo (weights: 400, 500, 700) - headings
- **Secondary font**: Assistant (weights: 400, 600, 700) - body text

### Scale
```
h1: text-3xl md:text-4xl lg:text-5xl  font-bold     leading-tight    font-heading
h2: text-2xl md:text-3xl              font-bold     leading-snug     font-heading
h3: text-xl                           font-semibold                  font-heading
h4: text-lg                           font-semibold                  font-heading
body: text-base                       font-normal   leading-relaxed  font-sans
```

### Font Files
- Download from: https://gwfh.mranftl.com/fonts
- WOFF2 files needed:
  - heebo-v21-hebrew-400.woff2
  - heebo-v21-hebrew-500.woff2
  - heebo-v21-hebrew-700.woff2
  - assistant-v18-hebrew-400.woff2
  - assistant-v18-hebrew-600.woff2
  - assistant-v18-hebrew-700.woff2
- Location: `/public/fonts/`

---

## 4. Logo

- **Status**: Waiting for Almog to create
- **Style**: Wordmark + icon (wrench/AC/drop combined icon)
- **Colors**:
  - Primary: Blue (#2563EB) on white
  - Reversed: White on blue
  - Favicon: Icon only on blue background
- **Creation**: Almog creates manually (NOT AI-generated)
- **Files needed**:
  - `/public/logo.svg` (full logo)
  - `/public/logo-white.svg` (reversed)
  - `/public/favicon.svg`

---

## 5. Hero Section

- **Style**: Card Form (Split Hero with lead form)
- **Height**: standard (py-20 md:py-28)
- **Content alignment**: right (RTL - form on left, text on right)
- **Overlay**: none (clean background)
- **Background**: Subtle gradient (brand-50 to white) or professional photo of Gal

### Hero Content
- **H1**: "טכנאי מזגנים, אינסטלטור והנדימן בחיפה והקריות"
- **Subtitle**: "שירות מהיר, מחיר שקוף, הגעה תוך שעתיים"
- **Primary CTA**: Form with שם + טלפון → "התקשרו אליי"
- **Secondary CTA**: WhatsApp button → 055-432-9235
- **Trust elements**:
  - Badge: "🔧 24/7 זמינות לחירום"
  - Badge: "💰 450₪ ניקוי מיני מרכזי"

---

## 6. Homepage Layout

### Archetype: Lead Magnet

### Section Sequence

| # | Section | Pattern | Background | Padding |
|---|---------|---------|------------|---------|
| 1 | Hero | Card Form (Split) | bg-white / gradient | py-20 md:py-28 |
| 2 | Trust Bar | Stats + Icons | bg-brand-600 | py-8 md:py-10 |
| 3 | Services Grid | 3-card grid | bg-white | py-16 md:py-20 |
| 4 | Price Highlight | Feature Box | bg-surface | py-12 md:py-16 |
| 5 | Process Steps | 4-step numbered | bg-white | py-16 md:py-20 |
| 6 | Testimonials | 3-card grid | bg-surface | py-16 md:py-20 |
| 7 | Areas Coverage | Map + list | bg-white | py-16 md:py-20 |
| 8 | FAQ | Accordion | bg-surface | py-16 md:py-20 |
| 9 | CTA Banner | Full-width | bg-brand-600 | py-12 md:py-16 |

### Section Details

**Trust Bar (Dark)**
- 15+ שנות ניסיון
- 24/7 זמינות
- מחיר שקוף מראש
- הגעה תוך שעתיים

**Services Grid (3 columns)**
1. מיזוג אוויר - ניקוי, תיקון, התקנה
2. אינסטלציה - נזילות, סתימות, תיקונים
3. הנדימן - עבודות קטנות, תחזוקה

**Price Highlight Box**
- Headline: "450₪ בלבד לניקוי מזגן מיני מרכזי"
- Subtext: "במקום 600-700₪ בשוק | כולל פילטרים ובדיקה"
- CTA: "הזמינו עכשיו"

**Process Steps (4)**
1. 📞 התקשרו או שלחו WhatsApp
2. 🗓️ קביעת מועד שמתאים לכם
3. 🔧 הגעה, בדיקה, הצעת מחיר
4. ✅ ביצוע העבודה + אחריות

**Testimonials (3 cards)**
- Real reviews from גל קור GMB
- Name, date, stars, quote

**Areas Coverage**
- Map showing Haifa + Krayot region
- List: חיפה, קריית ביאליק, קריית מוצקין, קריית ים, קריית אתא, נשר, טבעון, זכרון יעקב

**FAQ (6 questions)**
1. כמה עולה ניקוי מזגן?
2. כמה זמן לוקח לתקן מזגן?
3. האם יש אחריות על העבודה?
4. באילו אזורים אתם עובדים?
5. האם אתם עובדים בשבת?
6. מה ההבדל בין ניקוי רגיל לניקוי מיני מרכזי?

---

## 7. Component Styles

| Component | Choice | Notes |
|-----------|--------|-------|
| Cards | Bordered | Clean, professional look |
| Buttons | Rounded-md | Classic, trustworthy |
| Border radius | rounded-lg | Friendly but professional |
| Shadow intensity | Moderate | `shadow-md` on cards |
| Trust bar | Dark+Icons | bg-brand-600, white text, icons |
| Header | Standard | White bg, sticky on scroll |
| Footer | Mega 4-col | Services, Areas, Info, Contact |
| Mobile CTA | Floating Phone | Fixed bottom, phone icon + "התקשרו" |

### Button Styles
- **Primary**: `bg-accent text-white hover:bg-orange-700 rounded-md px-6 py-3 font-semibold`
- **Secondary**: `border-2 border-brand-600 text-brand-700 hover:bg-brand-50 rounded-md px-6 py-3`
- **WhatsApp**: `bg-green-500 text-white hover:bg-green-600 rounded-md`

---

## 8. Imagery Direction

- **Photo style**: Professional at work - real photos of Gal fixing AC, doing plumbing
- **Primary image ratio**: 4/3 (cards), 16/9 (hero)
- **Color temperature**: warm (inviting, trustworthy)
- **Sources**:
  - User-provided: Gal at work, before/after
  - Stock (Unsplash): City photos (Haifa), tool close-ups
  - AI (Recraft): Hero background, icons
- **Placeholder strategy**: Brand-50 gradient with icon

### Image Guidelines
- Show hands at work (not posed portraits)
- Before/after pairs for cleaning/repair
- Real tools, real locations (Israeli apartments)
- City photos for location pages (Haifa Bay, Krayot)

---

## 9. Conversion Elements

- **Primary CTA**: Phone call (055-432-9235)
- **Secondary CTA**: WhatsApp (same number)
- **Phone number**: 055-432-9235
- **Form fields**: שם מלא, טלפון (required)
- **Webhook URL**: `https://hook.eu1.make.com/vafte51w7nn4tmtyejfl46cooalp0aru`
- **Webhook field mapping**:
```json
{
  "your-name": "[from form]",
  "phone": "[from form]",
  "page-title": "[H1 of the page]",
  "website": "פיקס פרו",
  "category": "בעלי מקצוע"
}
```

### Mobile Sticky CTA
- Fixed to bottom of screen
- Background: brand-600
- Content: Phone icon + "חייגו עכשיו" + WhatsApp icon
- Height: ~60px

---

## 10. Competitor Analysis

| Competitor | URL | What to Learn | What to Avoid |
|-----------|-----|---------------|---------------|
| גל קור (גוגל) | GMB | ביקורות אמיתיות, תמונות עבודה | - |
| מגניבים | magnivim.co.il | מחירון שקוף | אתר איטי, עמוס |
| מזגנים בצפון | mazganim-bazafon.co.il | פשטות | חסר אמינות |
| פיקס מגנים | fixmazganim.co.il | SEO טוב | עיצוב מיושן |

---

## 11. Inspiration References

| Site | URL | What Inspired |
|------|-----|---------------|
| mossadams.com | Professional services | Clean service categorization |
| wise.com | Finance | Calculator/form integration in hero |
| bondvet.com | Vet services | Modern, warm professional design |

---

## 12. Special Requirements

### Emergency Badge
- Always visible on hero
- Orange background, white text
- Text: "🚨 קריאת חירום 24/7"

### Pricing Transparency
- Price highlight box on homepage (450₪ deal)
- Full pricing table on /pricing/ page
- Price range in service page headers

### Trust Building
- Real photos of Gal (mandatory)
- GMB reviews displayed on site
- "15+ שנות ניסיון" badge
- "מחיר שקוף - בלי הפתעות" messaging

### Mobile-First
- 70%+ traffic expected from mobile
- Form should be above fold on mobile
- Phone CTA always visible (sticky)
- Touch-friendly buttons (min 44px)

---

## Tailwind Config

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        dark: '#1C2024',
        surface: '#F4F4F5',
        border: '#E4E4E7',
        muted: '#71717A',
      },
      fontFamily: {
        sans: ['Assistant', 'Arial', 'sans-serif'],
        heading: ['Heebo', 'Arial', 'sans-serif'],
      },
    },
  },
}
```

---

## Next Steps

1. [ ] User uploads photos to `sites/fix-pro/images/`
2. [ ] Almog creates logo (light, dark, favicon)
3. [ ] Run vibe-site-builder to create Astro project
4. [ ] Build homepage + core pages
5. [ ] Write content (Hebrew, professional tone)
6. [ ] Deploy to Cloudflare Pages
