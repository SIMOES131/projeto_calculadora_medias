const form = document.getElementById('form-atividade');
const imgAprovado = `<img src="./imagens/aprovado.png" alt="Emoji celebrando"/>`; // emoji de celebrando
const imgReprovado = `<img src="./imagens/reprovado.png" alt="Emoji decepcionado"/>`; // emoji de decepcionado
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMínima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';    //foi acrescentado depois para poder acrescentar as notas sem substituir a outra que já está na tabela

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionarLinha();     // para deixar o código mais organizado
    atualizarTabela();     // para deixar o código mais organizado
    atualizarMediaFinal();
});

function adicionarLinha() {                                             // para deixar o código mais organizado
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMínima ? imgAprovado : imgReprovado}</td>`; // O aprovado e reprovado foram substituidos pelos emoji
    linha += `</tr>`;

    linhas += linha;     //foi acrescentado depois para poder acrescentar as notas sem substituir a outra que já está na tabela
    }


    inputNomeAtividade.value = '';   //para limpar os campos depois de inserir os nomes
    inputNotaAtividade.value = '';   //para limpar os campos depois de inserir as notas
}

function atualizarTabela() {                             // para deixar o código mais organizado
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;   //foi acrescentado depois para poder acrescentar as notas sem substituir a outra que já está na tabela
}


function atualizarMediaFinal() {
   const mediaFinal = calculaMediaFinal();
   
   document.getElementById('media-final-valor').innerHTML = mediaFinal;
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMínima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i< notas.length; i++) {
        somaDasNotas += notas[i];
    } 

    return somaDasNotas / notas.length;
}