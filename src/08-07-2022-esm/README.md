# Exercício para fazer em aula
- Usar como base o código da aula anterior usando commonjs e transformar em ES Modules
- module.exports → export default
- exports.nome → export nome
- import padrao from './pacote.js'
- import { nome } from './pacote.js'
- import padrao, { nome } from './pacote.js'
- Lembrar de adicionar "type": "module" no `package.json`

# Exercício para fazer em casa
- Instalar e configurar o [eslint](https://eslint.org/docs/latest/user-guide/getting-started)
- Criar script no package.json para executar o eslint pela linha de comando, e.g. `"lint": "eslint ."`
- Customizar pelo menos 5 [regras](https://eslint.org/docs/latest/rules/) para o seu projeto