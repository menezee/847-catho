const { leReservas } = require('./filesystem2');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  const { url } = req; // /reservas/123
  const cpf = url.split('/'); // ['reservas', '123']


});

leReservas().then(reservas => {
  console.log(reservas);
})
