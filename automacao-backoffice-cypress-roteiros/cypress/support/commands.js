
Cypress.Commands.add("sessionLogin", () => {
  const username = "#username"
  const password = "#password"
    function submitForm(email, password) {
      cy.visit('/');
      cy.get(username).type(email, { delay: 0 });
      cy.get(password).type(password, { delay: 0 });
      cy.get("#submit").click();
      cy.url().should("include", "/");
      cy.contains("h2", "Seja bem-vindo(a)!").should("be.visible");
    }
  });