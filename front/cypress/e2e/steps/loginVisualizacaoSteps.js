import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const ADMIN_EMAIL     = "Adm@igrejaanglicanacomunhao.com";
const ADMIN_PASSWORD  = "Wx8~)82+O!ZjkA?";
const LAST_DONOR_NAME = "João Silva";

Given("que eu tenho credenciais válidas de administrador", () => {
  // apenas sinaliza que as credenciais existem
});

Given("que eu estou na página de login", () => {
  cy.visit("/assets/pages/auth.html");
});

When('preencho o campo "E-Mail" com {string}', (email) => {
  cy.get("#useremail").clear().type(email);
});

When('preencho o campo "Senha" com {string}', (senha) => {
  cy.get("#password").clear().type(senha);
});

When("clico no botão de login", () => {
  cy.get("input[type=submit]").click();
});

Then("devo ser redirecionado para a página administrativa", () => {
  cy.url().should("include", "adm.html");
});

Then('devo ver na tabela a última doação com nome {string}', (nomeEsperado) => {
  cy.get("#clientsRows").should("exist");

  cy.get("#clientsRows")
    .contains("td", nomeEsperado)
    .should("be.visible");
});
