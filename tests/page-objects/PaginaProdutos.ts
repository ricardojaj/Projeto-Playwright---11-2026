import { expect, Page, Locator } from "@playwright/test";

export default class PaginaProdutos{
    private readonly page: Page;
    private readonly produtos: Locator;

    constructor(page: Page) {
        this.page = page;
        this.produtos = page.locator('.inventory_item')
    }

    async acessarPaginaLogin() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async verificarListagemDeProdutos(){
        await expect(this.produtos.first()).toBeVisible();
    }

}
