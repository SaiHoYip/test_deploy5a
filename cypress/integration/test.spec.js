describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://54.158.49.58:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
