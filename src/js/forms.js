function mostrarFormulario(tipo) {
    const formMC = document.getElementById('form-mc');
    const formEvento = document.getElementById('form-evento');

    formMC.classList.add('oculto');
    formEvento.classList.add('oculto');

    if (tipo === 'mc') {
        formMC.classList.remove('oculto');
        formMC.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (tipo === 'evento') {
        formEvento.classList.remove('oculto');
        formEvento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function validarFormulario(form) {
    let valido = true;

    const nome = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const telefone = form.querySelector('input[type="tel"]');

    [nome, email, telefone].forEach(el => el.classList.remove('erro', 'valido'));

    // Nome válido se tiver 2 palavras ou mais
    if (!nome.value.trim().includes(' ')) {
        nome.classList.add('erro');
        valido = false;
    } else {
        nome.classList.add('valido');
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('erro');
        valido = false;
    } else {
        email.classList.add('valido');
    }

    // Telefone com exatamente 11 dígitos numéricos
    const telefoneNumeros = telefone.value.replace(/\D/g, '');
    if (telefoneNumeros.length !== 11) {
        telefone.classList.add('erro');
        valido = false;
    } else {
        telefone.classList.add('valido');
    }

    return valido;
}

function validarNomeAoDigitar(input) {
    input.addEventListener('input', () => {
        const valor = input.value.trim();
        if (valor.includes(' ')) {
            input.classList.remove('erro');
            input.classList.add('valido');
        } else {
            input.classList.remove('valido');
        }
    });
}

function validarTelefoneAoDigitar(input) {
    input.addEventListener('input', () => {
        const apenasNumeros = input.value.replace(/\D/g, '');
        if (apenasNumeros.length === 11) {
            input.classList.remove('erro');
            input.classList.add('valido');
        } else {
            input.classList.remove('valido');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const formMC = document.querySelector('#form-mc form');
    const formEvento = document.querySelector('#form-evento form');

    if (formMC) {
        formMC.reset();
        const nomeInput = document.getElementById('nome-mc');
        const telefoneInput = document.getElementById('telefone-mc');
        const emailInput = document.getElementById('email-mc');
        validarNomeAoDigitar(nomeInput);
        validarTelefoneAoDigitar(telefoneInput);

        formMC.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validarFormulario(formMC)) {
                alert('Formulário MC enviado com sucesso!');
                formMC.reset();
                [nomeInput, telefoneInput, emailInput].forEach(el => el.classList.remove('valido', 'erro'));
            } else {
                alert('Por favor, preencha os campos corretamente.');
            }
        });
    }

    if (formEvento) {
        formEvento.reset();
        const nomeInput = document.getElementById('nome-evento');
        const telefoneInput = document.getElementById('telefone-evento');
        const emailInput = document.getElementById('email-evento');
        validarNomeAoDigitar(nomeInput);
        validarTelefoneAoDigitar(telefoneInput);

        formEvento.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validarFormulario(formEvento)) {
                alert('Formulário de Eventos enviado com sucesso!');
                formEvento.reset();
                [nomeInput, telefoneInput, emailInput].forEach(el => el.classList.remove('valido', 'erro'));
            } else {
                alert('Por favor, preencha os campos corretamente.');
            }
        });
    }

    document.getElementById('form-mc').classList.add('oculto');
    document.getElementById('form-evento').classList.add('oculto');
});
