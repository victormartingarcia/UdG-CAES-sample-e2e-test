describe('UdG google ranking', function() {
    it('UdG website rankks first for both "UdG" and "Universitat de Girona" keywords', function() {
        cy.log('Visit ' + Cypress.config().baseUrl);
        cy.visit('/');

        cy.log('Search for keyword "Universitat de Girona" and submit form');
        cy.get('form[action="/search"] input[type="text"]').type(
            'Universitat de Girona{enter}'
        );

        cy.url().should('include', '/search');

        cy.log('Retrieve URL address for the very first result');
        cy.get('div#search a')
            .first()
            .should('have.attr', 'href')
            .then(firstResultURL => {
                cy.log(
                    'Retrieved first search result: "' + firstResultURL + '"'
                );

                cy.log(
                    'Go to ' +
                        Cypress.config().baseUrl +
                        ' again, and type "UdG" into search box'
                );
                cy.visit('/');
                cy.get('form[action="/search"] input[type="text"]').type(
                    'UdG{enter}'
                );

                cy.url().should('include', '/search');
                cy.log('Retrieve URL address for the very first result again');

                cy.get('div#search a')
                    .first()
                    .should('have.attr', 'href', firstResultURL);
            });
    });
});
