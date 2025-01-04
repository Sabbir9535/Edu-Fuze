
document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider
    const bannerImages = document.querySelectorAll('.banner img');
    let currentIndex = 0;

    function showBannerImage(index) {
        bannerImages.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextBannerImage() {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        showBannerImage(currentIndex);
    }

    setInterval(nextBannerImage, 3000);

    // Service Section Modal
    const services = document.querySelectorAll('.service');
    const modal = document.querySelector('.service-modal');
    const modalText = modal.querySelector('.modal-text');
    const closeBtn = modal.querySelector('.close-btn');

    services.forEach(service => {
        service.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Navbar Sticky Effect
    const navbar = document.querySelector('nav');
    const stickyOffset = navbar.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > stickyOffset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-to-top');

    function handleScrollTopButton() {
        if (window.pageYOffset > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', handleScrollTopButton);

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


// Toggle roadmap and FAQ details
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.closest('.roadmap-item') ? 
                        button.closest('.roadmap-item').querySelector('.roadmap-details') : 
                        button.closest('.faq-item').querySelector('.faq-answer');
        const toggleSymbol = button.textContent;

        if (details.style.display === 'block') {
            details.style.display = 'none';
            button.textContent = '+';
        } else {
            details.style.display = 'block';
            button.textContent = '-';
        }
    });
});
