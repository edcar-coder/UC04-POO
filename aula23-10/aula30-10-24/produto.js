class Produto{
    #nome
    #preco
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
        Object.freeze(this)
        }
        get getNome(){
            return this.#nome
        }
        set setnome(nome){
            this.#nome = nome;
        }
        get getpreco(){
            return this.#preco
        }
        set setpreco(preco){
            this.#preco = preco;
        }
        getInfoproduto(){
            return `${this.#nome} - R$ ${this.#preco}`;
        }
      }
    module.exports = {Produto};