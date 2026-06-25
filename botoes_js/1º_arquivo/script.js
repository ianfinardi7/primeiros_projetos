function botaoClicar() {
    let n = Number(document.getElementById("campo").value);
    let resultado = "";

    for(let i = 1; i<=10; i++) {
        resultado+=n + "X" + i + "=" + n*i + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;

}
