let funcionarios = [];

function botaoSalvar() {
  let campo = document.getElementById("campo").value
  let campo2 = document.getElementById("campo2").value;
  let campo3 = document.getElementById("campo3").value;

let funcionario = {
  nome: campo,
  funcao: campo2,
  salario: campo3
}

funcionarios.push(funcionario);

let tabela = document.getElementById("tabela");
tabela.innerHTML = '';

for(let i= 0; i < funcionarios.length; i++) {
  tabela.innerHTML += `
        <tr>
          <td>${funcionarios[i].nome}</td>
          <td>${funcionarios[i].funcao}</td>
          <td>${funcionarios[i].salario}</td>
        </tr>
      `; 

document.getElementById("campo").value = '';
document.getElementById("campo2").value = '';
document.getElementById("campo3").value = '';

}
}
    
    



