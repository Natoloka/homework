import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async checkUrl(url: string) {
    await expect(this.page.url()).toBe(url);
  }
}
