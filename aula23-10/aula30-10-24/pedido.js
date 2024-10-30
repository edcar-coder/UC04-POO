const {Produto} = require('./produto');

class Pedido{
    #produtos
    constructor(){
        this.#produtos =[];
    }
    adicionarProduto(produto){
        if(produto instanceof Produto){
            this.#produtos.push(produto)
        } else {
            console.log('Somente objetos do tipo produto podem ser adicionados')
        }     
    }
    mostrarPedido(){
        console.log('Resumo do pedido:')
        this.#produtos.forEach(produto =>{
            console.log(produto.getInfoproduto());
        })
    }
}
 module.exports = {Pedido};