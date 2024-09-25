import { test, expect } from '@playwright/test';
import { LobbyManager } from '../page-objects/lobbyManager';

test.describe('Successful Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dwbac-dev.dowinnsys.com/login');
    await expect(page).toHaveTitle('DW GAMES Platform');
  });

  test('Successful Login with valid credentials', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser005', '123456');
  });

  test('Successful login with case sensitivity in id', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('TestDevUser005', '123456');
  });
});

test.describe('Unsuccessful login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dwbac-dev.dowinnsys.com/login');
    await expect(page).toHaveTitle('DW GAMES Platform');
  });

  test('Invalid id', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser@@5', '123456');
    await page.waitForTimeout(4000);
  });

  test('Whitespace in id', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser005 ', '123456');
    await page.waitForTimeout(4000);
  });

  test('Whitespace in password', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser005', '123456 ');
    await page.waitForTimeout(4000);
  });
});
