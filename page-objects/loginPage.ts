import { Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Refer to the test case scenarios.
   * @param username - Dont forget the whitespace to try
   * @param password - 5
   */
  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Account' }).fill(username);
    await this.page.locator('input[placeholder="Password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
