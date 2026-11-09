import { test, expect } from '@playwright/test';
import PaginaLogin from './../page-objects/PaginaLogin';

test('teste de login com sucesso', async ({ page }) => {
  const paginaLogin = new PaginaLogin(page);
  await paginaLogin.acessarPaginaLogin();
  await paginaLogin.preencherFormularioLogin('standard_user', 'secret_sauce');
  await paginaLogin.clicarBotaoLogin();
  await paginaLogin.verificarLoginBemSucedido();
});

test('teste de login invalido', async ({page}) => {
  const paginaLogin = new PaginaLogin(page);
  await paginaLogin.acessarPaginaLogin();
  await paginaLogin.preencherFormularioLogin('usuario_invalido', 'senha_invalida');
  await paginaLogin.clicarBotaoLogin();
  await expect(page.locator('.error-message-container')).toBeVisible();
})

test('teste de login com campos vazios', async ({page}) => {
  const paginaLogin = new PaginaLogin(page);
  await paginaLogin.acessarPaginaLogin();
  await paginaLogin.preencherFormularioLogin('', '');
  await paginaLogin.clicarBotaoLogin();
  await expect(page.locator('.error-message-container')).toBeVisible();
})