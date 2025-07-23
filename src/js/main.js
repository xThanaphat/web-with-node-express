// Import components
import { loadNavbar } from './components/navbar.js';
import { loadBanner } from './components/banner.js';
import { loadFooter } from './components/footer.js';
import { loadAbout } from './components/about.js';
import { loadServices } from './components/services.js';
import { loadPortfolio } from './components/portfolio.js';
import { loadContact } from './components/contact.js';

// Import utilities
import { initAnimations } from './utils/animations.js';
import { initScrollEffects } from './utils/scrollEffects.js';

// Main application class
class PersonalEnterpriseApp {
    constructor() {
        this.init();
    }

    async init() {
        try {
            // Load all components
            await this.loadComponents();
            
            // Initialize utilities
            this.initUtilities();
            
            // Add event listeners
            this.addEventListeners();
            
            console.log('🚀 Personal Enterprise Website loaded successfully!');
        } catch (error) {
            console.error('❌ Error initializing app:', error);
        }
    }

    async loadComponents() {
        // Load components in parallel for better performance
        await Promise.all([
            loadNavbar(),
            loadBanner(),
            loadFooter(),
            loadAbout(),
            loadServices(),
            loadPortfolio(),
            loadContact()
        ]);
    }

    initUtilities() {
        initAnimations();
        initScrollEffects();
    }

    addEventListeners() {
        // Smooth scrolling for navigation links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Mobile menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.matches('.mobile-menu-toggle')) {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-toggle')) {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PersonalEnterpriseApp();
});

// Export for potential use in other modules
export default PersonalEnterpriseApp; 