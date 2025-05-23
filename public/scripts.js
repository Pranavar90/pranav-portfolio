document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current page's nav link
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
        }
    });
});