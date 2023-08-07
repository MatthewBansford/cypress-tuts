/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        //cypress code
        // cy.visit("https://www.automationteststore.com/")
        // const makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup");
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare");
        // skincareLink.click()

        // Recommended approach
        // cy.visit("https://www.automationteststore.com/")
        // cy.get("a[href*='product/category&path']").contains("Makeup").click()
        // cy.get("a[href*='product/category&path']").contains("Skincare").click()

        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains("Makeup").click()

        // Following will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
     })


     it.only("Validate properties of the contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Uses cypress commands and chaining
        cy.contains('#ContactUsFrm',  'Contact Us Form').find('#field_11').should('contain', 'First name')

        // JQuery Approach
        cy.contains('#ContactUsFrm',  'Contact Us Form').then((text) => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        })

        // Embedded commands (Closure)
       
     })


    })