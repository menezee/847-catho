// require('dotenv').config();
require('dotenv').config({ override: true });

console.log({
  escola: process.env.ESCOLA,
  ano: process.env.ANO,
});
