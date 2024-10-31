document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav a');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth <= 600) {
                nav.classList.remove('show');
            }
        });
    });

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Añadir clase para animar el contenido principal
    const mainContent = document.querySelector('main');
    mainContent.classList.add('animate-content');

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideNav && !isClickOnMenuToggle && nav.classList.contains('show')) {
            nav.classList.remove('show');
        }
    });
});