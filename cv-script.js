// ===== CV JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    // Print functionality
    const printBtn = document.getElementById('printCV');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Add smooth hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add animation on scroll for experience items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe experience items and sections
    const animateElements = document.querySelectorAll('.experience-item, .cv-section, .edu-item, .cert-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add animation class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Keyboard shortcut for print (Ctrl/Cmd + P)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });

    // Highlight current section in view (for navigation if added later)
    let currentSection = null;
    
    const sections = document.querySelectorAll('.cv-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSection = entry.target;
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    // Touch device detection for hover effects
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    }

    // Console message for developers
    console.log('%c🚀 Kevin Zogu - Full Stack Developer', 'color: #1e3a5f; font-size: 20px; font-weight: bold;');
    console.log('%cLooking for the source code? Check out: https://github.com/kevinzogu', 'color: #0ea5e9; font-size: 14px;');
});

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Track page visibility for analytics (optional)
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        console.log('CV viewed');
    }
});
