import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')

Given('A user opens a saucelabs website', () => {
    cy.visit('/')
})
When('A user enters the username {string}', (username)=>{
    loginPage.typeUsername(username)
})
And('A user enters the password {string}', (password)=>{
    loginPage.typePassword(password)
})
And('A user clicks on the login button', (password)=>{
    loginPage.clickLogin()
})
Then('the url will contains the /inventory subdirectory', ()=>{
    cy.url().should('contains', '/inventory.html')
})
Then('The error message `Epic sadface: Sorry, this user has been locked out.` is displayed', () => {
    loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})
