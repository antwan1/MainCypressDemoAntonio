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







  Cypress.Commands.add('getByTestData', (selector) => {

    return cy.get(`[data-cy="${selector}"]`)
})
Cypress.Commands.add('getByClass', (selector)=>{

    return cy.get(`.${selector}`)
})

Cypress.Commands.add('getById', (selector)=>{

    return cy.get(`#${selector}`)
})

Cypress.Commands.add('validateHomePage', ()=>{
    cy.get('.footer').should('be.visible');
    cy.get('.app_logo').should('be.visible');
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html")

})


Cypress.Commands.add('clickBurgerMenu', ()=>{
cy.get("#react-burger-menu-btn").should('be.visible');
cy.get('#react-burger-menu-btn').click()
cy.get('.bm-item-list').should('be.visible');
})

Cypress.Commands.add("logout", ()=>{
    cy.get("#react-burger-menu-btn").should('be.visible');
  
    cy.get('.bm-item-list').should('be.visible');
    cy.get("#logout_sidebar_link").click();

})


Cypress.Commands.add("validateLoginPage", ()=>{

    cy.get(".login_logo").should("be.visible")
  cy.get(".btn_action").should("contain", "Login")
})