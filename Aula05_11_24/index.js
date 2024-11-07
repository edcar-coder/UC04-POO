const {Animal} = require('./Animal');
const {Cachorro} = require('../atividde/Cachorro');

let a1 = new Animal('edcar');
let c1 = new Cachorro('edcarlos', 'SRD')

a1.emitirSom();
c1.emitirSom();
console.log(c1.getNome);