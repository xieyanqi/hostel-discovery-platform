# Source Code Review Notes

**Repository:** xieyanqi/hostel-discovery-platform  
**Review date:** 30 October 2026  
**Scope:** Static review of the current public index.html, main.js, styles.css, and data/hostels.js; JavaScript syntax check.

## Confirmed implementation

- Single-page structure in index.html.
- CSS layout and responsive styling in styles.css.
- Vanilla JavaScript in main.js.
- CDN dependencies: Bootstrap 5.1.3, Leaflet 1.7.1, Swiper 8, Font Awesome 6.
- Hostel records: 9 entries in allHostels in main.js.
- Travel guide records: 7 entries in travelGuides.
- Community examples: 3 regional groups, 2 interest groups, and 2 organisation records.
- Hostel cards are rendered by renderHostels().
- applyFilters() filters by region, price, and type, then re-renders the cards.
- Guide cards and community cards are rendered from JavaScript arrays.
- Leaflet map instances use predefined coordinates and OpenStreetMap tiles.
- Hostel details, guide details, and maps are displayed in Bootstrap modals.
- Story cards are returned by a simulated asynchronous fetchStories() method.

## Important implementation details

- data/hostels.js is not loaded by the current index.html. The active hostel listing data is in main.js.
- getHostelReviews() returns the same demonstration review set regardless of the hostel ID.
- getHostelRooms() and getBookingChannels() return hard-coded examples. Booking channel URLs are # placeholders.
- processPayment() simulates a payment result using Math.random(); no payment provider is connected.
- showGroupQR() only logs a placeholder QR-code path to the console; it does not display a QR code or join a group.
- HostelStories.fetchStories() returns a fixed mock array after a timeout; it does not call a server or provide real pagination.

## Issues identified for a future maintenance pass

1. **Price filter parsing:** the 500+ option is parsed using split('-') and Number(). Number('500+') produces NaN; update the parsing logic before adding hostel records above RMB 500.
2. **Guestbook comments:** the comments initialisation code looks for commentForm, commentsList, and loadMoreComments, but these IDs are absent from the current HTML. The corresponding listener setup therefore cannot initialise successfully.
3. **Undefined inline handlers:** the HTML references logout, retryPayment, contactSupport, and showMembershipDetails, which are not defined in the supplied JavaScript.
4. **Toast helper:** showToast() is called in validation paths but is not defined in the supplied JavaScript.
5. **Group joining:** showGroupQR() is a placeholder; the visible button does not complete the expected action.
6. **Story pagination:** the same fixed mock story array is returned on each call, so the load-more behaviour is not backed by unique paginated data.
7. **Unused data file:** data/hostels.js is retained but not connected to the active rendering logic.

## Validation status

- node --check main.js: passed.
- User-confirmed: hostel filtering changes the displayed listing.
- Screenshots supplied in the project conversation show the main pages and map/detail views.
- Full automated browser regression testing has not been completed.

## Interpretation for applications

Describe the project as an AI-assisted static front-end prototype with working client-side filtering and map/detail interfaces. Do not describe it as a full-stack booking platform, live community service, production authentication system, or real payment service.
