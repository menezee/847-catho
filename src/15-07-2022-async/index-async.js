const fsPromise = require('fs').promises;

// fsPromise
//   .readFile('data.xt', 'utf-8')
//   .then((conteudo) => {
//     console.log('Conteúdo do arquivo', conteudo);
//   })
//   .catch((erro) => {
//     console.log('Erro da promise', erro);
//   });

// fsPromise
//   .writeFile('arquivo-com-promises.txt', 'algum conteúdo')
//   .then(() => {
//     fsPromise
//       .readFile('arquivo-com-promises.txt', 'utf-8')
//       .then(conteudo => {
//         console.log(conteudo);
//       })
//   });

async function imprimeDiaDeHoje() {
  return new Date().toISOString();
}

console.log(imprimeDiaDeHoje());

imprimeDiaDeHoje()
  .then(hoje => {
    console.log(hoje);
  });

async function main() {
  const hoje = await imprimeDiaDeHoje();
  console.log(hoje);
}

main();

fsPromise
  .readFile('data.txt', 'utf-8')
  .then(conteudo => {
    console.log(conteudo);
  });

async function leArquivo(caminho) {
  const conteudo = await fsPromise.readFile(caminho, 'utf-8');
  console.log(conteudo);
}

leArquivo('data.txt');
