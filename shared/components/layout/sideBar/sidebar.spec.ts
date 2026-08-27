import { expect, test } from '@playwright/test';

test.describe('Sidebar', () => {
  test('deve abrir e fechar o menu', async ({ page }) => {
    await page.goto('/');

    const openMenuButton = page.getByRole('button', {
      name: 'Abrir menu',
    });

    await expect(openMenuButton).toBeVisible();

    await openMenuButton.click();

    const closeMenuButton = page.getByRole('button', {
      name: 'Fechar menu',
    });

    await expect(closeMenuButton).toBeVisible();

    await closeMenuButton.click();

    await expect(openMenuButton).toBeVisible();
  });

  test('deve exibir os links ao abrir o menu', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'Abrir menu',
      })
      .click();

    await expect(
      page.getByRole('link', {
        name: /home/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /about/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /works/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /process/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /contact/i,
      }),
    ).toBeVisible();
  });

  test('deve fechar o menu ao clicar no overlay', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'Abrir menu',
      })
      .click();

    const sidebar = page.getByTestId('sidebar');

    await expect(sidebar).toHaveClass(/translate-x-0/);

    const overlay = page.getByTestId('menu-overlay');

    await overlay.click({
      position: {
        x: 380,
        y: 100,
      },
    });

    await expect(sidebar).toHaveClass(/-translate-x-full/);
  });

  test('deve navegar para a página About', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('button', {
        name: 'Abrir menu',
      })
      .click();

    await page
      .getByRole('link', {
        name: /about/i,
      })
      .click();

    await expect(page).toHaveURL(/\/about/);
  });
});
