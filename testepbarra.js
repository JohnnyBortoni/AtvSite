function incidaProgresso() {

    const scroll = document.documentElement.scrollTop;

var altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

var rolagem = (scroll / altura) * 100;

document.querySelector("div.scroll-progresso").style.width = rolagem + "%";
    
}


window.onscroll = function(){
    incidaProgresso();
}