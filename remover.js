let usuarios = require('./usuarios.js');

function removerUsuario(index){
    usuarios.splice(index, 1);
}

module.exports = removerUsuario;