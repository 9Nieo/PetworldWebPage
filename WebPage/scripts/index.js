// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // preloader animation
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('loaded');
            // ensure the scroll animation is initialized after the preloader disappears, to avoid elements not fully laid out
            setTimeout(initScrollAnimations, 100); 
        });
    } else {
        // if there is no preloader, initialize the scroll animation directly
        initScrollAnimations();
    }
    

    // scroll animation initialization function
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (!animatedElements.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // get the delay time
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, parseInt(delay));
                    
                    // optional: stop observing once visible, to improve performance
                    // observer.unobserve(entry.target); 
                } else {
                    // optional: if you want the element to be hidden again when it goes out of view, and play the animation again
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, {
            threshold: 0.1 // when the element is visible 10%
        });

        animatedElements.forEach(el => {
            // set the initial animation state (if the CSS does not set the transform)
            // const animationType = el.dataset.animation;
            // if (animationType === "fadeInUp") el.style.transform = 'translateY(30px)';
            // else if (animationType === "fadeInDown") el.style.transform = 'translateY(-30px)';
            // else if (animationType === "fadeInLeft") el.style.transform = 'translateX(-30px)';
            // else if (animationType === "fadeInRight") el.style.transform = 'translateX(30px)';
            // else if (animationType === "zoomIn") el.style.transform = 'scale(0.9)';
            // el.style.opacity = '0'; // ensure the element is initially invisible

            observer.observe(el);
        });
    }


    // mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // toggle icon (optional)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // back to top button
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // scroll over 300px to show the button
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // "like" button interaction
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            const heartIcon = this.querySelector('i');
            if (this.classList.contains('liked')) {
                heartIcon.classList.remove('far'); // empty heart
                heartIcon.classList.add('fas'); // solid heart
                // you can add the logic to send the liked data, for example, to the server
                console.log(`Pet liked! (ID or name could be passed here)`);
            } else {
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far');
                console.log(`Pet unliked!`);
            }
        });
    });

    // smooth scroll to anchor (if the navigation link points to a page anchor)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // ensure it is not pointing to "#" or empty href
            if (hrefAttribute && hrefAttribute.length > 1) {
                const targetElement = document.querySelector(hrefAttribute);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initialize carousel after the page is fully loaded
    window.addEventListener('load', () => {
        initPetCarousel();
    });

    // Initialize particles
    initParticles();

});

// Carousel functionality
function initPetCarousel() {
    const track = document.querySelector('.pets-track');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const carouselContainer = document.querySelector('.pets-carousel');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    if (!track || !cards.length) return;
    
    // Calculate card width including margins
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardMargin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
    const cardWidth = cards[0].offsetWidth + cardMargin;
    
    // Set track width to fit all cards
    track.style.width = `${cards.length * cardWidth}px`;
    
    // Calculate how many cards fit in the viewport
    const calculateCardsPerView = () => {
        const containerWidth = carouselContainer.offsetWidth;
        return Math.min(Math.max(1, Math.floor(containerWidth / cardWidth)), 3);
    };
    
    let cardsPerView = calculateCardsPerView();
    let currentIndex = 0;
    
    // Create indicators
    const updateIndicators = () => {
        indicatorsContainer.innerHTML = '';
        const totalSlides = Math.ceil(cards.length / cardsPerView);
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === currentIndex) indicator.classList.add('active');
            indicatorsContainer.appendChild(indicator);
            
            indicator.addEventListener('click', () => {
                moveToSlide(i);
            });
        }
    };
    
    // Position cards
    const positionCards = () => {
        cards.forEach((card, index) => {
            card.style.left = `${index * cardWidth}px`;
        });
    };
    
    // Move to specific slide
    const moveToSlide = (targetIndex) => {
        const totalSlides = Math.ceil(cards.length / cardsPerView);
        
        if (targetIndex < 0) targetIndex = 0;
        if (targetIndex >= totalSlides) targetIndex = totalSlides - 1;
        
        currentIndex = targetIndex;
        track.style.transform = `translateX(-${currentIndex * cardsPerView * cardWidth}px)`;
        updateIndicators();
    };
    
    // Navigation handlers
    nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));
    prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newCardsPerView = calculateCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            moveToSlide(0); // Reset to first slide on resize
        }
    });
    
    // Initialize
    positionCards();
    updateIndicators();
    moveToSlide(0);
    
    // Touch events for swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    const handleSwipe = () => {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            moveToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            moveToSlide(currentIndex - 1);
        }
    };
}

// Initialize particles.js
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#89CFF0", "#FFB6C1", "#FFDAB9"] // Using your color scheme
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#89CFF0", // Light blue from your palette
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}
