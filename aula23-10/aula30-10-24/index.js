const prompt = require(`prompt-sync`)();
const {Produto} = require('./produto');
const {Pedido} = require('./pedido');

function adicionarProdutosAoPedido(){
    const pedido = new Pedido();
    while(true) {
        const nome = prompt("Digite o nome do produto (ou 'sair' para finalizar)");
        if(nome.toLowerCase() ==='sair') break;
        const preco = parseFloat(prompt("Digite o preco do produto:"))
        if(isNaN(preco) || preco <= 0) {
            console.log("preco invalido. Tente Novamente");
            continue;
        }
        const produto = new Produto(nome, preco);
        pedido.adicionarProduto(produto);
        console.log(`prduto  "${produto.getNome}" adicionei com sucdesso!`)
    }
     Pedido.mostrarPedido();
}

adicionarProdutosAoPedido();






// const produto01 = new Produto('camiseta', 60);
// const produto02 = new Produto('Bermuda', 600);
// const produto03 = new Produto('Tênis', 5000);

// const pedido = new Pedido();
// pedido.adicionarProduto(produto01);
// pedido.adicionarProduto(produto03);

// pedido.mostrarPedido();