const galeriaSecondary = document.querySelectorAll('.bicicleta .galeria .galeria-secondary img');
const imagemPrincipal = document.querySelector('#img-principal')

function trocaImagem(event) {
    const alvo = event.currentTarget;
    imagemPrincipal.src = alvo.src
    imagemPrincipal.getAttribute('alt', alvo.getAttribute('alt'));
}

function adicionaEvento(imagem) {
    imagem.addEventListener('click', trocaImagem);
}

galeriaSecondary.forEach(adicionaEvento);