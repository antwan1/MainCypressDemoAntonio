///<reference types="Cypress" />


describe('Login', () => {
beforeEach(() => {

  cy.visit('/')
 

  cy.validateLoginPage()

})


it('Standard user logs in and Logs out', () => {

cy.fixture("users.json").then((userData) => {
  cy.getById("user-name").type(userData.standardName)
  cy.getById("password").type(userData.password)

})
cy.getById("login-button").click()
cy.validateHomePage()
cy.clickBurgerMenu()
cy.logout()
cy.validateLoginPage()



})
it('Locked user should not be logged in and recieve an error', () => {

  cy.fixture("users.json").then((userData) => {
    cy.getById("user-name").type(userData.lockedName)
    cy.getById("password").type(userData.password)
  
  })
  cy.getById("login-button").click()
  cy.getByTestData("error").should("be.visible")
  cy.getByTestData('error').should('contain', 'Epic sadface: Sorry, this user has been locked out.');



})


})

