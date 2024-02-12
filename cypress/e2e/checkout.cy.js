describe('Checkout', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.loginStandard('standard_user', 'secret_sauce')
  })

  it('Checkout flow', () => {
    cy.getById('add-to-cart-sauce-labs-backpack').click()
    cy.getById('remove-sauce-labs-backpack').should('contain', 'Remove')
    cy.cartItems().should('contain', '1')
    cy.getByClass('shopping_cart_container').click()
    cy.validateCartPage()
    cy.getByClass('inventory_item_name').should(
      'contain',
      'Sauce Labs Backpack',
    )

    cy.getById('checkout').click()
    cy.url().should(
      'contain',
      'https://www.saucedemo.com/checkout-step-one.html',
    )
    cy.validateCheckoutStepOne()
    cy.getById('first-name').type('Ant')
    cy.getById('last-name').type('Mol')
    cy.getById('postal-code').type('B32 2SL')
    cy.getById('continue').click()
    cy.validateCheckoutStepTwo()
    cy.getById('finish').click()
    cy.validateCheckoutComplete()
    cy.getById('back-to-products').click()
    cy.validateHomePage()
  })

  //Create a test for invalid credentials
  //create a test with an empty cart
})
