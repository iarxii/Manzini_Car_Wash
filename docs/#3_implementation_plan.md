# Implementation Plan - Redesign: "Overclocked Racing Bento"

This plan executes a high-performance design overhaull for Manzini Car Wash, transitioning to a **"Racing Bento"** paradigm. The aesthetic will be sharp, fast, and technical, moving away from all soft gradients and glassmorphism.

## Design Identity: "Overclocked Racing"

| Feature | Design Specification |
|---|---|
| **Primary Color** | **Matte Charcoal** (`#0A0A0A`) |
| **Accent Color** | **Electric Neon Orange** (`#FF4D00`) |
| **Layout** | **Asymmetrical Bento Grid** (Modular, staggered cells) |
| **Edges** | **Sharp/Technical** (4px radius max, 45-degree angle accents) |
| **Vibe** | **High-Performance Racing** (Speed, precision, functional) |

## Proposed Changes

### [Component Name] Global Technical Registry

#### [MODIFY] [index.css](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/index.css)
- **Colors**: Set `--color-brand-accent` to Electric Neon Orange.
- **Directives**: Implement `.racing-border` (1px solid orange/white) and `.asym-card` (diagonal corner clipping).
- **Typography**: Force italicized headers for speed and monospaced "telemetry" fonts for pricing.

### [Component Name] High-Performance Components

#### [MODIFY] [Navbar.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Navbar.jsx)
- Minimalist, fixed "Telemetry Bar" style. No blur. Solid contrast.

#### [MODIFY] [Hero.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Hero.jsx)
- Aggressive, typography-heavy entrance. 
- Integrated "Speedometer" scroll indicator.
- Split-screen asymmetric layout.

#### [MODIFY] [Services.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Services.jsx)
- **High-Speed Bento**: Staggered grid where each service is a "pod".
- Use large italicized numbers for service IDs (01, 02...).

#### [MODIFY] [Booking.jsx](file:///c:/AppDev/My_Linkdin/projects/iarxii/Manzini_Car_Wash/frontend/src/components/Booking.jsx)
- "Pit Stop" form style. Clean blocks, sharp focus states.

## Verification Plan

### Automated Tests
- `npm run check` for CSS variable conflicts.
- `npm run build` to ensure Tailwind v4 handles the asymmetric grid logic.

### Manual Verification
- Visual check for "Neon Orange" vibrancy and "Matte Black" contrast.
- Verify "Racing Feel" through snappy reveal animations and kinetic hover states.
