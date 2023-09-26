let acao = document.getElementById('acao');
let pausa = document.getElementById('pausa');
let sessoes = document.getElementById('sessoes');
let seconds

var bell = new Audio('./audio/bell.mp3')
var turn = new Audio('./audio/volta.mp3')
var final = new Audio('./audio/final.mp3')

var lofi = document.getElementById('lofi')
var pause = document.write.getElementById('pause')
var play = document.write.getElementById('play')

function iniciar() {
    if (acao.value == 0) {
        document.getElementById('erro_acao').innerHTML = 'Adicione os minutos'
        acao.focus()
    } else if (pausa.value == 0){
        document.getElementById('erro_pausa').innerHTML = 'Adicione as pausas'
        pausa.focus()
    } else if (sessoes.value == 0){
        document.getElementById('erro_sessoes').innerHTML = 'Adicione o número de sessões'
    } else {
        
        lofi.play()
        pause.style.setProperty('display', 'block', 'important')
    }
 
}

