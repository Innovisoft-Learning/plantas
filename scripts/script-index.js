let variavelControle = "None";
console.log("Inicio do JS da primeira pagina")

function escolherNorte() {
    console.log("Escolheu norte");
    variavelControle = "Norte";
    console.log(variavelControle);
    localStorage.setItem("variavelControle", variavelControle);

}

function escolherSul() {
    variavelControle = "Sul";
    console.log("Escolheu sul")
    console.log(variavelControle)
    localStorage.setItem("variavelControle", variavelControle);
}

function escolherSD() {
    variavelControle = "SD";
    console.log("Escolheu SD")
    console.log(variavelControle)
    localStorage.setItem("variavelControle", variavelControle);
}

function escolherNO() {
    variavelControle = "NO";
    console.log("Escolheu NO")
    console.log(variavelControle)
    localStorage.setItem("variavelControle", variavelControle);
}

function escolherCO() {
    variavelControle = "CO";
    console.log("Escolheu CO")
    console.log(variavelControle)
    localStorage.setItem("variavelControle", variavelControle);
}

window.escolherNorte = escolherNorte;
window.escolherSul = escolherSul;
window.escolherCO = escolherCO;
window.escolherNO = escolherNO;
window.escolherSD = escolherSD;