/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
it('deve completar o cadasro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type(faker.internet.password())
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.person.firstName())
    cy.get('#account_last_name').type(faker.person.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')   
});

it('deve completar o cadasro com sucesso - Usando variáveis', () => {
var senha = faker.internet.password()
var nome = faker.person.firstName()
var email = faker.internet.email(nome)
var sobrenome = faker.person.lastName()


    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')   
});

it.only('Deve completar o cadastro com sucesso - Usando Comando customizado', () => {
    cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.person.firstName(), faker.person.lastName())
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')   
});
});