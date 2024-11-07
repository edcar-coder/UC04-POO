class Animal {


    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;

    }
    get getNome() {
        return this.#nome
    }
    set setNome(nome) {
        this.#nome = nome;
    }
    get getidade() {
        return this.#idade
    }
    set setIdade(idade) {
        this.#idade = idade;
    }



    emitirSom() {
        console.log("O animal emite um som");
    }

    getInfo(){
        console.log(` ${this.#nome}, ${this.#idade} emitir um som`);
    }
    
}

module.exports = { Animal}
