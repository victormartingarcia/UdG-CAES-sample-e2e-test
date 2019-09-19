describe('toy website e2e test', function() {
    it('Insert a new fake user', function() {
        cy.log('Visit ' + Cypress.config().baseUrl);
        cy.visit('/');

        /*
        // Adding this code should make e2e test fail!!!
        cy.get('a')
            .contains('Toggle weird monster')
            .click();
        */

        cy.get('a')
            .contains('Insert a fake user')
            .click();

        cy.url().should('contains', '/insert_fake_user');

        cy.get('body')
            .contains('Inserted user with name:')
            .then(e => {
                var insertedEmail = e[0].textContent.split(' email: ')[1];

                cy.go('back');

                cy.get('a')
                    .contains('List fake users')
                    .click();

                cy.url().should('contains', '/list_fake_users');

                cy.get('td').contains(insertedEmail);
            });
    });
});
