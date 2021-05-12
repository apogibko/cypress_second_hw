///<reference types="cypress" />

it ('Log with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
});

it ('Log out', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
});

it ('Log with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith1').should('have.value', 'tomsmith1');
    cy.get('#password').type('SuperSecretPassword!1').should('have.value', 'SuperSecretPassword!1');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
});



