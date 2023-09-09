import { variavelControle } from "./script-index.js";

// Função para carregar e exibir o conteúdo de um arquivo JSON
function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            document.getElementById("p1").textContent = data.p1;
            document.getElementById("regiao").textContent = data.regiao;
        })
        .catch(error => console.error("Erro ao carregar conteúdo: " + error));
}

// Carregue o conteúdo com base na variávelControle
switch (variavelControle) {
    case "Norte":
        carregarConteudo("regiao1.json");
        break;
    case "Sul":
        carregarConteudo("regiao2.json");
        break;
    case "CO":
        carregarConteudo("regiao3.json");
        break;
    case "NO":
        carregarConteudo("regiao4.json");
        break;
    case "SD":
        carregarConteudo("regiao5.json");
        break;
    default:
        // Carregue um conteúdo padrão ou trate outros casos aqui
}
