export class MonitorFilterItems{
    constructor(){}
    asusCheckBoxItem(){
        return cy.get('div[data-value="asus"]')
    }
    allMonitorsItem(){
        return cy.get('.products-row')
    }
    selectFilterItem(){
        return cy.get('select[name="orderby"]')
    }
    priceOptionItem(){
        return cy.get('option[value="price"]')
    }
    pricesArrayItem(){
        return cy.get('.product-col bdi')
    }
    

}