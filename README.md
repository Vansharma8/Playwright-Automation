# Playwright Automation – ToDoMVC Mini Project

This repository contains a UI automation mini project built using **Playwright with JavaScript**.
The project automates end-to-end user flows for the **ToDoMVC** web application and follows standard automation testing best practices.

---

## 🔧 Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub

---

## 🌐 Application Under Test

**ToDoMVC**
https://todomvc.com/

Framework used: **React**

---

## 📁 Project Structure

```
tests/                  → Test specifications  
pages/                  → Page Object Model (POM) files   
README.md               → Project documentation  
```

---

## ✅ Test Scenarios Covered

1. Launch the ToDoMVC application
2. Add multiple todo items
3. Mark todo items as completed
4. Navigate using filters (All / Active / Completed)
5. Clear completed todos
6. Validate remaining active todo items

---

## 🧪 Test Design & Approach

* Stable locators using `getByRole` and `getByTestId`
* Assertions implemented using Playwright `expect`
* Regression test tagging for selective execution
* End-to-end user flow validation
* Page Object Model (POM) for better maintainability

---

## ▶️ Test Execution

### Install dependencies

```bash
npm install
```

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run regression tests

```bash
npx playwright test --grep regression
```

---

## 📊 Test Reports

Playwright generates an HTML report after test execution.

To view the report:

```bash
npx playwright show-report
```

---

## 🎯 Purpose of This Project

This project was created to:

* Practice UI automation using Playwright
* Gain hands-on experience with end-to-end testing
* Apply Page Object Model concepts
* Showcase automation skills through a public GitHub repository

---

## 👤 Author

**Vansh Sharma**
QA Engineer | Automation Enthusiast

---

## ⭐ Notes

* This project focuses on automation fundamentals and clean test design.
* Enhancements such as CI/CD integration and advanced reporting can be added in future iterations.
