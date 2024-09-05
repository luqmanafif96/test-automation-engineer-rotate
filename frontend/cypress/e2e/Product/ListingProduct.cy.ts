import { includes } from "cypress/types/lodash";

describe('Product List Page', () => {
  beforeEach(() => {
    // Visit the local product list page
    cy.visit('http://localhost:4200/products/list');
  });

  it('should display all products with correct details', () => {
    // Get all the product cards and store them in a variable
    cy.get('.card').then($cards => {
      // Get the length of the cards
      const numberOfCards = $cards.length;
  
      // Mocked data should match the number of cards
      const products = [
        { name: 'Red Apple', price: 'MYR5.00', description: 'Sweet and juicy red apples.' },
        { name: 'Watermelon', price: 'MYR10.00', description: 'Cooling and refreshing watermelons.' },
        { name: 'Pear', price: 'MYR6.00', description: 'Sweet ripe pear.' },
        { name: 'Orange', price: 'MYR4.00', description: 'Sweet and juicy oranges.' },
        { name: 'Papaya', price: 'MYR8.00', description: 'Amazingly sweet and delicious papayas.' },
        { name: 'Banana', price: 'MYR3.00', description: 'Sweet and delicious bananas.' },
        { name: 'Mango', price: 'MYR7.00', description: 'Sweet and delicious mangoes.' },
        { name: 'Pineapple', price: 'MYR9.00', description: 'Sweet and juicy pineapples.' },
        { name: 'Grapes', price: 'MYR6.00', description: 'Sweet and juicy grapes.' },
        { name: 'Strawberry', price: 'MYR5.00', description: 'Sweet and delicious strawberries.' }
      ].slice(0, numberOfCards); // Slice based on the actual number of cards
  
      // Verify the length of the cards
      cy.wrap($cards).should('have.length', numberOfCards);
  
      // Verify each card's content
      cy.wrap($cards).each(($card, index) => {
        cy.wrap($card).within(() => {
          cy.get('.card-title').should('contain.text', products[index].name + ' (' + products[index].price + ')');
          cy.get('.card-text').should('contain.text', products[index].description);
        });
      });
    });
  });
    
// check the list have edit , delete and order 
  it('should have functional Edit, Delete, and Order buttons', () => {
    cy.get('.card').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.btn-primary').should('have.attr', 'href').and('include', '/products/update');
        cy.wait(20)
        cy.get('.btn-danger').should('exist').and('contain.text','Delete');
        cy.wait(20)
        cy.get('.btn-success').should('have.attr', 'href').and('include', '/orders/create');
      });
    });
  });


  //check for create product 

});