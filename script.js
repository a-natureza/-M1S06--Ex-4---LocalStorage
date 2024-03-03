// Função para obter a entrada do usuário
// function promptUserInput(message) {
//   let input;

  // Repete a solicitação enquanto a entrada estiver vazia ou contiver apenas espaços em branco
//   do {
//     input = prompt(message);
//   } while (!input || input.trim() === "");

//   return input;
// }

// Função para salvar as informações do usuário
// function saveUserInfo() {
//   const nome = prompt("Digite seu nome:");
//   const idade = prompt("Digite sua idade:");
//   const email = prompt("Digite seu email:");

//   const userInfo = { nome, idade, email };

  // Verifica se o navegador suporta o localStorage
//   if (typeof Storage !== "undefined") {
//     localStorage.setItem("user", JSON.stringify(userInfo));
//     console.log("Informações do usuário salvas com sucesso.");
//   } else {
//     console.error("O navegador não suporta o localStorage");
//   }
// }

// Função para carregar as informações do usuário
// function loadUserInfo() {
//   const userInfoString = localStorage.getItem("user");

  // Verifica se o localStorage contém informações do usuário
//   if (!userInfoString) {
//     console.log("Nenhuma informação do usuário encontrada no localStorage.");
//     return null;
//   }

//   try {
//     const userInfo = JSON.parse(userInfoString);
//     console.log("Informações do usuário carregadas:", userInfo);
//     return userInfo;
//   } catch (error) {
//     console.error("Erro ao carregar informações do usuário:", error);
//     return null;
//   }
// }

// Você pode adicionar estes chamados dentro de uma função que é chamada com um evento, por exemplo, um clique de botão.
// Inicialização (Exemplo)
// saveUserInfo();
// loadUserInfo();

// Exemplo: Chamando saveUserInfo e loadUserInfo em resposta a eventos do usuário
// document.addEventListener('DOMContentLoaded', function() {
//   // Aqui você poderia adicionar listeners para botões ou outras ações para chamar saveUserInfo e loadUserInfo
// });
