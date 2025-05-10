// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = mobileToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// Contact us button functionality 
const contactBtn = document.querySelector('.hero-buttons .btn-outline');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        // This is a placeholder for future functionality
        console.log('Contact button clicked');
    });
}

// Add additional styles to the navbar when scrolled
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    const checkScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    // Add scrolled class on page load if needed
    checkScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
    
    // Add this CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .navbar.scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .nav-menu.active {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 1rem 0;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active ul {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 1rem 0;
        }
    `;
    document.head.appendChild(style);
});