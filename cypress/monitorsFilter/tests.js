import { MonitorFilterItems } from "./items";
export class MonitorFilterTests{
    constructor(){
        this.items= new MonitorFilterItems()
    }
    testCheckingAsusFilter(){
        this.items.asusCheckBoxItem().should('have.class','checked').and('contain','ASUS')
    }
    testResultsAfterCheckAsus(){
        this.items.allMonitorsItem().should('contain','ASUS')
    }
    testPriceSelection(){
        this.items.selectFilterItem().should('have.value','price')
        this.items.priceOptionItem().should('be.selected')
    }
    testResultsAfterPriceSelectionFilter(){
        this.items.pricesArrayItem().then(function(el){
            for(let i=0; i<el.length -1;i++){
                let price = el[i].textContent.replace(/\₪|,/g, '')
                let nextPrice= el[i+1].textContent.replace(/\₪|,/g, '')
                if(price < nextPrice){
                    cy.log('success filter')
                }
            }
        })
    }

}