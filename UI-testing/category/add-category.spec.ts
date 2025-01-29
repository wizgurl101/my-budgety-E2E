import { test, expect } from '@playwright/test';

test.describe('Add category', () => {
    test('has a header', async ({ page }) => {
        await page.goto('http://localhost:3000/dashboard/category');

        const h4Header = page.locator('h4');
        await expect(h4Header).toBeVisible();

        await expect(h4Header).toHaveText('Categories');
    })

    test('Add a new category dialog has a title', async ({ page }) => {
        await page.goto('http://localhost:3000/dashboard/category');

        await page.click('button:has-text("+ Add New Category")');

        const dialogHeader = page.locator('h2');
        await expect(dialogHeader).toHaveText('New Category Name');
    })
})