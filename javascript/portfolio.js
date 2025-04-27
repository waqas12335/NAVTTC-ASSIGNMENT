// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
    
    // Initialize Typed.js
    const typed = new Typed('#typed', {
      strings: ["Web Developer", "Salesman", "Quran Tutor"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
    
    // Initialize Particles.js
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
          "value": "#007BFF"
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
          "color": "#007BFF",
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
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
    
    // Dark/Light theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('dark-theme', document.body.classList.contains('dark-theme'));
    });
    
    // Check if theme preference exists
    if (localStorage.getItem('dark-theme') === 'true') {
      document.body.classList.add('dark-theme');
    }
    
    // Back to top button functionality
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
      let current = '';
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navItems.forEach(function(navItem) {
        navItem.classList.remove('active');
        if (navItem.getAttribute('href').substring(1) === current) {
          navItem.classList.add('active');
        }
      });
    });
    
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        projectItems.forEach(function(item) {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(function() {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 200);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(function() {
              item.style.display = 'none';
            }, 500);
          }
        });
      });
    });
    
    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    function showTestimonial(index) {
      testimonials.forEach(function(testimonial) {
        testimonial.classList.remove('active');
      });
      
      dots.forEach(function(dot) {
        dot.classList.remove('active');
      });
      
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
    }
    
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        currentIndex = index;
        showTestimonial(currentIndex);
      });
    });
    
    // Auto slide testimonials
    function nextTestimonial() {
      currentIndex++;
      if (currentIndex >= testimonials.length) {
        currentIndex = 0;
      }
      showTestimonial(currentIndex);
    }
    
    let testimonialInterval = setInterval(nextTestimonial, 5000);
    
    // Pause auto slide on hover
    const testimonialsContainer = document.querySelector('.testimonials-slider');
    testimonialsContainer.addEventListener('mouseenter', function() {
      clearInterval(testimonialInterval);
    });
    
    testimonialsContainer.addEventListener('mouseleave', function() {
      testimonialInterval = setInterval(nextTestimonial, 5000);
    });
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let valid = true;
        
        // Name validation
        const nameInput = document.getElementById('name');
        const nameError = nameInput.nextElementSibling;
        if (nameInput.value.trim() === '') {
          nameError.textContent = 'Please enter your name';
          valid = false;
        } else {
          nameError.textContent = '';
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        const emailError = emailInput.nextElementSibling;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address';
          valid = false;
        } else {
          emailError.textContent = '';
        }
        
        // Subject validation
        const subjectInput = document.getElementById('subject');
        const subjectError = subjectInput.nextElementSibling;
        if (subjectInput.value.trim() === '') {
          subjectError.textContent = 'Please enter a subject';
          valid = false;
        } else {
          subjectError.textContent = '';
        }
        
        // Message validation
        const messageInput = document.getElementById('message');
        const messageError = messageInput.nextElementSibling;
        if (messageInput.value.trim() === '') {
          messageError.textContent = 'Please enter your message';
          valid = false;
        } else {
          messageError.textContent = '';
        }
        
        // If form is valid, show success message
        if (valid) {
          // Create success message
          const successMessage = document.createElement('div');
          successMessage.className = 'form-success show';
          successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!';
          
          // Insert before form
          contactForm.parentNode.insertBefore(successMessage, contactForm);
          
          // Reset form
          contactForm.reset();
          
          // Remove success message after 5 seconds
          setTimeout(function() {
            successMessage.classList.remove('show');
            setTimeout(function() {
              successMessage.remove();
            }, 500);
          }, 5000);
        }
      });
    }
    
    // Animate skill bars when they come into view
    const skillSection = document.querySelector('.skills');
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const animateSkills = function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillLevels.forEach(level => {
            level.style.width = level.classList.contains('html') ? '90%' : 
                                level.classList.contains('css') ? '85%' : 
                                level.classList.contains('bootstrap') ? '85%' : 
                                level.classList.contains('javascript') ? '80%' : 
                                level.classList.contains('sales') ? '95%' : 
                                level.classList.contains('quran') ? '90%' : '0%';
          });
        }
      });
    };
    
    const skillObserver = new IntersectionObserver(animateSkills, {
      threshold: 0.5
    });
    
    if (skillSection) {
      skillObserver.observe(skillSection);
    }
    
    // Smooth scrolling for all anchor links
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
  });