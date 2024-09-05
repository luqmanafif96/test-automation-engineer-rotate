// describe('Product List Page', () => {
//     beforeEach(() => {
//       // Visit the local product list page before each test
//       cy.visit('http://localhost:4200/products/list');
//     });
// });


describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/products/list')
  })
})

