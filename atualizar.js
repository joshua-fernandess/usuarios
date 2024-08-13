let usuarios = require('./usuarios.js')

function editarUsuario(id, novoUsuario) {
   let index = usuarios.findIndex(usuario => usuario.id === id);
   if (index !== -1) {   
      let jaExiste = usuarios.find(usua => usua.email === novoUsuario);
      if (jaExiste){
         console.log('Já existe um usuário com esse email!');
      } else {
         usuarios[index] = {id, ...novoUsuario};
      }
   } else {
      throw new Error("Usuário não encontrado!")
   }
}


module.exports = editarUsuario;