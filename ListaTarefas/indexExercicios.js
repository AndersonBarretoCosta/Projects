const inputTarefa = document.querySelector('.input-tarefa')
const buttonTarefa = document.querySelector('.button-tarefa')
const tarefas = document.querySelector('.tarefas')

inputTarefa.addEventListener('keypress', function (e){
      
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;  
        criaTarefa(inputTarefa.value);   }

});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
    
}

function criaLi () {
    const li = document.createElement('li')
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    botaoApagar(li);
    salvarTarefas();
}

function botaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
    

    //cria o botão e dá o nome de apagar para a class

}

buttonTarefa.addEventListener('click', function(event) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);    

})

document.addEventListener('click', function(event){
   const clique = event.target;

   if (clique.classList.contains('apagar')) {
    clique.parentElement.remove();
    salvarTarefas()
   }
   })

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for ( let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);    
    }

function adicionaTarefaSalva() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefasSalvas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
    
}
adicionaTarefaSalva();

