let botaoEscolha = "None";

function carac(){
  botaoEscolha = "Caracteristícas"
  console.log("escolheu caracteristicas")
  showInfo(botaoEscolha, planta, variavelControle); // Isso carregaria as características da planta p1 da 

}

function benef(){
  botaoEscolha = "Benefícios"
  console.log("escolheu beneficios")
  showInfo(botaoEscolha, planta, variavelControle); // Isso carregaria as características da planta p1 da 

}

// Variáveis globais para armazenar as referências aos elementos
const btnCaracteristicas = document.getElementById("btn-caracteristicas");
const btnBeneficios = document.getElementById("btn-beneficios");
const infoBox = document.getElementById("info");

// Função para carregar e exibir informações com base na região, planta selecionada e botão clicado
function showInfo(infoText, plantaSelecionada, regiaoSelecionada) {
  // Anima os botões diminuindo a largura
  const buttons = document.querySelectorAll(".botao-opcao");
  buttons.forEach(button => {
    button.style.transition = "width 0.7s";
    button.style.width = "200px";
  });

  // Define a largura do botão clicado
  buttons.forEach(button => {
    if (button.textContent === infoText) {
      button.style.width = "200px";
      setTimeout(() => {
        button.classList.add("ativo");
      }, 300);
    }
  });

  infoBox.style.display = 'flex';
  infoBox.style.transition = "opacity 0.3s";
  infoBox.style.opacity = 0;

  setTimeout(() => {
    // Carregar informações com base na região atual, planta selecionada e botão clicado
    fetch(`infos-json/${regiaoSelecionada}.json`)
      .then(response => response.json())
      .then(data => {
        if (infoText == "Caracteristícas"){
        const infoContent = data[plantaSelecionada].caracs;
        infoBox.innerHTML = `<p>${infoContent}</p>`;
        }
        else if (infoText == "Benefícios"){
          const infoContent = data[plantaSelecionada].benefs;
        infoBox.innerHTML = `<p>${infoContent}</p>`;
        }
      })
      .catch(error => console.error("Erro ao carregar conteúdo: " + error));

    // Remove a classe 'ativo' de todos os botões
    btnCaracteristicas.classList.remove("ativo");
    btnBeneficios.classList.remove("ativo");

    // Mostra a parte de informações
    infoBox.style.opacity = 1;
  }, 300);
}

// Exemplo de como você pode chamar a função showInfo com base na planta e região selecionadas

let variavelControle = localStorage.getItem("variavelControle");
let planta = localStorage.getItem("planta");

document.addEventListener("DOMContentLoaded", function () {
  // Acesse a variável global diretamente, sem importar
  console.log("Segunda pagina carregada. O valor das variaveis de controle são: ", planta, variavelControle);
  showInfo(botaoEscolha, planta, variavelControle); // Isso carregaria as características da planta p1 da 
  
});
