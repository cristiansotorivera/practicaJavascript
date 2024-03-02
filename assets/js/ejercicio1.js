const inputNombre = document.querySelector("#nombre")
const inputAsunto = document.querySelector("#asunto")
const inputMensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#formulario")

// Elementos de errores
let errorNombre = document.querySelector(".errorNombre")
let errorAsunto = document.querySelector(".errorAsunto")
let errorMensaje = document.querySelector(".errorMensaje")
let resultado = document.querySelector(".resultado")

// Expresiones regulares
const regexNombre = /^[a-zA-Z]+$/;
const regexAsunto = /^[a-zA-Z0-9\s.,!?]+$/; 
const regexMensaje = /^[a-zA-Z0-9\s.,!?]+$/; 

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = inputNombre.value.trim();
    const asunto = inputAsunto.value.trim();
    const mensaje = inputMensaje.value.trim();

    resultado.innerHTML = "";
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";

    if (!regexNombre.test(nombre)) {
        errorNombre.innerHTML = "El nombre es requerido";
    }

    if (!regexAsunto.test(asunto)) {
        errorAsunto.innerHTML = "El asunto es requerido";
    }

    if (!regexMensaje.test(mensaje)) {
        errorMensaje.innerHTML = "El mensaje es requerido";
    }

    if (regexNombre.test(nombre) && regexAsunto.test(asunto) && regexMensaje.test(mensaje)) {
        resultado.innerHTML = "Mensaje enviado con éxito!!!";
    }
});