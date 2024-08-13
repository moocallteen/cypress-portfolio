describe("test spec for trainings", () => {
    beforeEach(() => {
        cy.visit("/todo")
        cy.cleanUpList()
    })

    it("create record", () => {
        cy.get('input[data-test="new-todo"]').should("be.visible").type("test")
        cy.get('input[data-test="new-todo"]').type("{enter}")
        
        cy.get('label').contains("test").should("be.visible")

    })

})