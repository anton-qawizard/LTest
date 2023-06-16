import { login, market } from "../selectors/tools";

describe("TEST", () => {
  beforeEach(() => {
    cy.login();
    cy.contains("Enterprise Cyber Risk Management").click();
  });

  it("Test Case 1", () => {
    // Click Marketplace integration
    cy.clickMarketplaceIntegration();
    market.marketCheckbox.click();

    // Iterates throug cells and checks values is eq 0
    cy.checkCellValues("0");
    market.dropdown.select("3");

    // Iterates through cells and checks values is eq 3.4
    cy.checkCellValues("3.4");

    // Check that Total have proper value
    market.total.should("contain.text", "Total: 40.3");
  });

  it("Test Case 2", () => {
    // Click Marketplace integration
    cy.clickMarketplaceIntegration();

    market.marketCheckbox.click();

    // Select product 1
    market.product.select("3");

    market.addProductBtn.click();
    market.marketCheckbox.eq(1).click();

    // Select product 2
    market.product.eq(1).select("2");
    market.total.should("contain.text", "Total: 67.2");

    // Deactivate group
    cy.uncheckMarketplaceIntegration();

    // Check Total have value 0
    cy.get("tfoot td.total.total__bold").should("contain.text", "Total: 0");
  });

  it("Test Case 3", () => {
    
    cy.get(".tool-dynamic")
      .find('.tool-button:contains("-")')
      .should("not.exist");   //Minus doesn't exist validation
    
    // Select product 2
    market.addProductBtn.click();
    cy.verifyMinusButtonPresence();  //Minus exist validation

    // Select product 3
    market.addProductBtn.eq(1).click();
    cy.verifyMinusButtonPresence();  //Minus exist validation
  });
});
