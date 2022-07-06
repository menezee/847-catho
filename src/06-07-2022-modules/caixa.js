class Caixa {
  static somaItens(listaDeMercado) {
    let total = 0;

    for (let i = 0; i < listaDeMercado.itens.length; i++) {
      const item = listaDeMercado.itens[i];
      total += item.preco;
    }
    // listaDeMercado.itens.reduce((acumulador, item) => acumulador + item.preco, 0);

    return total;
  }
}

module.exports = Caixa;
