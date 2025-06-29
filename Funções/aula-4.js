const produto1 = {
  nome: 'Notebook',
  preco: 1200
}

const produto2 = {
  nome: 'Playstation 5',
  preco: 4000
}

const ProdutoFactory = function(nome, preco) {
  
  // dados
  
  return {
    nome,
    preco,
    recuperarAvaliacoes() {
      console.log(`Avaliações para ${this.nome}`)
    }
  }
}

const produto = ProdutoFactory('Notebook', 1200)
const produtoNovo = ProdutoFactory('Celular', 1500)

console.log(produto)
produto.recuperarAvaliacoes()