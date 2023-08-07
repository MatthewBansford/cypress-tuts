/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Inspect Automation Test Store items using chain of commands ", () => {
    it("Click on the first item using item header", () => {
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click()
     })

     it.only("Click on the first item using item text", () => {
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
           console.log("Selcted the following: " + itemHeaderText.text())
        })
      });

     it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
     })

    })