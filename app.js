let nomes = [
  "Marcos", "Letícia", "Carlos", "Bianca", "Pedro", "Juliana", "Rafael", "Camila",
  "João", "Larissa", "Lucas", "Amanda", "Gabriel", "Fernanda", "Mateus", "Isabela",
  "André", "Natália", "Felipe", "Bruna", "Vinícius", "Tatiane", "Gustavo", "Patrícia",
  "Henrique", "Daniela", "Thiago", "Renata", "Eduardo", "Sabrina"
];

const lista = document.querySelector('#lista')
const search = document.querySelector('#search')
let itensLista = ''

for (let i in nomes) {
  let nome = nomes[i]
  itensLista += `
      <li class="p-3 border-b-1 border-zinc-600 text-zinc-200">
        ${nome}
      </li>
    `
}

search.value = ''
lista.innerHTML = itensLista

function pesquisarNome() {
  const lista = document.querySelector('#lista')
  const search = document.querySelector('#search')

  const pesquisa = nomes.filter(nome =>
    nome.toLowerCase().includes(search.value.toLowerCase())
  )

  const itensLista = pesquisa.length > 0 ? pesquisa.map(nome => `
      <li class="p-3 border-b-1 border-zinc-600 text-zinc-200">
        ${nome}
      </li>
    `).join('')
  : `<li class="p-3 border-b-1 border-zinc-600 text-zinc-500">Nenhum usuário encontrado...</li>`

  lista.innerHTML = itensLista
}