///<reference types="Cypress" />


describe('Login', () => {
beforeEach(() => {

  cy.visit('/')
 
  cy.getByClass("login_logo").should("be.visible")
  cy.getByClass("btn_action").should("contain", "Login")


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
})