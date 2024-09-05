describe('Enter Edit Product Page', () => {
    beforeEach(() => {
      // Visit the local product list page
      cy.visit('http://localhost:4200/products/list');
    });
  
    it('should navigate to the Edit Product page when clicking Edit button', () => {
      // Define the product title 
      const productTitle = 'Test Product';
  
      // Locate the card by its title and ensure the Edit button within that card is clicked
      cy.contains('.card-title', productTitle)
        .parents('.card') // Ensure we are within the correct card
        .within(() => {
          // Click the Edit button inside this card
          cy.get('.button-container .btn-primary')
            .should('contain.text', 'Edit')
            .click();
        });
  
      // Verify that the URL includes the expected update path
    cy.url().should('include', '/products/update/11');


    // insert the edit
    cy.get('#product-name').clear()
    cy.wait(1000)
    cy.get('#product-name').type('Test Product Edit ');
    cy.wait(1000)
    // click the button 
    cy.get('.btn').click()
    cy.url().should('include', '/products/list');
  
    });
  });
  