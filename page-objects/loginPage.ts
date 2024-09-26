import { Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Refer to the test case scenarios.
   * @param username - Case insensitive. Wont accept whitespace
   * @param password - Wont accept whitespace
   */
  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Account' }).fill(username);
    await this.page.locator('input[placeholder="Password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  /**
   * This should be error but it got through
   * Theres a bug in the login where after the first click and wait for a few seconds and the login button is clickable again and it will detect as a new login
   * @param username
   * @param password
   */
  async doubleClickLogin(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Account' }).fill(username);
    await this.page.locator('input[placeholder="Password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).dblclick();
  }

  async temporaryClickLanguage() {
    const button = this.page.locator(
      'div.w-\\[50\\%\\].self-center.text-white'
    );
    await button.dblclick({ delay: 1000 });
  }
}
