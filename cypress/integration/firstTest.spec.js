/// <reference types="Cypress" /> 

// describe ("Mobile phone replenishment", () => {

    // context("Replenishment less than the allowed amount", () => {
        // it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
    // });
// });

//it ('By ID', () => {
    //cy.visit('https://avatanplus.com/login')
    //cy.get('#auth_login')
//});

//it ('By Class', () => {
   // cy.visit('https://avatanplus.com/login')
   // cy.get('.text-field')
//});

//it ('By Tag', () => {
    //cy.visit('https://avatanplus.com/login')
    //cy.get('a')
//});

//it('By Tag value', () => {
    //cy.visit('https://avatanplus.com/login')
    //cy.get('[class="logo-icon"]')
//});

//it('By Diffent Types', () => {
    //cy.visit('https://avatanplus.com/login')
    //cy.get('input[name="email"] [class="text-field"]')
//});

//it.only('By Contains name', () => {
    //cy.visit('https://avatanplus.com/login')
    //cy.get('*[class^="reg-agreement"]')
//});

//it('Using Get with Find and Eq', () => {
  //  cy.visit('https://avatanplus.com/login')
    //cy.get('div').find('div').find('input').eq(2)
//});

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('[href="#Syntax"]')
});