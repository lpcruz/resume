/// <reference types="Cypress" />
/* eslint-disable no-undef */
const baseUrl = Cypress.env('BASE_URL');

describe('Avatar', () => {
  beforeEach('Visit resumé page', () => {
    cy.visit(baseUrl);
  });

  it('should be visible on the page', () => {
    cy.get('.img-profile[src="assets/img/avatar.png"]').should('be.visible');
  });
});