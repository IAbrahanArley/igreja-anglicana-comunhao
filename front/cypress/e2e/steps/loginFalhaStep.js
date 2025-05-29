import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na página de login", () => {
  cy.visit("http://localhost:8080/assets/pages/auth.html"); 
});

When("ele preenche o email com {string}", (email) => {
  cy.get("#useremail").type(email);
});

When("preenche a senha com {string}", (senha) => {
  cy.get("#password").type(senha);
});

When("clica no botão de login", () => {
  cy.get("form#minhaauth").submit();
});

Then("ele deve ver a mensagem de erro {string}", (mensagem) => {
  cy.get("#error-message") 
    .should("be.visible")
    .and("contain", mensagem);
});
