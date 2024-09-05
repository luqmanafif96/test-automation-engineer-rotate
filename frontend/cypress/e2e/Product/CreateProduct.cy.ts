import { should } from "chai";

describe('Enter Create Product Page', () => {
  beforeEach(() => {
    // Visit the local product list page
    cy.visit('http://localhost:4200/products/list');
  }); 

  it('should verify create button ', () => {
  cy.get('.create-button-container > .btn').should('contain.text','Create')
  .click()
  cy.url().should('include', '/products/create');
  
  });
})


describe('Verify field Product Page', () => {
  beforeEach(() => {
    // Visit the local product list page
    cy.visit('http://localhost:4200/products/list');
  }); 

  it('should verify create button ', () => {
  cy.get('.create-button-container > .btn').should('contain.text','Create')
  .click()
  cy.url().should('include', '/products/create');

  cy.wait(20)
  cy.get('app-create > .container').within(() => {
  cy.get('#product-name').type('New Product').clear();
  cy.get('#product-description').type('50').clear();
  cy.get('#product-price ').type('12').clear();
  
  // click the button 
  cy.get('.btn').click()
  // try {
  //   // cy.get('.btn').click()
  //   cy.url().should('include', '/products/list');
  // } catch (error) {
  //   cy.url().should('include', '/products/create');
  // }
 

  // to verify the required field

  });

// suppose to be error , but cypress not capture need to do improvement 

cy.wait(20)
  cy.get('app-create > .container').within(() => {
  cy.get('#product-name').type('Test Product ');
  cy.get('#product-description').type('50');
  cy.get('#product-price ').type('12');

    // click the button 
    cy.get('.btn').click()
    cy.url().should('include', '/products/list');
  });
  cy.wait(20)
  cy.get('.card-title').should('contain.text','Test Product ')
  

  })

})

