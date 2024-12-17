// Añade un desplazamiento suave para enlaces internos (si se usan IDs en la misma página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Abre enlaces externos en una nueva pestaña
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});