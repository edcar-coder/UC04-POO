
class Dado {
    #face;
    constructor() {
        this.#face = Math.floor(Math.random() * 6 + 1)
        Object.freeze(this);
    }
    get getFace() {
        return this.#face;
    }
    set setface(face) {
        this.#face = face;
    }
}
module.exports = { Dado };

// let dado1 = new Dado();
// console.log(dado1.getFace);
