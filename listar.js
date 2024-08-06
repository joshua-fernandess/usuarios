const usuarios = require("./usuarios.js");

function listarUsuario(){
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if(index !== 1){
        usuarios[index] = {id, ...novoUsuario};
    
    }

}

module.exports = listarUsuario