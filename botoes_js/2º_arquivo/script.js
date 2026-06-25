let lista = [];

function inserirTextoNaLista() {
    let texto = document.getElementById("texto").value;
    lista.push(texto);
}

function atualizarLista() {
    for(let i = 0; i < lista.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = lista[i];
        document.getElementById("lista").appendChild(li);
    }
    
}