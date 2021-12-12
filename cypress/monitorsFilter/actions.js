import { MonitorFilterItems } from "./items";
export class MonitorFilterActions{
    constructor(){
        this.items= new MonitorFilterItems()
    }
    checkingAsusFilter(){
        this.items.asusCheckBoxItem().click()
    }
    selectingPriceFilter(){
        this.items.selectFilterItem().select('price',{force:true})
    }
}