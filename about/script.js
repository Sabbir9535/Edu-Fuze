document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const fadeElements = document.querySelectorAll('.fade-in');

    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add visible class if element is in viewport
    function handleScroll() {
        fadeElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Check on scroll
    window.addEventListener('scroll', handleScroll);
});
