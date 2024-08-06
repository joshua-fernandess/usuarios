const usuarios = require("./usuarios.js");

function listarUsuario(){
    usuarios.forEach((usuario, index) => {
        console.log(`${index+1} Nome: ${usuario.nome}, E-mail ${usuario.email}, Telefone: ${usuario.telefone}`);
    });
}

module.exports = listarUsuario