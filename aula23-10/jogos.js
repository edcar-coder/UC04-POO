class jogo{
    titulo;
    genero;
    anodeLancamento;

    constructor(titulo, genero, anodeLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anodeLancamento = anodeLancamento;
    }
gettitulo(){
    return this.titulo;
}
getgenero(){
    return this.genero;
}
getanodeLancamento(){
    return this.anodeLancamento;
}


exibirDados(){
    console.log(
        `
        Dados jogo \n
        titulo: ${this.titulo},
        gereno: ${this.genero},
        anodoLancamento: ${this.anosdelancamento}
        `
    )
 }
}
 let jogo01 = new jogo("god of war", "aventura", "2023" );
 jogo01.exibirDados()