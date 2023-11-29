describe('e2e Tests', () => {
  it('Debe comenzar en login', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.contains('Iniciar Sesión');
  })

  it('Ingresa datos de usuario y redirecciona a dashboard', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('#correo').type('ritirial@gmail.com');
    cy.get('#contrasena').type( 'prueba123');
    cy.get('#login').click();
    cy.url().should('includes', 'dashboard');
  })

  it('Realiza calculo de media con arreglo 2', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#datosSelect').select('2');
    cy.get('#mediaButton').click();
    cy.get('#resultElement').invoke('text').should('have.length.gt', 0);
    cy.get('#resultElement').should('include.text', '550.');
  })
})
