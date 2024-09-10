document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links').querySelector('ul');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});
