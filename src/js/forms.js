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

window.addEventListener('DOMContentLoaded', () => {
    const formMC = document.querySelector('#form-mc form');
    const formEvento = document.querySelector('#form-evento form');
    const extra = document.getElementById('catolico-extra');

    if (formMC) formMC.reset();
    if (formEvento) formEvento.reset();
    if (extra) extra.classList.add('oculto');

    document.getElementById('form-mc').classList.add('oculto');
    document.getElementById('form-evento').classList.add('oculto');
});
