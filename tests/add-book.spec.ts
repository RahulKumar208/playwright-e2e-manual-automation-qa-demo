import { test, expect } from '@playwright/test';

test('Sorting by rating does not persist across pages (bug)', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Select "Rating" from the dropdown
  await page.selectOption('.form-select', { label: 'Rating' });
  await page.waitForTimeout(1000); // Wait for results

  // Collect ratings on Page 1
  const ratingsPage1 = await page.$$eval('.book-rating', nodes =>
    nodes.map(n => parseFloat(n.textContent || '0'))
  );
  const sortedPage1 = [...ratingsPage1].sort((a, b) => b - a);
  expect(ratingsPage1).toEqual(sortedPage1);

  // Navigate to next page using chevron icon
  await page.locator('.bi.bi-chevron-right').first().click({ force: true });
  await page.waitForTimeout(1000);

  // Collect ratings on Page 2
  const ratingsPage2 = await page.$$eval('.book-rating', nodes =>
    nodes.map(n => parseFloat(n.textContent || '0'))
  );
  const sortedPage2 = [...ratingsPage2].sort((a, b) => b - a);
  expect(ratingsPage2).toEqual(sortedPage2); // Will fail if sorting resets
});
