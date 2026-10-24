/**
 * Prompt to Podium: Dark Store Private-Label Defence Strategy
 * Standalone Project Script
 * Author: Priyanshu Karan
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Bar
    const progressBar = document.getElementById('readingProgressBar');
    const updateProgressBar = () => {
        if (!progressBar) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, currentProgress))}%`;
    };
    window.addEventListener('scroll', updateProgressBar, { passive: true });

    // 2. Sticky Navbar with Blur Effect
    const navbar = document.getElementById('caseNav');
    const updateNavbar = () => {
        if (!navbar) return;
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    // 3. Mobile Navigation Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerLinks = document.querySelectorAll('.mobile-drawer a');

    const toggleDrawer = () => {
        if (!mobileDrawer || !navToggle) return;
        const isOpen = mobileDrawer.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    const closeDrawer = () => {
        if (!mobileDrawer || !navToggle) return;
        mobileDrawer.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleDrawer);
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('click', (e) => {
        if (navbar && !navbar.contains(e.target) && mobileDrawer && mobileDrawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // 4. Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');
    const updateBackToTop = () => {
        if (!backToTopBtn) return;
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.case-nav-menu a[href^="#"]');

    const highlightActiveNav = () => {
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightActiveNav, { passive: true });
    highlightActiveNav();

    console.log("Prompt to Podium: Dark Store Strategy standalone website initialized.");
});
