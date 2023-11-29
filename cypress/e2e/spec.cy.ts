describe('Challenges App - e2e testing', () => {
  
  it('Debe comenzar en login', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.contains('Iniciar Sesión');
  })

  it('Ingresa datos incorrectos y muestra mensaje de error', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('#correo').type('ritirialgmail.com');
    cy.get('#contrasena').type( 'prueba123');
    cy.get('#login').click();
    cy.get('#loginAlert').should('have.text', 'Datos de usuario incorrectos');
  })

  it('Ingresa datos de usuario y redirecciona a dashboard', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('#correo').type('ritirial@gmail.com');
    cy.get('#contrasena').type( 'prueba');
    cy.get('#loginAlert').should('have.text', '');
    cy.get('#login').click();
    cy.url().should('includes', 'dashboard');
  })

  it('Redirecciona a Challege 1a al entrar a dashboard', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'challenge-1-component');
    cy.contains('Challenge 1a');
  })

  it('En Challenge 1a realiza cálculo de Media', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge1Link').click();
    cy.url().should('includes', 'challenge-1-component');
    cy.get('#datosSelect').select('2');
    cy.get('#mediaButton').click();
    cy.get('#resultElement').invoke('text').should('have.length.gt', 0);
  })

  it('En Challenge 1a realiza cálculo de Desviación estandar', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge1Link').click();
    cy.url().should('includes', 'challenge-1-component');
    cy.get('#datosSelect').select('1');
    cy.get('#desvButton').click();
    cy.get('#resultElement').invoke('text').should('have.length.gt', 0);
  })

  it('Navega a Challenge 3a', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge3Link').click();
    cy.url().should('includes', 'challenge-3-component');
    cy.contains('Challenge 3a');
  })

  it('En Challenge 3a realiza cálculo de Regresion lineal', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge3Link').click();
    cy.url().should('includes', 'challenge-3-component');
    cy.get('#datosXSelect').select('2');
    cy.get('#datosYSelect').select('2');
    cy.get('#datosK').type( '386');
    cy.get('#regresionButton').click();
    cy.get('#resultRegresionB1Element').invoke('text').should('have.length.gt', 0);
    cy.get('#resultRegresionB0Element').invoke('text').should('have.length.gt', 0);
    cy.get('#resultRegresionYkElement').invoke('text').should('have.length.gt', 0);
  })

  it('En Challenge 3a realiza cálculo de Correlacion', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge3Link').click();
    cy.url().should('includes', 'challenge-3-component');
    cy.get('#datosXSelect').select('1');
    cy.get('#datosYSelect').select('1');
    cy.get('#correlacionButton').click();
    cy.get('#resultCorrelacionRElement').invoke('text').should('have.length.gt', 0);
    cy.get('#resultCorrelacionR2Element').invoke('text').should('have.length.gt', 0);
  })

  it('Navega a Challenge 5a', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge5Link').click();
    cy.url().should('includes', 'challenge-5-component');
    cy.contains('Challenge 5a');
  })

  it('En Challenge 5a realiza cálculo con Simpson', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge5Link').click();
    cy.url().should('includes', 'challenge-5-component');
    cy.get('#funcionSelect').select('2');
    cy.get('#x0').type( '0');
    cy.get('#x1').type( '4');
    cy.get('#nSeg').type( '4');
    cy.get('#mError').type( '0.0001');
    cy.get('#simpsonButton').click();
    cy.get('#resultElement').invoke('text').should('have.length.gt', 0);
  })

  it('En Challenge 5a realiza cálculo con Función T', () => {
    cy.visit('/dashboard');
    cy.url().should('includes', 'dashboard');
    cy.get('#challenge5Link').click();
    cy.url().should('includes', 'challenge-5-component');
    cy.get('#x0').type( '0');
    cy.get('#x1').type( '1.1');
    cy.get('#nSeg').type( '4');
    cy.get('#mError').type( '0.0001');
    cy.get('#dof').type( '9');
    cy.get('#tButton').click();
    cy.get('#resultElement').invoke('text').should('have.length.gt', 0);
  })
})
