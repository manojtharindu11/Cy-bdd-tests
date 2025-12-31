const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I navigate to the login page', () => {
	cy.visit('https://www.saucedemo.com/')
})

When('I submit valid credentials', () => {
	// Cypress command to interact with elements
	cy.get('[data-test="username"]').type('standard_user')
	cy.get('[data-test="password"]').type('secret_sauce')
	cy.get('[data-test="login-button"]').click()
})

Then('I should see homepage', () => {
	cy.url().should('include', '/inventory.html')
	cy.get('.title').should('have.text', 'Products')
})
