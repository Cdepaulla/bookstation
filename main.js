const exit = document.querySelector(".exit")
const elModal = document.querySelector(".modal")
const btnSim= document.querySelectorAll(".botaoResposta")[0]
const btnNao = document.querySelectorAll(".botaoResposta")[1]
const botaoAbrir = document.querySelector(".botao_abrir")
const botaoparagrafo = document.querySelector(".desc")
// const logar = document


let esconder = false
let esconderdescricao = false


btnSim.addEventListener("click", resposta, 'true')
btnNao.addEventListener("click", resposta, 'false')
exit.addEventListener("click", sairdapagina)


function sairdapagina(){
    if(esconder){
        esconder = false
        elModal.style.display = 'none'
    }else{
        esconder = true
        elModal.style.display = 'flex'
    }
}

function resposta(e){
    if(e.target.innerHTML == 'Sim'){
        sairdapagina()
        window.location.href = '/index.html'
     
    }else {
        esconder = true
        sairdapagina()
    }
}





botaoAbrir.addEventListener("click", abrirdesc)

function abrirdesc(){
   if (esconderdescricao){
    esconderdescricao = false
    botaoparagrafo.style.display = 'none'
    botaoAbrir.style.background= 'url(/assets/fechado.png)'
    botaoparagrafo.style.transition = '2s'
    // botaoAbrir.style.backgroundRepeat = 'no-repeat'

}else{
    esconderdescricao = true
    botaoparagrafo.style.display = 'flex'
    botaoAbrir.style.background= 'url(/assets/aberto.png)'
    botaoparagrafo.style.transition = '2s'
    // botaoAbrir.style.backgroundRepeat = 'no-repeat'
    }
}
