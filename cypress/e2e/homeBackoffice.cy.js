describe('Home Backoffice', () => {

  beforeEach
  it('Backoffice dev estar online', () => {
    cy.visit('https://app.fake.asaplog.com.br/')

    cy.title().should('eq', 'Entregas')

  })
})