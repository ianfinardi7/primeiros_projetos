let lista = [];
 $('#musica').val('Smooth Criminal');
    $('#autor').val('Michael Jackson');
    $('#duracao').val('9:26');
    $('#colaborador').val('Ian');
    $('#link').val('https://www.youtube.com/watch?v=h_D3VFfhvs4');    

   

$('#btnSalvar').click(function() {

    let musica = $('#musica').val();
    let autor = $('#autor').val();
    let duracao = $('#duracao').val();
    let colaborador = $('#colaborador').val();
    let link = $('#link').val();
    
    let objMusica = {
        nome: musica,
        autor: autor,
        duracao: duracao,
        colaborador: colaborador,
        link: link
    }
    lista.push(objMusica);
    
    mostrarMusicas();
    limparCampos();

    let tamanhoTabela = $("table").height();
    $("#exportar").height(tamanhoTabela);
    $("#importar").height(tamanhoTabela);

    $('table').show();

}); 

$('#btnExportar').click(function() {
    let json = JSON.stringify(lista);
    $('#exportar').val(json)
})

$('#btnImportar').click(function() {
    let json2 = $('#importar').val();
    
    let musicas = JSON.parse(json2);
    for(let i = 0; i < musicas.length; i++) {
        lista.push(musicas[i]);
        
    }
    mostrarMusicas();
    $('#importar').val();
    $('table').show();
})
 
function mostrarMusicas() {
    let tabela2 = $('#tabela');

    tabela2.html('');

    for(let i = 0; i < lista.length; i++) {
        tabela2.append( `
            <tr>
            <td>${lista[i].nome}</td>
            <td>${lista[i].autor}</td>
            <td>${lista[i].duracao}</td>
            <td>${lista[i].colaborador}</td>
            <td>${lista[i].link}</td>
            </tr>
        `
    )
       
    }
}

function limparCampos() {
    $('#musica').val('');
    $('#autor').val('');
    $('#duracao').val('');
    $('#colaborador').val('');
    $('#link').val('');    
}