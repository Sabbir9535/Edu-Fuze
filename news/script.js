document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            item.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            item.style.transform = 'scale(1)';
        });
    });
});
