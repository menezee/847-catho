/* eslint-disable no-console */

// const trocaPraLetraMaiuscula = require('./troca-pra-letra-maiuscula');
import maiuscula, { trocaPraLetraMinuscula } from './troca-pra-letra-maiuscula.js';

// (function () {
//   const transformacao = 'maiuscula';
//   const { maiuscula } = require(`./troca-pra-letra-${transformacao}`);
// });

const palavra = "lets code";
const palavra2 = `lets code`;
const palavraMaiuscula = maiuscula(palavra);

console.log({ palavraMaiuscula });

const minuscula = trocaPraLetraMinuscula(palavraMaiuscula);
console.log({ minuscula });
