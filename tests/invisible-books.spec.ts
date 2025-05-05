// tests/invisible-books.spec.ts
import { test, expect } from '@playwright/test';

test('Book card should not use undefined as image background', async ({ page }) => {
  await page.goto('http://localhost:5173?page=2');

  const cards = await page.locator('.book-card'); 

  for (let i = 0; i < await cards.count(); i++) {
    const style = await cards.nth(i).getAttribute('style');
    expect(style).not.toContain('url("undefined")');
  }
});
