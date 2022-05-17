const pergunta = document.querySelector('.pergunta');
const resposta = document.querySelector('.resposta');

function mostrar() {
    resposta.classList.toggle('ativo')
}

pergunta.addEventListener('click', mostrar)
