import { expect, Page } from "@playwright/test";

export default class PaginaLogin {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acessarPaginaLogin() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async preencherFormularioLogin(usuario: string, senha: string) {
        await this.page.fill('#user-name', usuario);
        await this.page.fill('#password', senha);
    }

    async clicarBotaoLogin() {
        await this.page.click('#login-button');
    }

    async verificarLoginBemSucedido() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

}