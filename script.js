const avanca = document.querySelectorAll('.bnt-proximo');

// Função para avançar na história
avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        
        atual.classList.remove('ativo');
        document.getElementById(proximoPassoId).classList.add('ativo');
    });
});

// Função para pegar a orbe no Passo 13
document.getElementById('pegar-orbe').addEventListener('click', function() {
    const resultadoOrbe = document.getElementById('resultado-orbe');
    const mensagemOrbe = document.getElementById('mensagem-orbe');

    // Sorteio de sorte ou azar
    const sorteOuAzar = Math.random() < 0.5;

    if (sorteOuAzar) {
        mensagemOrbe.textContent = "Parabéns, você tirou a sorte! Você terá todo o tesouro do mundo!";
    } else {
        mensagemOrbe.textContent = "Infelizmente, você perdeu sua alma. Ela será levada para um mundo sombrio e aprisionada.";
    }

    resultadoOrbe.style.display = 'block';
});
