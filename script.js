document.addEventListener('DOMContentLoaded', () => {
    // 2. Scroll Reveal Animation (Minimal)
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 3. Mobile Menu Toggle (Clean logic)
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.sidemenu-overlay');

    const toggleMenu = (show) => {
        if (!mobileMenuBtn || !navLinks) return;
        
        const isOpen = show !== undefined ? show : !navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active', isOpen);
        if (overlay) overlay.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        
        // Toggle icon
        const icon = mobileMenuBtn.querySelector('i, svg');
        if (icon) {
            if (isOpen) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            if (window.lucide) lucide.createIcons();
        }

        // Toggle body scroll
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', () => toggleMenu(false));
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu when clicking outside (alternative to overlay click)
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // 4. Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Terminal Typing Effect (Subtle)
    const terminalLines = document.querySelectorAll('.terminal-body code span');
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';
        line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 300 + (index * 80));
    });
});
