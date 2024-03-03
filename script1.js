function saveUserInformation() {
    // Pedir informações ao usuário
    const nome = prompt("Qual é o seu nome?");
    const idade = prompt("Quantos anos você tem?");
    const email = prompt("Qual é o seu email?");
  
    // Criar o objeto com as informações do usuário
    const userInfo = {
      nome,
      idade,
      email
    };
  
    // Salvar as informações do usuário no localStorage
    localStorage.setItem("user", JSON.stringify(userInfo));
  
    // Opcional: confirmar ao usuário que as informações foram salvas
    alert("Suas informações foram salvas com sucesso!");
  }
  
  // Para chamar a função, você pode usar o seguinte comando:
  saveUserInformation();
  

// function infor(obj){
//     const nome = prompt("Qual seu nome?");
//     const idade = prompt("Qual sua idade?");
//     const email = prompt("Qual seu Email?");
//     const usuario = {
//         nome: nome,
//         idade: idade,
//         email: email
//     }
//     localStorage.setItem('user', JSON.stringify(usuario));
//     console.log("Seus dados foram salvos com sucesso!")
//     }
    
//     infor()


// Resposta do colega Lucas

// function askForUserInfo() {
//     // Perguntar as informações
//     var nome = prompt("Qual é o seu nome?");
//     var idade = prompt("Quantos anos você tem?");
//     var email = prompt("Qual é o seu email?");
  
//     // Montar o bilhetinho (objeto)
//     var userInfo = {
//       nome: nome,
//       idade: idade,
//       email: email
//     };
  
//     // Guardar o bilhetinho no localStorage
//     localStorage.setItem("user", JSON.stringify(userInfo));
//   }
  
