## This is a test for Test Automation Engineer

## Setup
1. Make sure Node is installed
https://nodejs.org/en/download/package-manager

2. Fork the repository and clone it to your laptop 

3. Setup frontend
```
    cd test-automation-engineer
    cd frontend
    npm install
    npm run start
```
visit `localhost:4200`

4. Setup backend (Open new terminal)
```
    cd test-automation-engineer
    cd backend
    npm install
    npm run start:dev
```
visit `localhost:3000/api`

## Test Plan

- Run the application and look into the functionalities. Write a test plan (and strategy) to test this application. Commit your plan in the root of project. We are curious about your approach and documentation style, so use any tool or document type you prefer. Also focus a bit on developing a process for QA (e.g. release process, testing, bugs, recommendations).

## Frontend (E2E) Tests

- Create Cypress e2e tests for the most important cases in your test plan. Feel free to use any other framework if you're unfamiliar with Cypress. Commit your tests into the repository.

## Backend/API (Integration) Tests

- Create integration tests for the most important backend API tests from your test plan. Use tools that you're familiar with. Commit your tests into the repository. Feel free to also use Cypress, but anything other tool is acceptable.

note: swagger api available at `localhost:3000/api`


## Submitting your test

- After you have completed and tested your work, please submit a link of our repository to the hiring manager. z


## Side Note 
- e2e testing under folder frontend/cypress
- for backend testing under folder backend/src/integration
- test plan under folder Document/Test Plan
