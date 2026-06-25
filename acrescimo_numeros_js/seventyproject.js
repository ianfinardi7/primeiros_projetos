document.getElementById("texto").innerHTML = 0;
function somar() {
    let soma = Number(document.getElementById("texto").innerText);
    document.getElementById("texto").innerText = ++soma;
}
function subtrair() {
     let subtracao = Number(document.getElementById("texto").innerText);
    document.getElementById("texto").innerText = --subtracao;
}
