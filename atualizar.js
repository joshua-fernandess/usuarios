let usuarios = require('./usuarios.js');

function atualizarUsuario(){
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if(index !== -1){
        usuarios[index] = {id, ...novoUsuario};
    }
}

module.exports = atualizarUsuario;