const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionaNovaTarefa(){
   minhaListaDeItens.push({
      tarefa: input.value,
      concluida: false
   })

   input.value = ''

   mostrarTarefas()
}


function mostrarTarefas() {
let novaLi = ''

   // ['compra cafe', 'estudar programação']


   minhaListaDeItens.forEach ((item,posicao) => {
    
    novaLi = novaLi + `

     <li class="task ${item.concluida && "done"}">
        <img src="./img/certo.jpg" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/lixo.jpeg" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">    
     </li>
          `
          
   
})
listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify( minhaListaDeItens))

   }

   function concluirTarefa(posicao){
      minhaListaDeItens[posicao].concluidan = !minhaListaDeItens[posicao].concluidan

      mostrarTarefas()
   }

function deletarItem(posicao){
   minhaListaDeItens.splice(posicao,1)

   mostrarTarefas()

}

function recarregarTelefas(){

    const taresDoLocalStorage = localStorage.getItem('lista')

    if(taresDoLocalStorage){
    minhaListaDeItens = JSON.parse(taresDoLocalStorage) 
    }
    
    mostrarTarefas()
}

recarregarTelefas()

button.addEventListener('click',adicionaNovaTarefa )