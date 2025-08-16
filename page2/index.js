// Obtém referências aos elementos do DOM
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const confirmationMessage = document.getElementById('confirmation-message');
const postContent = document.querySelector('.post-content');

// Array de nomes específicos
const nomesEspeciais = ['Bruno', 'Vezzaro', 'Laís', 'Johnny'];

// Adiciona um listener para o evento de envio do formulário
nameForm.addEventListener('submit', function(event) {
  // Previne o envio padrão do formulário, que recarregaria a página
  event.preventDefault();

  // Converte o nome inserido para minúsculas para a verificação ser case-insensitive
  const nomeDigitado = nameInput.value.trim().toLowerCase();
  
  // Limpa o conteúdo da div .post-content antes de adicionar a nova mensagem
  postContent.innerHTML = '';
  
  // Variável para armazenar a mensagem a ser exibida
  let mensagem = '';
  
  // Variável para armazenar o link, se necessário
  let link = null;

  // Verifica as condições do nome digitado
  if (nomesEspeciais.some(nome => nomeDigitado.includes(nome.toLowerCase()))) {
    mensagem = "hm... boa tentativa, mas não foi";
  } else if (nomeDigitado === "veneranovem") {
    mensagem = "Quase... continue mais, dica, está no grupo do Discord";
  } else if (nomeDigitado === "veneranovemAAA".toLowerCase()) {
    mensagem = "Acertou";
    // Define o link do botão "Continue"
    link = "https://veneranovem.github.io/page2/post5.html";
  } else {
    mensagem = "Acredito que este não é o caminho";
  }

  // Cria um novo parágrafo para a mensagem e adiciona a classe CSS
  const p = document.createElement('p');
  p.textContent = mensagem;
  p.style.color = 'white'; // Define a cor do texto para branco
  postContent.appendChild(p);

  // Se houver um link, cria o botão "Continue"
  if (link) {
    const button = document.createElement('a');
    button.href = link;
    button.textContent = "Continue";
    button.className = "continue-button";
    postContent.appendChild(button);
  }
});
