# Qing Traveler — Hostel Discovery & Travel Community Platform

An AI-assisted, single-page front-end prototype that brings hostel discovery, travel guides, map-based browsing, and traveller community interfaces into one place.

**Live demo:** https://xieyanqi.github.io/hostel-discovery-platform/  
**Public repository:** https://github.com/xieyanqi/hostel-discovery-platform

## Project at a glance

- **Course context:** Digital Media Technology course group project
- **My role:** Primary responsibility for product conceptualisation, requirements planning, and core front-end implementation
- **Development approach:** A comprehensive initial prompt in Cursor generated the main website structure and code; I then reviewed the output and requested iterative modifications
- **Project type:** Static front-end prototype using demonstration data
- **Runtime:** No build step or application framework is required

The idea came from an independent trip to Xiamen. Finding and comparing hostels required searching across several travel and social platforms. Qing Traveler explores how accommodation information, travel guides, and traveller communities could be brought together in one browsing experience.

## Main interfaces

1. **Homepage and navigation** — destination carousel, section navigation, and entry points to the main content areas.
2. **Hostel discovery** — nine sample hostel records, with client-side filters for region, price range, and hostel category. The project owner has tested the filtering interaction.
3. **Hostel details** — a modal showing rating dimensions, review tags, and sample reviews.
4. **Travel guides** — seven sample guide records, detail views, itinerary information, and map entry points.
5. **Map-based browsing** — Leaflet map views using OpenStreetMap tiles and predefined location markers.
6. **Traveller community** — regional and interest group cards, organisation examples, and activity-map views.
7. **Travel stories** — image-led cards populated from a fixed demonstration dataset.

Visual evidence is organised in the accompanying screenshots folder. The screenshot files should be uploaded to the repository under screenshots/ to display them alongside the source and portfolio.

## Technology stack

| Technology | Role in the prototype |
|---|---|
| HTML5 | Single-page structure, sections, forms, and modal markup |
| CSS3 | Layout, visual styling, responsive breakpoints, and animations |
| Vanilla JavaScript | Data arrays, DOM rendering, filtering, event handling, and modal updates |
| Bootstrap 5.1.3 | Grid/layout utilities, modal components, and UI styling |
| Leaflet 1.7.1 | Interactive map containers and location markers |
| OpenStreetMap | Map tile layer |
| Swiper 8 | Homepage destination carousel |
| Font Awesome 6 | Interface icons |
| Cursor | AI-assisted initial code generation and iterative code revision |

Libraries are loaded through CDNs. The project does not use React, Vue, a server-side framework, or a bundling/build pipeline.

## How the front end works

- index.html defines the single-page structure and loads CDN libraries, styles.css, and main.js.
- main.js contains the active demonstration datasets: allHostels, travelGuides, communityData, and carouselData.
- Rendering functions populate hostel, guide, and community cards from JavaScript arrays.
- applyFilters() filters the hostel array by region, price, and type, then re-renders the cards.
- Leaflet creates map instances and markers from predefined latitude/longitude values.
- Bootstrap modals display hostel details, booking examples, guide details, and map views.

The data/hostels.js file is retained in the repository but is not imported by the current index.html; it is not the active data source for the hostel cards.

## Development workflow

The preserved initial brief is a comprehensive, one-shot website specification. It describes the product concept, visual direction, page structure, core modules, and expected interactions. According to my recollection, I submitted it to Cursor as the initial instruction; Cursor generated the main website structure and code, after which I reviewed the result and requested iterative modifications.

The original Cursor chat history and intermediate versions were not retained. This workflow description is based on my recollection and the preserved initial product brief, rather than reconstructed chat logs.

## Scope and limitations

This repository contains a front-end prototype, not a production booking or community platform.

- Hostel, review, guide, community, membership, and story content is demonstration or hard-coded data.
- There is no server-side database, persistent account system, production authentication, live booking API, or payment provider.
- Hostel room and booking-channel examples are hard-coded; channel URLs are placeholders.
- The membership payment result is simulated in JavaScript.
- showGroupQR() currently logs a placeholder QR-code path instead of displaying a QR code or joining a group.
- The comments/guestbook code references commentForm, commentsList, and loadMoreComments, which are not present in the current HTML.
- Some secondary inline controls call functions that are not defined in the supplied JavaScript.
- The 500+ price filter value needs a parsing correction before it can reliably support future records priced above RMB 500.
- The story load-more function returns a fixed sample dataset rather than fetching paginated content from a service.

A JavaScript syntax check (node --check main.js) passes. A complete browser-based regression test has not yet been completed.

## Run locally

The project is static and has no build step.

1. Clone the repository.
2. Open a terminal in the repository root.
3. Run: python -m http.server 8000
4. Open http://localhost:8000 in a browser.

An internet connection is needed for CDN libraries, remote images, and OpenStreetMap tiles.

## Portfolio and project documentation

- Technical Project Portfolio (Markdown): docs/technical-project-portfolio.md
- Initial Product Requirements — English Summary: docs/initial-product-requirements-en.md
- Source Code Review Notes: docs/source-code-review.md

The updated PDF portfolio and nine prepared screenshots are included in the handoff package and should replace/add to the corresponding files in this repository.

## Suggested repository description

AI-assisted front-end prototype for hostel discovery, travel guides, and traveller community interfaces.
