document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav a, .btn-outline, .back-to-top').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Ignore if no href
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') return;

            // Optional: prevent default if it's an internal link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Submission Handling
    // The native HTML form submission is now used to send data to Formspree.

    // Header Background Change on Scroll (for better visibility over hero transition)
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > (heroSection.offsetHeight - 100)) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.padding = '20px 50px';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.padding = '30px 50px';
        }
    });
});
