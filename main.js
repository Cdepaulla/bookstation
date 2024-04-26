const exit = document.querySelector(".exit")
const elModal = document.querySelector(".modal")
const btnSim= document.querySelectorAll(".botaoResposta")[0]
const btnNao = document.querySelectorAll(".botaoResposta")[1]

let esconder = false

exit.addEventListener("click", sairdapagina)

btnSim.addEventListener("click", resposta, 'true')
btnNao.addEventListener("click", resposta, 'false')


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