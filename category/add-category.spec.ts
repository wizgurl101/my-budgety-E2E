import { test, expect } from '@playwright/test';

test.describe('Add category', () => {
    test('Add a new category', async ({ page }) => {
        // Navigate to the dashboard page
        await page.goto('http://localhost:3000/dashboard/category');

        // Click the button to open the new category dialog
        await page.click('button:has-text("+ Add New Category")');

        // Fill in the category name
        await page.fill('input[aria-label="New Category Name"]', 'Test Category');

        // Click the add button
        await page.click('button:has-text("Add")');

        // Wait for the dialog to close
        await page.waitForSelector('input[aria-label="New Category Name"]', {state: 'detached'});

        // Verify the new category is added to the list
        const categoryName = await page.textContent('text=Test Category');
        expect(categoryName).toBe('Test Category');
    })
})