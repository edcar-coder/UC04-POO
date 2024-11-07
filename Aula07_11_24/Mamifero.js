const {Animal} = require('./Animal');

class Mamifero extends Animal{
    #tipoPelo
    #habitat
    constructor(nome, idade, tipoPelo, habitat){
        super(nome,idade)         // nessa linha estou acionando o metodo constructor da minha classe pai
        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
    }
    get gettipoPelo(){
        return this.#tipoPelo
    }
    set setNome(tipoPelo){
        this.#tipoPelo = tipoPelo;
    }
    get gethabitat(){
        return this.habitat
    }
    set sethabitat(habitat){
        this.#habitat = habitat;
    }

    emitirSom(){         // novo comportamento de cachorro
        console.log(`O mamifero rounge ou grunge ${this.gettipoPelo},  ${this.#habitat} e emite um som `)
    }
    getinfo(){
    console.log(` ${this.#tipoPelo}, ${this,habitat} emitir um som`);
  }
}
module.exports = {Mamifero}