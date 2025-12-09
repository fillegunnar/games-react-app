import { expect, test } from '@playwright/test';

test.describe('Tic Tac Toe Game', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/tic-tac-toe');
    });

    test('should display game board', async ({ page }) => {
        await expect(page.getByTestId('game-board')).toBeVisible();
    });

    test('should allow X to make first move', async ({ page }) => {
        await page.getByTestId('square').first().click();
        await expect(page.getByTestId('square').first()).toContainText('X');
    });

    test('should alternate between X and O', async ({ page }) => {
        await page.getByTestId('square').nth(0).click();
        await expect(page.getByTestId('square').nth(0)).toContainText('X');
        
        await page.getByTestId('square').nth(1).click();
        await expect(page.getByTestId('square').nth(1)).toContainText('O');
    });

    test('should detect horizontal win', async ({ page }) => {
        await page.getByTestId('square').nth(0).click(); // X
        await page.getByTestId('square').nth(3).click(); // O
        await page.getByTestId('square').nth(1).click(); // X
        await page.getByTestId('square').nth(4).click(); // O
        await page.getByTestId('square').nth(2).click(); // X wins
        
        await expect(page.getByTestId('status')).toContainText('We have a winner: X');
    });

    test('should detect vertical win', async ({ page }) => {
        await page.getByTestId('square').nth(0).click(); // X
        await page.getByTestId('square').nth(1).click(); // O
        await page.getByTestId('square').nth(3).click(); // X
        await page.getByTestId('square').nth(2).click(); // O
        await page.getByTestId('square').nth(6).click(); // X wins
        
        await expect(page.getByTestId('status')).toContainText('We have a winner: X');
    });

    test('should detect diagonal win', async ({ page }) => {
        await page.getByTestId('square').nth(0).click(); // X
        await page.getByTestId('square').nth(1).click(); // O
        await page.getByTestId('square').nth(4).click(); // X
        await page.getByTestId('square').nth(2).click(); // O
        await page.getByTestId('square').nth(8).click(); // X wins
        
        await expect(page.getByTestId('status')).toContainText('We have a winner: X');
    });

    test('should detect draw', async ({ page }) => {
        await page.getByTestId('square').nth(0).click(); // X
        await page.getByTestId('square').nth(1).click(); // O
        await page.getByTestId('square').nth(2).click(); // X
        await page.getByTestId('square').nth(4).click(); // O
        await page.getByTestId('square').nth(3).click(); // X
        await page.getByTestId('square').nth(5).click(); // O
        await page.getByTestId('square').nth(7).click(); // X
        await page.getByTestId('square').nth(6).click(); // O
        await page.getByTestId('square').nth(8).click(); // X
        
        await expect(page.getByTestId('status')).toContainText('draw');
    });

    test('should reset game', async ({ page }) => {
        await page.getByTestId('square').first().click();
        await page.getByTestId('reset-button').click();
        
        await expect(page.getByTestId('square').first()).toBeEmpty();
    });
});