const {Conta} = require('./Conta');
class ContaPoupanca extends Conta{
    #taxaJuros
    constructor (titular, taxaJuros){
        super(titular);
        this.#taxaJuros = taxaJuros;
    }
        get getTaxaJuros(){
        return this.#taxaJuros;
    }
        set setTaxaJuros(taxa){
        this.#taxaJuros = taxa;
    }
        atualizarRendimento(){
        const rendimento = this.getsaldo * (this.#taxaJuros / 100);
        this.setSaldo = rendimento;
    }

}

module.exports = {ContaPoupanca};





