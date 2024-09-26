import { LobbyManager } from './../page-objects/lobbyManager';
import { test, expect } from '@playwright/test';

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
  });

  test('Whitespace in id', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser005 ', '123456');
  });

  test('Whitespace in password', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser005', '123456 ');
  });

  test(
    'Password 5 characters',
    {
      tag: '@this should be validated in FE immediately and not send any request',
    },
    async ({ page }) => {
      const lobbyManager = new LobbyManager(page);
      await lobbyManager.performLogin.login('testdevuser005', '12345');
    }
  );

  test(
    'Double click. This got throught which shouldnt happen',
    {
      tag: '@If an action/s is performed and not yet finished loading any form of subsequent action should return error',
    },
    async ({ page }) => {
      const lobbyManager = new LobbyManager(page);
      await lobbyManager.performLogin.doubleClickLogin(
        'testdevuser005',
        '123456'
      );
      await page.waitForTimeout(4000);
    }
  );

  test('temporaryClickLanguage', async ({ page }) => {
    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.temporaryClickLanguage();
  });
});
