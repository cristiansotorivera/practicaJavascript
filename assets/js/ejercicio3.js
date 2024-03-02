document.addEventListener('DOMContentLoaded', function () {
    const valor1Input = document.getElementById('valor1');
    const valor2Input = document.getElementById('valor2');
    const resultadoSpan = document.querySelector('.resultado');
    const btnSumar = document.getElementById('btn-sumar');
    const btnRestar = document.getElementById('btn-restar');

    btnSumar.addEventListener('click', function () {
        realizarOperacion('sumar');
    });

    btnRestar.addEventListener('click', function () {
        realizarOperacion('restar');
    });

    function realizarOperacion(operacion) {
        const valor1 = parseFloat(valor1Input.value) || 0;
        const valor2 = parseFloat(valor2Input.value) || 0;

        let resultado;

        if (operacion === 'sumar') {
            resultado = valor1 + valor2;
        } else if (operacion === 'restar') {
            resultado = Math.max(valor1 - valor2, 0);
        }

        resultadoSpan.textContent = resultado;
    }
});