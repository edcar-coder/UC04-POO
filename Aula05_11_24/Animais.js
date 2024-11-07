class Animal{

    #nome
    constructor(nome){
        this.#nome = nome;
    }
get getNome(){
    return this.#nome
}
set setNome(nome){
    this.#nome = nome;
}
//emitirSom(){
    //console.log(`${this.getNome} Faz aua au`)
//}


    emitirSom(){
        console.log(`${this.#nome} emitir um som!`)
    }
}
module.exports = {Animal}