// Object.prototype
const obj = {}
const arr = []
const str = ''
const bol = true

// console.log(obj.toString())
// console.log(obj.__proto__ == Object.prototype)
// console.log(arr.__proto__ == Array.prototype)
// console.log(str.__proto__ == String.prototype)
// console.log(bol.__proto__ == Boolean.prototype)

class Carro {
  constructor() {
    this.placa = 'AMP-1234'
  }
}

class BMW extends Carro {
  constructor() {
    super()
    this.nome = 'BMW 320i'
  }
}

/* const bmw = new BMW()
console.log(bmw.placa)
console.log(bmw.nome)
 */

const veiculo = {
  motor: '200 cavalos'
}

const carro = {
  placa    : 'AMP-1234',
  __proto__: veiculo,
  acelerar : function () {
    console.log('Acelerar')
  }
}

const bmw = {
  nome     : 'BMW 320i',
  __proto__: carro
}

console.log(bmw.nome)
console.log(bmw.placa)
console.log(bmw.motor)
bmw.acelerar()