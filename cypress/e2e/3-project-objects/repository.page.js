class repository {
    static get name() {
        return cy.get('#firstName');
    }
    static get last() {
        return cy.get('#lastName');
    }
    static get email() {
        return cy.get('#userEmail');
    }
    static get gender() {
        return cy.get('label[for*="gender-radio-1"]');
    }
    static get number() {
        return cy.get('#userNumber');
    }
    static get Birth() {
        return cy.get('#dateOfBirthInput');
    }
    static get month() {
        return cy.get('.react-datepicker__month-select');
    }
    static get year() {
        return cy.get('.react-datepicker__year-select');
    }
    static get day() {
        return cy.get('div[aria-label="Choose Friday, February 28th, 1930"]');
    }
    static get subjects() {
        return cy.get('#subjectsContainer');
    }static get pic() {
        return cy.get('#uploadPicture');
    }
    static get address() {
        return cy.get('#currentAddress');
    }
    static get state() {
        return cy.get('#stateCity-wrapper > :nth-child(2)');
    }
    static get city() {
        return cy.get('#stateCity-wrapper > :nth-child(3)');
    }
    static get submit() {
        return cy.get('#submit');
    }
    static get works() {
        return cy.get('#example-modal-sizes-title-lg');
    }
    static get results() {
        return cy.get('.table-dark > tbody > tr');
    }
    // spent a hour looking for hobbie... turns out didnt add at begining
    static get hobbie() {
        return cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)');
    } 
}
export default repository;