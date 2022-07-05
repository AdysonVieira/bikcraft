const links = document.querySelectorAll('.header-menu a');

function verificaLinkAtivo(link) {
    const url = window.location.href;
    const href = link.href;
    // .includes() verifica se dentro da string tem o parâmetro passado
    // aqui verifica se dentro da url do site está incluso o href do link
    if(url.includes(href)) {
        link.classList.add('pagina-ativa')
    }
}

links.forEach(verificaLinkAtivo);

const header = document.querySelector('.header');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

function expandeMenu(event) {
    header.classList.add('mobile-ativo');
}
function fechaMenu(event) {
    header.classList.remove('mobile-ativo')
}
openMenu.addEventListener('click', expandeMenu);
closeMenu.addEventListener('click', fechaMenu);