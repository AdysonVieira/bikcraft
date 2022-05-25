const formulario = document.querySelector('form');
const botao = document.querySelector('form button');

function formularioEnviado(resposta){
    if(resposta.ok){
        botao.innerHTML = 'Mensagem enviada';
    } else {
        botao.innerHTML = 'Falha ao Enviar';
    }
}

function ativarEnvio(event) {
    event.preventDefault();
    botao.disabled = true;
    botao.innerHTML = 'Enviando';

    const data = new FormData(formulario);
    fetch('./enviar.php', {
        method: 'POST',
        body: data
    }).then(formularioEnviado);
}
formulario.addEventListener('submit', ativarEnvio);