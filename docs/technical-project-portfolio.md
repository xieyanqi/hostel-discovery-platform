# Hostel Discovery & Travel Community Platform
## Technical Project Portfolio

**Project type:** Digital Media Technology course project — individually developed  
**Role:** Product conception, requirement definition, prompt-driven AI-assisted development, browser-based evaluation  
**Technology:** HTML5, CSS3, JavaScript, Bootstrap 5.1.3, Leaflet 1.7.1, Swiper 8, Font Awesome 6, Cursor

---

## 1. Project overview

The Hostel Discovery & Travel Community Platform is an interactive front-end prototype exploring how hostel information and travel resources could be brought together in a single browsing experience.

The project was motivated by an independent trip to Xiamen. During peak travel season, comparing hostel options required searching across several platforms. Accommodation details and traveller experiences were fragmented, making it difficult to compare options efficiently. The project translated this observation into a product concept: a unified interface for discovering hostels, browsing travel guides, and exploring traveller communities.

## 2. Product scope and key interfaces

The prototype includes the following interface areas:

- **Hostel discovery:** hostel cards rendered dynamically from JavaScript data, with filters for region, price range, and hostel category.
- **Map-based browsing:** Leaflet map interfaces with location markers and OpenStreetMap tiles.
- **Hostel details:** modal layouts for rating summaries, review examples, room-type examples, and booking-channel examples.
- **Travel guides:** guide cards, itinerary details, and route-map interfaces.
- **Community:** region and interest groups, organisation information, and activity-map interfaces.
- **Engagement components:** membership presentation, a danmaku-style message area, and hostel-story cards.

The current implementation is a front-end prototype. Some content is hard-coded or simulated, and several interface concepts are not connected to live services.

## 3. Technical implementation

| Layer | Implementation |
|---|---|
| Structure | HTML5 sections, navigation, forms, and Bootstrap modal markup |
| Presentation | CSS3 styling, responsive breakpoints, and interface animations |
| Interaction | JavaScript event listeners, dynamic DOM rendering, filtering, and modal updates |
| UI framework | Bootstrap 5.1.3 |
| Maps | Leaflet 1.7.1 with OpenStreetMap tiles |
| Carousel | Swiper 8 |
| Icons | Font Awesome 6 |
| Development tool | Cursor for AI-assisted code generation and revision |

The active hostel card dataset is declared in `main.js`. The archive also contains `data/hostels.js`, but this file is not currently imported by `index.html`; it is retained as part of the original source package.

## 4. Development workflow: prompt-driven iteration

The project was developed through a prompt-driven workflow in Cursor rather than by writing all code manually from scratch.

1. **Concept and requirements:** define the problem, intended audience, page sections, and desired interactions.
2. **Prompting:** describe page layouts and functional requirements in natural language to Cursor.
3. **Generation:** review the generated HTML, CSS, and JavaScript files.
4. **Browser evaluation:** inspect visual output and manually try interactive elements such as filters, maps, and modal interfaces.
5. **Issue reporting and revision:** provide Cursor with observed problems or error messages and request targeted changes.
6. **Iteration:** repeat the preview, evaluation, and revision cycle.

This process provided practical experience in translating product requirements into interface behaviour and evaluating AI-generated implementation.

## 5. Individual contribution

The project was independently conceptualised and developed by the applicant in the context of the Digital Media Technology course. The contribution included:

- identifying the travel-information problem and proposing the platform concept;
- defining the main information architecture and feature requirements;
- translating requirements into natural-language prompts for Cursor;
- reviewing generated code and browser output;
- testing visible interactions and using errors or unexpected behaviour to guide further revisions.

The use of Cursor should be described transparently as AI-assisted code generation and iterative revision, not as wholly hand-written implementation.

## 6. Technical limitations and critical reflection

The source review identified several limitations:

- The prototype has no server-side database, production authentication, persistent user accounts, or live booking API.
- Review, room, booking-channel, and story content includes hard-coded or simulated examples.
- The membership payment outcome is simulated in JavaScript rather than processed by a payment provider.
- `data/hostels.js` is not currently loaded by the page; the active hostel list is separately declared in `main.js`.
- The comments handler refers to HTML elements that are absent from the supplied page, and some inline handlers refer to functions that are not defined.
- A JavaScript syntax check passed, but full browser-based regression testing remains to be completed.

The most important learning was the distinction between describing desired behaviour and understanding how that behaviour is implemented. Prompt-driven development made it possible to turn a product idea into an interactive prototype, while also exposing gaps in the developer's understanding of program logic, data organisation, and software architecture.

## 7. Future development directions

Potential next steps include:

1. consolidate hostel data into a single structured source and connect it to the rendering logic;
2. repair unresolved event handlers and validate all visible interactions;
3. separate interface components and data modules for easier maintenance;
4. introduce a backend and database if persistent accounts, saved items, or genuine bookings are required;
5. connect verified accommodation data and booking providers rather than relying on illustrative examples;
6. add automated tests and document browser compatibility.

These are proposed future improvements, not features claimed to be complete.

## 8. Evidence

- **Source repository:** to be added after GitHub publication.
- **Live demo:** to be added after deployment and browser verification.
- **Screenshots:** to be added after capturing the actual running website.

---

### CV-ready summary

Independently conceptualised and developed an interactive hostel discovery and travel community prototype for a Digital Media Technology course. Translated product requirements into natural-language prompts in Cursor, iteratively generating and refining HTML/CSS/JavaScript interfaces. Evaluated visual output and tested browser interactions, using observed issues and error messages to guide subsequent revisions.
