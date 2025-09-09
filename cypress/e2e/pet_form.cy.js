
describe('Pagina inicial', () => {

  it('Visitar a pagina inicial', () => {
    cy.visit('http://localhost:8080');
    cy.get('form').should('exist');
    cy.get('#username').type('admin');
    cy.get('#password').type('admin');
    cy.get('button[type="submit"]').should('exist');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:8080/index2.html')
  });
});