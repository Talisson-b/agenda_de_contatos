const form = document.getElementById('form-container');
let linhas = '';
const contato = [];
const numero = [];




form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha () {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroContato = document.getElementById('numeroContato');

    if(contato.includes(inputNomeContato.value)) {
        document.querySelector('#adicionado').style.display = 'block'
        
        
    } else if(numero.includes(inputNumeroContato.value)) {
        document.querySelector('#numeroAdc').style.display = 'block'
        
    }  else{
        contato.push(inputNomeContato.value)
        numero.push(inputNumeroContato.value)

        
        let linha = '<tr>';
        linha += `
        <td>${inputNomeContato.value}</td>`
        linha += `
        <td>${inputNumeroContato.value}</td>`
        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}

form.addEventListener('input', () => {
    document.querySelector('#adicionado').style.display = 'none'
    document.querySelector('#numeroAdc').style.display = 'none'
})

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

    
