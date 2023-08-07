/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Cypress web security", () => {
    it("Navigate to two superdomains validation", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.visit("https://automationteststore.com/")
        
    })
    
    it("Navigate to two superdomains validation via user actions", () => {
        //it.only (.only is used make or isolate that particular test to run)
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#automation-test-store').invoke('removeAttr','target').click() 
       
    })
})