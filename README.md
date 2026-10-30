# Qing Traveler — Hostel Discovery & Travel Community Platform

An AI-assisted, single-page front-end prototype that brings hostel discovery, travel guides, map-based browsing, and traveller community interfaces into one place.

<p align="center">
  <a href="https://xieyanqi.github.io/hostel-discovery-platform/"><strong>Live Demo</strong></a>
  ·
  <a href="https://github.com/xieyanqi/hostel-discovery-platform"><strong>GitHub Repository</strong></a>
</p>

## Project at a glance

- **Course context:** Digital Media Technology course group project
- **My role:** Primary responsibility for product conceptualisation, requirements planning, and core front-end implementation
- **Development approach:** A comprehensive initial prompt in Cursor generated the main website structure and code; I then reviewed the output and iteratively requested modifications
- **Project type:** Static front-end prototype using demonstration data
- **Runtime:** No build step or application framework is required

The idea came from an independent trip to Xiamen. Finding and comparing hostels required searching across several travel and social platforms. Qing Traveler explores how accommodation information, travel guides, and traveller communities could be brought together in one browsing experience.

## Main interfaces

Screenshot assets are supplied separately in the portfolio handoff pack. Upload its `screenshots/` folder to this repository before adding inline image previews.

### 1. Homepage and navigation
A destination carousel, section navigation, and entry points to the main content areas.

### 2. Hostel discovery
Nine sample hostel records are rendered from JavaScript data. Users can filter the listing by region, price range, and hostel category. The filtering interaction has been tested by the project owner.

The hostel detail modal displays rating dimensions, review tags, and sample reviews.

### 3. Travel guides and itinerary details
Seven sample travel guides are rendered as cards. Selecting a guide opens a detailed itinerary view with an overview, schedule, transport notes, accommodation examples, and food recommendations.

### 4. Map-based browsing
Leaflet displays map tiles from OpenStreetMap and places markers using predefined coordinates. These views visualise example hostel and itinerary locations; they do not provide live route planning or turn-by-turn navigation.

### 5. Traveller community
The interface presents regional groups, interest groups, official-organisation examples, and activity-map views.

The “Join Group” control is currently a placeholder: its handler logs a QR-code path to the browser console and does not complete a join flow.

### 6. Travel stories
Story cards are populated with demonstration content through a simulated asynchronous function. No remote story API or persistent content service is connected.

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

The libraries are loaded from CDNs. The project does not use React, Vue, a server-side framework, or a bundling/build pipeline.

## How the front end works

1. `index.html` defines the single-page structure and loads the CDN libraries, `styles.css`, and `main.js`.
2. `main.js` contains the active demonstration datasets, including `allHostels`, `travelGuides`, `communityData`, and `carouselData`.
3. `renderHostels()`, `renderGuides()`, and `renderCommunityGroups()` create interface elements from those JavaScript data structures.
4. `applyFilters()` filters the hostel array by region, price, and type, then re-renders the cards.
5. Leaflet creates map instances and markers from predefined latitude/longitude values.
6. Bootstrap modals display hostel details, booking examples, guide details, and map views.

`data/hostels.js` is retained in the repository but is not imported by the current `index.html`; it is not the active data source for the hostel cards.

## Development workflow

The preserved initial brief is a comprehensive, one-shot website specification. It describes the product concept, visual direction, page structure, core modules, and expected interactions. According to my recollection, I submitted it to Cursor as the initial instruction; Cursor generated the main website structure and code, after which I reviewed the result and requested iterative modifications.

The original Cursor chat history and intermediate versions were not retained. The workflow description is therefore based on my recollection and the preserved initial product brief, rather than reconstructed chat logs.

## Scope and limitations

This repository contains a front-end prototype, not a production booking or community platform.

- All hostel, review, guide, community, membership, and story content is demonstration or hard-coded data.
- There is no server-side database, persistent account system, production authentication, live booking API, or payment provider.
- Hostel room and booking-channel examples are hard-coded; the channel URLs are placeholders.
- The membership payment result is simulated in JavaScript.
- `showGroupQR()` currently logs a placeholder QR-code path instead of displaying a QR code or joining a group.
- The comments/guestbook code references `commentForm`, `commentsList`, and `loadMoreComments`, which are not present in the current HTML.
- Some secondary inline controls call functions that are not defined in the supplied JavaScript.
- The `500+` price filter value needs a parsing correction before it can reliably support future records priced above RMB 500.
- The story “load more” function returns a fixed sample dataset rather than fetching paginated content from a service.

A JavaScript syntax check (`node --check main.js`) passes. A complete browser-based regression test has not yet been completed.

## Run locally

The project is static and has no build step.

```bash
git clone https://github.com/xieyanqi/hostel-discovery-platform.git
cd hostel-discovery-platform
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. An internet connection is needed for the CDN libraries, remote images, and OpenStreetMap tiles.

## Repository structure

```text
hostel-discovery-platform/
├── index.html
├── main.js
├── styles.css
├── data/
│   └── hostels.js                 # retained, not currently imported
├── docs/
│   ├── initial-product-requirements-en.md
│   ├── technical-project-portfolio.md
│   ├── technical-project-portfolio.pdf
│   └── source-code-review.md
└── screenshots/
    ├── 01-homepage.jpg
    ├── 02-hostel-discovery.jpg
    ├── 03-hostel-details.jpg
    ├── 04-travel-guides.jpg
    ├── 05-guide-details.jpg
    ├── 06-itinerary-map.jpg
    ├── 07-traveller-community.jpg
    ├── 08-community-activity-map.jpg
    └── 09-travel-stories.jpg
```

## Portfolio and project evidence

- [Technical Project Portfolio (PDF)](docs/technical-project-portfolio.pdf)
- [Technical Project Portfolio (Markdown)](docs/technical-project-portfolio.md)
- [Initial Product Requirements — English Summary](docs/initial-product-requirements-en.md)
- [Source Code Review Notes](docs/source-code-review.md)

## Suggested repository description

> AI-assisted front-end prototype for hostel discovery, travel guides, and traveller community interfaces.
