const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
	addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
	createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const {
	configureAllureAdapterPlugins,
} = require('@mmisty/cypress-allure-adapter/plugins')

module.exports = defineConfig({
	video: false,
	defaultCommandTimeout: 5000,
	pageLoadTimeout: 10000,
	ignoreTestFiles: ['*.js', '*.md'],
	e2e: {
		specPattern: 'cypress/e2e/**/*.feature',
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			})
			on('file:preprocessor', bundler)
			await addCucumberPreprocessorPlugin(on, config)
			await configureAllureAdapterPlugins(on, config)
			return config
		},
		env: {
			allure: true,
			allureResultsPath: 'allure-results',
		},
	},
})
