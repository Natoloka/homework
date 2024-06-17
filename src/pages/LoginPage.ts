import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    async checkElementsPresent() {
        await expect(this.page.locator('#logomini')).toHaveAttribute('src');
        await expect(this.page.locator('h1')).toHaveText('AQA internship Login');
        await expect(this.page.getByPlaceholder('Username')).toBeEditable();
        await expect(this.page.getByPlaceholder('Password')).toBeEditable();
        await expect(this.page.getByRole('button', { name: 'Login' })).toBeAttached();
    }

    async loginWith(user: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(user,{timeout:2000});
        await this.page.getByPlaceholder('Password').fill(password,{timeout:2000});
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async checkUserMessage(message: string) {
        await expect(this.page.locator('span.help-block)').first()).toContainText(message);
    }

    async checkPasswordMessage(message: string) {
        await expect(this.page.locator('span.help-block)').last()).toContainText(message);
    }
}