let usuarios = require('./usuarios.js');

function removerUsuario(indexRemover){
    usuarios.splice(indexRemover, 1);
}

module.exports = removerUsuario;