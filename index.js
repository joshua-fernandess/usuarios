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

    let opcao = parseInt(prompt('Escolha a opção desejada: '));
    switch(opcao){
        case 1:
            const nome = prompt('Digite o nome do usuário: ');
            const email = prompt('Digite o e-mail do usuário: ');
            const telefones = [];
            let telefone;
            while ((telefone = prompt('Digite o telefone:(ou deixe em branco para sair)'))){
                telefones.push(telefone);
            }
            adicionarUsuario({nome, email, telefones});
            console.log('Usuário adicionado com sucesso!');
            mainMenu();
            break;
        case 2:
            listarUsuario();
            mainMenu();
            break;
        case 3: 
            listarUsuario();
            const id = parseInt(prompt('Digite o usuário que deseja atualizar: '));
            const novoNome = prompt('Digite o novo nome do usuário: ');
            const novoEmail = prompt('Digite o novo endereço de e-mail: ');
            const novoTelefones = [];
            let novoTelefone;
            while ((novoTelefone = prompt('Digite o novo telefone: (ou deixe em branco para sair) '))){
                novoTelefones.push(novoTelefone);
            }
            atualizarUsuario(id, {nome: novoNome, email: novoEmail, telefones: novoTelefones});
            console.log('Usuário atualizado com sucesso!');
            mainMenu();
            break;
        case 4:
            const indexRemover = parseInt(prompt("Digite o número do usuário que deseja remover: ")) - 1;
            removerUsuario(indexRemover);
            console.log('Usuário removido com sucesso!');
            mainMenu();
            break;
        case 5:
            console.log('Saindo do sistema. Até breve!');
            process.exit();
            break;
        default:
            console.log('\n Opção inválida! ');
            mainMenu();
    }
}
