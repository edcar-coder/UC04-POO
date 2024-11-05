const {Dado} = require('./dado');
const {Jogador} = require('./jogador');

class SistemaAzar{
    #dado;
    #jogador;

    constructor(dado, jogador){
       if(dado instanceof Dado && jogador instanceof Jogador){
           this.#dado = dado;
           this.#jogador = jogador;
       } else{
        console.log('Os dados fornecidos não são do tipo Jogador ou Dado ');
       }
        Object.freeze(this);                    
        //  Bloqueando a criação de novos atributos
    }
        get getDado(){
            return this.#dado;
        }
        set setDado(dado){
            this.#dado = dado;
        }
        get getJogador(){
            return this.#jogador;
        }
        set setJogador(jogador){
            this.#jogador = jogador;
        }

        verificarGanhador(){
            if (this.#dado.getface === this.#jogador.getAposta){
                console.log(`parabens  ${this.#dado. getFace} você ganhou!`);            
                   this.#jogador.apresentarDados();
            
            }else{ 
                console.log(`Que pena! ${this.#dado.getface} vocÊ perdeu`);
            this.#jogador.apresentarDados(); 
            }
        }
}
module.exports = {SistemaAzar}