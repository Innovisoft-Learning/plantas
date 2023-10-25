let planta = "None";
console.log(planta)

function planta1(){
    console.log("p1 pressionada.")
  planta = "p1";
  localStorage.setItem("planta", planta);
}
function planta2(){
  planta = "p2";
  localStorage.setItem("planta", planta);

}
function planta3(){
  planta = "p3";
  localStorage.setItem("planta", planta);

}
function planta4(){
  planta = "p4";
  localStorage.setItem("planta", planta);

}
function planta5(){
  planta = "p5";
  localStorage.setItem("planta", planta);

}
function planta6(){
  planta = "p6";
  localStorage.setItem("planta", planta);

}
function planta7(){
  planta = "p7";
  localStorage.setItem("planta", planta);

}
function planta8(){
  planta = "p8";
  localStorage.setItem("planta", planta);

}
function planta9(){
  planta = "p9";
  localStorage.setItem("planta", planta);

}
function planta10(){
  planta = "p10";
  localStorage.setItem("planta", planta);

}


window.planta1 = planta1;
window.planta2 = planta2;
window.planta3 = planta3;
window.planta4 = planta4;
window.planta5 = planta5;
window.planta6 = planta6;
window.planta7 = planta7;
window.planta8 = planta8;
window.planta9 = planta9;
window.planta10 = planta10;

// Função para carregar e exibir o conteúdo de um arquivo JSON
function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            document.getElementById("p1").textContent = data.p1;
            document.getElementById("p2").textContent = data.p2;
            document.getElementById("p3").textContent = data.p3;
            document.getElementById("p4").textContent = data.p4;
            document.getElementById("p5").textContent = data.p5;
            document.getElementById("p6").textContent = data.p6;
            document.getElementById("p7").textContent = data.p7;
            document.getElementById("p8").textContent = data.p8;
            document.getElementById("p9").textContent = data.p9;
            document.getElementById("p10").textContent = data.p10;
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
