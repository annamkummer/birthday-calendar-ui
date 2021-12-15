describe('Birthdays', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    
    it('When user visits page, they should see Birthdays heading', () => {
        cy.get('h1').contains('Birthdays')
    })

    it('When user visits page, they should see a form', () => {
        cy.get('form').contains('Name')
        cy.get('form').contains('Month')
        cy.get('form').contains('Day')
        cy.get('button').contains('Add this birthday')
    })

    it('When user visits page, they should see Cards for each month containing birthdays for that month', () => {
        cy.get('.bday-container').children().should('have.length', 12)
        cy.get('.month-card').contains('Kari: 1/13')

    })

    it('When user types in the form, that input should reflect the user input', () => {
        cy.get('input').first().type('abc')
        cy.get('input').first().should('have.value', 'abc')
    })

    it('When user submits the form, that birthday should show in the appropriate month', () => {
        cy.get('.name').type('Karla')
        cy.get('.month').type('12')
        cy.get('.day').type('21')
        cy.get('.add-btn').click()
        cy.get('.month-card').last().contains('Karla: 12/21')
        
    })
})