import { CommonItems } from "../common/items";
import { NavigateToMonitorItems } from "./items";
export class NavigateToMonitorTests{
    constructor(){
        this.commonItems= new CommonItems()
        this.items= new NavigateToMonitorItems()
    }
    testClickingCategoryItemStyle(){
        this.items.categoriesMenuItem().should('have.class','current-menu-item')
    }
    testRedirectingToAllCategories(){
        cy.checkingUrl('all-categories')
    }
    testHeaderLabelInAllCategoriesPage(){
       this.commonItems.pageHeaderItem().should('contain','جميع الفئات')
    }
    testCartCount(){
        this.commonItems.cartCounterItem().last().should('contain','0')
    }
    testFindingMonitorCategoryImg(){
        this.items.monitorCategoryImg().should('have.attr','src').and('not.be.empty')
    }
    testRedirectingToMonitors(){
        cy.checkingUrl('/monitors')
    }
    testHeaderLabelInMonitorsPage(){
        this.commonItems.pageHeaderItem().should('contain','MONITORS')
    }

}