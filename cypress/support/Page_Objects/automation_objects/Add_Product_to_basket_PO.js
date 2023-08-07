class addProductToBasket {
    addtobasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}
export default addProductToBasket;