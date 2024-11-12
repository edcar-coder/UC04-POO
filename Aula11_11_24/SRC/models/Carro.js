const { Veiculo } = require('./Veiculo');

class Carro extends Veiculo {
    #modelo
    #cor
    constructor(marca, ano, modelo, cor) {
        super(marca, ano);
        this.#modelo = modelo
        this.#cor = cor
        Object.freeze(this)
    }
    get getModelo() {
        return this.#modelo
    }
    set setModelo(modelo) {
        this.#modelo = modelo
    }
    get getCor() {
        return this.#cor
    }
    set setCor(cor) {
        this.#cor = cor
    }
    clacularValor() {
        console.log(`Valor estimado da moto: R$ ${(this.getAno) * 100}`);

    }
    getInfo() {
        console.log(`marca: ${ this.getMarca}, Ano: R$ ${this.getAno}, Cor: ${this.getCor}, modelo: ${this.getModelo}`);
    }


}
module.exports = { Carro };