const prompt = require('prompt-sync')();
const adicionarUsuario = require('./adicionar.js');
const listarUsuario = require('./listar.js');
const atualizarUsuario = require('./atualizar.js');
const removerUsuario = require('./remover.js');

mainMenu();

function mainMenu(){
    console.log(`
    ___________Menu___________
    1. Adicionar usuário
    2. Listar usuários
    3. Atualizar usuário
    4. Remover usuário
    5. Sair
    ___________________________
    `);

    let opcao = parseInt(prompt('Deseje a opção desejada: '));
    switch(opcao){
        case 1:
            const nome = prompt('Digite o nome do usuário: ');
            const email = prompt('Digite o e-mail do usuário: ');
            const telefone = prompt('Digite o número de telefone: ');
            adicionarUsuario({nome, email, telefone});
            console.log('Usuário adicionado com sucesso!');
            mainMenu();
            break;
        case 2:
            listarUsuario();
            mainMenu();
            break;
        case 3: 
            listarUsuario();
            index = parseInt(prompt('Digite o número do usuário que deseja remover: ')) - 1;
            const novoNome = prompt('Digite o novo nome do usuário do usuário: ');
            const novoEmail = prompt('Digite o endereço de e-mail: ');
            const novoTelefone = prompt('Digite o novo número de telefone: ');
            atualizarUsuario(id, {nome: novoNome, email: novoEmail, telefone: novoTelefone});
            console.log('Usuário atualizado com sucesso!');
            mainMenu();
            break;
        case 4:
            index = parseInt(prompt("Digite o número do usuário que deseja remover: "));
            removerUsuario(index);
            console.log('Usuário removido com sucesso!');
            mainMenu();
            break;
        case 5:
            console.log('Saindo do sitema. Até breve!');
            process.exit();
            break;
        default:
            console.log('\n Opção inválida! ');
            mainMenu();
    }
}
