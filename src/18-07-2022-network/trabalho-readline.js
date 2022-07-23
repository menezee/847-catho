const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt(
`Digite sua opção:
1 - Criar usuário
2 - Criar viagem
`
);
rl.prompt();

function question(str) {
  return new Promise(resolve => (
    rl.question(str, resolve)
  ));
}

rl.on('line', async option => {
  switch (option) {
    case '1': {
      const nome = await question('qual seu nome?');
      const idade = await question('qual sua idade?');

      console.log('usuário criado', { nome, idade });
      rl.prompt();
      break;
    }
    case '2': {
      const destino = await question('para onde vc vai?');
      const preco = await question('quanto vc quer pagar?');

      console.log('viagem criada', { destino, preco });
      rl.prompt();
      break;
    }
    default: {
      console.log('tchau!');
      rl.close();
      process.exit();
    }
  }
});
