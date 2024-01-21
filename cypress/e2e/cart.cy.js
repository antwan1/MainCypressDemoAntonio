///<reference types="Cypress" />

describe("cart", () => {
    beforeEach(() =>{
        cy.clearCookies()
        cy.visit('/')
        cy.validateLoginPage()
        cy.loginUser()
          cy.validateHomePage()
          


    })



    it("Cart Items increase for every item added to the cart and decrease when removed", () =>
    {
        cy.getById("add-to-cart-sauce-labs-backpack").click()
        cy.getById("remove-sauce-labs-backpack").should("contain", "Remove")
        cy.cartItems().should("contain", "1")
        cy.getById("add-to-cart-sauce-labs-bike-light").click()
        cy.cartItems().should("contain", "2")
        cy.getById("remove-sauce-labs-bike-light").should("contain", "Remove")
        cy.getById("remove-sauce-labs-backpack").click()
        cy.cartItems().should("contain", "1")
        cy.getById("remove-sauce-labs-bike-light").click()
        cy.getByClass("shopping_cart_link").should("not.have.value")




    })

    it("User can access an empty cart Page", ()=>{
        cy.getByClass("shopping_cart_link").should("not.have.value")
        cy.getByClass("shopping_cart_container").click()
        cy.validateCartPage()
        cy.getById("continue-shopping").click()
        cy.validateHomePage()

    })

    it("Cart items are saved after user is logged out", ()=>{

        cy.getById("add-to-cart-sauce-labs-backpack").click()
        cy.getById("remove-sauce-labs-backpack").should("contain", "Remove")
        cy.cartItems().should("contain", "1")
        cy.getById("add-to-cart-sauce-labs-bike-light").click()
        cy.cartItems().should("contain", "2")
        cy.getById("remove-sauce-labs-bike-light").should("contain", "Remove")
        cy.getByClass("shopping_cart_container").click()
        cy.validateCartPage()
        cy.getByClass("inventory_item_name").should("contain", "Sauce Labs Backpack")
        cy.getByClass("inventory_item_name").should("contain", "Sauce Labs Bike Light")

        cy.getById("continue-shopping").click()
        cy.validateHomePage()
        cy.clickBurgerMenu()
        cy.logout()
        cy.validateLoginPage()
  cy.loginUser()
          cy.validateHomePage()
          cy.cartItems().should("contain", "2")
          cy.getByClass("shopping_cart_container").click()
          cy.validateCartPage()
          cy.getByClass("inventory_item_name").should("contain", "Sauce Labs Backpack")
        cy.getByClass("inventory_item_name").should("contain", "Sauce Labs Bike Light")

          


       



    })
    it("user can remove items from cart page", ()=>{
        cy.getById("add-to-cart-sauce-labs-backpack").click()
        cy.getById("remove-sauce-labs-backpack").should("contain", "Remove")
        cy.cartItems().should("contain", "1")
        cy.getById("add-to-cart-sauce-labs-bike-light").click()
        cy.cartItems().should("contain", "2")
        cy.getById("remove-sauce-labs-bike-light").should("contain", "Remove")
        cy.getByClass("shopping_cart_container").click()
        cy.validateCartPage()
        cy.getByClass("inventory_item_name").should("contain", "Sauce Labs Backpack")
        cy.getByClass("inventory_item_name").should("contain", "Sauce Labs Bike Light")
        cy.getById("remove-sauce-labs-backpack").click()
        cy.getById("remove-sauce-labs-bike-light").click()
        cy.getByClass("inventory_item_name").should("not.exist")
    



    })



})