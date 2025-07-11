///<reference types="cypress" />

describe('acessar tela de home backoffice', () => {
  let email = "fakeusuario";
  let password = "teste123"; 
  let transportadora ="1200 - AUTONOMO"

  it('deve preencher usuario e senha', () => {
    cy.sessionLogin(email, password)
    cy.visit('/')
    cy.get('#username').type('fakeusuario')
    cy.get('#password').type('teste123)
    cy.get('#submit').click();
    cy.url().should("include", "/dashboard")
    cy.get('.navbar-brand')
    
    cy.get('#menu-monitorar > .dropdown-toggle > .hidden-sm').click()
    cy.get('#subMenu-roteirosDireto > a').each(($el) => {
      cy.wrap($el).scrollIntoView();
      });
    cy.get('#subMenu-roteirosDireto > a').click()
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-center > [style="min-width: 200px; margin: 10px"] > .selectize-control > .selectize-input')
      .type('1200 - AUTONOMO').type('{enter}');

    cy.get(':nth-child(1) > :nth-child(13) > #acoesRoteiroDiretoDiv > .dropdown-toggle > .caret').each(($el) => {
      cy.wrap($el).scrollIntoView().should('be.visible').click();
      });
    cy.get(':nth-child(1) > :nth-child(13) > #acoesRoteiroDiretoDiv > .dropdown-toggle > .caret').click()
    
    //cy.get(':nth-child(1) > :nth-child(13) > #acoesRoteiroDiretoDiv > .dropdown-menu').contains('Visitas').click()


  });
});