/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('enzoesteves20@gmail.com')
        cy.get('#password').type('D8PYL9pkafViXsW')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, enzoesteves20 (não é enzoesteves20? Sair)')
    })

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('enzoes20@gmail.com')
        cy.get('#password').type('D8PYL9pkafViXsW')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir uma mensgem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('enzoesteves20@gmail.com')
        cy.get('#password').type('morango54')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail enzoesteves20@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
});

it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, enzoesteves20 (não é enzoesteves20? Sair)')
});

it('Deve fazer login com sucesso - Fixture', () => {
    cy.fixture('perfil').then(dados =>{
        cy.get('#username').type(perfil.usario)
        cy.get('#password').type(perfil.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, enzoesteves20 (não é enzoesteves20? Sair)')
})
});

it('Deve fazer login com sucesso - Usando comandos customizados', () => {
    cy.login('enzoesteves20@gmail.com' , 'D8PYL9pkafViXsW')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, enzoesteves20 (não é enzoesteves20? Sair)')
});

})