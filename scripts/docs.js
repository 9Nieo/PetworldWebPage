document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    initParticles();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize documentation navigation and content
    initDocsContent();
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
});

function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#89CFF0", "#FFB6C1", "#FFDAB9"]
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#89CFF0",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2
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
                }
            }
        }
    });
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
}

function initDocsContent() {
    const navList = document.getElementById('docs-nav-list');
    const contentContainer = document.getElementById('docs-content');
    
    // Combine all content into one array in desired order
    const allContent = [
        gettingStartedContent,
        gameplayContent,
        petsContent,
        economyContent,
        stablecoinStakingContent,
        referralContent,
        lotteryContent,
        contractsContent,
        roadmapContent,
        faqContent
    ];
    
    // Generate navigation and content sections
    allContent.forEach((section, index) => {
        // Create nav item
        const navItem = document.createElement('li');
        navItem.className = `nav-item ${index === 0 ? 'active' : ''}`;
        navItem.dataset.section = section.id;
        navItem.innerHTML = `
            <i class="fas ${section.icon}"></i>
            <span>${section.title}</span>
        `;
        navList.appendChild(navItem);
        
        // Create content section
        const sectionElement = document.createElement('section');
        sectionElement.className = `docs-section ${index === 0 ? 'active' : ''}`;
        sectionElement.id = section.id;
        sectionElement.innerHTML = `
            <h2 class="section-title">${section.title}</h2>
            <article class="docs-article">
                ${section.content}
            </article>
        `;
        contentContainer.appendChild(sectionElement);
    });
    
    // Initialize navigation functionality
    initDocsNavigation();
    
    // Initialize reward level selector
    initRewardLevels();
}

function initDocsNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const docSections = document.querySelectorAll('.docs-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the section to show
            const sectionId = this.getAttribute('data-section');
            
            // Hide all sections
            docSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Smooth scroll to top of content
            document.querySelector('.docs-content').scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function initRewardLevels() {
    const levelSelect = document.getElementById('reward-level');
    if (!levelSelect) return;

    levelSelect.addEventListener('change', function() {
        const level = parseInt(this.value);
        
        // Base values for level 1
        const basePWP = [1, 10, 100, 800, 5000];
        const basePWB = [2, 20, 200, 2000, 15000];
        
        // Update all PWP bars and values
        document.querySelectorAll('.chart-bar.pwp').forEach((bar, index) => {
            const value = basePWP[index] * level;
            // Update the bar width
            bar.style.setProperty('--percentage', `${Math.min(100, (value/5000)*100)}%`);
            // Update the value display
            bar.nextElementSibling.textContent = value;
        });
        
        // Update all PWB bars and values
        document.querySelectorAll('.chart-bar.pwb').forEach((bar, index) => {
            const value = basePWB[index] * level;
            // Update the bar width
            bar.style.setProperty('--percentage', `${Math.min(100, (value/15000)*100)}%`);
            // Update the value display
            bar.nextElementSibling.textContent = value;
        });
    });
}