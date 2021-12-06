/// <reference types="cypress" />
describe("Add monitor to cart in Watanimall",()=>{
    before(()=>{
        cy.visit("/")
    })
    it("Verify Hovering on 'all categories' menu item",()=>{
        cy.get('li[id="menu-item-104788"]').trigger('mouseover')
        // cy.get('li[id="menu-item-104788"]').should('have.class','hover')
    })
    it("Verify clicking on 'all categories' menu item",()=>{
        cy.get('li[id="menu-item-104788"]').click()
        cy.get('li[id="menu-item-104788"]').should('have.class','current-menu-item')
    })
    it("Verify clicking on 'all categories' menu item redirect the user to all categories page",()=>{
        cy.url().should('include','all-categories')
    })
})