import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{

    async checkElementsPresent() {
        //TODO: check elements on the page
        await expect(this.page.locator('title')).toHaveText('Home');
    }

    async logout() {
        await this.page.locator('.logout').click();
    }
}