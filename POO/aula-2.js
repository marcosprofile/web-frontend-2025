// Métodos - parâmetros e retornos

class Usuario {
  constructor() {
    this.email = ''
    this.senha = ''
    this.subtotalCompra = 0 
  }

  logar() {
    let emailBD = 'marcos.laurindo@marcotech.dev.br'
    let senhaBD = '1234'

    if (emailBD === this.email) {
      if (senhaBD === this.senha) {
        return 'Usuário logado.'
      } else {
        return 'Senha inválida'
      }
    } else {
      return 'O e-mail informado não possui cadastro!'
    }
  }

  calcularDesconto(cupom) {
    let desconto = 0
    
    if (cupom == 'DESC20') {
      desconto = 20
    } else if (cupom == 'FESTA10') {
      desconto = 10
    } else {
      return 'O cupom inserido não existe ou é inválido.'
    }

    return this.subtotalCompra - desconto
  }
}

const usuario = new Usuario()

usuario.email = 'marcos.laurindo@marcotech.dev.br'
usuario.senha = '1234'
usuario.subtotalCompra = 500

console.log(usuario.logar())
console.log(`Total com desconto: ${usuario.calcularDesconto('DESC20')}`)