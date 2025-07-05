const footerHTML = `
        <p>
            MAPA Unicesumar 2025 by
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                Francis de Freitas Junior
            </a>
        </p>
`;

function loadFooter() {
    document.getElementById('main-footer').innerHTML = footerHTML;
}

window.addEventListener('DOMContentLoaded', loadFooter);