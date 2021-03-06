describe("journey time", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  
    it("shows journey time after midl is found", () => {
      cy.visit("localhost:3000");
      cy.get("#address_text_box1")
        .type("50 Commercial St, Spitalfields, London E1 6LT, UK").type('{enter}')
  
      cy.get("#address_text_box2")
        .type("40 Commercial St, Spitalfields, London E1 6LP, UK").type('{enter}')
        cy.get("#find_midl").click()
        cy.contains("Midl = 1 min")
    });
  });