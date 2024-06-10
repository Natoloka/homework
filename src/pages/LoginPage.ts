import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async loginWith(user: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(user,{timeout:2000});
        await this.page.getByPlaceholder('Password').fill(password,{timeout:2000});
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async checkUserMessage(message: string) {
        await expect(this.page.locator('span.help-block)').first()).toContainText(message);;
    }

    async checkPasswordMessage(message: string) {
        await expect(this.page.locator('span.help-block)').last()).toContainText(message);;
    }
}