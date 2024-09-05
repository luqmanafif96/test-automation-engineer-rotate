describe('Enter List Product page', () => {
    beforeEach(() => {
      // Visit the local product list page
      cy.visit('http://localhost:4200/products/list');
    }); 
    it('should be able to create order', () => {
    const productTitle = 'Watermelon';

    cy.contains('.card-title', productTitle)
    .parents('.card') // Ensure we are within the correct card
    .within(() => {
      // Click the Edit button inside this card
      cy.get('.button-container .btn-success')
        .should('contain.text', 'Order')
        .click();

       
    });
    cy.get('#product-quantity').type('12')

    cy.get('.btn').click()
    cy.url().should('include', '/orders/list');
    })

})