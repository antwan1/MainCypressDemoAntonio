///<reference types="Cypress" />


describe('Login', () => {
beforeEach(() => {

  cy.visit('/')
 

  cy.validateLoginPage()

})


it('Validate the standard_user user navigates to the products page when logged in', () => {

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
it('Validate the locked_user user navigates to the products page when logged in', () => {

  cy.fixture("users.json").then((userData) => {
    cy.getById("user-name").type(userData.lockedName)
    cy.getById("password").type(userData.password)
  
  })
  cy.getById("login-button").click()
  cy.getByTestData("error").should("be.visible")
  cy.getByTestData('error').should('contain', 'Epic sadface: Sorry, this user has been locked out.');



})
it("Validate performance_glitch_user the user navigates to the products page when logged in", () => {
cy.fixture("users.json").then((userData) => {
  cy.getById("user-name").type(userData.problemName)
  cy.getById("password").type(userData.password)

})
cy.getById("login-button").click()

cy.validateHomePage()

cy.clickBurgerMenu()
cy.logout()
cy.validateLoginPage()

})



it("Validate visual user the user navigates to the products page when logged in" , () => {

  cy.fixture("users.json").then((userData) => {
    cy.getById("user-name").type(userData.visualName)
    cy.getById("password").type(userData.password)
  
  })
  cy.getById("login-button").click()

  cy.validateHomePage()

cy.clickBurgerMenu()
cy.logout()
cy.validateLoginPage()
  
  })


  it("Validate error user the user navigates to the products page when logged in" , () => {
    cy.fixture("users.json").then((userData) => {
      cy.getById("user-name").type(userData.errorName)
      cy.getById("password").type(userData.password)
    
    })
    cy.getById("login-button").click()
  
    cy.validateHomePage()
  
  cy.clickBurgerMenu()
  cy.logout()
  cy.validateLoginPage()
    
    })
  
    
  })






