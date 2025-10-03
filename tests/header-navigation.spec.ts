import test from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
});

test("should navigate to home page with home button", async ({ page }) => {
    await page.goto("http://localhost:5173/tic-tac-toe");
    await test.expect(page.getByRole('heading', { name: 'Tic Tac Toe' })).toBeVisible();
    await page.getByRole('link', { name: 'Home' }).click();
    await test.expect(page.getByRole('heading', { name: 'Welcome to the Game App!' })).toBeVisible();
    test.expect(page.url()).toBe("http://localhost:5173/"); // Does not have a timeout and therefore needs to be last?
});

test("should navigate to home page with logo button", async ({ page }) => {
    await page.goto("http://localhost:5173/tic-tac-toe");
    await test.expect(page.getByRole('heading', { name: 'Tic Tac Toe' })).toBeVisible();
    await page.getByRole('link', { name: 'Game App' }).click();
    await test.expect(page.getByRole('heading', { name: 'Welcome to the Game App!' })).toBeVisible();
    await test.expect(page.url()).toBe("http://localhost:5173/"); // Does not have a timeout and therefore needs to be last?
});

test("should navigate to tic tac toe page with tic tac toe button", async ({ page }) => {
    await page.getByRole('link', { name: 'Tic Tac Toe', exact: true }).click();
    await test.expect(page.getByRole('heading', { name: 'Tic Tac Toe' })).toBeVisible();
    await test.expect(page.url()).toBe("http://localhost:5173/tic-tac-toe"); // Does not have a timeout and therefore needs to be last?
});