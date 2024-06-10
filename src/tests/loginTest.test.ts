import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(process.env.BASE_URL!);
 
  // await page.getByRole('button', { name: 'Login' }).click();
  // await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  
  await loginPage.loginWith(process.env.USERNAME!, process.env.PASSWORD!);
// await expect(loginPage).toBeVisible();
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('admin');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('admin');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('admin1');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill(' ');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill(' ');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('1');
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('1');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('!');
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('1');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('select * from users');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Password').click();
  // await page.getByPlaceholder('Password').fill('1');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByPlaceholder('Password').click();
});

test('test2', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(process.env.BASE_URL!);
 
  await page.getByRole('button', { name: 'Logtn' }).click();
  // await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  
  await loginPage.loginWith(process.env.USERNAME!, process.env.PASSWORD!);
});