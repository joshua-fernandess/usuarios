let usuarios = require('./usuarios.js');
function adicionarUsuario(usuario){
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
}

module.exports = adicionarUsuario;