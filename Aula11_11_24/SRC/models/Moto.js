const { Veiculo } = require('./Veiculo');

class Moto extends Veiculo {
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
    calcularValor() {
        console.log(`Valor estimado da moto: R$ ${(this.getAno) * 100}`);
    }
    getInfo() {
        console.log(`Marca: ${this.getMarca}, Ano: ${this.getAno}  Modelo: ${this.getModelo} Cor: ${ this.getCor}`);
    }

}
module.exports = { Moto }