const Hotel = function () {
  this.nome = 'Hotel Transilvânia'
  let totalSuites = 30
  let suitesOcupadas = 28

  this.quantidadeSuites = function () {
    console.log(`Quantidade de Suítes: ${totalSuites}`)
  }

  this.reservar = function () {
    if (suitesOcupadas < totalSuites) {
      suitesOcupadas++
      console.log('+1 reserva')
      console.log(`Suítes ocupadas: ${suitesOcupadas}`)
    } else {
      console.log('Todas as suítes estão ocupadas no momento.')
    }
  }
}

const hotel = new Hotel()

console.log(typeof hotel)
hotel.quantidadeSuites()

console.log('\n')

hotel.reservar()
hotel.reservar()
hotel.reservar()