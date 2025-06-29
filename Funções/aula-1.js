// let nome = "Notebook"
// let preco = 1200

/* const produto = {
  nome, // nome: nome
  preco, // preco: preco
  exibirProduto: function() {
    console.log(`${this.nome}, ${this.preco}, ${this.categoria}`)
  }
} */

class Produto {
  constructor() {
    this.nome = 'Notebook'
    this.preco = 1200
  }
}

const produto = new Produto()
const produto2 = new Produto()

console.log(produto)
console.log(produto2)

console.log('\n')

const pro = produto
const pro2 = produto2

pro.preco = 2000

console.log(pro.preco)
console.log(pro2.preco)
console.log(new Produto().preco)

//produto.categoria = 'Eletrônicos'
/* produto.exibirPreco = function () {
  console.log(`Preço: ${this.preco}`)
} */

// produto.exibirProduto()
// produto.exibirPreco()
// console.log(produto, '\n')

//delete produto.categoria
//produto.exibirProduto()
