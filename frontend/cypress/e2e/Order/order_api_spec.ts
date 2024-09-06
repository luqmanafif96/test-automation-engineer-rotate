describe('Orders API', () => {
    const baseUrl = 'http://localhost:3000/api';
  
    it('should create a new order', () => {
      cy.request('POST', `${baseUrl}/orders`, {
        product: 'Apple',
        quantity: 3
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.product).to.eq('Apple');
        expect(response.body.quantity).to.eq(3);
      });
    });
  
    it('should retrieve all orders', () => {
      cy.request('GET', `${baseUrl}/orders`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('should delete an order', () => {
      // Assuming we want to delete order with ID 1
      cy.request('DELETE', `${baseUrl}/orders/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('deleted', true);
      });
    });
  });
  