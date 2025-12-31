const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { loginPage } = require('../../../support/pages/LoginPage')

Given('I navigate to the login page', () => {
	// cy.visit('https://www.saucedemo.com/')
	loginPage.visit()
})

// When('I submit valid credentials', () => {
// 	// Cypress command to interact with elements
// 	cy.get('[data-test="username"]').type('standard_user')
// 	cy.get('[data-test="password"]').type('secret_sauce')
// 	cy.get('[data-test="login-button"]').click()
// })

// Then('I should see homepage', () => {
// 	cy.url().should('include', '/inventory.html')
// 	cy.get('.title').should('have.text', 'Products')
// })

When('I login with {string} and {string}', (username, password) => {
	// cy.get('[data-test="username"]').type(username)
	// cy.get('[data-test="password"]').type(password)
	// cy.get('[data-test="login-button"]').click()
	loginPage.login(username, password)
})

Then('I should see the message {string}', (message) => {
	cy.get('body').should('contain', message)
})
