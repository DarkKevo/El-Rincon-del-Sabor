//Controlador del Banner (Slider)

const slider_banner = document.querySelector('.banner-slider');
const derecha = document.querySelector('#boton-slide1');
const izquierda = document.querySelector('#boton-slide2');

function Deslizar_derecha() {
    slider_banner.style.marginLeft = '-100%';
}

function Deslizar_izquierda() {
    slider_banner.style.marginLeft = '-0%';
}

//listeners

derecha.addEventListener('click', Deslizar_derecha);
izquierda.addEventListener('click', Deslizar_izquierda);

//Fin de Controlador de Banner (SLider)

//Controlador del Inicio de Sesion (Slider)

const slider_sesion = document.querySelector('.login');
const izquierda_sesion = document.querySelector('#menu-chef');
const derecha_sesion = document.querySelector('#menu-cliente');

const boton_login1 = document.querySelector('#boton-login');

const boton_login2 = document.querySelector('#boton-login2');

function Deslizar_izquierda_sesion() {
    slider_sesion.style.marginLeft = '0%';
}
function Deslizar_derecha_sesion() {
    slider_sesion.style.marginLeft = '-200%';
}

function Normally() {
    slider_sesion.style.marginLeft = '-100%';
}

izquierda_sesion.addEventListener('click', Deslizar_izquierda_sesion);

derecha_sesion.addEventListener('click', Deslizar_derecha_sesion);

boton_login1.addEventListener('click', Normally);
boton_login2.addEventListener('click', Normally);

//Fin de Controlador de Inicio de Sesion

//Controlador de Carrusel de Platillos

const carrusel = document.querySelector('.carrusel');
let carrusel_secciones = document.querySelectorAll('.item-c');
let carrusel_ultimo = carrusel_secciones[carrusel_secciones.length - 1];

const boton_izquierdo = document.querySelector('.flecha-iz');
const boton_derecho = document.querySelector('.flecha-de');

carrusel.insertAdjacentElement('afterbegin', carrusel_ultimo);

function mover_derecha() {
    let carrusel_primero = document.querySelectorAll('.item-c')[0];

    carrusel.style.marginLeft = '-205%';
    carrusel.style.transition = 'all 0.8s';

    setTimeout(function () {
        carrusel.style.transition = 'none';
        carrusel.insertAdjacentElement('beforeend', carrusel_primero);
        carrusel.style.marginLeft = '-102.9%';
    }, 800);
}

function mover_izquierda() {
    let carrusel_secciones = document.querySelectorAll('.item-c');

    let carrusel_ultimo = carrusel_secciones[carrusel_secciones.length - 1];

    carrusel.style.marginLeft = '-0.5%';
    carrusel.style.transition = 'all 0.8s';

    setTimeout(function () {
        carrusel.style.transition = 'none';
        carrusel.insertAdjacentElement('afterbegin', carrusel_ultimo);
        carrusel.style.marginLeft = '-102.4%';
    }, 800);
}

boton_derecho.addEventListener('click', mover_derecha);
boton_izquierdo.addEventListener('click', mover_izquierda);