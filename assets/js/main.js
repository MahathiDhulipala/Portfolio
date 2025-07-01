document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Particles.js Configuration
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
    
    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });
    
    // Animate certification cards
    gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });
    
    // Magnetic button effect
    document.querySelectorAll('[data-magnetic]').forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--x', `${x}px`);
            this.style.setProperty('--y', `${y}px`);
        });
    });
    
    // Tilt effect for cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Word by word animation for about section
    const animateTextByWords = (element) => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split(' ').forEach((word, i) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.animationDelay = `${i * 0.1}s`;
            element.appendChild(span);
        });
    };
    
    document.querySelectorAll('.word-by-word').forEach(animateTextByWords);
    
    // Line by line animation for about section
    const animateTextByLines = (element) => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('. ').forEach((line, i) => {
            if (line.trim() === '') return;
            
            const span = document.createElement('span');
            span.textContent = line + (i < text.split('. ').length - 1 ? '. ' : '');
            span.style.animationDelay = `${i * 0.3}s`;
            element.appendChild(span);
        });
    };
    
    document.querySelectorAll('.line-by-line').forEach(animateTextByLines);
    
    // Fade in list items with delay
    document.querySelectorAll('.fade-list li').forEach((item, i) => {
        item.style.animationDelay = `${i * 0.1}s`;
    });
    
    // Tab functionality for projects
  const tabButtons = document.querySelectorAll('.tab-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-tab');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
// Certificate Modal Functionality
const certModal = document.getElementById('certificateModal');
const certModalImg = document.getElementById('certificateImage');
const certModalTitle = document.getElementById('certificateTitle');
const certModalDesc = document.getElementById('certificateDescription');
const certModalDate = document.getElementById('certificateDate');
const closeCertModal = document.querySelector('.close-modal');

// Store current scroll position
let scrollPosition = 0;

// Open modal when certificate is clicked
document.querySelectorAll('.view-cert-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Store current scroll position
        scrollPosition = window.scrollY;
       
        
        
        const certId = this.closest('.cert-card').getAttribute('data-certificate');
        const certData = certificates[certId];
        
        // Update modal content
        certModalImg.src = certData.image;
        certModalImg.alt = certData.title + ' Certificate';
        certModalTitle.textContent = certData.title;
        certModalDesc.textContent = certData.description;
        certModalDate.textContent = certData.date;
        
        // Show modal
        certModal.style.display = 'flex';
        
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    
       
        // Focus on modal for accessibility
        certModal.setAttribute('aria-hidden', 'false');
    });
});
    // Certificate data
    const certificates = {
        tableau: {
            image: 'assets/img/certificates/tableau-cert.png',
            title: 'Tableau Desktop Certification',
            description: 'Data visualization and analytics',
            date: 'Issued: 2023'
        },
        scrum: {
            image: 'assets/img/certificates/scrum-cert.png',
            title: 'Agile Scrum Master',
            description: 'Expertise in Agile methodologies',
            date: 'Issued: 2023'
        },
        itil: {
            image: 'assets/img/certificates/itil-cert.png',
            title: 'ITIL Certification',
            description: 'IT service management best practices',
            date: 'Issued: 2023'
        },
        sixsigma: {
            image: 'assets/img/certificates/sixsigma-cert.png',
            title: 'Introduction to Six Sigma',
            description: 'Process improvement methodologies',
            date: 'Issued: 2023'
        },
        microsoft: {
            image: 'assets/img/certificates/microsoft-cert.png',
            title: 'Microsoft Enterprise Mobility Suite',
            description: 'Management and Security',
            date: 'Issued: 2023'
        },
        citi: {
            image: 'assets/img/certificates/itil-cert.png',
            title: 'CITI Certification',
            description: 'Research ethics and compliance training',
            date: 'Issued: 2023'
        },
        'customer-service': {
            image: 'assets/img/certificates/customer-service-cert.png',
            title: 'Customer Service Leadership',
            description: 'Leadership in customer service',
            date: 'Issued: 2023'
        },
        wellbeing: {
            image: 'assets/img/certificates/wellbeing-cert.png',
            title: 'Mental Well-being Ambassador',
            description: 'Promoting mental well-being',
            date: 'Issued: 2023'
        },
        'linkedin-confidence': {
            image: 'assets/img/certificates/CCM-cert.png',
            title: 'Complete Confidence',
            description: 'LinkedIn Learning - Self-confidence skills',
            date: 'Issued: April 2025'
        },
        'linkedin-operational': {
            image: 'assets/img/certificates/OEF-cert.png',
            title: 'Operational Excellence Foundations',
            description: 'LinkedIn Learning - Operational Excellence',
            date: 'Issued: February 2025'
        },
        'vlsi-finfet': {
            image: 'assets/img/certificates/KMIT_VLSI-cert.png',
            title: 'VLSI Design using FinFET',
            description: 'Keshav Memorial Institute of Technology',
            date: 'Issued: March 2017'
        },
        'iot-sonet': {
            image: 'assets/img/certificates/KMIT-IOT-cert.png',
            title: 'IOT (SONET) Participation',
            description: 'Keshav Memorial Institute of Technology',
            date: 'Participation Certificate'
        },
        'iete-project': {
            image: 'assets/img/certificates/KMIT-EPC-cert.png',
            title: 'IETE Electronic Project Competition',
            description: 'Keshav Memorial Institute of Technology',
            date: '2017'
        },
        'suicide-prevention': {
            image: 'assets/img/certificates/Suicide-Prevention-cert.png',
            title: 'Suicide Prevention Training',
            description: 'Ask Listen Refer program',
            date: 'Issued: October 2022'
        },
         'six-sigma-green-belt': {
        image: 'assets/img/certificates/Six-Sigma-Green-Belt-cert.png',
        title: 'Six Sigma: Green Belt',
        description: 'LinkedIn Learning',
        date: 'Issued: June 2025',
        duration: '1 hour 53 minutes'
    },
    'excellence-white-belt': {
        image: 'assets/img/certificates/Excellence-White-Belt-cert.png',
        title: 'Show Me Excellence White Belt',
        description: 'The Missouri Way Training',
        date: 'Issued: June 2025',
        duration: '0.80 hours'
    },
    'excellence-yellow-belt': {
        image: 'assets/img/certificates/Excellence-Yellow-Belt-cert.png',
        title: 'Show Me Excellence Yellow Belt',
        description: 'The Missouri Way',
        date: 'Issued: June 2025',
        duration: '2.25 hours'
    }
    };
    

// Close modal function
function closeCertModalFunction() {
    certModal.style.display = 'none';
    
    // Restore scrolling
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Restore scroll position
    window.scrollTo(0, scrollPosition);
    
    // Update accessibility
    certModal.setAttribute('aria-hidden', 'true');
}

// Close modal events
closeCertModal.addEventListener('click', closeCertModalFunction);

// Close when clicking outside
certModal.addEventListener('click', function(e) {
    if (e.target === certModal) {
        closeCertModalFunction();
    }
});

// Close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && certModal.style.display === 'flex') {
        closeCertModalFunction();
    }
});




    // Project Modal Functionality
    const projectModal = document.getElementById('projectModal');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalTags = document.getElementById('projectModalTags');
    const projectModalImage = document.getElementById('projectModalImage');
    const projectModalDescription = document.getElementById('projectModalDescription');
    const projectModalTechnologies = document.getElementById('projectModalTechnologies');
    const projectModalFeatures = document.getElementById('projectModalFeatures');
    const projectModalImpact = document.getElementById('projectModalImpact');
    const closeProjectModal = document.querySelectorAll('.close-modal')[1];
    
    // Project data
    
    // Open project modal when view details is clicked
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const projectData = projects[projectId];
            
            projectModalTitle.textContent = projectData.title;
            projectModalImage.src = projectData.image;
            projectModalImage.alt = projectData.title;
            projectModalDescription.textContent = projectData.description;
            
            // Clear previous content
            projectModalTags.innerHTML = '';
            projectModalTechnologies.innerHTML = '';
            projectModalFeatures.innerHTML = '';
            projectModalImpact.innerHTML = '';
            
            // Add tags (technologies)
            projectData.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.textContent = tech;
                tag.classList.add('tech-tag');
                projectModalTags.appendChild(tag);
            });
            
            // Add technologies
            projectData.technologies.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                projectModalTechnologies.appendChild(li);
            });
            
            // Add features
            projectData.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                projectModalFeatures.appendChild(li);
            });
            
            // Add impact
            projectData.impact.forEach(impact => {
                const li = document.createElement('li');
                li.textContent = impact;
                projectModalImpact.appendChild(li);
            });
            
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close project modal
    closeProjectModal.addEventListener('click', function() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside project modal
    window.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let autoPlayInterval;
    const slideCount = slides.length;

    // Initialize carousel
    function initCarousel() {
        updateCarousel();
        startAutoPlay();
        setupEventListeners();
    }

    // Update carousel display
    function updateCarousel() {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.transform = 'scale(0.95)';
        });

        // Show current slide
        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.opacity = '1';
        slides[currentIndex].style.transform = 'scale(1)';

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Navigate to specific slide
    function goToSlide(index) {
        if (index >= 0 && index < slideCount) {
            currentIndex = index;
            updateCarousel();
            resetAutoPlay();
        }
    }

    // Next slide
    function nextSlide() {
        goToSlide((currentIndex + 1) % slideCount);
    }

    // Previous slide
    function prevSlide() {
        goToSlide((currentIndex - 1 + slideCount) % slideCount);
    }

    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 6000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event listeners
    function setupEventListeners() {
        // Navigation buttons
        prevBtn.addEventListener('click', () => {
            prevSlide();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
        });

        // Indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Pause on hover
        track.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        track.addEventListener('mouseleave', () => {
            resetAutoPlay();
        });

        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(autoPlayInterval);
        }, {passive: true});

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            resetAutoPlay();
        }, {passive: true});

        function handleSwipe() {
            const difference = touchStartX - touchEndX;
            if (difference > 50) { // Swipe left
                nextSlide();
            } else if (difference < -50) { // Swipe right
                prevSlide();
            }
        }
    }

    // Initialize
    initCarousel();
   const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get all needed elements
            const category = this.closest('.skill-category');
            const content = this.nextElementSibling;
            const icon = this.querySelector('.fa-chevron-down');
            
            // Toggle this category
            const isOpening = !category.classList.contains('active');
            
            // Close all categories first
            document.querySelectorAll('.skill-category').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.fa-chevron-down').style.transform = 'rotate(0deg)';
            });
            
            // Open current one if it was closed
            if (isOpening) {
                category.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Initialize meter animations
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const level = skill.getAttribute('data-level');
        const meter = skill.querySelector('.meter span');
        meter.style.width = level + '%';
    });
    
    // Open first category by default
    document.querySelector('.skill-category')?.classList.add('active');
    
   
    // Form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.querySelector('span').textContent;
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.querySelector('span').textContent = 'Sending...';
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                submitButton.querySelector('span').textContent = 'Message Sent!';
                submitButton.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    submitButton.querySelector('span').textContent = originalText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Parallax effect for about image
    const aboutImg = document.querySelector('.about-img');
    if (aboutImg) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX) / 20;
            const y = (window.innerHeight - e.pageY) / 20;
            aboutImg.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    
    // Add floating animation to elements with class 'float'
    document.querySelectorAll('.float').forEach(el => {
        gsap.to(el, {
            y: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
    // Initialize skill meters
function initSkillMeters() {
    document.querySelectorAll('.skill').forEach(skill => {
        const level = skill.getAttribute('data-level');
        const meter = skill.querySelector('.meter span');
        meter.style.width = `${level}%`;
    });
}

// Accordion functionality
function initAccordion() {
    const headers = document.querySelectorAll('.category-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const category = header.parentElement;
            category.classList.toggle('active');
            
            // Close other open categories
            headers.forEach(h => {
                if (h !== header) {
                    h.parentElement.classList.remove('active');
                }
            });
        });
    });
}

// Initialize tilt.js on cards
function initTiltCards() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }
}

    
    // Initialize new components
    initSkillMeters();
    initAccordion();
    initTiltCards();
    
    // Animate elements with delay attributes
    document.querySelectorAll('[data-delay]').forEach(el => {
        const delay = el.getAttribute('data-delay') || 0;
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: parseFloat(delay)
        });
    });
    
    // Special animation for profile section
    const profileSection = document.querySelector('#profile');
    if (profileSection) {
        gsap.from('.profile-image-container', {
            scrollTrigger: {
                trigger: profileSection,
                start: "top bottom",
                toggleActions: "play none none none"
            },
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        });
        
        gsap.from('.profile-badge', {
            scrollTrigger: {
                trigger: profileSection,
                start: "top bottom",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5
        });
    }  
    gsap.utils.toArray('.leadership-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1
    });
    
});
 const domains = document.querySelectorAll('.tech-domain');
  
  // Open first domain by default
  if (domains.length > 0) {
    domains[0].classList.add('active');
    
    // Animate progress bars for first domain
    const firstDomainSkills = domains[0].querySelectorAll('.skill-progress');
    firstDomainSkills.forEach((skill, index) => {
      skill.style.setProperty('--order', index);
      const level = skill.getAttribute('data-level');
      const fill = skill.querySelector('.progress-fill');
      setTimeout(() => {
        fill.style.width = level + '%';
      }, 300 + (index * 100));
    });
    
    // Animate tech tags for first domain
    const firstDomainTags = domains[0].querySelectorAll('.tech-tag');
    firstDomainTags.forEach((tag, index) => {
      tag.style.setProperty('--order', index);
    });
    
    // Animate tech items for first domain
    const firstDomainItems = domains[0].querySelectorAll('.tech-item');
    firstDomainItems.forEach((item, index) => {
      item.style.setProperty('--order', index);
    });
  }
  
  // Domain toggle functionality
  domains.forEach(domain => {
    const head = domain.querySelector('.domain-head');
    
    head.addEventListener('click', () => {
      const isOpening = !domain.classList.contains('active');
      
      // Close all domains first
      domains.forEach(d => {
        if (d !== domain) {
          d.classList.remove('active');
        }
      });
      
      // Toggle current domain
      domain.classList.toggle('active');
      
      if (isOpening) {
        // Animate progress bars
        const skills = domain.querySelectorAll('.skill-progress');
        skills.forEach((skill, index) => {
          skill.style.setProperty('--order', index);
          const level = skill.getAttribute('data-level');
          const fill = skill.querySelector('.progress-fill');
          fill.style.width = '0';
          setTimeout(() => {
            fill.style.width = level + '%';
          }, 100 + (index * 100));
        });
        
        // Animate tech tags
        const tags = domain.querySelectorAll('.tech-tag');
        tags.forEach((tag, index) => {
          tag.style.setProperty('--order', index);
        });
        
        // Animate tech items
        const items = domain.querySelectorAll('.tech-item');
        items.forEach((item, index) => {
          item.style.setProperty('--order', index);
        });
      }
    });
  });
  

  
  document.querySelectorAll('.skill-progress, .tech-tag, .tech-item').forEach(el => {
    observer.observe(el);
  });
  
  const skillNodes = document.querySelectorAll('.skill-node');
  
  // Animate nodes when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  skillNodes.forEach(node => {
    node.style.opacity = '0';
    node.style.transform = 'translateY(20px)';
    node.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(node);
  });
  
  // Add sequential animation to skill points
  skillNodes.forEach(node => {
    const skills = node.querySelectorAll('.skill-point');
    skills.forEach((skill, index) => {
      skill.style.transitionDelay = `${index * 0.05}s`;
    });
  });

 
});

 