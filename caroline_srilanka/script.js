document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(bookingForm);
            const name = bookingForm.querySelector('input[type="text"]').value;
            
            // Simulated success message
            alert(`Thank you, ${name}! Your inquiry has been sent to caroline_srilanka. We will contact you shortly.`);
            
            // Clear form
            bookingForm.reset();
        });
    }

    // Add sticky header effect on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = '#ffffff';
        }
    });

    // Simple scroll animation for service cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .tour-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
