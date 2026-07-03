// Vanilla ES6 - Professional interactions for portfolio

document.addEventListener('DOMContentLoaded', () => {
    console.log('%cJIGSAW Platform initialized 🚀', 'color: #6366f1; font-size: 14px;');

    // Mobile Navbar Toggle (for responsive)
    const navLinks = document.querySelector('.nav-links');
    // Add hamburger menu logic here if expanding

    // Dark/Light Mode Toggle
    const toggleDarkMode = () => {
        document.body.classList.toggle('light-mode');
        // Persist in localStorage
    };

    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // FAQ Accordion
    const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
        });
    });

    // Form Validation Example
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // Basic HTML5 validation + custom
            if (!form.checkValidity()) {
                e.preventDefault();
            }
        });
    });

    // Search Filter (demo)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterResources);
    }
});

function filterResources() {
    // Implement filtering logic for resources page
    console.log('Filtering resources...');
}

// Back to Top Button
window.addEventListener('scroll', () => {
    // Logic for back-to-top
});