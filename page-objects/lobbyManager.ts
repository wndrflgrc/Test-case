import { Page } from '@playwright/test';
import { LobbyNavigation } from './lobbyNavigation';

export class LobbyManager {
  private readonly LobbyNavigation: LobbyNavigation;

  constructor(page: Page) {
    this.LobbyNavigation = new LobbyNavigation(page);
  }

  get performLogin() {
    return this.LobbyNavigation;
  }
}
