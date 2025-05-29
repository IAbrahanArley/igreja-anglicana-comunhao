import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de doações", () => {
  cy.visit("/#form");
});

When('preencho o campo "Seu nome" com {string}', (nome) => {
  cy.get("#name").type(nome);
});

When('preencho o campo "Telefone" com {string}', (telefone) => {
  cy.get("#telefone").type(telefone);
});

When('preencho o campo "Email" com {string}', (email) => {
  cy.get("#email").type(email);
});

When('preencho o campo "Valor da doação" com {string}', (valor) => {
  cy.get("#valordoacao").type(valor);
});

When('seleciono o projeto {string}', (projeto) => {
  cy.get("#test").select(projeto);
});

When("marco a opção de aceitar os termos", () => {
  cy.get("#invalidCheck").check();
});

When("clico no botão de enviar", () => {
  cy.get("form button[type=submit]").click();
});

Then("o formulário deve ser enviado com sucesso", () => {
  // Aqui você pode adicionar uma asserção para verificar o sucesso do envio
  // Exemplo: verificar se uma mensagem de sucesso aparece
  cy.contains("Obrigado pela sua doação").should("be.visible");
});
