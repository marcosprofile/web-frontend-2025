const Hotel = function () {
  this.nome = 'Hotel Transilvânia'
  this.quantidadeSuites = 30
  this.suitesOcupadas = 20

  this.reservar = function () {
    if (this.suitesOcupadas < this.quantidadeSuites) {
      this.suitesOcupadas++
      console.log(`+1 reserva`)
    } else {
      console.log('Todas as suítes estão ocupadas no momento.')
    }
  }
}

const hotel = new Hotel()

console.log(typeof hotel)
console.log('Quantidade de Suítes: ', + hotel.quantidadeSuites)
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)

console.log('\n')

hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()
console.log('Suítes ocupadas: ', + hotel.suitesOcupadas)
hotel.reservar()