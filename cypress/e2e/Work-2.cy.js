describe('Katalon Demo Cura', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com');
    })
    context('Step one', () => {
        it('Test 1', () => {
          cy.get('#btn-make-appointment').click();
          cy.get('#txt-username').type("John Doe");
          cy.get('#txt-password').type("ThisIsNotAPassword");
          cy.get('#btn-login').click();
          // Login done
          cy.get('#menu-toggle').click();
          cy.get('#sidebar-wrapper').should('be.visible');
          cy.get('.sidebar-nav > :nth-child(4) > a').click();
          cy.get('#history > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3)').should('have.text', 'No appointment.');
          cy.get('#history > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3)').should('be.visible');
          // validating scenario 2
          cy.get('#btn-make-appointment').click();
          cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
          cy.get('#chk_hospotal_readmission').click();
          cy.get('#radio_program_medicaid').click();
          cy.get('#txt_visit_date').click();
          cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(6)').click();
          cy.get('#txt_comment').type("CURA Healthcare Service");
          cy.get('#btn-book-appointment').click();
          // Setting all data for the scenario 1 of homework 2
          cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
          cy.get('#hospital_readmission').should('have.text', 'Yes');
          cy.get('#program').should('have.text', 'Medicaid');
          cy.get('#visit_date').should('have.text', '30/06/2023');
          cy.get('#comment').should('have.text', 'CURA Healthcare Service');
          // validating if data is right
        })
    })
})