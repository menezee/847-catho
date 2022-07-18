const fs = require('fs');

const dados = fs.readFileSync(`data.txt`, 'utf-8');
// console.log('síncrono:', dados);

// fs.readFile(`data.txt`, 'utf-8', (err, data) => {
//   console.log('assincrono:', data);
// });

// console.log('quinta-feira');

const arquivos = fs.readdirSync(__dirname); // listar elementos num caminho
// [data.txt, index.js, pastinha]

const imprimeArquivos = (err, arquivos) => {
  arquivos.forEach(arquivo => {
    // const stat = fs.statSync(arquivo); // retorna detalhes de um elemento
    // { memory, isDirectory, isFile, ... }

    fs.stat(arquivo, (err, stats) => {
      console.log(`${arquivo} é pasta? ${stats.isDirectory()}`);
    });
  });
};

fs.readdir(__dirname, imprimeArquivos);
fs.readdir(__dirname, imprimeArquivos);
fs.readdir(__dirname, imprimeArquivos);

// fs.writeFileSync('nome-do-arquivo.txt', 'um montão de dados');
// fs.writeFile('nome-do-arquivo.txt', 'montão de dados assincronos', () => {
//   const dadosSync = fs.readFileSync('nome-do-arquivo.txt', 'utf-8');
//   console.log(dadosSync);
// });
