# Qing Traveler
## Hostel Discovery & Travel Community Platform
### Technical Project Portfolio

**Project context:** Digital Media Technology course group project  
**My contribution:** Primary responsibility for product conceptualisation, requirements planning, and core front-end implementation  
**Development approach:** Comprehensive initial prompt in Cursor, followed by iterative refinement  
**Technology:** HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.1.3, Leaflet 1.7.1, OpenStreetMap, Swiper 8, Font Awesome 6, Cursor

**Live demo:** https://xieyanqi.github.io/hostel-discovery-platform/  
**Public repository:** https://github.com/xieyanqi/hostel-discovery-platform

---

## 1. Project Overview

Qing Traveler is a single-page front-end prototype designed to bring hostel discovery, travel guides, map-based browsing, traveller communities, and travel stories into one browsing experience.

The project originated from an independent trip to Xiamen. During the peak travel season, I searched across Mafengwo, Qunar, and Xiaohongshu to find a hostel that offered a reasonable price and a good experience. Accommodation information and traveller recommendations were scattered across different platforms. I began to consider whether these resources could be organised in one place, reducing the repeated searching required of independent travellers.

I developed this idea into a Digital Media Technology course group project. I took primary responsibility for the product concept and core front-end implementation.

**Project objective:** Explore how a structured information architecture and interactive web interface can make travel-related information easier to browse and compare.

## 2. Initial Requirements and Product Design

Before development, I prepared a comprehensive website specification and submitted it to Cursor as the initial instruction. The brief described the product concept, visual direction, page structure, major modules, and expected interactions.

The initial design proposed:

- a homepage with destination imagery and navigation;
- hostel discovery with region, price, and category filters;
- hostel details and review presentation;
- travel guides with itinerary, transport, accommodation, and food information;
- map views for hostel and itinerary locations;
- regional and interest-based traveller groups;
- travel stories and supporting membership/promotional concepts.

The original brief also proposed capabilities such as real login, membership points, personalised recommendations, booking, and group joining. These should be understood as product ideas, not as completed production features.

## 3. Product Structure and Implemented Interfaces

### 3.1 Homepage and Navigation

The homepage includes a destination carousel, navigation links to the main sections, and entry points to membership and login/register interface concepts.

![Homepage](../screenshots/01-homepage.jpg)

### 3.2 Hostel Discovery

The hostel listing is generated from nine sample records stored in `main.js`. Users can filter the displayed cards by:

- geographical region;
- price range;
- hostel category.

The project owner has tested the filtering interaction and confirmed that the displayed listing changes according to selected filters.

![Hostel discovery](../screenshots/02-hostel-discovery.jpg)

The hostel detail modal displays an overall rating, rating dimensions, review tags, and sample reviews.

![Hostel details](../screenshots/03-hostel-details.jpg)

The reviews and room/booking examples are hard-coded demonstration content, not verified user-generated records or live inventory.

### 3.3 Travel Guides and Itinerary Details

Seven sample guide records are defined in `main.js`. Guide cards show the title, author, date, summary, and engagement counts. Selecting a guide opens a detailed view containing an overview, itinerary schedule, transport notes, accommodation examples, and food recommendations.

![Travel guides](../screenshots/04-travel-guides.jpg)

![Guide details](../screenshots/05-guide-details.jpg)

### 3.4 Map-based Browsing

Leaflet is used to create map views with OpenStreetMap tiles and markers positioned using predefined latitude/longitude values. The maps visualise sample hostel, itinerary, and community-event locations.

![Itinerary map](../screenshots/06-itinerary-map.jpg)

The map interface is a location visualisation. It does not implement route optimisation, turn-by-turn navigation, or live location tracking.

### 3.5 Traveller Community

The community interface presents three regional-group examples, two interest-group examples, and two organisation examples. Activity-map views show sample event locations and dates.

![Traveller community](../screenshots/07-traveller-community.jpg)

![Community activity map](../screenshots/08-community-activity-map.jpg)

The group-joining control is not implemented as a working join service. In the current source, `showGroupQR()` only logs a placeholder QR-code path to the browser console.

### 3.6 Travel Stories

Story cards display an image, category, title, excerpt, author, and date. The current story content is returned by a simulated asynchronous JavaScript function using a fixed sample dataset.

![Travel stories](../screenshots/09-travel-stories.jpg)

There is no connected story API, database, or persistent publishing system.

## 4. Technical Implementation

The project follows a lightweight static front-end structure.

| Component | Implementation |
|---|---|
| Page structure | HTML5 |
| Styling and responsive layout | CSS3 |
| Client-side logic | Vanilla JavaScript |
| UI components | Bootstrap 5.1.3 |
| Maps | Leaflet 1.7.1 |
| Map tiles | OpenStreetMap |
| Carousel | Swiper 8 |
| Icons | Font Awesome 6 |
| AI-assisted development environment | Cursor |

The libraries are loaded through CDNs. The project does not use React, Vue, a server-side framework, or a bundling/build pipeline.

### Client-side data and rendering

The active data structures are declared in `main.js`:

- `allHostels`: nine hostel demonstration records;
- `travelGuides`: seven travel guide records;
- `communityData`: regional groups, interest groups, and organisation examples;
- `carouselData`: destination and map marker examples.

The main rendering and interaction flow is:

1. `index.html` loads the page structure and external libraries.
2. `main.js` initialises the Swiper carousel, Bootstrap modal instances, filters, guide cards, and community cards.
3. Rendering functions populate the page from JavaScript data arrays.
4. `applyFilters()` applies the selected region, price, and type conditions to `allHostels`, then calls `renderHostels()`.
5. Leaflet creates map layers and markers from predefined coordinates.
6. Bootstrap modals present hostel details, booking examples, guide details, and maps.

The repository also contains `data/hostels.js`, but the current HTML does not import it. It is retained from the source package and is not the active hostel dataset.

## 5. AI-assisted Development Workflow

A distinctive part of this project was using Cursor as an AI-assisted coding environment.

I first prepared a comprehensive natural-language website specification and submitted it to Cursor in one initial prompt. Instead of requesting each page separately, the instruction covered the overall product concept, visual style, information architecture, core modules, and expected interactions.

Cursor generated the main website structure and code from this initial instruction. I then reviewed the generated website and continued to request modifications during development.

The workflow can be summarised as:

1. **Product conceptualisation:** identify the fragmented travel-information problem and define the platform objective.
2. **Comprehensive requirement specification:** describe the page structure, visual direction, content modules, and expected interactions in one initial brief.
3. **Initial AI generation:** use Cursor to generate the main website pages and code.
4. **Browser-based evaluation:** inspect the generated website and compare the visible result with the intended design.
5. **Iterative refinement:** provide further instructions to Cursor to modify code and improve the implementation.
6. **Testing and publication:** test selected interactions, publish the source repository, and deploy the static website through GitHub Pages.

The original Cursor chat history and intermediate development versions were not retained. This description reflects my recollection of the workflow and the preserved initial product specification, rather than reconstructed chat logs.

## 6. Individual Contribution

Although the project was completed in a course group-project setting, I took primary responsibility for the substantive product concept and core front-end development.

My contribution included:

- identifying the original user problem through personal travel experience;
- defining the product direction and major functional requirements;
- preparing the comprehensive initial website specification;
- using Cursor to generate the main website structure and code;
- evaluating generated pages and directing subsequent code modifications;
- reviewing the source structure and testing the hostel filtering interaction;
- publishing the project through GitHub and GitHub Pages.

The project was AI-assisted: the main code was generated and modified with Cursor. My role should therefore be described as product conceptualisation, requirement definition, AI-assisted development direction, evaluation, and refinement—not as independently hand-writing every line of code.

## 7. Functional Evaluation and Current Limitations

| Area | Current status |
|---|---|
| Homepage and navigation | Interface implemented |
| Hostel listing | Nine demonstration records rendered |
| Region, price, and type filters | Client-side filtering implemented; owner-confirmed tested |
| Hostel detail modal | Interface implemented with sample ratings and reviews |
| Travel guide cards and detail modal | Implemented with demonstration content |
| Itinerary map | Leaflet map and predefined markers implemented |
| Community groups | Group cards and activity-map interface implemented |
| Join-group workflow | Placeholder only; not implemented as a working join service |
| Travel stories | Cards populated from a fixed mock dataset |
| Login and registration | Interface concepts only; no production authentication |
| Booking and payment | Demonstration interfaces only; no live booking or payment service |
| Persistent data | No server-side database or persistent account system |

Additional source-review findings:

- `data/hostels.js` is not imported by the current page.
- The `500+` price filter value needs a parsing correction.
- The guestbook comments initialisation references HTML elements that are absent from the current page.
- Some secondary inline handlers call functions that are not defined.
- The membership payment result is simulated using a random outcome.
- The same fixed story dataset is returned by the “load more” function.

A JavaScript syntax check (`node --check main.js`) passes. Full browser-based regression testing remains to be completed.

## 8. Reflection and Future Development

The project allowed me to translate a product idea into an interactive website prototype using AI-assisted development. It also helped me recognise the difference between describing desired functionality and understanding how that functionality is implemented.

I could define the information users should see, describe how the filters and maps should behave, and evaluate whether the generated interface matched my expectations. However, the process also exposed gaps in my understanding of the underlying programming logic, data organisation, and software architecture.

This became an important motivation for pursuing formal Computing education. I want to move beyond directing AI tools to produce working interfaces and develop the ability to understand, design, implement, test, and maintain software systems more independently.

Potential future improvements include:

1. consolidating the demonstration data into a clear, modular data layer;
2. correcting incomplete event handlers and testing all visible controls;
3. improving the separation of UI rendering, application logic, and data;
4. learning how to design and connect backend services and databases;
5. implementing genuine authentication and persistent user interactions;
6. adding automated tests and more systematic debugging practices.

These are future learning and development directions, not features claimed to be complete.

## 9. Project Access

- **Live demo:** https://xieyanqi.github.io/hostel-discovery-platform/
- **Public GitHub repository:** https://github.com/xieyanqi/hostel-discovery-platform

---

### CV-ready project description

**Qing Traveler — Hostel Discovery & Travel Community Platform**  
*Digital Media Technology Course Group Project | Primary Product & Front-end Contributor*

Took primary responsibility for product conceptualisation and core front-end development of an AI-assisted travel platform prototype integrating hostel discovery, travel guides, map-based browsing, and traveller community interfaces. Prepared a comprehensive initial product specification, used Cursor to generate the main website structure and code, and iteratively refined the implementation through browser-based evaluation. Implemented client-side hostel filtering and Leaflet-based map views; published the prototype through GitHub Pages.
