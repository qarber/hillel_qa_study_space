/// <reference types="cypress" />


describe ('Upload file to user profile', () => {
    const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthPassword')}`
    
    
    it('Successfuly update user logo in profile', () => {
       cy.visit(`https://${userAndPass}@qauto.forstudy.space`)
       cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', {
        "email": Cypress.env('email'),
        "password": Cypress.env('password'),
        "remember": false
       })
       cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile`)
       cy.get('button.btn-primary').click()
       cy.get('input#editProfilePhoto').selectFile('cypress/fixtures/userLogo.png')
       cy.intercept('PUT', 'api/users/profile').as('logo')
       cy.contains('button', 'Save').click()
       cy.get('@logo').its('response').then(res => {
        expect(res.statusCode).eq(200)
       })
    })
})