// Obtém referências aos elementos do DOM
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const postContent = document.querySelector('.post-content');

// URL do endpoint Formspree
const formspreeEndpoint = 'https://formspree.io/f/xgvzdavz';

// Array de nomes específicos
const nomesEspeciais = ['bruno', 'vezzaro', 'lais', 'johnny'];
const nomeCerto = 'veneranovemaaa';

// Adiciona um listener para o evento de envio do formulário
nameForm.addEventListener('submit', async function(event) {
  // Previne o envio padrão do formulário, que recarregaria a página
  event.preventDefault();

  // Converte o nome inserido para minúsculas para a verificação ser case-insensitive
  const nomeDigitado = nameInput.value.trim().toLowerCase();

  // Envia os dados para o Formspree em segundo plano (requisição AJAX)
  const data = new FormData(event.target);
  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    // Se o envio para o Formspree for bem-sucedido
    if (response.ok) {
      console.log('Formulário enviado com sucesso para o Formspree.');
    } else {
      console.error('Erro ao enviar o formulário para o Formspree.');
    }
  } catch (error) {
    console.error('Erro de rede ao tentar enviar o formulário:', error);
  }

  // --- LÓGICA DE VALIDAÇÃO DE NOME E EXIBIÇÃO DE MENSAGENS ---

  // Limpa o conteúdo anterior de .post-content
  postContent.innerHTML = '';

  // Variável para armazenar a mensagem a ser exibida
  let mensagem = '';
  // Variável para armazenar o link, se necessário
  let link = null;

  // Verifica as condições do nome digitado
  if (nomesEspeciais.includes(nomeDigitado)) {
    mensagem = "hm... boa tentativa, mas não foi";
  } else if (nomeDigitado === "veneranovem") {
    mensagem = "Quase... continue mais, dica, está no grupo do Discord";
  } else if (nomeDigitado === nomeCerto) {
    mensagem = "Acertou";
    link = "https://veneranovem.github.io/page2/post5.html";
  } else {
    mensagem = "Acredito que este não é o caminho";
  }

  // Cria um novo parágrafo para a mensagem e o anexa a .post-content
  const p = document.createElement('p');
  p.textContent = mensagem;
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
