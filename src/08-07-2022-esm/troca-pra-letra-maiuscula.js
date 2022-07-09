function trocaPraLetraMaiuscula(palavra) {
  return palavra.toUpperCase();
}

// module.exports = trocaPraLetraMaiuscula;
// exports.trocaPraLetraMaiuscula = trocaPraLetraMaiuscula;

export function trocaPraLetraMinuscula(palavra) {
  return palavra.toLowerCase();
}

export default trocaPraLetraMaiuscula;
