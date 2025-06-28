class Animal {
  constructor(cor, tamanho, peso) {
    this.cor = cor
    this.tamanho = tamanho
    this.peso = peso
  }
  
  correr() { console.log('Correr como um') }
  dormir() { console.log('Dormir') }
}

class Cao extends Animal {
  constructor(cor, tamanho, peso, tamanhoOrelha) {
    super(cor, tamanho, peso)
    this.tamanhoOrelha = tamanhoOrelha
  }

  correr() {
    super.correr()
    console.log('cão')
  }
  latir() { console.log('Latir') }
}

class Passaro extends Animal {
  correr() {
    super.correr()
    console.log('passaro')
  }

  voar() { console.log('Voar') }
}

class Papagaio extends Passaro {
  falar() { console.log('Falar') }
}

const animal = new Animal('Amarelo', 1, 3)
const cao = new Cao('Amarelo', 1, 5, 3)
const passaro = new Passaro
const papagaio = new Papagaio

console.log(cao)