
Looking at the current Career Journey section on Home.tsx (lines 152-198), it's a vertical stack of plain bordered cards with date on the right and a single description line. It feels flat and undifferentiated from the "Core Expertise" grid above it.

Goal: give it visual hierarchy, a sense of progression (it IS a journey), and make it more scannable.

**Proposed redesign: Vertical timeline with role cards**

```text
Career Journey
5+ years of progressive growth at JS Bank

   ●─── Dec 2025 — Present
   │    Trade Business Analyst
   │    JS Bank · Karachi
   │    Managed trade finance operations for retail and SME...
   │
   ●─── Nov 2022 — Dec 2025
   │    Relationship Manager, Trade Hub
   │    JS Bank · Karachi
   │    Facilitate trade import/export transactions...
   │
   ●─── Sept 2022 — Nov 2022
        Service Quality Team Leader & Trainer
        JS Bank · Karachi
        Led recruitment and onboarding processes...

           [ View Full Experience → ]
```

**Key changes:**
1. Replace the bordered-card stack with a left-aligned vertical timeline (vertical line + dots).
2. Each entry: date pill on top (small, uppercase, tracked), role title (larger, prominent), company + location subtitle, and the first description line.
3. Most-recent role gets a "Current" accent badge instead of just dates.
4. Use category-based subtle icon next to each dot (Briefcase for trade-finance, Shield for quality) for quick visual identity.
5. Hover state: dot grows + entry shifts slightly right, whole entry remains a Link to `/experience/:slug`.
6. On mobile: timeline collapses to a tighter left rail (smaller dots, less indent) so content has room.

**Files to modify:**
- `src/pages/Home.tsx` — replace the Career Journey section JSX (lines 152-198) with the new timeline structure. Reuse existing `experiences` data, `ScrollReveal`, and lucide icons. No new dependencies.

**Out of scope:** No changes to data, routes, or other pages.
