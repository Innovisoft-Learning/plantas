document.addEventListener("DOMContentLoaded", function() {
    // Obtém referências aos elementos
    const btnCaracteristicas = document.getElementById("btn-caracteristicas");
    const btnOrigem = document.getElementById("btn-origem");
    const btnBeneficios = document.getElementById("btn-beneficios");
    const btnReceitas = document.getElementById("btn-receitas");
    const infoBox = document.getElementById("info");
  
    // Define os eventos de clique para os botões
    btnCaracteristicas.addEventListener("click", () => showInfo("Características"));
    btnOrigem.addEventListener("click", () => showInfo("Origem"));
    btnBeneficios.addEventListener("click", () => showInfo("Benefícios"));
    btnReceitas.addEventListener("click", () => showInfo("Receita(s)"));
  
    // Função para mostrar informações e animar os botões
    function showInfo(infoText) {
      // Anima os botões diminuindo a largura
      const buttons = document.querySelectorAll(".botao-opcao");
      buttons.forEach(button => {
        button.style.transition = "width 0.7s"; // Adicione uma transição de largura suave
        button.style.width = "200px"; // Define a largura original para todos os botões
      });
  
      // Define a largura do botão clicado
      buttons.forEach(button => {
        if (button.textContent === infoText) {
          button.style.width = "200px"; // Largura aumentada apenas para o botão clicado
          setTimeout(() => {
            button.classList.add("ativo");
          }, 300); // Adicione a classe 'ativo' após a animação
        }
      });
      infoBox.style.display = 'flex';
      // Mostra a parte de informações com uma transição suave
      infoBox.style.transition = "opacity 0.3s"; // Adicione uma transição de opacidade suave
      infoBox.style.opacity = 0;
  
      setTimeout(() => {
        // Define o texto da caixa de informações
        infoBox.innerHTML = `<p>${infoText}</p>`;
  
        // Remove a classe 'ativo' de todos os botões
        btnCaracteristicas.classList.remove("ativo");
        btnOrigem.classList.remove("ativo");
        btnBeneficios.classList.remove("ativo");
        btnReceitas.classList.remove("ativo");
  
        // Mostra a parte de informações
        infoBox.style.opacity = 1;
      }, 300); // Aguarde a animação dos botões antes de mostrar a informação
    }
});
