# Hostel Discovery & Travel Community Platform

An interactive front-end prototype for discovering youth hostels and exploring travel resources.

**Project context:** Digital Media Technology course project  
**Development attribution:** Individually conceptualised and developed by the applicant  
**Project status:** Front-end prototype; not a production booking service

## Overview

The project originated from a travel-planning problem: hostel information, accommodation comparisons, and peer travel experiences were spread across multiple platforms. The aim was to explore how these resources could be brought together in one interface.

The prototype combines hostel discovery, travel guides, map-based browsing, and community-oriented interface concepts.

## Features represented in the prototype

- **Hostel discovery:** dynamically rendered hostel cards with region, price-range, and category filters.
- **Map-based browsing:** map views and location markers implemented with Leaflet and OpenStreetMap tiles.
- **Hostel details:** modal interfaces for ratings, review examples, room types, and booking-channel examples.
- **Travel guides:** guide cards, detailed itinerary content, and route-map interfaces.
- **Community interfaces:** region and interest groups, organisation information, and activity-map views.
- **Engagement UI:** membership presentation, a danmaku-style message area, and hostel-story cards.

These are prototype-level interfaces. The presence of a screen or interaction does not imply a production backend or a live third-party service.

## Technology stack

| Technology | Use in the project |
|---|---|
| HTML5 | Page structure, forms, sections, and modal markup |
| CSS3 | Layout, visual styling, responsive breakpoints, and animations |
| JavaScript | Rendering, filtering, event handling, and interactive behaviour |
| Bootstrap 5.1.3 | Responsive layout and modal components |
| Leaflet 1.7.1 | Interactive map interfaces |
| Swiper 8 | Homepage carousel |
| Font Awesome 6 | Interface icons |
| Cursor | AI-assisted code generation and iterative code revision |

External libraries are loaded from CDNs. Map tiles are requested from OpenStreetMap.

## How it was developed

The development process was prompt-driven and iterative:

1. Identify the user problem and define the intended website functions.
2. Translate feature requirements and layout expectations into natural-language prompts in Cursor.
3. Review generated pages in a browser, checking visual output and interaction behaviour.
4. Report visible issues or error messages to Cursor and request revisions.
5. Repeat the preview–evaluation–revision cycle.

The project developer's contribution centred on product conception, requirement description, prompt-based direction, browser-based evaluation, and iterative refinement. The code was generated and revised with AI assistance; this should not be represented as wholly hand-written code.

## Run locally

No build step is required for the current static prototype.

1. Download or clone this repository.
2. Open a terminal in the repository root.
3. Start a local static server:

   ```bash
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000` in a browser.

Opening `index.html` directly may work for some parts, but a local server is recommended for consistent browser behaviour.

## Repository structure

```text
hostel-discovery-platform/
├── index.html
├── main.js
├── styles.css
├── data/
│   └── hostels.js
├── docs/
│   ├── technical-project-portfolio.md
│   └── technical-project-portfolio.pdf
└── screenshots/
    └── .gitkeep
```

## Data and implementation notes

- The active hostel listing data is currently defined in `main.js`.
- `data/hostels.js` is retained from the original project archive but is not currently imported by `index.html`; it is not the active data source for the displayed hostel cards.
- Hostel reviews, room types, booking channels, stories, and several community elements use hard-coded or simulated example content.
- The membership payment result is simulated in the front end. No real payment provider is connected.
- No server-side database, persistent user account system, production authentication, or live booking API is included.

## Known limitations identified during source review

- The JavaScript includes a comments handler that refers to `commentForm`, `commentsList`, and `loadMoreComments`, which are not present in the supplied HTML.
- Some inline HTML handlers refer to functions that are not defined in the supplied JavaScript, including `logout`, `retryPayment`, `contactSupport`, and `showMembershipDetails`.
- `showToast` is called in some validation paths but is not defined in the supplied JavaScript.
- The project has passed a JavaScript syntax check (`node --check main.js`), but a complete browser-based regression test has not yet been completed.

These limitations are documented intentionally so the prototype is presented accurately. They are candidates for a later maintenance pass.

## Public-release notes

- The original “About Us” section contained names and personal descriptions of other students. This public-ready copy replaces that section with a project description to avoid publishing other people's personal details without permission.
- Confirm that you have permission to publish the course project and review all external image URLs and assets before making the repository public.
- No `LICENSE` file is included because the project's ownership and redistribution permissions have not yet been confirmed.

## Portfolio

See [`docs/technical-project-portfolio.md`](docs/technical-project-portfolio.md) for the English project portfolio draft. A PDF version is also included.

## Suggested repository description

> An AI-assisted, prompt-driven front-end prototype for hostel discovery, travel guides, and traveller community interactions.
