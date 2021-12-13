import { addMonitorItems } from "./items";
import { CommonItems } from "../common/items";
export class addMonitorTests{
    constructor(){
        this.items = new addMonitorItems()
        this.commonItems= new CommonItems()

    }
    testAddCartButtonDisplayed(){
        this.items.addToCartButtonInIndex().should('be.visible')
    }
    testAddToCartButtonContent(){
        this.items.addToCartButtonInIndex().should('contain','Add to the cart')
    }
    testCartCount(){
        this.commonItems.cartCounterItem().first().should('contain','1')
    }
    testCartFormDisplayed(){
        this.commonItems.cartFormItem().should('be.visible')
    }
    testFirstProductLabelInCart(){
        cy.get("@firstProductName").then((firstProductName)=>{
            this.items.firstProductLabelInCartItem()
            .should("contain",firstProductName)
        })
        // this.items.firstProductLabelInCartItem().should('contain',this.firstProductName)
    }
    testFirstProductPriceInCart(){
        cy.get("@firstProductPrice").then((firstProductPrice)=>{
            this.items.firstProductPriceInCartItem()
            .should("contain",firstProductPrice)
        })
        // this.items.firstProductPriceInCartItem().should('contain',this.firstProductPrice)
    }
}