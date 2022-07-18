# Exercício

- Criar servidor usando o módulo http do node
- Escutar 3 caminhos diferentes, `/turmas`, `/modulos`, `/alunos`
- Os dados de cada um dos caminhos devem estar em arquivos diferentes, e.g. `turmas.json`, `modulos.json`, `alunos.json`
- Código para leitura dos arquivos deve estar num arquivo javascript separado, e.g. `server.js` e `file-helper.js`
- Retornar cada um dos dados em um formato diferente:
  - text/plain
  - application/json
  - text/html