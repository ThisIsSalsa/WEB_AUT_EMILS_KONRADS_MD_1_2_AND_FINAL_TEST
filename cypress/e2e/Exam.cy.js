import Form from '../e2e/3-project-objects/repository.page.js';
//Calling out syntaxes from file in project objects folder
describe('Demo QA', () => {
  beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
  })
      context('Exam', () => {
        it('should fill all the fields', () => {
          Form.name.type('Emils');
          Form.last.type('Konrads');
          Form.email.type('my@email.com');
          Form.gender.click();
          Form.number.type('2233223322');
          Form.Birth.click();
          Form.month.select('February');
          Form.year.select('1930');
          Form.day.click();
          Form.subjects.type('Economics{enter}');
          Form.hobbie.click();
          Form.pic.selectFile('cypress/image/profilepic.png');
          Form.address.type('Staicele, Latvia, LV-0000');
          Form.state.click().type('NCR{enter}'); // while testing on last day for some reason cant open state widget? 
                                                 // Worked fine on 06/10/2023 cant figure out what happened
                                                 // Theory that adds have locked the vidget from working on cypress
                                                 // hopefully ounly error on my system (not the first time)

                                                 //**every thing else should work as intended (finaly called out other functions from pages) */
          Form.city.click().type('Delhi{enter}');
          Form.submit.click();
          Form.works.should('have.text', 'Thanks for submitting the form');
          const correctText = ['Emils Konrads', 'my@email.com', 'Male', '2233223322', '28 February,1930', 'Economics', 'Music', 'profilepic.jpg', 'Staicele, Latvia, LV-0000', 'NCR Delhi'];
          Form.results.each(($el, index) => {
              cy.wrap($el).should('contain.text', correctText[index]);
                                                  // Works!!
            })
        })
    })
})
