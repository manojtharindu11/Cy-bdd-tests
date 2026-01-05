# Cypress BDD Tests with Allure Reporting

## Setup

1. Install dependencies:
```bash
npm install
```

## Running Tests

### Local Execution

**Run tests in headless mode:**
```bash
npm run cy:tests
```

**Open Cypress UI:**
```bash
npm run cy:open
```

## Reporting

### Generate Allure Report (Local)

After running tests, generate and view the Allure report:

```bash
npm run allure:report
npm run allure:open
```

This will:
1. Generate the report in `allure-report/` directory
2. Open the interactive Allure report in your default browser

### GitHub Actions CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/main.yml`) that:

✅ Runs tests on every push and pull request  
✅ Generates Allure reports automatically  
✅ Uploads reports as artifacts  
✅ Deploys reports to GitHub Pages  

**To enable GitHub Pages:**
1. Go to your repository Settings
2. Navigate to Pages
3. Set Source to `Deploy from a branch`
4. Select branch `gh-pages`
5. Your reports will be available at: `https://[username].github.io/[repo-name]/`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run cy:open` | Open Cypress in interactive mode |
| `npm run cy:tests` | Run tests in headless mode |
| `npm run allure:report` | Generate Allure report |
| `npm run allure:open` | Open Allure report in browser |

## Test Results

- Test results are stored in `allure-results/`
- Generated reports are in `allure-report/`
- Screenshots (if failures occur) are in `cypress/screenshots/`