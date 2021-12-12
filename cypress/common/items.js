export class CommonItems{
    constructor(){}
    pageHeaderItem(){
        return cy.get('#main h1')
    }
    cartCounterItem(){
        return cy.get('#header span.counter')
    }
    cartFormItem(){
        return cy.get('#header .custom-form').first()
    }
}