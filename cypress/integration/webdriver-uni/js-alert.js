/// <reference types="Cypress" />
//reference is used before cy can be accepted

describe("Handle JS alerts", () => {
    it("confirm js alert contains the correct text", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get("#button1").click()

        cy.on("window:alert", (str) => {
            expect(str).to.eq('I am an alert box!');
        })
    })

    it("confirm js confirm alert box works correctly when you click ok", () => {
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get("#button4").click()
        cy.on("window:confirm", (str) => {
            return true;
        })
            cy.get("#confirm-alert-text").should("have.text", 'You pressed OK!')
        })

        it("confirm js confirm alert box works correctly when you click cancel", () => {
            //cypress code
            // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.visit("http://www.webdriveruniversity.com")
            cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
    
            cy.get("#button4").click()
            cy.on("window:confirm", (str) => {
                return false;
            })
                cy.get("#confirm-alert-text").should("have.text", 'You pressed Cancel!')
            })
    
         it.only("confirm js confirm alert box works correctly when you click ok", () => {
                //cypress code
                // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
                cy.visit("http://www.webdriveruniversity.com")
                cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
                

                const stub = cy.stub()
                cy.on('window:confirm', stub)

                cy.get("#button4").click().then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Press a button!')
                })

                .then(() => {
                    return true;
                }).then(() => {
                    cy.get("#confirm-alert-text").should("have.text", 'You pressed OK!')
                })
                })
})