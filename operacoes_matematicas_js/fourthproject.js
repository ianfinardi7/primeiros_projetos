function pegarNumero1() {
    let n1 = Number(prompt("Digite um número: "))
    return n1;
}

function pegarnumero2() {
    let n2 = Number(prompt("Digite outro número: "))
    return n2;
}

function somarNumeros (n1, n2) {
    document.getElementById("texto").innerHTML = n1 + n2;
}
function subtrairNumeros(n1, n2) {
    document.getElementById("texto2").innerHTML = n1 - n2;
}
function multiplicarNumeros(n1, n2) {
    document.getElementById("texto3").innerHTML = n1 * n2;
}
function dividirNumeros(n1, n2) {
    document.getElementById("texto4").innerHTML = n1 / n2;
}

let n1 = pegarNumero1();
let n2 = pegarnumero2();

if(isNaN(n1) || isNaN(n2)) {
    document.getElementById("texto").innerHTML = "Número inválido";
} 

somarNumeros(n1, n2);
subtrairNumeros(n1, n2);
multiplicarNumeros(n1, n2);
dividirNumeros(n1, n2);