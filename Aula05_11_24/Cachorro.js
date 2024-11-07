const {Animal} = require('./Animal');

class Cachorro extends Animal{
    #raca
    constructor(nome, raca){
        super(nome)         // nessa linha estou acionando o metodo constructor da minha classe pai
        this.#raca = raca;
    }
    emitirSom(){         // novo comportamento de cachorro
        console.log(`Meu nome é ${this.getnome} Faz au au!), sou da Raça ${this.#raca} e emito um som au au!`)
    }
}
module.exports = {Cachorro}