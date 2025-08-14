// Função que cria um cartão com os dados recebidos
function criaCartao(categoria, pergunta, resposta) {
  // Pega a seção com ID "container"
  let container = document.getElementById('container');

  // Cria o elemento <article> que será o cartão
  let cartao = document.createElement('article');
  cartao.className = 'cartao'; // adiciona classe CSS

  // Adiciona a estrutura HTML dentro do cartão com os dados recebidos
  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${categoria}</h3>
      <div class="cartao__conteudo__pergunta"><p>${pergunta}</p></div>
      <div class="cartao__conteudo__resposta"><p>${resposta}</p></div>
    </div>
  `;

  // Coloca o cartão dentro do container da página
  container.appendChild(cartao);
}


