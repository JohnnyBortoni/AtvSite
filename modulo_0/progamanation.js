document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("haid"); // Seções do conteúdo
    const menuItems = document.querySelectorAll(".steps li"); // Itens de navegação

    // Função para alterar a cor dos círculos
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect(); // Posição da seção na viewport

        // Se o topo da seção está visível na tela
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            // Altera a cor do círculo para #00FF9F se a seção estiver visível
            menuItems[index].style.setProperty('--circle-color', '#00FF9F');
        } else {
            // Caso contrário, volta para a cor branca
            menuItems[index].style.setProperty('--circle-color', 'white');
        }
    });
});