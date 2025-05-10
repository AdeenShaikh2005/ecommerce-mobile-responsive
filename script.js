document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navCenter = document.querySelector('.nav-center');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', function() {
        navCenter.classList.toggle('active');
        
        // Toggle between hamburger and close icon
        if (navCenter.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navCenter.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });

    // Close menu when clicking outside (for mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('.nav-center') && 
            !event.target.closest('.mobile-menu-btn') &&
            navCenter.classList.contains('active')) {
            navCenter.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Adjust for window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navCenter.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});
//hero
document.addEventListener('DOMContentLoaded', function() {
    // Button hover effect enhancement
    const shopButton = document.querySelector('.hero-button');
    
    shopButton.addEventListener('mouseenter', function() {
        this.querySelector('i').style.transform = 'translateX(5px)';
    });
    
    shopButton.addEventListener('mouseleave', function() {
        this.querySelector('i').style.transform = 'translateX(0)';
    });
    
    // Parallax effect for hero image (optional)
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
    
    // Click event for shop button
    shopButton.addEventListener('click', function() {
        // Replace with your actual shop link
        window.location.href = '#shop';
    });
});
// product
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            // Here you would typically add to cart logic
            console.log(`Added to cart: ${productName} - ${productPrice}`);
            
            // Visual feedback
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                this.style.backgroundColor = 'var(--primary)';
            }, 2000);
        });
    });
    
    // Quick view functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // Here you would typically show a quick view modal
            console.log(`Quick view: ${productName}`);
            alert(`Quick view for ${productName} would open here`);
        });
    });
    
    // Product card click (excluding buttons)
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('button')) {
                const productName = card.querySelector('.product-name').textContent;
                console.log(`Navigating to product page for ${productName}`);
                // window.location.href = `/products/${productName.toLowerCase().replace(/ /g, '-')}`;
            }
        });
    });
});
//category//
document.addEventListener('DOMContentLoaded', function() {
    // Smooth hover effect for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.category-icon').style.transform = 'scale(1.1)';
            this.querySelector('.shop-now').style.transform = 'translateX(5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.category-icon').style.transform = 'scale(1)';
            this.querySelector('.shop-now').style.transform = 'translateX(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper slider
    const swiper = new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Add hover effect to review cards
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer Functionality
    const countdowns = document.querySelectorAll('.countdown');
    
    function updateCountdown() {
        countdowns.forEach(countdown => {
            const endDate = new Date(countdown.dataset.end).getTime();
            const now = new Date().getTime();
            const distance = endDate - now;
            
            if (distance < 0) {
                countdown.innerHTML = "<span class='expired'>OFFER EXPIRED</span>";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
            countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
            countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        });
    }
    
    // Update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Button hover effects
    const shopButtons = document.querySelectorAll('.shop-now-btn');
    
    shopButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
    });
    
    // Click event for shop buttons
    shopButtons.forEach(button => {
        button.addEventListener('click', function() {
            const offerCard = this.closest('.offer-card');
            const offerTitle = offerCard.querySelector('h3').textContent;
            
            // Replace with actual link to product
            console.log(`Navigating to: ${offerTitle}`);
            // window.location.href = `/products/${offerTitle.toLowerCase().replace(/ /g, '-')}`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
    
    // Form Submission
    const supportForm = document.getElementById('supportForm');
    
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you! Your message has been sent. We will respond shortly.');
        
        // Reset form
        this.reset();
    });
    
    // Support card hover effects
    const supportCards = document.querySelectorAll('.support-card');
    
    supportCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Here you would typically send the email to your backend
        console.log('Subscribed email:', email);
        
        // Show success message
        alert('Thank you for subscribing!');
        this.reset();
    });
    
    // Footer link animations
    const footerLinks = document.querySelectorAll('.links-column ul li a');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '8px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '5px';
        });
    });
});