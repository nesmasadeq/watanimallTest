import { addMonitorItems } from "./items";
export class addMonitorActions{
    constructor(){
        this.items= new addMonitorItems()
    }
    getFirstProductName(){
       return this.items.firstProductHeadLableItem().then((el)=>{
            cy.wrap(el.text().trim().substring(0,20)).as('firstProductName')
        })
    }
    getFirstProductPrice(){
        return this.items.firstProductPriceItem().then((el)=>{
            if(el.find('del[aria-hidden="true"]').length>0){
                cy.get('.woocommerce-Price-amount bdi').first().then(function(el){
                    cy.wrap(el.text().trim()).as('firstProductPrice')
                })
            }else{
                cy.get('.product-price span bdi').first().then(function(el){
                    cy.wrap(el.text().trim()).as('firstProductPrice')
                })
            }
        })
    }
    clickingOnAddToCartButtonInIndex(){
        this.items.clickingOnAddToCartButtonInIndex().click({force:true})
    }
    
}