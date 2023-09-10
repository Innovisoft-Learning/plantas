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
let variavelControle = localStorage.getItem("variavelControle");
console.log(variavelControle)
document.addEventListener("DOMContentLoaded", function () {
    // Acesse a variável global diretamente, sem importar
    console.log("Segunda pagina carregada. O valor da variavel de controle é: ", variavelControle);
    if (variavelControle == "Norte") {
        carregarConteudo("regioes-json/norte.json");
    }
    if (variavelControle == "NO") {
        carregarConteudo("regioes-json/nordeste.json");
    }
    if (variavelControle == "CO") {
        carregarConteudo("regioes-json/centro-oeste.json");
    }
    if (variavelControle == "SD") {
        carregarConteudo("regioes-json/sudeste.json");
    }
    if (variavelControle == "Sul") {
        carregarConteudo("regioes-json/sul.json");
    }
});


