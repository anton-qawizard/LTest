export const market = {
    get total() {
        return cy.get(".total__bold")
    },
    get marketCheckbox() {
        return cy.get(".tool-dynamic > .tool-checkbox")
    },
    get dropdown() {
        return cy.get("select.tool-select")
    },
    get product() {
        return cy.get("select.tool-select")
    },
    get addProductBtn() {
        return cy.get('.tool-button:contains("+")')
    },
}

export const login = {
    get passwordInput() {
        return cy.get(".login-input")
    },
    get loginBtn() {
        return cy.get(".login-button")
    },
}