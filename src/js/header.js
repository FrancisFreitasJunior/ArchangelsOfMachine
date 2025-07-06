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

function loadHeader() {
    document.getElementById('main-header').innerHTML = headerHTML;
}

window.addEventListener('DOMContentLoaded', loadHeader);