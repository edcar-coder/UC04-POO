const prompt = require('prompt-sync')();
const { veiculoController } = require('../controllers/VeiculoController');
const controller = new veiculoController();

function iniciarSistema() {

    let opcao;

    do {
        console.log('=== Sistema de gerenciamento de veiculos');
        console.log('1. Adiconar Veiculo');
        console.log('2. Listar veiculos');
        console.log('3. Editar Veiculos');
        console.log('4. Excluir Veiculo');
        console.log('0. Sair');
        opcao = prompt('Escolha uma opção: (o a 4) ');
        switch (opcao) {
            case 'o':
                console.log('Sair do Sistema.....');
            case '1':
                adicionarVeiculo();
                break;
            case '2':
                controller.listarVeiculos();
                break;
            case '3':
                editarVeiculo();
                break;
            case '4':
                    excluirVeiculo();
            default:
                console.log('Opção Invalida');
        }
    } while (opcao !== '0');
}

function adicionarVeiculo() {
        const tipo = prompt('Digite o tipo de vaiculo(Carro/Moto)');
        const marca = prompt('Digite a marca do veiculo');
        const ano = parseInt(prompt('Digite o ano do veiculo:'));
        const cor = prompt('Digite a cor do veiculo');
        const modelo = prompt('Digite o modelo do veiculo');
        controller.criarVeiculo(tipo, marca, ano, modelo, cor);
    
}
function  editarVeiculo(){
    controller.listarVeiculos();
    const indice = parseInt(prompt('Digite o indice que você deseja editar: '))
    const result = controller.buscarId(indice);
  if(result===true){
    console.log('Informe os novos dados (pressione Enter para manter o valor atual):');
    const marca = prompt('Vona marca:');
    const ano = parseInt(prompt('Novo ano:'));
    const modelo = prompt('Novo modelo: ');
    const cor = prompt('Nova cor:');
    const novosDados = {};
    if(marca) novosDados.marca = marca;
    if(ano) novosDados.ano = ano;
    if(modelo) novosDados.modelo = modelo;
    if(cor) novosDados.cor = cor;
    controller.editarVeiculo(indice, novosDados);

  }else{
    console.log('Informe um indice válido!')
  }

}

    iniciarSistema();

       
    


