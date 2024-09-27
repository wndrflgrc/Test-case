import { LobbyManager } from './../page-objects/lobbyManager';
import { test, expect, Page } from '@playwright/test';

const { chromium } = require('playwright');

const viewports = [
  { name: 'PC (1280x720)', width: 1280, height: 720 + 300 },
  { name: 'Laptop (1440x900)', width: 1440, height: 900 + 100 },
  { name: 'Tablet (768x1024)', width: 768, height: 1024 },
  { name: 'Tablet Landscape (1024x768)', width: 1024, height: 768 },
  { name: 'iPhone XR', width: 414, height: 896 },
  { name: 'iPhone XR Landscape (896x414)', width: 896, height: 414 },
  { name: 'iPhone 12 Pro', width: 390, height: 844 },
  { name: 'iPhone 12 Pro Landscape (844x390)', width: 844, height: 390 },
  { name: 'iPhone 14 Pro', width: 430, height: 932 },
  { name: 'iPhone 14 Pro Landscape (932x430)', width: 932, height: 430 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Mini Landscape (1024x768)', width: 1024, height: 768 },
  { name: 'iPad Air', width: 820, height: 1180 },
  { name: 'iPad Air Landscape (1180x820)', width: 1180, height: 820 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
  { name: 'iPad Pro Landscape (1366x1024)', width: 1366, height: 1024 },
  { name: 'Pixel 7', width: 412, height: 915 },
  { name: 'Pixel 7 Landscape (915x412)', width: 915, height: 412 },
  { name: 'Galaxy Z Fold 5', width: 373, height: 819 },
  { name: 'Galaxy Z Fold 5 Landscape (819x373)', width: 819, height: 373 },
  { name: 'Samsung Galaxy S23', width: 430, height: 932 },
  { name: 'Samsung Galaxy S23 Landscape (932x430)', width: 932, height: 430 },
  { name: 'Google Pixel 6', width: 411, height: 823 },
  { name: 'Google Pixel 6 Landscape (823x411)', width: 823, height: 411 },
  { name: 'OnePlus 9 Pro', width: 412, height: 915 },
  { name: 'OnePlus 9 Pro Landscape (915x412)', width: 915, height: 412 },
];

// test.describe('Bago code dapat nasa notion muna', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://dwbac-dev.dowinnsys.com/login');
//     await expect(page).toHaveTitle('DW GAMES Platform');
//   });

//   viewports.forEach(({ name, width, height }) => {
//     test(`Login muna on ${name}`, async ({ page }) => {
//       await page.setViewportSize({ width, height });
//       console.log(`Testing on ${name} with viewport ${width}x${height}`);

//       const lobbyManager = new LobbyManager(page);
//       await lobbyManager.performLogin.login('testdevuser005', '123456');
//     });
//   });
// });

// test.describe('Bago code dapat nasa notion muna', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://dwbac-dev.dowinnsys.com/login');
//     await expect(page).toHaveTitle('DW GAMES Platform');
//   });

//   viewports.forEach(({ name, width, height }) => {
//     test(`Login muna on ${name}`, async ({ page }) => {
//       await page.setViewportSize({ width, height });
//       console.log(`Testing on ${name} with viewport ${width}x${height}`);

//       await page.waitForTimeout(10000);

//       const lobbyManager = new LobbyManager(page);
//       await lobbyManager.performLogin.login('testdevuser005', '123456');
//     });
//   });
// });

viewports.forEach(({ name, width, height }) => {
  test(`Login behavior with ${name}`, async () => {
    const browser = await chromium.launch({
      headless: false,
      args: [`--window-size=${width},${height}`],
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.setViewportSize({ width, height });
    console.log(`Testing on ${name} with viewport ${width}x${height}`);

    await page.goto('https://dwbac-dev.dowinnsys.com/login');
    await expect(page).toHaveTitle('DW GAMES Platform');
    await page.waitForTimeout(2000);

    const lobbyManager = new LobbyManager(page);
    await lobbyManager.performLogin.login('testdevuser005', '123456');
    await page.waitForTimeout(5000);

    await browser.close();
  });
});
