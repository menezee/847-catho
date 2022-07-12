// process

// global, GLOBAL, root

var ano = 2022;
const pessoa = { nome: 'erich', age: 30 };
const chaves = Object.keys(pessoa); // → ['nome', 'age'];

const chaveisGlobais = Object.keys(global);
global.escola = 'Let\'s Code';
// console.log(Object.keys(global));

// exports.escola = 'Let\'s Code';
// const { escola } = require('./escola');

/*
console.log({
  processId: process.pid,
  arquitetura: process.arch,
  title: process.title,
  plataforma: process.platform,
  memoria: process.memoryUsage(),
  uptime: process.uptime(),
});
*/

// process.stdout.write('stdout.write');
// console.log('log');

// function cb() {}
process.stdin.on('readable', () => {
  const dado = process.stdin.read();
  // process.stdout.write(dado.toString());
  console.log({ dadoBytes: dado, dado: dado.toString() });
});

// \n → linha nova, \t → tab
