/// <reference types="Cypress" />
/* eslint-disable no-undef */
const baseUrl = Cypress.env('BASE_URL');

describe('Anchorlinks', () => {
  describe('#About', () => {
    it('should render content', () => {
      cy.visit(baseUrl);
      cy.get('#about').should('be.visible');
    });
      
    it('social icons should be visible', () => {
      cy.get('.social-icons').should('be.visible');
    });
  })
    
  describe('#Experience', () => {
    it('should render content after clicking', () => {
      cy.get('a[href="#experience"]').click();
      cy.get('#experience').should('be.visible');
    });
  })
    
  describe('#Education', () => {
    it('should render content after clicking', () => {
      cy.get('a[href="#education"]').click();
      cy.get('#education').should('be.visible');
    });
  })
    
  describe('#Skills', () => {
    it('should render content after clicking', () => {
      cy.get('a[href="#skills"]').click();
      cy.get('#skills').should('be.visible');
    });
  })
    
  describe('#hobbies', () => {
    it('should render content after clicking', () => {
      cy.get('a[href="#hobbies"]').click();
      cy.get('#hobbies').should('be.visible');
    });
  })
    
  describe('#Awards', () => {
    it('should render content after clicking', () => {
      cy.get('a[href="#awards"]').click();
      cy.get('#awards').should('be.visible');
    });
  })
    
  describe('#Volunteering', () => {
    it('should render content after clicking', () => {
      cy.get('a[href="#volunteering"]').click();
      cy.get('#volunteering').should('be.visible');
    });
  })
});