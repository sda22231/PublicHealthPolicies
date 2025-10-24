# Design Guidelines: Políticas Públicas em Saúde

## Design Approach
**System-Based Approach**: Educational/Academic interface prioritizing clarity, readability, and organized information hierarchy for nursing students.

## Core Visual Identity

### Color Palette
- **Primary**: Blue (various shades for depth and hierarchy)
- **Secondary**: Aqua/Teal (verde-água) for accents and highlights
- **Base**: White for backgrounds and content areas
- **Supporting**: Light grays for subtle separations and shadows

### Typography System
- **Hierarchy**: Clear distinction between title levels (h1, h2, h3, h4)
- **Body Text**: Highly legible font optimized for extended reading
- **Style**: Professional, academic, modern sans-serif
- **Font Families**: 2 maximum (one for headings, one for body)
- **Sizes**: Progressive scale ensuring clear visual hierarchy

## Layout Architecture

### Spacing System
**Tailwind units**: Primarily 4, 6, 8, 12, 16 for consistent rhythm
- Section padding: py-12 to py-16
- Component spacing: gap-4 to gap-8
- Card padding: p-6 to p-8

### Tab Navigation Structure
- **Horizontal tab bar** with 9 policy sections
- **Active state**: Clear visual indicator (underline or background)
- **Smooth transitions**: Fade/slide between tab content
- **Mobile**: Stack or horizontal scroll for tab overflow

### Homepage Layout
- **Centered hero section**: Project title "Políticas Públicas em Saúde"
- **Subtitle/Credits**: "Desenvolvido e Idealizado por Marcelo Marques Cerri"
- **Navigation preview**: Visual cards or list showing all 9 policies
- **No large hero image required** - focus on typography and clean layout

## Component Library

### Navigation Components
- **Top Navbar**: Fixed/sticky header with project branding and search
- **Tab System**: Horizontal navigation between 9 policy sections
- **Search Field**: Prominent internal search for policies and terms
- **Footer**: Credits, additional links, modular design

### Content Components
- **Section Cards**: For empty content placeholders with titles:
  - Main Text Area
  - Comparative Tables/Practical Summaries
  - Historical Timeline
  - Key Terms Glossary
  - Practice Questions & Answers
- **Table Containers**: Clean borders, alternating row colors
- **Timeline Component**: Vertical or horizontal timeline structure
- **Glossary Cards**: Term + definition format
- **Quiz/Practice Area**: Question cards with answer reveal

### Visual Elements
- **Icons**: Subtle, line-style icons for sections (health-related)
- **Shadows**: Light, soft shadows (shadow-sm to shadow-md)
- **Borders**: Minimal, subtle borders for separation
- **Transitions**: Smooth fade/slide effects (300ms duration)

## Responsive Behavior

### Desktop (lg+)
- Full tab navigation visible
- Multi-column layouts for cards (2-3 columns)
- Sidebar potential for secondary navigation

### Tablet (md)
- Scrollable tab navigation if needed
- 2-column layouts where appropriate
- Maintained hierarchy

### Mobile (base)
- Hamburger menu or bottom navigation
- Single column stacking
- Touch-optimized tab switching

## Content Structure Per Tab

Each policy page contains **empty placeholder sections** with clear labels:
1. **Main Content Area**: Large text container with heading
2. **Tables Section**: Grid for comparative/summary tables
3. **Timeline Section**: Horizontal/vertical timeline container
4. **Glossary Section**: Card grid for terms and definitions
5. **Practice Section**: Quiz/question card area with answer toggles

## Interaction Patterns
- **Tab Switching**: Click/tap to change policy views with smooth fade
- **Search**: Real-time filtering as user types
- **Content Reveals**: Expandable sections where appropriate
- **Answer Toggles**: For practice questions (click to reveal)

## Accessibility & Academic Standards
- High contrast ratios for readability
- Clear focus states for keyboard navigation
- Semantic HTML structure
- Print-friendly layouts for study materials
- Consistent spacing for scannable content

## Animations
**Use sparingly and purposefully**:
- Tab transitions: Subtle fade (200-300ms)
- Card hover: Gentle lift (shadow increase)
- Search results: Smooth filter animation
- NO: Distracting scroll effects, bouncing elements, or excessive motion

## Images
**No hero images required**. This is a text-heavy educational platform. If imagery is added:
- Icons for each policy (consistent style)
- Diagrams for timelines/processes
- Infographic elements for statistics
All images should support learning, not decorate.