const startup = {
  nome: 'Marcotech',
  devs: 8,
  uxs: 2,
  vagas: true,
  tiposServicos: ['Landing Pages', ' Sistemas', ' Tecnologia'],

  totalFuncionarios: function () {
    let res = this.devs + this.uxs
    return `Funcionários: ${res}`
  }
}

console.log(`Nome da Startup: ${startup.nome}`)
console.log(`Total de programadores: ${startup.devs}`)
console.log(`Total de UX Designers: ${startup.ocupados}`)
console.log(`Possui vagas disponíveis?: ${startup.vagas === true ? 'Temos vagas' : 'Não temos vagas'}`)
console.log(`Tipos de serviços: ${startup.tiposServicos}`)
console.log(`Total de funcionários: ${startup.totalFuncionarios()}`)


console.log('\n')

class Hotel {

  constructor() {
    this.nome = 'Hotel Transilvânia'
    this.quartos = 32
    this.ocupados = 10
  }

  verificarDisponibilidade() {
    let res = this.quartos - this.ocupados
    return `Quartos disponíveis: ${res}`
  }

}

const hotel = new Hotel()

console.log(`Nome do hotel: ${hotel.nome}`)
console.log(hotel.verificarDisponibilidade())