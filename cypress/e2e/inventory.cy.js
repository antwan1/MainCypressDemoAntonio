///<reference types="Cypress" />

describe('Inventory', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.loginStandard('standard_user', 'secret_sauce')
  })

  it('User can view products page', () => {
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Backpack').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')
    cy.getByClass('inventory_details_img').should('be.visible')
    cy.getById('add-to-cart-sauce-labs-backpack').click()
    cy.cartItems().should('contain', '1')
    cy.getById('remove-sauce-labs-backpack').should('contain', 'Remove')
    cy.getById('remove-sauce-labs-backpack').click()
    cy.getByClass('shopping_cart_link').should('not.have.value')
    cy.getById('add-to-cart-sauce-labs-backpack').should('be.visible')
    cy.getById('back-to-products').click()
    cy.validateHomePage()
  })
})
