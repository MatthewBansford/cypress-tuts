/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Interact with dropdown lists", () => {
    it("Select specific values via dropdown lists", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        

        cy.get('#dropdowm-menu-1').select('Python').contains('Python')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

    })

    

})