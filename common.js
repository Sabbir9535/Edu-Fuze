document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('#navbar-toggle');
    const navLinks = document.querySelector('.nav-link');
    toggleBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


