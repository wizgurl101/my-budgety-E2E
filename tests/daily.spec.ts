import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/My Budgety/);
});

test("click button to go to dashboard", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByRole("link", { name: "Go to Dashboard" }).click();

  await expect(page).toHaveURL("http://localhost:3000/dashboard");
});
