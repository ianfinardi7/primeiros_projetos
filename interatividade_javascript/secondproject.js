let numero = Number(prompt("Digite um número: "))
if (isNaN(numero)) {
    document.getElementById("titulo3").innerHTML = "Erro";
    
} else {
    if(numero >= 0) {
        document.getElementById("titulo").innerHTML = "Positivo";
    } else {
        document.getElementById("titulo2").innerHTML = "Negativo";
    }
}