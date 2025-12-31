class LoginPage {
	// 1. Define Locators (getters)
	get usernameInput() {
		return cy.get('[data-test="username"]')
	}

	get passwordInput() {
		return cy.get('[data-test="password"]')
	}

	get loginBtn() {
		return cy.get('[data-test="login-button"]')
	}

	// 2. Define Action (methods)
	visit() {
		cy.visit('https://www.saucedemo.com/')
	}

	login(username, password) {
		this.usernameInput.type(username)
		this.passwordInput.type(password)
		this.loginBtn.click()
	}
}

export const loginPage = new LoginPage()
