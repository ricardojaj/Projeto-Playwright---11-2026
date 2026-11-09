# 🧪 Automação de Testes E2E — SauceDemo

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📌 Sobre o projeto

Este projeto tem como objetivo desenvolver uma suíte de testes automatizados End-to-End (E2E) para a aplicação [SauceDemo](https://www.saucedemo.com/), utilizando Playwright com TypeScript.

O projeto está em desenvolvimento e tem como finalidade praticar conceitos de Quality Assurance (QA), automação de testes e boas práticas de desenvolvimento de scripts automatizados.

A automação será construída gradualmente, contemplando os principais fluxos da aplicação.

## 🎯 Objetivos

- Desenvolver testes automatizados utilizando Playwright e TypeScript.
- Aplicar o padrão Page Object Model (POM).
- Validar cenários positivos e negativos.
- Organizar os testes por funcionalidades (Features).
- Aplicar boas práticas de automação e reutilização de código.
- Trabalhar com assertions e validações de resultados.
- Evoluir a suíte de testes conforme novas funcionalidades forem implementadas.

## 🛠️ Tecnologias utilizadas

| Tecnologia   | Finalidade                    |
| ------------ | ----------------------------- |
| Playwright   | Automação de testes E2E       |
| TypeScript   | Linguagem de programação      |
| Node.js      | Ambiente de execução          |
| npm          | Gerenciamento de dependências |
| Git e GitHub | Versionamento e hospedagem    |

## 🧪 Cenários de teste

### 🔐 Login

- [x] Login com credenciais válidas.
- [x] Login com credenciais inválidas.
- [x] Login com campos vazios.
- [ ] Validação de mensagens de erro.

### 🛍️ Produtos

- [ ] Exibição da lista de produtos.
- [ ] Ordenação de produtos.
- [ ] Visualização dos detalhes de um produto.

### 🛒 Carrinho

- [ ] Adicionar produto ao carrinho.
- [ ] Remover produto do carrinho.
- [ ] Validar quantidade de produtos.

### 💳 Checkout

- [ ] Preenchimento dos dados do comprador.
- [ ] Validação de campos obrigatórios.
- [ ] Finalização de compra.

## 📁 Estrutura do projeto

```text
tests/
│
├── tests/
│   └── login/
│       └── FazerLogin.spec.ts
│
├── page-objects/
│   └── LoginPage.ts
│
playwright.config.ts
package.json
.gitignore
README.md
```
