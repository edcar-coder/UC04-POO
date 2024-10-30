const {Produto} = require('./produto');
const {Pedido} = require('./pedido');

const produto01 = new Produto('camiseta', 60);
const produto02 = new Produto('Bermuda', 600);
const produto03 = new Produto('Tênis', 5000);

const pedido01 = new Pedido();
pedido01.adicionarProduto(produto01);
pedido01.adicionarProduto(produto03);

pedido01.mostrarPedido();