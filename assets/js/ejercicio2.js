// Obtenemos la referencia de la caja y los botones
const caja = document.getElementById('caja');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');

// Añadimos un evento de click a cada botón
btn1.addEventListener('click', function () {
    cambiarColor('#e53e3e');
});

btn2.addEventListener('click', function () {
    cambiarColor('#dd6b20');
});

btn3.addEventListener('click', function () {
    cambiarColor('#faf089');
});

btn4.addEventListener('click', function () {
    cambiarColor('#48bb78');
});

btn5.addEventListener('click', function () {
    cambiarColor('#81e6d9');
});

btn6.addEventListener('click', function () {
    cambiarColor('#d53f8c');
});

// Función para cambiar el color de la caja
function cambiarColor(color) {
    caja.style.backgroundColor = color;
}