const assert = require('assert');

function soma(a, b) {
  return a + b;
}

const hotel1 = { nome: 'hotel1', estrelas: 3 };
const hotel2 = { nome: 'hotel2', estrelas: 2 };

function buscaMelhorHotel(hoteis) {
  let melhorHotel = hoteis[0];
  hoteis.forEach(hotel => {
    if (hotel.estrelas > melhorHotel.estrelas) {
      melhorHotel = hotel;
    }
  });

  return melhorHotel;
}

const melhorHotel = buscaMelhorHotel([hotel1, hotel2]);
assert.ok(melhorHotel === hotel1);
// assert.ok(Array.isArray(melhorHotel))
assert.ok(soma(2, 5) === 7, 'soma não deu o esperado!');
// assert.ok(5 < 2);
assert.deepStrictEqual(melhorHotel, { nome: 'hotel1', estrelas: 3 });

const pessoa1 = {
  nome: 'pessoa1',
  pai: {
    nome: 'pai1',
    vo: {
      nome: 'vo1',
    }
  }
};

assert.deepStrictEqual(pessoa1, {
  nome: 'pessoa1',
  pai: {
    nome: 'pai1',
    vo: {
      nome: 'vo1',
    }
  }
});
