describe('Enter Create Product Page', () => {
    beforeEach(() => {
      // Visit the local product list page
      cy.visit('http://localhost:4200/products/list');
    }); 
    it('should Action as delete', () => {
        // Define the product title 
        const productTitle = 'Test Product Edit';
    
        // Locate the card by its title and ensure the Edit button within that card is clicked
        cy.contains('.card-title', productTitle)
          .parents('.card') // Ensure we are within the correct card
          .within(() => {
            // Click the Edit button inside this card
            cy.get('.button-container .btn-danger')
              .should('contain.text', 'Delete')
              .click();
          });
          cy.url().should('include', '/products/list');

        })
})