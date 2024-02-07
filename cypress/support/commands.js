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

Cypress.Commands.add('getByTestData', selector => {
  return cy.get(`[data-test="${selector}"]`)
})
Cypress.Commands.add('getByClass', selector => {
  return cy.get(`.${selector}`)
})

Cypress.Commands.add('getById', selector => {
  return cy.get(`#${selector}`)
})

Cypress.Commands.add('validateHomePage', () => {
  cy.get('.footer').should('be.visible')
  cy.get('.app_logo').should('be.visible')
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  cy.get('.shopping_cart_link').should('not.have.value')
})

Cypress.Commands.add('validateCartPage', () => {
  cy.get('.title').should('contain', 'Your Cart')
  cy.get('#continue-shopping').should('be.visible')
  cy.get('#checkout').should('be.visible')
  cy.url().should('contain', 'https://www.saucedemo.com/cart.html')
})

Cypress.Commands.add('clickBurgerMenu', () => {
  cy.get('#react-burger-menu-btn').should('be.visible')
  cy.get('#react-burger-menu-btn').click()
  cy.get('.bm-item-list').should('be.visible')
})

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').should('be.visible')

  cy.get('.bm-item-list').should('be.visible')
  cy.get('#logout_sidebar_link').click()
})

Cypress.Commands.add('validateLoginPage', () => {
  cy.get('.login_logo').should('be.visible')
  cy.get('.btn_action').should('contain', 'Login')
})

Cypress.Commands.add('cartItems', () => {
  cy.get('.shopping_cart_badge')
})
Cypress.Commands.add('loginUser', () => {
  cy.fixture('users.json').then(userData => {
    cy.getById('user-name').type(userData.standardName)
    cy.getById('password').type(userData.password)
  })
  cy.getById('login-button').click()
})

Cypress.Commands.add('validateCheckoutStepOne', () => {
  cy.get('.title').should('contain', 'Checkout: Your Information')
  cy.get('#first-name').should('be.visible')
  cy.get('#last-name').should('be.visible')
  cy.get('#postal-code').should('be.visible')
  cy.get('#continue').should('be.visible')
})

Cypress.Commands.add('validateCheckoutStepTwo', () => {
  cy.get('.title').should('contain', 'Checkout: Overview')
  cy.url().should('contain', 'https://www.saucedemo.com/checkout-step-two.html')
  cy.get('#finish').should('be.visible')
  cy.contains('Payment Information').should('be.visible')
  cy.contains('Shipping Information').should('be.visible')
  cy.contains('Price Total').should('be.visible')
})

Cypress.Commands.add('validateCheckoutComplete', () => {
  cy.get('.title').should('contain', 'Checkout: Complete!')
  cy.get('h2').should('contain', 'Thank you for your order!')
  cy.get('#back-to-products').should('be.visible')
  cy.getByClass('shopping_cart_link').should('not.have.value')
})
