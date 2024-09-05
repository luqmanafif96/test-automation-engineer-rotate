# Test Plan for Fruit Stall Ordering System 

## Introduction 
This test plan is focusing on testing for Fruit Stall Ordering System , which enable user to manage products and orders through both a user interface and RESTful APIs. The goal is to verify that all functionalities, including creating, updating, deleting, and ordering products, work as expected. The API handles the backend operations, while the frontend allows users to interact with the system.

## Scope 
The test plan covers:
1. **User Interface Testing** : Testing of all visual elements and user interactions in the web app.
2. **API Testing**: Validation of all API endpoints to ensure proper communication between the client and server.
3. **Functional Testing**: Checking core functionalities like creating, reading, updating, deleting, and ordering products.
4. **Non-Functional Testing** : Usability of the system 

## Test Objectives
- Ensure CRUD (Create, Read, Update, Delete) operations for both products and orders work correctly.
- Ensure that the API responds with the correct status codes and data.
- Validate the UI to ensure a smooth user experience and proper functionality.
- Ensure the system performs well under normal load conditions.

## Test Approach

### 1. Functional Testing

#### Frontend Testing (UI)
- **Product Listing Page**:
  - Verify that all products are displayed with the correct name, price, and description.
  - Validate the **Edit**, **Delete**, and **Order** buttons for each product.
  - Ensure that the **Create** button leads to a form for adding new products.
  
- **Create Product**:
  - Validate that a new product can be added using the **Create** button.
  - Ensure the form has necessary validations (e.g., price should be numeric, fields should not be empty).
  
- **Edit Product**:
  - Ensure a product can be edited via the **Edit** button.
  - Validate that changes reflect immediately after editing.
  
- **Delete Product**:
  - Verify that deleting a product removes it from the list.
  - Ensure a confirmation popup appears before deleting.
  
- **Order Listing **:
  - Check that clicking on the **Order** button initiates the ordering process.
  - Verify that orders are display correctly after clicking **Order**.
  - Validate the  **Delete** buttons for each product.

- **Order Create **:
  - Validate that a new order can be added using the **Create Order** button.
  - Ensure the form has necessary validations (e.g., Quantity should be numeric, fields should not be empty).

- **Delete Order**:
  - Verify that deleting a order removes it from the list.
  - Ensure a confirmation popup appears before deleting.


#### Backend Testing (API)
- **GET /products**: 
  - Validate that the endpoint returns a list of all products with the correct structure (name, price, description, etc.).
  
- **GET /products/{id}**: 
  - Ensure the API returns the correct product details based on the product ID.
  
- **POST /products**: 
  - Validate that a product can be successfully created.
  - Ensure the correct validation errors are returned for invalid inputs.
  
- **PUT /products/{id}**: 
  - Verify that a product can be updated by sending a PUT request with the new details.
  
- **DELETE /products/{id}**: 
  - Ensure a product is deleted when this endpoint is called with the correct ID.
  
- **GET /orders**: 
  - Check that the API returns a list of all orders.
  
- **POST /orders**: 
  - Validate that a new order can be placed via this API endpoint.
  
- **PATCH /orders/{id}**: 
  - Ensure an existing order can be updated with new information (e.g., status change).
  
- **DELETE /orders/{id}**: 
  - Verify that an order is deleted when this endpoint is called. 


### 2. Non-functional Testing
- **Cross-browser Testing**:
  - Test the application on different browsers (Chrome, Firefox, Safari, Edge) to ensure compatibility.

- **Responsive Testing**:
  - Test the UI on different screen sizes (mobile, tablet, and desktop) to ensure responsiveness.

## Test Deliverables

### 1. Test Cases
Test cases will be created for:
- **UI Functionalities**: Covering all interactions on the product listing page, including CRUD operations and ordering.
- **API Endpoints**: Covering all RESTful operations for products and orders.


### 2. Bug Report
Any identified issues or bugs will be logged and tracked. The bug report will include:
- Description of the issue.
- Steps to reproduce.
- Severity and priority of the bug.
- Expected vs actual behavior.

## Test Environment

### Browser & Device Configuration:
- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)
- Mobile (browser mobile (Chrome))

### Test Data:
- Products with different price ranges, names, and descriptions will be used to test CRUD operations.
- Orders will be placed with different quantities and product combinations.

### Tools:
- **Postman**: For API testing.
- **Selenium/Playwright**: For UI automation and regression testing.
- **Integration Testing** : 
- **Swagger**: For manual testing of the API (based on the Swagger documentation in the screenshot).

## Test Schedule
| Activity                  | Start Date  | End Date    |
|---------------------------|-------------|-------------|
| Test Case Preparation      | 09/06/2024  | 09/07/2024  |
| Functional Testing (UI & API) | 09/08/2024  | 09/09/2024  |
| Non-functional Testing     | 09/10/2024  | 09/11/2024  |
| Bug Fix Validation         | 09/12/2024  | 09/13/2024  |
| Final Report               | 09/14/2024  | 09/14/2024  |

## Test Exit Criteria
- All critical and high-severity bugs are resolved.
- Functional and non-functional tests are passed.
- The application is stable and ready for release.

## Risks & Mitigations
- **Incomplete Test Data**: Ensure comprehensive test data for all scenarios.
- **API Downtime**: Use mock APIs for frontend testing if the backend is unavailable.