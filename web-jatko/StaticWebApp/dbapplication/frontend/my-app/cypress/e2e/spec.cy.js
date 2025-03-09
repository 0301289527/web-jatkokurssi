describe('User Management System E2E Test', () => {
  it('Visit the homepage and check the title', () => {
  cy.visit('http://localhost:3000'); //Visit the front-end page
  cy.contains('User Management System').should('be.visible'); //Make sure the title exists
  });
  
  it('Check if the user list is loaded', () => {
  cy.visit('http://localhost:3000');
  cy.get('table tbody tr').should('have.length.at.least', 1); //Make sure there is at least one row of data in the table
  });
  
  it('Test the add user function', () => {
  cy.visit('http://localhost:3000');
  cy.get('input[name="name"]').type('test user');
  cy.get('input[name="email"]').type('test@example.com');
  cy.get('input[name="age"]').type('25');
  cy.get('button').contains('add user').click();
  
  // Ensure that the new user is added successfully
  cy.get('table tbody tr').last().contains('test user');
  });
  });