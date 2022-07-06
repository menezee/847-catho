class Hotel {
  constructor(nome, estrelas) {
    this.nome = nome;
    this.estrelas = estrelas;
  }
}

const hotel1 = new Hotel('Lets', 5);
const hotel2 = new Hotel('Code', 3);
const hotel3 = new Hotel('Segunda', 4);
const hotel4 = new Hotel('Feira', 5);

const hoteis = [
  hotel3,
  hotel1,
  hotel2,
];

const hoteisComEmpate = [
  hotel1,
  hotel2,
  hotel3,
  hotel4,
];

function buscaMelhorHotel(listaDeHoteis) {
  if (listaDeHoteis.length === 0) {
    throw new Error('não há hoteis na lista!');
  }

  let melhorHotel = listaDeHoteis[0];
  for (let i = 1; i < listaDeHoteis.length; i++) {
    const hotel = listaDeHoteis[i];

    if (hotel.estrelas > melhorHotel.estrelas) {
      melhorHotel = hotel;
    }
  }

  return melhorHotel;
}

function buscaMelhoresHoteis(listaDeHoteis) {
  const primeiroHotel = listaDeHoteis[0];
  let melhoresHoteis = [primeiroHotel];
  for (let i = 1; i < listaDeHoteis.length; i++) {
    const hotel = listaDeHoteis[i];
    const melhorHotel = melhoresHoteis[0];

    if (hotel.estrelas > melhorHotel.estrelas) {
      melhoresHoteis = [hotel];
    } else if (hotel.estrelas === melhorHotel.estrelas) {
      melhoresHoteis.push(hotel);
    }
  }

  return melhoresHoteis;
}

console.log(buscaMelhorHotel(hoteis));
console.log(buscaMelhoresHoteis(hoteisComEmpate));
