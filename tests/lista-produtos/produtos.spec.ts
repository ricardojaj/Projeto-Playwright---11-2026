import {test, expect} from '@playwright/test';
import PaginaLogin from './../page-objects/PaginaLogin';
import PaginaProdutos from  './../page-objects/PaginaProdutos';

test('teste para validar listagem de produtos após login', async ({page}) => {
    const paginaProdutos = new PaginaProdutos(page);
    const paginaLogin = new PaginaLogin(page);
    await paginaLogin.acessarPaginaLogin();
    await paginaLogin.preencherFormularioLogin('standard_user', 'secret_sauce');
    await paginaLogin.clicarBotaoLogin();
    await paginaProdutos.verificarListagemDeProdutos();
})
