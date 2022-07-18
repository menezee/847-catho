const http = require('http');
const fsPromise = require('fs').promises;
const path = require('path');

const server = http.createServer();

server.on('request', async (req, res) => {
  const { method, url } = req; // { method: 'GET', url: '/letscode' }

  if (url === '/veiculos') {
    // res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // 200 → OK
    // text/plain, application/json, text/html
    const filePath = path.join(__dirname, 'vehicles.txt');
    const vehicles = await fsPromise.readFile(filePath, 'utf-8');
    // fsPromise
    //   .readFile(filePath, 'utf-8')
    //   .then(content => {
    //     res.end(content);
    //   })
    //   .catch()

    res.write(vehicles);
    res.end();
  } else {
    res.statusCode = 404; // 404 → Not found
    res.end('Endereco nao encontrado!');
  }
});

server.listen(8080);
