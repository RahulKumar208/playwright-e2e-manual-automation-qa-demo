# Manual Testing Report

# Test Environment
- Device: Windows 11 laptop
- Browsers tested: Chrome (v123), Firefox (v116), Safari (iOS)
- Resolution: 1920x1080 and 375x667 (mobile)

### Bug 1: Search bar returns no results for valid queries.
- **Steps to Reproduce**:
  1. Type a book name in search.
  2. No results appear ("0 items"). 
- **Expected**: Shows matching books instantly (live update preferred).
- **Actual**: Displays empty results, requires refresh 
- **Tested On**: Chrome (Windows), Safari (iPhone)
- **Priority**: High (core feature broken).
- **ScreenShot**: Search-bar-not-working.png

### Bug 2: Pagination shows extra empty pages when only 8 pages of books exist. 
- **Steps to Reproduce**:
  1. Go to book listing.
  2. Click pagination beyond page 8.
  3. Pagination displays invalid negative page numbers (-1, -2 etc.)
- **Expected**: Pages stop at last book page (page 8). 
- **Actual**: Infinite empty pages available.
- **Tested On**: Chrome (Windows), Safari (iPhone)
- **Priority**: Medium (UI confusion, non-critical).
- **ScreenShot**: Pagination-shows-extra-empty-pages.png

### Bug 3: Some books are invisible in listing but remain clickable. 
- **Steps to Reproduce**:
  1. Navigate to page 2
  2. Scroll to bottom (empty space)
  3. Click where books should appear 
- **Expected**: All books visible and properly rendered
- **Actual**: Books missing visually but links still functional 
- **Tested On**: Chrome (Windows), Safari (iPhone)
- **Priority**: High (broken UI with hidden functionality)
- **ScreenShot**: Books-are-invisible.png
- **Suggested Fix**:
    - Check CSS opacity/z-index issues
    - Verify book component rendering logic
    - Ensure API returns correct visibility flags


### Bug 4: Pagination Inconsistency - Default Page vs Item Indexing  
- **Steps to Reproduce**:
  1. Load or refresh the page
  2. Observe:
    - Automatically lands on page 1
    - First books actually belong to page 0
  3. Click previous button to see negative pages (-1, -2)
- **Expected**: 
    - Should consistently start from either page 0 or page 1
    - First page should contain the first set of books
    - Negative pages should be impossible to access
- **Actual**: 
    - Mixed indexing (UI shows page 1, data uses page 0)
    - Allows navigation to negative pages
    - Creates confusion in book numbering
- **Tested On**: Chrome (Windows), Safari (iPhone)
- **Priority**: Medium-High (causes data inconsistency and poor UX)
- **ScreenShot**: Pagination-Inconsistency.png

### Bug 5: When search gets no result, UI shows nothing (no feedback or "not found" message)  
- **Steps to Reproduce**:
  1. Launch the app at http://localhost:5173
  2. Use the search bar to enter a bogus or non-existent book title (e.g., "xyz123")
  3. Observe the results area
- **Expected**: A user-friendly message like "No results found" or "No books match your search" should be displayed. 
- **Actual**: The book list area is just empty with no indication of what happened
- **Tested On**: Chrome (Windows 11), Firefox (MacOS), Safari (iPhone 12)
- **Priority**: Medium (Reason: Not a functional failure, but confusing for users. Lack of feedback may lead users to think the search is broken.)
- **ScreenShot**: wrong-search.png