class produtosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()

    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    visitarProduto(nomeProduto) {
            //cy.visit(`produtos/${nomeProduto}` )
            const urlformatada = nomeProduto.replace(/ /g, '-')
            cy.visit(`produtos/${urlformatada}`)
    }

    addProdutocarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()    }
}

export default new produtosPage()