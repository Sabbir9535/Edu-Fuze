document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.blog-post');

    blogPosts.forEach(post => {
        post.addEventListener('mouseover', () => {
            post.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            post.style.transform = 'scale(1.1)';
        });

        post.addEventListener('mouseout', () => {
            post.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            post.style.transform = 'scale(1)';
        });
    });
});
