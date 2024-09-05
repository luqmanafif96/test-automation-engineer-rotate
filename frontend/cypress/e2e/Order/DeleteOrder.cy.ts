describe('Delete Order', () => {
    beforeEach(() => {
      // Visit the local orders list page
      cy.visit('http://localhost:4200/orders/list');
    });
  
    it('should delete the order and verify the list updates', () => {
      // Define the product ID you want to delete
      const productID = '4';
        // find the ID and delete from table   
        cy.get('table tbody tr').each(($row) => {
            // Find the <td> with the Order ID and check if it matches the desired orderID
            if ($row.find('td').first().text().trim() === productID) {
              // Click the Delete button in that row
              cy.wrap($row).find('button.btn-danger').click();
      
              // Optionally handle confirmation dialog if applicable
              cy.on('window:confirm', (text) => {
                expect(text).to.contains('Are you sure you want to delete this order?');
                return true; // Confirm the dialog
              });
            }
          });
  
      // Verify the URL or check if the item is removed from the list
      
      
      // Verify that the item is no longer present
      cy.get('.container').should('not.contain', `Order ${productID}`); // Adjust based on actual content
    });
  });
  