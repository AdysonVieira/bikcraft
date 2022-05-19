const perguntas = document.querySelectorAll('dl div .pergunta');
const respostas = document.querySelectorAll('dl div .resposta');

function mostrarResposta(event) {
    console.log(event.currentTarget)
}

function mostrar(pergunta) {
    console.log(pergunta)
    pergunta.addEventListener('click', mostrarResposta)
}

perguntas.forEach(mostrar)