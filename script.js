// ==========================================
// Navbar Scroll Effect
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// Mobile Menu Toggle
// ==========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Intersection Observer for Fade-in Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Observe hackathon cards
document.querySelectorAll('.hackathon-card').forEach(card => {
    observer.observe(card);
});

// ==========================================
// Skill Progress Bar Animation
// ==========================================
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
};

// Initialize skill bar animation
animateSkillBars();

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// Typing Effect for Hero Title (Optional)
// ==========================================
const initTypingEffect = () => {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const originalText = titleElement.innerHTML;
    const shouldAnimate = window.innerWidth > 768; // Only on desktop
    
    if (!shouldAnimate) return;
    
    // This is optional - remove if you prefer static text
    // Uncomment the code below to enable typing effect
    
    /*
    titleElement.innerHTML = '';
    let charIndex = 0;
    
    const typeText = () => {
        if (charIndex < originalText.length) {
            titleElement.innerHTML += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        }
    };
    
    setTimeout(typeText, 500);
    */
};

// ==========================================
// Initialize on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in to hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Initialize typing effect (if enabled)
    initTypingEffect();
});

// ==========================================
// Stats Counter Animation
// ==========================================
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/[0-9]/g, '');
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const updateCounter = () => {
            current += increment;
            if (current < numericValue) {
                counter.textContent = Math.floor(current) + suffix;
                setTimeout(updateCounter, stepTime);
            } else {
                counter.textContent = target;
            }
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });
};

// Initialize counter animation
animateCounters();

// ==========================================
// Parallax Effect for Hero Section (Optional)
// ==========================================
const initParallax = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
};

// Uncomment to enable parallax effect
// initParallax();

// ==========================================
// External Link Icon Addition
// ==========================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (!link.querySelector('.fa-external-link-alt')) {
        // Links already have icons, so this is just a safety check
    }
});

// ==========================================
// Lazy Loading for Images (if you add images later)
// ==========================================
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
lazyLoadImages();

// ==========================================
// Scroll to Top Button (Optional)
// ==========================================
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2c5f2d 0%, #3d7d3f 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
    
    document.body.appendChild(button);
};

// Initialize scroll to top button
createScrollToTopButton();

// ==========================================
// Console Message
// ==========================================
console.log('%c Portfolio Website ', 'background: #2c5f2d; color: white; padding: 5px 10px; border-radius: 3px;');
console.log('%c Geologist • AI Specialist • Data Scientist ', 'color: #2c5f2d; font-weight: bold;');
