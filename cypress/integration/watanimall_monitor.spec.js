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
    it("Verify the head label content in all categories page",()=>{
        cy.get('#main h1').should('contain','جميع الفئات')
    })
    it("Verify the monitor category is found in the list",()=>{
        cy.get('a[href="https://watanimall.com/product-category/monitors"]').should('contain','MONITORS')
    })
    it("Verify the image of monitors category is found",()=>{
        cy.get('#main div:nth-child(3) img').should('have.attr','src').and('not.be.empty')
    })
    it("Verify hovering on monitors category",()=>{
        cy.get('#main div.category-row div:nth-child(3)').trigger('mouseover')
    })
    it("Verify clicking on monitors category",()=>{
        cy.get('a[href="https://watanimall.com/product-category/monitors"]').click()
    })
    it("Verify the user redirect to monitors page after clicking on monitors category",()=>{
        cy.url().should('include','/monitors')
    })
    it("Verify the head label content in monitors page",()=>{
        cy.get('#main h1').should('include','MONITORS')
    })
})