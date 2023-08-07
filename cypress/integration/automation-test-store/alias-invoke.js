/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Alias and Invoke", () => {
    it("Validating a specific hair care product", () => {
        //cypress code
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include' , ('Seaweed Conditioner'))

    })

    it("Validating a specific hair care product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('numberOfThumbnails')
        cy.get('@numberOfThumbnails').should('have.length', 16)
        cy.get('@numberOfThumbnails').find('.productcart').invoke('attr' , 'title').should('include', 'Add to Cart')
    })
   


    it.only("Calculate total of Normal and Sell products", () => {
            cy.visit("https://automationteststore.com/")
            cy.get('.thumbnail').as('numberOfThumbnails')
            // cy.get('@numberOfThumbnails').find('.oneprice').each(($el, index, $list) => {
            //     cy.log($el.text())
            // })

            cy.get('.thumbnails').find('.oneprice').invoke('text').as('itemPrice')
            cy.get('.thumbnails').find('.pricenew').invoke('text').as('salePrice')

            var itemsTotal = 0;

            cy.get('@itemPrice').then($linkText => {
                var itemPriceTotal = 0;
                var itemPrice = $linkText.split('$');
                var i;
                for(i=0; i < itemPrice.length; i++) {
                    cy.log(itemPrice[i])
                    itemPriceTotal += Number(itemPrice[i])
                }
                cy.log("Non Sale price: " + itemPriceTotal)
                itemsTotal += itemPriceTotal;
                

            })

            cy.get('@salePrice').then($lText => {
                var salePrice = $lText.split('$');
                var salePriceTotal = 0
                var i;
                for(i=0; i< salePrice.length; i++) {
                    cy.log(salePrice[i])
                    salePriceTotal += Number(salePrice[i])
                }
                cy.log('Sale price: ' + salePriceTotal)
                itemsTotal += salePriceTotal

            })

            .then(() => {
                cy.log("Total of all products (Sale & Non Sale): " + itemsTotal)
                expect(itemsTotal).to.eq(625.6)
            })
    })
    
})