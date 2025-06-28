class Animal {
  constructor() {
    this.cor = ''
    this.tamanho = 0
    this.peso = 0
  }
  
  correr() { console.log('Correr como um') }
  dormir() { console.log('Dormir') }
}

class Cao extends Animal {
  constructor() {
    super()
    this.tamanhoOrelha = 0
  }

  correr() {
    super.correr()
    console.log('cão')
  }
  latir() { console.log('Latir') }
}

class Passaro extends Animal {
  voar() { console.log('Voar') }
}

class Papagaio extends Passaro {
  falar() { console.log('Falar') }
}

const cao = new Cao
const passaro = new Passaro
const papagaio = new Papagaio

cao.correr()