document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <div class="menu-toggle" id="menu-toggle">
            ☰
        </div>
        <nav class="nav-bar">
            <div class="logo">ARCHANGES OF MACHINE</div>
            <ul class="navLinks">
                <li><a class="btn-link" href="index.html">HOME</a></li>
                <li><a class="btn-link" href="aboutus.html">SOBRE</a></li>
                <li><a class="btn-link" href="event.html">EVENTOS</a></li>
                <li><a class="btn-link" href="contact.html">CONTATO</a></li>
            </ul>
        </nav>
    `;

    // Carrega o conteúdo do header
    const header = document.getElementById('main-header');
    header.innerHTML = headerHTML;

    // Agora sim, adiciona o evento do botão hamburguer
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.navLinks');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
