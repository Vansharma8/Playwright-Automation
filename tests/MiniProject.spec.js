import { test, expect } from '@playwright/test';

test('test to-do app @Regression', async ({ page }) => {
  await page.goto('https://todomvc.com/');
  await page.getByRole('link', { name: 'React New', exact: true }).click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Go for a walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play Cricket');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Go for a walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Play Cricket' }).getByTestId('todo-item-toggle').check();
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByTestId('todo-item-label')).toContainText('Buy Groceries');
});