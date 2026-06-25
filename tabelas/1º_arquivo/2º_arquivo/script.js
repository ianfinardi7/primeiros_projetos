lista = [
    {
    nome: 'Notebook',
    quantidade: 350,
    preco: 5555.55
    },
    {
    nome: 'Mouse',
    quantidade: 24,
    preco: 450.55
    }
]


for(let i = 0; i < lista.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = lista[i].nome;
    tr.appendChild(td); 

    
    let td1 = document.createElement("td")
    td1.innerText = lista[i].quantidade;
    tr.appendChild(td1);


    let td2 = document.createElement("td");
    td2.innerText = lista[i].preco;
    tr.appendChild(td2);
    
    document.getElementById('tabela').appendChild(tr);
    

}




