# Implementation Plan - Manzini Car Wash React Conversion

The goal is to transform the existing static Bootstrap-based Manzini Car Wash website into a premium, high-fidelity React application. The new version will feature a modern dark-themed aesthetic with glassmorphism, smooth animations, and a responsive layout suitable for deployment on Netlify.

## Proposed Changes

### [Component Name] React Frontend Architecture

I will initialize a new React project using Vite in the `frontend` directory of the `Manzini_Car_Wash` submodule.

#### [NEW] [frontend/](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/)
- Initialize Vite + React project.
- Setup `framer-motion` for animations.
- Setup `lucide-react` for modern iconography.

#### [MODIFY] [index.css](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/index.css)
- Implement a comprehensive design system:
    - **Palette**: Deep Charcoal background, Turquoise/Teal accents (`#125b6b`), and Golden highlights.
    - **Typography**: Import *Caesar Dressing* (branding) and *Inter* (body) from Google Fonts.
    - **Utilities**: Glassmorphism cards, blurred backgrounds, and high-performance gradients.

#### [NEW] [Navbar.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Navbar.jsx)
- Sticky navigation with a glassmorphism blur effect.
- Animated mobile drawer for better UX.

#### [NEW] [Hero.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Hero.jsx)
- Full-height immersive entry section.
- Dynamic text reveal animations.

#### [NEW] [Services.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Services.jsx)
- Grid layout showcasing the 7 car care levels.
- Interactive cards with pricing and details.

#### [NEW] [Booking.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Booking.jsx)
- A "Book your appointment" section with a premium form design.

#### [NEW] [netlify.toml](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/netlify.toml)
- Configuration for Netlify deployment, pointing to the `frontend/dist` directory.

## User Review Required

> [!IMPORTANT]
> **Submodule Structure**: I will be creating the React app inside a `frontend/` folder within the `Manzini_Car_Wash` directory. This keeps the original assets clean but requires the build command on Netlify to be updated to `cd frontend && npm install && npm run build` and the publish directory to `projects/iarxii/Manzini_Car_Wash/frontend/dist`.

> [!TIP]
> **Design Polish**: I will use *Framer Motion* to add scroll-triggered reveal animations to the services and about sections to give it that "Premium" feel requested.

## Verification Plan

### Automated Tests
- `npm run build` in the `frontend` directory to ensure no build errors.
- Visual check using the browser tool once the dev server is started.

### Manual Verification
- Verify responsiveness on mobile/tablet viewports using browser emulation.
- Check that all service prices and descriptions match the original `index.html`.
