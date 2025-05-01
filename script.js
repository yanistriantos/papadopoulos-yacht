// Wait for the page to fully load before running any code
document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Add animation to the hero section text
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1.5s ease-in';
            heroContent.style.opacity = '1';
        }, 500);
    }

    // 3. hover effect to feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 4. Form validation and submission message
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (name && email) {
                alert('Thank you for your message! We will contact you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // 5. Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.transition = 'background-color 0.3s ease';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});