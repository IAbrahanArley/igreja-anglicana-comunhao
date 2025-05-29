// cypress/support/step_definitions/exclusaoDoacaoSteps.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const ADMIN_EMAIL    = 'Adm@igrejaanglicanacomunhao.com';
const ADMIN_PASSWORD = 'Wx8~)82+O!ZjkA?';

Given('que estou na página de login', () => {
  cy.visit('http://localhost:8080/assets/pages/auth.html');
});

When('eu preencho o email com {string}', (email) => {
  cy.get('#useremail').type(email);
});

When('preencho a senha com {string}', (senha) => {
  cy.get('#password').type(senha);
});

When("clica no botão de login", () => {
  cy.get("form#minhaauth").submit();
});
Then('devo ser redirecionado para a página de administração', () => {
  cy.url().should('include', '/adm.html');
});

When('eu procuro pelo doador {string} na lista', (nome) => {
  cy.contains('table#clients tbody tr', nome)
    .as('doadorRow')
    .should('be.visible');
});

When('clico no botão de excluir doador', () => {
  cy.get('@doadorRow').within(() => {
    cy.contains('button', 'Excluir').click();
  });
});


Then('devo ver a mensagem {string}', (mensagem) => {
  cy.get('#exclusao-msg')
    .should('be.visible')
    .and('contain', mensagem);
});
