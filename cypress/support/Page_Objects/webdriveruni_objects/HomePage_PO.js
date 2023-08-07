class HomePage_PO {
   visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_homepage"))
   }

   clickContactUsButton() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
   }
}
export default HomePage_PO;