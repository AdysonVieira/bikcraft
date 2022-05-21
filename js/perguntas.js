const perguntas = document.querySelectorAll('.perguntas dt buttom');

function ativaResposta(event) {
    const pergunta = event.currentTarget;
    const ariaControl = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(ariaControl);
    if(resposta) {
        resposta.classList.toggle('resposta-ativa');
    }
    const respostaAtiva = resposta.classList.contains("resposta-ativa");
    pergunta.setAttribute('aria-expanded', respostaAtiva);
    console.log(respostaAtiva);
    console.log(pergunta);
}

function eventoPergunta(pergunta) {
    pergunta.addEventListener('click', ativaResposta)
}

perguntas.forEach(eventoPergunta);