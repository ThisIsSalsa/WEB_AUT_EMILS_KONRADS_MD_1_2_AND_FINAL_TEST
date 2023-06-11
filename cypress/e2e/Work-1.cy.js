describe('Katalon Demo Cura', () => {
  beforeEach(() => {
      cy.visit('https://demoqa.com/selectable');
  })
  context('HomeWork-1', () => {
      it('Lets get it done', () => {
        cy.get('#demo-tab-grid').click(); 
        //press button grid
        cy.get('#gridContainer').children().eq(1).children().eq(0).click(); 
        cy.get('#gridContainer').children().eq(0).children().eq(1).click(); 
        cy.get('#gridContainer').children().eq(2).children().eq(1).click(); 
        cy.get('#gridContainer').children().eq(1).children().eq(2).click(); 
        //Activates the buttons
        cy.get('#gridContainer').children().eq(1).children().eq(0).should('have.class', 'active'); 
        cy.get('#gridContainer').children().eq(0).children().eq(1).should('have.class', 'active'); 
        cy.get('#gridContainer').children().eq(2).children().eq(1).should('have.class', 'active'); 
        cy.get('#gridContainer').children().eq(1).children().eq(2).should('have.class', 'active');
        // validates active buttons 
        cy.get('#gridContainer').children().eq(2).children().eq(2).should('not.have.class', 'active'); 
        cy.get('#gridContainer').children().eq(2).children().eq(0).should('not.have.class', 'active'); 
        cy.get('#gridContainer').children().eq(1).children().eq(1).should('not.have.class', 'active'); 
        cy.get('#gridContainer').children().eq(0).children().eq(2).should('not.have.class', 'active'); 
        cy.get('#gridContainer').children().eq(0).children().eq(0).should('not.have.class', 'active'); 
        // validates non-active buttons
      })
  })
})