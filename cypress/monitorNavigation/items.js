export class NavigateToMonitorItems{
    constructor(){}
    categoriesMenuItem(){
        return cy.get('li[id="menu-item-104788"]')
    }
    pageHeaderItem(){
        return cy.get('#main h1')
    }
    cartCounterItem(){
        return cy.get('#header span.counter')
    }
    monitorCategoryItem(){
        return cy.get('a[href="https://watanimall.com/product-category/monitors"]').first()
    }
    monitorCategoryImg(){
        return  cy.get('#main div:nth-child(3) img')
    }
}