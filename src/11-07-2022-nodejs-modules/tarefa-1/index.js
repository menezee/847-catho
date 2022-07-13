/*
- Dentro do arquivo `index.js` ler os dados do `personagens.json` usando o módulo de Filesystem
- Imprimir nome e idade de todos personagens
- Imprimir nome de personagens que moraram em Lenora Hills
- Imprimir nome de personagens que nasceram antes de 1972 (não incluso)
*/

const fs = require('fs');
const path = require('path');

const caminhoDoArquivo = path.join(__dirname, 'personagens.json');
const personagensString = fs.readFileSync(caminhoDoArquivo, 'utf-8');
const personagens = JSON.parse(personagensString); // JSON.stringify({ nome: 'eleven' }) → "{'nome': 'eleven'}"

"07/04/1972"
"06/1971"
console.log('Nomes:');
personagens.forEach(personagem => {
  const dataDenascimento = personagem.nascimento;
  const dataArray = dataDenascimento.split('/');

  // ["06", "1971"] → ["01", "06", "1971"]
  // push = adiciona alguém no fim da lista
  // unshift = adiciona alguém no início da lista
  if (dataArray.length < 3) dataArray.unshift('01');

  // const [primeiro, segundo, terceiro] = [1, 2, 3];
  const [dia, mes, ano] = dataArray; // [ '01', '08', '1941' ]
  const dataString = `${ano}-${mes}-${dia}`; // ano-mes-dia → 1941-08-01
  const dataDeNascimentoFormatada = new Date(dataString);

  const diferencaEmMs = Date.now() - dataDeNascimentoFormatada.getTime();
  const idadeFloat = diferencaEmMs / 1000 / 60 / 60 / 24 / 365.25;
  const idade = Number.parseInt(idadeFloat);

  console.log(`Nome: ${personagem.nome}, idade: ${idade}`);
});

// map, filter, reduce, some, every

// "cidade": ["Hawkins", "Lenora Hills"]
console.log('\n-------\n');
console.log('Personagens que moram em Lenora Hills:');
personagens
  .filter(personagem => {
    return personagem.cidade.includes('Lenora Hills')
  })
  .forEach(personagem => {
    console.log(`Nome: ${personagem.nome}`);
  });

// Imprimir nome de personagens que nasceram antes de 1972 (não incluso)
// "07/04/1972"
// split("/") → ["07", "04", "1972"]

console.log('\n-------\n');
console.log('Personagens que nasceram antes de 72:');
personagens
  .filter(personagem => {
    const dataDenascimento = personagem.nascimento;
    const dataArray = dataDenascimento.split('/');
    const anoString = dataArray.at(-1);
    const ano = Number(anoString);

    return ano < 1972;
  })
  .forEach(personagem => {
    console.log(`Nome: ${personagem.nome}`);
  });