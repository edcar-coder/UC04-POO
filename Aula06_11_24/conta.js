class Conta{
#saldo = 0;
#titular; 

 constructor(titular){
    this.#titular = titular;
    Object.freeze(this);
 }

 get getSaldo(){
    return this.#saldo;
 }

 set setSaldo(valor){
    if(valor > 0){
        this.#saldo += valor;
    }else{
        console.error("Deposito não realizado")
    }
 }

 get gettitular(){
    return this.#titular;
 }
 set settitular(titular){
    this.#titular = titular;
 }

 sacar(valor) {
    if (valor > this.getSaldo) {
console.log("Valor acima de saldo")
    }else{
        this.#saldo -= valor;
        console.log(`${valor} sacado. Saldo restante: ${this.getSaldo}`);
    }
 }


}
module.exports = { Conta }