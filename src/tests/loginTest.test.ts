import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';

test('Success login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(process.env.BASE_URL!);
  await loginPage.checkElementsPresent();
  await loginPage.loginWith(process.env.USERNAME!, process.env.PASSWORD!);
});

test('test2', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(process.env.BASE_URL!);
 
  await page.getByRole('button', { name: 'Logtn' }).click();
  // await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  
  await loginPage.loginWith(process.env.USERNAME!, process.env.PASSWORD!);
});