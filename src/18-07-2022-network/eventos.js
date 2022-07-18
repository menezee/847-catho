const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('pedido', pedido => {
  console.log('pedido recebido! preço:', pedido.preco);
});

eventEmitter.on('pedido', pedido => {
  console.log('pedido recebido aqui também! dia:', pedido.dia);
});

eventEmitter.emit('pedido', { preco: 40.25, dia: 'segunda-feira' });
