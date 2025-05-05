import { test, expect } from '@playwright/test';

test('Search returns no result for valid input (bug)', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[type="text"]', 'The Outsiders');
  const results = await page.locator('.book-list-item'); 
  await expect(results).toHaveCount(0); // this should fail if books are actually there
});
