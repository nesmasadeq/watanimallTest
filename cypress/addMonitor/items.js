export class addMonitorItems{
    constructor(){}
    firstProductHeadLableItem(){
        return cy.get('.products-row div:nth-child(1) div h3')
    }
    firstProductPriceItem(){
        return cy.get('.product-price').first()
    }
    addToCartButtonInIndex(){
        return cy.get('a[data-id="107188"]')
    }
    firstProductLabelInCartItem(){
        return cy.get('.product-name-image > .product-name > a',{timeout:5000}).first()
    }
    firstProductPriceInCartItem(){
        return cy.get('.product-amount bdi').first()
    }
    
}