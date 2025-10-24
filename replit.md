# Políticas Públicas em Saúde

**Desenvolvido e Idealizado por:** Marcelo Marques Cerri

## Overview

An interactive educational website for studying nursing public health policies in Brazil. Features a modern, academic design with tab-based navigation, search functionality, and organized placeholder sections ready for content insertion.

## Project Structure

### Core Pages
- **Home** (`client/src/pages/Home.tsx`) - Main application with tab navigation and search

### Components
- **Header** - Title, credits, search bar, and theme toggle
- **TabNavigation** - 9 policy tabs with icons and filtering
- **PolicyContent** - Container for all policy sections
- **ContentPlaceholder** - Main text section placeholder
- **TablePlaceholder** - Comparative tables section
- **TimelinePlaceholder** - Historical timeline section
- **GlossaryPlaceholder** - Key terms definitions
- **QuizPlaceholder** - Practice questions with expandable answers
- **Footer** - Credits and project information

### Policy Sections (9 total)

1. **SUS** - Sistema Único de Saúde
2. **PNH** - Política Nacional de Humanização
3. **PNPS** - Política Nacional de Promoção da Saúde
4. **PNSTT** - Política Nacional de Saúde do Trabalhador e da Trabalhadora
5. **PNAISH** - Política Nacional de Atenção Integral à Saúde do Homem
6. **Deficiência** - Política Nacional da Saúde da Pessoa com Deficiência
7. **LGBT** - Política Nacional de Saúde Integral de LGBT
8. **Idoso** - Estatuto do Idoso
9. **Pessoa Idosa** - Políticas da Pessoa Idosa

## Features

### ✅ Implemented
- Tab-based navigation between 9 health policies
- Functional search that filters policies by name and description
- Dark/light theme toggle with persistence
- Fully responsive layout (desktop and mobile)
- Smooth transitions between sections
- Interactive quiz with expandable answers
- Clean academic design with blue/aqua color scheme
- Organized placeholder sections for all content types

### 🔮 Ready for Future Content
Each policy section has structured placeholders for:
- Main parafrased content text
- Comparative tables and practical summaries
- Historical timeline with milestones
- Glossary of key terms
- Practice questions with commented answers

## Adding Content

### To Add Text Content
Edit `client/src/pages/Home.tsx` and update the `POLICY_INFO` object with full descriptions.

### To Add Specific Section Content
1. **Main Text**: Edit `ContentPlaceholder` component or create policy-specific content components
2. **Tables**: Replace placeholder in `TablePlaceholder.tsx` with actual data
3. **Timeline**: Update `TimelinePlaceholder.tsx` with historical dates and events
4. **Glossary**: Replace items in `GlossaryPlaceholder.tsx` with real terms
5. **Quiz**: Update `QuizPlaceholder.tsx` with actual questions and answers

### Search Enhancement
When content is added, update the search logic in `Home.tsx` to include content text in filtering.

## Design System

### Colors
- **Primary**: Blue (HSL: 205 90% 48%)
- **Secondary**: Aqua/Teal (HSL: 180 75% 45%)
- **Background**: Light/Dark mode supported

### Typography
- **Headings**: Inter font family
- **Body**: Inter with clear hierarchy
- **Emphasis**: Merriweather for special text

### Icons
All icons from Lucide React, health-related themes for each policy.

## Technical Stack

- **Framework**: React with TypeScript
- **Routing**: Wouter
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useMemo)
- **Build Tool**: Vite

## Running the Project

```bash
npm run dev
```

Application runs on port 5000 with hot module replacement enabled.

## File Organization

```
client/src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── TabNavigation.tsx
│   ├── PolicyContent.tsx
│   ├── ContentPlaceholder.tsx
│   ├── TablePlaceholder.tsx
│   ├── TimelinePlaceholder.tsx
│   ├── GlossaryPlaceholder.tsx
│   ├── QuizPlaceholder.tsx
│   ├── Footer.tsx
│   └── examples/        # Component previews
├── pages/
│   └── Home.tsx         # Main application page
├── lib/                 # Utilities
└── index.css           # Global styles and theme
```

## Future Enhancements

Potential features to add later:
- Quiz scoring and progress tracking
- Content export/print functionality
- Animated timeline visualization
- Dynamic glossary with advanced search
- User progress tracking
- Interactive diagrams and infographics
- Video content integration
- PDF resource downloads

## Notes

- All content sections are currently placeholders
- Search functionality works on policy names/descriptions
- Dark mode preference is saved to localStorage
- Fully responsive and mobile-optimized
- Modular structure for easy content updates
