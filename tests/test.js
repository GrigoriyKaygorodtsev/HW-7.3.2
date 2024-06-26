import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('grigoriy_st@mail.ru');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('Fox666ost');
  await page.getByTestId('login-submit-btn').click();
  await page.getByTestId('menu-userface').getByText('ГК').click();
  await page.getByRole('button', { name: 'Выйти' }).click();
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('455545@mail.ru');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('34552718181');
  await page.getByTestId('login-submit-btn').click();
});