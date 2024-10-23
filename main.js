const form = document.getElementById('form-campos');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEValido = false;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    const mensagemSucesso = `O número B (${valorB}) é maior que o número A (${valorA}).`;
    const containerMensagemSucesso = document.querySelector('.success-message');
    const mensagemErro = document.querySelector('.error-message');

    formEValido = valorB > valorA;

    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    } else {
        mensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
});
