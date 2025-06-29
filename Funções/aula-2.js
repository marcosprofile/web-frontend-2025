function contarQuantidadeLetras(produto) {
  try {
    console.log(produto.nom.length)
  } catch (erro) {
    console.log('Erro ao processar: \n', erro)
    //tratarErro(erro)
  } /* finally {
    console.log('finally')
    } */
}

/* function tratarErro(erro) {
  throw new Error('Teste', erro)
} */

const produto = {
  nome: 'Notebook',
  preco: 1200
}

contarQuantidadeLetras(produto)