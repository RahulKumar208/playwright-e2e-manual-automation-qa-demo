# Reedsy Quality Assurance Challenge

## 👤 About Me

I’m a QA Engineer with over 5 years of experience testing commercial web applications in agile teams. I’ve worked with React, Node.js, and REST-based products across multiple industries, focusing on both manual exploratory testing and building automated end-to-end test suites using Playwright and Cypress.

I value clean UX, fast feedback loops, and test automation that’s robust but adaptable to frequent frontend/backend changes. I thrive in remote environments and async cultures, using tools like Slack, Jira, Notion, and GitHub to communicate effectively.

---

## 📝 Manual Testing Report

See: `manual-report/manual-testing.md`

### Summary:
- Total Bugs Reported: **6**
- Platforms Tested: Chrome (Win11), Firefox (MacOS), Safari (iPhone)
- Major Issues:
  - Search bar not returning results
  - Sorting is not global
  - Invisible books rendered
  - Pagination shows negative pages

Screenshots provided for each bug under `/manual-report/screenshots/`.

---

## 🤖 Automated End-to-End Testing

Tool: [Playwright](https://playwright.dev/)

### ✅ Setup Instructions:
```bash
npm install
npx playwright install
npx playwright test

---

##  Directory Structure

manual-report/
├── manual-testing-report.md
├── screenshots/

tests/
├── sort-rating.spec.ts
├── search-bar.spec.ts
├── visible-book-check.spec.ts

README.md
package.json
playwright.config.ts

