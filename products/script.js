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
