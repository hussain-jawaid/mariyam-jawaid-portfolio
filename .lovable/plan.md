

# Convert Photography Portfolio to Mariyam Jawaid's Trade Business Analyst Portfolio

## Overview

Transform this photographer portfolio website into a professional portfolio for Mariyam Jawaid, a Trade Business Analyst at JS Bank with 5+ years of banking experience. The site structure (Home, About, Portfolio/Experience, Contact) will be preserved but all content and theming will be adapted for a finance professional.

## What Changes

### 1. Fix Build Error
- Remove the unused swiper CSS imports from `src/components/ui/expand-on-hover.tsx` (lines 47-50). The component doesn't actually use Swiper functionality.

### 2. Update Data Model (`src/types/index.ts`)
- Replace `PhotographerInfo` with `ProfessionalInfo` containing fields for: name, title, summary, experience entries, skills, education, email, phone, location, socialLinks, availability
- Replace `Project` / `ProjectCategory` with `ExperienceEntry` type for work history and a `SkillCategory` type
- Remove photography-specific types (AspectRatio, ProjectImage, etc.)

### 3. Replace Photographer Data (`src/data/photographer.ts` -> `src/data/professional.ts`)
- Populate with Mariyam's resume data:
  - Name: Mariyam Jawaid
  - Title: Trade Business Analyst
  - Summary from resume
  - Email: mariyamjawaid15@gmail.com
  - Phone: 0316-3089574
  - Location: Karachi, Pakistan
  - All 5 work experiences from JS Bank
  - Skills (Professional + Technical)
  - Education (B.S. Business Administration, Diploma of Associate Engineer)

### 4. Replace Projects Data (`src/data/projects.ts` -> `src/data/experience.ts`)
- Convert 5 JS Bank roles into experience entries with descriptions and key achievements
- Add skills data organized by category (Trade Finance, Operations, Technical)

### 5. Redesign Home Page (`src/pages/Home.tsx`)
- Replace video hero with a professional gradient/abstract background hero
- Update heading to "Mariyam Jawaid" with tagline "Trade Business Analyst"
- Replace "Featured Projects" section with a "Professional Experience" timeline or card layout
- Replace "About My Work" intro with her professional summary
- Add a "Core Skills" highlights section

### 6. Redesign About Page (`src/pages/About.tsx`)
- Replace photographer bio with Mariyam's professional summary and career narrative
- Replace portrait video with a professional placeholder image or icon
- Add sections for: Awards/Achievements, Education, Skills breakdown
- Update social links (remove Behance, keep LinkedIn)

### 7. Convert Portfolio Page (`src/pages/Portfolio.tsx`) to Experience Page
- Rename to "Experience" in navigation
- Show work history as a timeline or detailed card layout
- Each role shows: title, dates, company, bullet points of responsibilities
- Add filter by skill area or show chronological timeline

### 8. Update Contact Page (`src/pages/Contact.tsx`)
- Update form project types from photography to business categories (e.g., "Collaboration", "Opportunity", "General Inquiry")
- Update all text references from photography to trade/banking context

### 9. Update Navigation (`src/components/layout/Header.tsx`)
- Change nav links: Home, Experience, About, Contact
- Update logo text to "MARIYAM JAWAID"

### 10. Update Footer (`src/components/layout/Footer.tsx`)
- Remove Behance link
- Update copyright to Mariyam Jawaid

### 11. Update SEO and Contact Form
- Update SEO descriptions across all pages
- Update `ContactForm.tsx` project type options for business context

## Technical Notes
- All existing animations, theme toggle, and responsive design will be preserved
- The hero will use a CSS gradient or abstract pattern instead of video (no external media dependency)
- Route `/portfolio` will redirect or be renamed to `/experience`; `/project/:slug` becomes `/experience/:slug`
- Update all component imports referencing the old data files

