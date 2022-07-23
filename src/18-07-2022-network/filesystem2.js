const fsPromise = require('fs').promises;
const path = require('path');

async function leReservas() {
  const filePath = path.join(__dirname, 'reservas.json');
  const reservasStr = await fsPromise.readFile(filePath, 'utf8');
  return JSON.parse(reservasStr);
}

exports.leReservas = leReservas;
