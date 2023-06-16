// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Iterates through cells and checks values takes value for check as a parameter
import { login } from "../selectors/tools"; 
Cypress.Commands.add("login", () => {
  cy.visit("/");
  login.passwordInput.type("ssclev");
  login.loginBtn.click();
});

Cypress.Commands.add("checkCellValues", (value) => {
  for (let i = 6; i <= 17; i++) {
    cy.get(`:nth-child(14) > :nth-child(${i})`).should("contain.text", value);
  }
});

// Check Marketplace
Cypress.Commands.add("clickMarketplaceIntegration", () => {
  cy.contains("label.tool-group-label", "Add a Marketplace integration...")
    .find("input.tool-checkbox")
    .check()
    .should("be.checked");
});

// Uncheck Marketplace
Cypress.Commands.add("uncheckMarketplaceIntegration", () => {
  cy.contains("label.tool-group-label", "Add a Marketplace integration...")
    .find("input.tool-checkbox")
    .uncheck()
    .should("not.be.checked");
});

// Verify that the "-" button available in first field if there's only one product and is not present if there's more than one.
Cypress.Commands.add("verifyMinusButtonPresence", () => {
  cy.get(".tool-dynamic").then(($toolDynamicElements) => {
    const totalElements = $toolDynamicElements.length;

    if (totalElements === 1) {
      cy.get(".tool-dynamic")
        .first()
        .find('.tool-button:contains("-")')
        .should("exist");
    } else {
      cy.get(".tool-dynamic").each(($toolDynamicElement, index) => {
        if (index !== 0) {
          cy.wrap($toolDynamicElement)
            .find('.tool-button:contains("-")')
            .should("exist");
        } else {
          cy.wrap($toolDynamicElement)
            .find('.tool-button:contains("-")')
            .should("not.exist");
        }
      });
    }
  });
});
