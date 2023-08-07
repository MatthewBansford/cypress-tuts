class AutoStore_Homepage {
   autostorehomepage() {
    cy.visit("https://automationteststore.com/");
   }

   clickHairCare() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
   }
}
export default AutoStore_Homepage