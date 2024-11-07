const {Animal} = require('./Animal');
const {Ave} = require('./Ave');
const {Mamifero} = require('./Mamifero');

let animal1 = new Animal('Rex', 5);
let cachorro1 = new Mamifero('Rex', 5,"labrador", "casa");
let ave1 = new Ave('Piu', 2, 'Curvo', 'Alta');

animal1.getInfo();
animal1.emitirSom();

cachorro1.getInfo();
cachorro1.emitirSom();

ave1.getInfo();
ave1.emitirSom();