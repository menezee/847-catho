const { oi, hola, numero } = require('./cumprimentar');
// { oi: [Function: oi], hola: [Function: hola], numero: 42 }

oi('Let\'s Code');
hola('Let\'s Code');
console.log(numero);

const pessoa = { nome: "erich", 'comida-favorita': "sushi" };
// const nome = pessoa.nome;
const { nome } = pessoa;
