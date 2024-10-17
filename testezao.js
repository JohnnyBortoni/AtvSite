function incidaProgresso() {
    // Obtém a quantidade de pixels rolados
    const scroll = document.documentElement.scrollTop;

    // Calcula a altura total rolável da página
    var altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calcula a porcentagem de rolagem
    var rolagem = (scroll / altura) * 100;

    // Atualiza a largura da barra de progresso
    document.querySelector("div.scroll-progresso").style.width = rolagem + "%";

    // Verifica se a rolagem passou de 50% e muda a cor da bola
    var bola = document.getElementById('bolaProgresso');
    
    if (rolagem >= 50) {
        bola.classList.add('bola-azul'); // Adiciona a classe que muda a cor para azul
    } else {
        bola.classList.remove('bola-azul'); // Remove a classe para voltar à cor original
    }
}

// Adiciona o evento de rolagem para atualizar a barra e a bola de progresso
window.onscroll = function() {
    incidaProgresso();
};

