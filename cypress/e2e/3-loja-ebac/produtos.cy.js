/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
      produtosPage.buscarProdutoLista('Apollo Running Short')
        cy.get('#tab-title-description > a').should('exist')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve acessar a página do produto', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.visitarProduto('Ajax Full-Zip Sweatshirt')
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve adicionar o produto ao carrinho', () => {
        produtosPage.buscarProduto('Circe Hooded Ice Fleece')
        produtosPage.addProdutocarrinho('M', 'Green', 6)
        cy.get('.woocommerce-message').should('exist')
    });

    it.only('Deve adicionar o produto ao carrinho - Buscando da massa de dados', () => {
        let ps = 1

        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[ps].nomeProduto)
        produtosPage.addProdutocarrinho(
            dados[ps].tamaho, 
            dados[ps].cor, 
            dados[ps].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[ps].nomeProduto)
        })

        
    });
});