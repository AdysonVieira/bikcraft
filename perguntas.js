const perguntas = document.querySelectorAll('dl div .pergunta');
const respostas = document.querySelectorAll('dl div .resposta');

function mostrarResposta(event) {
    const alvo = event.currentTarget
    resposta.classList.toggle('ativo')
}

function cliquePergunta(pergunta) {
    pergunta.addEventListener('click', mostrarResposta)
}

perguntas.forEach(cliquePergunta)