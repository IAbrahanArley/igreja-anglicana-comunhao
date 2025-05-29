// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginAsAdmin', () => {
  const ADMIN_EMAIL    = 'Adm@igrejaanglicanacomunhao.com';
  const ADMIN_PASSWORD = 'Wx8~)82+O!ZjkA?';
  cy.visit('http://localhost:8080/autenticao.html');
  cy.get('#useremail').type(ADMIN_EMAIL);
  cy.get('#password').type(ADMIN_PASSWORD);
  cy.get('input[type=submit]').click();
  cy.url().should('include', 'adm.html');
});

Cypress.Commands.add('deleteDonor', (name) => {
  cy.contains('table#clients tbody tr', name)
    .within(() => {
      cy.get('button[data-cy=delete]').click();
    });
});