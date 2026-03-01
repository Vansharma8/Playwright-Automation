# SauceDemo E2E Automation — Playwright + JavaScript

![CI](https://github.com/Vansharma8/Playwright-Automation/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

> End-to-end test automation for [SauceDemo](https://www.saucedemo.com/) covering the complete user journey from login to order confirmation, built with **Playwright**, **JavaScript**, and the **Page Object Model (POM)** design pattern — with CI integration via **GitHub Actions**.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | Browser automation framework |
| JavaScript (Node.js) | Test scripting language |
| Page Object Model | Design pattern for maintainability |
| GitHub Actions | CI pipeline — auto-runs on every push & PR |

---

## Application Under Test

- **URL:** https://www.saucedemo.com/
- **Type:** E-commerce demo application
- **Credentials:** `standard_user` / `secret_sauce`

---

## Test Coverage

The automation suite covers the following end-to-end flow:

```
Login → Inventory Page → Add/Remove Products → Cart → Checkout → Order Confirmation
```

| Step | Scenario Types | Description |
|---|---|---|
| Login | ✅ Positive · ❌ Negative | Valid login, invalid credentials, empty fields |
| Inventory | ✅ Positive | Page load validation, product listing |
| Sorting | ✅ Positive | Product filter dropdown interaction |
| Cart Management | ✅ Positive · ❌ Negative | Add/remove products, empty cart handling |
| Checkout | ✅ Positive · ❌ Negative | Fill details, missing fields validation |
| Order Summary | ✅ Positive | Validate total amount visibility |
| Confirmation | ✅ Positive | Assert successful order completion |

### Browsers Tested

| Browser | Engine | Status |
|---|---|---|
| Chromium | Blink | ✅ Passing |
| Firefox | Gecko | ✅ Passing |
| WebKit | WebKit | ✅ Passing |

---

## Project Structure

```
Playwright-Automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI pipeline config
│
├── pages/
│   ├── LoginPage.js              # Login page locators & actions
│   ├── HomePage.js               # Inventory page locators & actions
│   └── CheckoutPage.js           # Cart & checkout locators & actions
│
├── tests/
│   └── saucedemo.e2e.spec.js     # End-to-end test suite
│
├── playwright.config.js          # Playwright configuration
├── package.json
├── package-lock.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Vansharma8/Playwright-Automation.git
cd Playwright-Automation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run in headed mode
npx playwright test --headed

# Run a specific test file
npx playwright test tests/saucedemo.e2e.spec.js

# Run on a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# View HTML test report
npx playwright show-report
```

---

## CI/CD — GitHub Actions

Tests automatically run on every **push** and **pull request** via GitHub Actions.

```yaml
# Triggered on: push & pull_request
# Browsers: Chromium, Firefox, WebKit
# Reports: Playwright HTML report uploaded as artifact
```

Check the [Actions tab](https://github.com/Vansharma8/Playwright-Automation/actions) to see the latest run results.

---

## Design Pattern — Page Object Model (POM)

This project strictly follows the POM design pattern to separate concerns:

```
pages/          →  WHERE things are + HOW to interact with them
                   (locators, reusable action methods)

tests/          →  WHAT is being tested
                   (test flow, assertions)
```

### Example — Dynamic Locator for Products

Since SauceDemo has multiple products with similar structures, dynamic locators are used instead of hardcoding selectors for each item.

### Benefits

- **Maintainability** — Selector changes require updates in one place only
- **Readability** — Tests read like plain English
- **Reusability** — Page methods are shared across multiple tests
- **Scalability** — New pages and tests are easy to add

---

## Test Strategy

- Validates the complete **happy-path** checkout flow end-to-end
- Covers **negative scenarios** — invalid login, empty fields, missing checkout info
- Employs **dynamic locators** to handle multiple similar product elements
- **Cross-browser** execution across Chromium, Firefox, and WebKit
- **CI pipeline** ensures tests run automatically on every code change
- Confirms order completion by asserting on the confirmation message and total amount

---

## Roadmap

- [x] E2E happy-path flow automation
- [x] Negative test scenarios
- [x] Cross-browser execution (Chromium, Firefox, WebKit)
- [x] CI/CD integration via GitHub Actions
- [ ] API-based test data setup (bypass UI login)
- [ ] Allure reporting integration

---

## Author

**Vansh Sharma** — QA Engineer | Product-Focused

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/vansh-sharma-a77774223/)
[![GitHub](https://img.shields.io/badge/GitHub-Vansharma8-black?style=flat&logo=github)](https://github.com/Vansharma8)

---

> This project demonstrates real-world Playwright automation practices including POM architecture, dynamic locator strategies, negative testing, cross-browser validation, and CI integration — built as a portfolio-ready automation suite.
