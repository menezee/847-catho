const Item = require('./item');
const ListaDeMercado = require('./lista-de-mercado');
const Caixa = require('./caixa');

// Commonjs
// ES Modules

const lista = new ListaDeMercado();
const pastaDeDente = new Item('Pasta de dente', 5);
const pao = new Item('Pão de sanduíche', 7);

lista.adicionaItem(pastaDeDente);
lista.adicionaItem(pao);

const total = Caixa.somaItens(lista);
console.log(`O total da lista foi ${total} reais.`);
lista.imprimeItens();

const [comandoDoNode, caminhoDoArquivo, data] = process.argv;
// node index.js 1657150107763

const dataNumero = Number(data);
// console.log(`Data enviada foi: ${new Date(dataNumero)}`);
