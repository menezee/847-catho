const fs = require('fs'); // fs = filesystem
const path = require('path');

const caminhoDoArquivo = path.join(__dirname, 'lanches.json');
console.log(caminhoDoArquivo);
// const caminhoDoArquivo = '/Users/menezes/Code/letscode/847/src/11-07-2022-nodejs-modules/lanches.json';
const lanchesString = fs.readFileSync(caminhoDoArquivo, 'utf-8');
const lanches = JSON.parse(lanchesString);
// JSON.stringify / JSON.parse

lanches.forEach(lanche => {
  console.log(`Nome: ${lanche.nome}`);
});

console.log(lanches.length);
