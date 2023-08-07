import HomePage_PO from "../../support/Page_Objects/webdriveruni_objects/HomePage_PO";
import Contact_Form_Submission from "../../support/Page_Objects/webdriveruni_objects/Contact_Form_Submission";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const homepage_PO = new HomePage_PO();
    const contactSubmission = new Contact_Form_Submission();
    
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        homepage_PO.visitHomepage();
        homepage_PO.clickContactUsButton();
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        contactSubmission.contactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contactSubmission.contactFormSubmission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
    });
})