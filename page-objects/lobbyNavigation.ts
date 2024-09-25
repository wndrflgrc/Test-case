import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';

export class LobbyNavigation {
  private readonly page: Page;
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  login(username: string, password: string) {
    return this.loginPage.login(username, password);
  }
}
