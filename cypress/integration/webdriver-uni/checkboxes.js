// /// <reference types="Cypress" />
// //reference is used before cy can be accepted

// describe("Verify checkboxes", () => {
//     beforeEach (function() {
//         cy.visit("http://www.webdriveruniversity.com")
//         cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
//     })
//     it("Check and validate checkbox", () => {
//         //cypress code
//         // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
       

//         // cy.get('#checkboxes > :nth-child(1) > input').check()
//         // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

//         cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
//         cy.get('@option-1').check()
//         cy.get('@option-1').check().should('be.checked')

//     })

//     it("UnCheck and validate checkbox", () => {
//         //cypress code
//         // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

//         // cy.get('#checkboxes > :nth-child(1) > input').check()
//         // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

//         cy.get(':nth-child(5) > input').as('option-3')
//         cy.get('@option-3').uncheck()
//         cy.get('@option-3').uncheck().should('not.be.checked')

//     })

//     it("Check multiple checkboxes", () => {
//         //cypress code
//         // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

//         // cy.get('#checkboxes > :nth-child(1) > input').check()
//         // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

//        cy.get("input[type='checkbox']").check(['option-1','option-2','option-3','option-4']).as('multiple')
//        cy.get('@multiple').should('be.checked')

//     })

    

// })


/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        cy.navigateTo_WebdriverUni_Checkbox_Page();
    })
    it("Check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        //cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check mutiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });
})