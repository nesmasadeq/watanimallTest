import { NavigateToMonitorItems } from "./items";
export class NavigateToMonitorsActions{
    constructor(){
        this.items= new NavigateToMonitorItems()
    }
    visitingWataniMallPage(){
        cy.visit('/')
    }
    clickingCategoriesItem(){
        this.items.categoriesMenuItem().click()
    }
    clickingMonitorsCategoryItem(){
        this.items.monitorCategoryItem().click({force:true})
    }
}