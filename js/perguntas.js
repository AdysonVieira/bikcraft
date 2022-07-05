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
}

perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', ativaResposta);
});