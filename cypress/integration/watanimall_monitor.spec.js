/// <reference types="cypress" />
describe("Add monitor to cart in Watanimall",()=>{
    before(()=>{
        cy.visit("/")
    })
    it.skip("Verify Hovering on 'all categories' menu item",()=>{
        cy.get('li[id="menu-item-104788"]').trigger('mouseover')
        cy.get('li[id="menu-item-104788"]').should('have.class','hover')
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
    it("Verify the cart count is zero",()=>{
        cy.get('#header span.counter').last().should('contain','0')
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
        cy.get('#main div.category-row div:nth-child(3)').click()
    })
    it("Verify the user redirect to monitors page after clicking on monitors category",()=>{
        cy.url().should('include','/monitors')
    })
    it("Verify the head label content in monitors page",()=>{
        cy.get('#main h1').should('contain','MONITORS')
    })
    it("Verify checking on ASUS manufacturer",()=>{
        cy.get('div[data-value="asus"]').should('contain','ASUS').click()
    })
    it("Verify the ASUS manufacturer is checked after clicking",()=>{
        cy.get('div[data-value="asus"]').should('have.class','checked')
    })
    it("Verify the results contain ASUS after checking on ASUS manufacturer",()=>{
        cy.get('.products-row').should('contain','ASUS')
    })
    it("Verify filtering products from low to high price",()=>{
        cy.get('select[name="orderby"]').select('price',{force:true}).should('have.value','price')
        cy.get('option[value="price"]').should('be.selected')
    })
    it("Verify the results filtered by low to high price",()=>{
        cy.get('div.shop-products-holder > div.products-row.facetwp-template > div:nth-child(2) > div > div.product-price > span > bdi').then((el)=>{
            el.text()
        })
    })
    context('Adding first monitor to cart',()=>{
        beforeEach(()=>{
            cy.get('.products-row div:nth-child(1) div h3').then((el)=>{
                cy.wrap(el.text()).as('firstProductName')
            }) 
            cy.get('.product-price span bdi').first().then((el)=>{
                cy.wrap(el.text()).as('firstProductPrice')
            })
        })
        it.skip("Verify 'Add to the cart' button is displayed when hovering on product",()=>{
            cy.get('.products-row div.product-col:first-child').trigger('mouseover',{force:true})
            cy.get('a[data-id="107188"]').should('be.visible')
        })
        it("Verify clicking on 'Add to the cart' button",()=>{
            cy.get('a[data-id="107188"]').should('contain','Add to the cart').click({force:true})
        })
        it("Verify the cart count is increased by 1",()=>{
            cy.get('#header span.counter',{timeout:5000}).first().should('contain','1')
        })
        it("Verify hovering on cart icon",()=>{
            cy.get('#header div.heder-action-nav').trigger('mouseover')
            cy.get('#header div.heder-action-nav').should('have.class','hover')
        })
        it("Verify clicking on cart icon displayed modal",()=>{
            cy.get('.btn-cart').click()
            cy.get('.custom-form').should('be.visible')
        })
        it("Verify the product name in the cart is simmiler to selected",function(){
            cy.get('#mCSB_1_container strong a').first().should('contain',this.firstProductName)
        })
        it("Verify the product price in the cart is similer to selected",function(){
            cy.get('#mCSB_1_container div.product-amount span bdi').first().should('contain',this.firstProductPrice)
        })
    })
    

    
    
    
})