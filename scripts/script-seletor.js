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

// Carregue a página inicial por padrão
if (variavelControle == "Norte") {
    carregarConteudo("regiao1.json")
}