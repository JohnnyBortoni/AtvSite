window.addEventListener('scroll', () => {
    const barra = document.getElementById('barra_progre');
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const progresso = (window.scrollY / alturaTotal) * 100;
    barra.style.height = progresso + '%';
});
