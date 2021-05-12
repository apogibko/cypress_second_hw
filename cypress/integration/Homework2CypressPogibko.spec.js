///<reference types="cypress" />

it ('Log with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('[type="password"]').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
});

it ('Log out', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('[type="password"]').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('[class="button secondary radius"]').click();
});

it ('Log with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith1').should('have.value', 'tomsmith1');
    cy.get('[type="password"]').type('SuperSecretPassword!1').should('have.value', 'SuperSecretPassword!1');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('[class="flash error"]').should('exist');
});



