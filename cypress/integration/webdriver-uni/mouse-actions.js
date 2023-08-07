/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Test mouse-actions", () => {
    it("Scroll elements into view", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it("I should be able to drag and drop a draggable item", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("I should be able to doubleclick item", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#double-click').dblclick()
    })

    it("I should be able to click and hold the left mouse button on a given item", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    })


    

})