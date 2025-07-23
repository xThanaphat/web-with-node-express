export async function loadNavbar() {
    const navbar = document.getElementById('navbar');
    
    navbar.innerHTML = `
        <div class="glass-effect">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <!-- Logo -->
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-rocket text-white text-lg"></i>
                        </div>
                        <span class="text-xl font-bold gradient-text">Personal Enterprise</span>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden md:flex items-center space-x-8">
                        <a href="#banner" class="nav-link text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                            <i class="fas fa-home mr-2"></i>Home
                        </a>
                        <a href="#about" class="nav-link text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                            <i class="fas fa-user mr-2"></i>About
                        </a>
                        <a href="#services" class="nav-link text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                            <i class="fas fa-cogs mr-2"></i>Services
                        </a>
                        <a href="#portfolio" class="nav-link text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                            <i class="fas fa-briefcase mr-2"></i>Portfolio
                        </a>
                        <a href="#contact" class="nav-link text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                            <i class="fas fa-envelope mr-2"></i>Contact
                        </a>
                        <button class="btn-primary">
                            <i class="fas fa-paper-plane mr-2"></i>Get Started
                        </button>
                    </nav>

                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button class="mobile-menu-toggle p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-300">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div class="mobile-menu hidden md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-4 shadow-lg">
                        <a href="#banner" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-300">
                            <i class="fas fa-home mr-2"></i>Home
                        </a>
                        <a href="#about" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-300">
                            <i class="fas fa-user mr-2"></i>About
                        </a>
                        <a href="#services" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-300">
                            <i class="fas fa-cogs mr-2"></i>Services
                        </a>
                        <a href="#portfolio" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-300">
                            <i class="fas fa-briefcase mr-2"></i>Portfolio
                        </a>
                        <a href="#contact" class="mobile-nav-link block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-300">
                            <i class="fas fa-envelope mr-2"></i>Contact
                        </a>
                        <button class="btn-primary w-full mt-4">
                            <i class="fas fa-paper-plane mr-2"></i>Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    });

    // Add active state to navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary-600', 'font-semibold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-primary-600', 'font-semibold');
            }
        });
    });
} 