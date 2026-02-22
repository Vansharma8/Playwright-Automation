# SauceDemo E2E Automation — Playwright + JavaScript

> End-to-end test automation for [SauceDemo](https://www.saucedemo.com/) covering the complete user journey from login to order confirmation, built with **Playwright** and the **Page Object Model (POM)** design pattern.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | Browser automation framework |
| JavaScript (Node.js) | Test scripting language |
| Page Object Model | Design pattern for maintainability |

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

| Step | Description |
|---|---|
| Login | Valid credential authentication |
| Inventory | Page load validation |
| Sorting | Product filter dropdown interaction |
| Cart Management | Add multiple products, remove a product |
| Cart Navigation | Navigate to cart and verify items |
| Checkout | Fill in customer details |
| Order Summary | Validate total amount visibility |
| Confirmation | Assert successful order completion |

---

## Project Structure

```
Playwright-Automation/
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
git clone https://github.com/your-username/Playwright-Automation.git
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

# Run a specific test file
npx playwright test tests/saucedemo.e2e.spec.js

# View HTML test report
npx playwright show-report
```

---

## Design Pattern — Page Object Model (POM)

This project strictly follows the POM design pattern to separate concerns:

```
pages/          →  WHERE things are + HOW to interact with them
                   (locators, reusable action methods)

tests/          →  WHAT is being tested
                   (test flow, assertions)
```


### Benefits

- **Maintainability** — Selector changes require updates in one place only
- **Readability** — Tests read like plain English
- **Reusability** — Page methods are shared across multiple tests
- **Scalability** — New pages and tests are easy to add

---

## Test Strategy

- Validates the complete happy-path checkout flow end-to-end
- Uses visibility assertions to confirm critical UI elements are rendered
- Employs dynamic locators to handle multiple similar product elements
- Confirms order completion by asserting on the confirmation message and total amount

---

## Roadmap

- [ ] API-based test data setup (bypass UI login)
- [ ] Cross-browser execution (Chromium, Firefox, WebKit)
- [ ] CI/CD integration via GitHub Actions
- [ ] Negative test scenarios (invalid login, empty cart checkout)
- [ ] Allure reporting integration

---

## Author

**Vansh Sharma**
QA Automation Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/your-username)

---

> This project demonstrates real-world Playwright automation practices including POM architecture, dynamic locator strategies, and structured E2E test design — built as a portfolio-ready automation suite.
