require('./styles/index.css');

const homeTemplate = require('@templates/pages/home.handlebars');
const registerTemplate = require('@templates/pages/register.handlebars');
const loginTemplate = require('@templates/pages/login.handlebars');

function renderPage(path) {
    const main = document.getElementById('main');
    if (!main) return;

    let title = '';
    let metaDescription = '';

    switch (path) {
        case '/':
        case '/home':
            main.innerHTML = homeTemplate();
            title = 'Página de Inicio';
            metaDescription = 'Descripción de la página de inicio';
            break;
        case '/login':
            main.innerHTML = loginTemplate();
            title = 'Iniciar Sesión';
            metaDescription = 'Descripción de la página de inicio de sesión';
            break;
        case '/register':
            main.innerHTML = registerTemplate();
            title = 'Registro';
            metaDescription = 'Descripción de la página de registro';
            break;
        default:
            main.innerHTML = '<section class="notfound"><h2>404 - Página no encontrada</h2></section>';
            title = '404 - Página no encontrada';
            metaDescription = 'Descripción de página no encontrada';
    }

    document.title = title;
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = 'description';
        document.head.appendChild(metaTag);
    }
    metaTag.content = metaDescription;
}

function setupRouting() {
    document.addEventListener('DOMContentLoaded', () => {
        renderPage(window.location.pathname);

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', event => {
                const path = event.target.getAttribute('href');
                window.history.pushState({}, '', path);
                renderPage(path);
            });
        });

        window.addEventListener('popstate', () => {
            console.log('Popstate event:', window.location.pathname); 
            renderPage(window.location.pathname);
        });
    });
}

setupRouting();
