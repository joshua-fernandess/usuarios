let usuarios = require('./usuarios.js')

function editarUsuario(id, novoUsuario) {
   let jaExiste = usuarios.find(usua => usua.email === usuario.email);
   if (jaExiste){
      console.log('Já existe um usuário com esse email!');
      return false;
   } 

   let index = usuarios.findIndex(usuario => usuario.id === id);
   
   if (index !== -1) {
            usuarios[index] = {id: id, ...novoUsuario};
      }
}


module.exports = editarUsuario;