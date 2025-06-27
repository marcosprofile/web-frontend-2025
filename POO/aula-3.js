class ContaBancaria {
  constructor() {
    this._numeroConta = 0
    this._saldo = 0
  }

  get numeroConta() { return this._numeroConta }

  set numeroConta(numero) {
    if (numero > 0) {
      this._numeroConta = numero
    } else {
      console.log('Número de conta inválido.')
    }
  }

  get saldo() { return this._saldo }

  set saldo(novoSaldo) {
    if (novoSaldo > 0) {
      this._saldo = novoSaldo
    }
  }

  sacar(valorSaque) { this._saldo = this._saldo - valorSaque }
  depositar(valorDeposito) { this._saldo = this._saldo + valorDeposito }
}


const conta = new ContaBancaria()
conta.numeroConta = 50
conta.saldo = 500

console.log(conta.numeroConta)
console.log(conta.saldo)

conta.sacar(150)
console.log(conta.saldo)

conta.depositar(800)
console.log(conta.saldo)

