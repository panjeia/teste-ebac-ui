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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve acessar a página do produto', () => {
        
    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});