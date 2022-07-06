const figlet = require('figlet');

class ListaDeMercado {
  constructor() {
    this.dataDeCriacao = Date.now();
    this.itens = [];
  }

  adicionaItem(item) {
    this.itens.push(item);
  }

  imprimeItens() {
    // this.itens.forEach(item => {
    //   console.log(`Item: ${item.nome} e custa ${item.preco}`);
    // });

    this.itens.forEach(item => {
      figlet(item.nome, (treta, resultado) => {
        console.log(resultado );
      });
    });
  }
}

function pegaDiaDoMês(timestamp, cb) {
  const isTimestampValid = Number.isInteger(timestamp);

  if (!isTimestampValid) {
    cb(new Error('timestamp não é válido!'), null);
  } else {
    const data = new Date(timestamp);
    cb(null, data.getDate());
  }
}

const timestamp = Date.now();
const callback = (err, data) => {
  console.log(`acessando data dentro do callback: ${data}`);
};
pegaDiaDoMês("letscode", callback);

module.exports = ListaDeMercado;
