// script.js for Precision Works Detailing

// Smooth scrolling effect for anchor links
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    let isValid = true;

    // Check required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error'); // Adding error class if validation fails
        } else {
            field.classList.remove('error');
        }
    });

    // Prevent form submission if invalid
    if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    }
});

// Scroll animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const scrollAnimation = () => {
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);