import test from '@playwright/test';
import { describe } from 'node:test';

describe("Header Navigation", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("should navigate to home page with home button", async ({ page }) => {
        await page.goto("/tic-tac-toe");
        await test.expect(page.getByRole('heading', { name: 'Tic Tac Toe' })).toBeVisible();
        await page.getByRole('link', { name: 'Home' }).click();
        await test.expect(page.getByRole('heading', { name: 'Welcome to the Game App!' })).toBeVisible();
        await test.expect(page.getByTestId('home-link')).toHaveAttribute('aria-selected', 'true');
    });

    test("should navigate to home page with logo button", async ({ page }) => {
        await page.goto("/tic-tac-toe");
        await test.expect(page.getByRole('heading', { name: 'Tic Tac Toe' })).toBeVisible();
        await page.getByRole('link', { name: 'Game App' }).click();
        await test.expect(page.getByRole('heading', { name: 'Welcome to the Game App!' })).toBeVisible();
        await test.expect(page.getByTestId('home-link')).toHaveAttribute('aria-selected', 'true');
    });

    test("should navigate to tic tac toe page with tic tac toe button", async ({ page }) => {
        await page.getByRole('link', { name: 'Tic Tac Toe', exact: true }).click();
        await test.expect(page.getByRole('heading', { name: 'Tic Tac Toe' })).toBeVisible();
        await test.expect(page.getByTestId('tic-tac-toe-link')).toHaveAttribute('aria-selected', 'true');
    });
});