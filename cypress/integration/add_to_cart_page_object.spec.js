/// <reference types="cypress" />
import { Page } from "../common/page"
describe("Add monitor to cart in Watanimall",()=>{
  let page= new Page();
    before(()=>{
      page.navAction.visitingWataniMallPage()
    })
    beforeEach(()=>{
        Cypress.Cookies.defaults({
            preserve: (cookie) => {
              return true;
            }
          })
    })
    it("Verify clicking on 'all categories' menu item",()=>{
      page.navAction.clickingCategoriesItem()
      page.navTest.testClickingCategoryItemStyle()

    })
    it("Verify clicking on 'all categories' menu item redirect the user to all categories page",()=>{
      page.navTest.testRedirectingToAllCategories()
    })
    it("Verify the cart count is zero",()=>{
      page.navTest.testCartCount()
    })
    it("Verify clicking on monitors category",()=>{
      page.navAction.clickingMonitorsCategoryItem()
    })
    it("Verify the user redirect to monitors page after clicking on monitors category",()=>{
      page.navTest.testRedirectingToMonitors()
    })
    it("Verify the head label content in monitors page",()=>{
      page.navTest.testHeaderLabelInMonitorsPage()
    })
    it("Verify checking on ASUS manufacturer",()=>{
      page.filterAction.checkingAsusFilter()
    })
    it("Verify the ASUS manufacturer is checked after clicking",()=>{
      page.filterTest.testCheckingAsusFilter()
    })
    it("Verify the results contain ASUS after checking on ASUS manufacturer",()=>{
      page.filterTest.testResultsAfterCheckAsus()
    })
    it("Verify filtering products from low to high price",()=>{
      page.filterAction.selectingPriceFilter()
      page.filterTest.testPriceSelection()
    })
    it("Verify the results filtered by low to high price",()=>{
      page.filterTest.testResultsAfterPriceSelectionFilter()
    })

})