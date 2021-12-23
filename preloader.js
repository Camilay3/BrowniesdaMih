//preloader
const overlay = document.querySelector('.overlay');
window.addEventListener('load', function(){
    overlay.style.display = 'none';
})

//declaração de variáveis
var menu = document.getElementById('menu-ativo');

//responsive menu
function abrirMenu() {
    menu.style.display = 'block';
}

function fecharMenu() {
    menu.style.display = 'none';
}
