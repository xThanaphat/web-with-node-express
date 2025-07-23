export async function loadBanner() {
    const banner = document.getElementById('banner');
    
    banner.innerHTML = `
        <!-- Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20"></div>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
                 alt="Background" 
                 class="absolute inset-0 w-full h-full object-cover opacity-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div class="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 4s;"></div>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                <!-- Badge -->
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-medium text-sm mb-8 animate-fade-in">
                    <i class="fas fa-star mr-2 text-yellow-500"></i>
                    Welcome to Personal Enterprise
                </div>

                <!-- Main Heading -->
                <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
                    <span class="gradient-text">Innovative</span>
                    <br>
                    <span class="text-gray-800">Solutions for</span>
                    <br>
                    <span class="gradient-text">Modern Business</span>
                </h1>

                <!-- Subtitle -->
                <p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
                    We create cutting-edge digital solutions that transform businesses and drive growth in the digital age.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style="animation-delay: 0.4s;">
                    <button class="btn-primary text-lg px-8 py-4 group">
                        <span class="group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-rocket mr-2"></i>Start Your Journey
                        </span>
                    </button>
                    <button class="btn-secondary text-lg px-8 py-4 group">
                        <span class="group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-play mr-2"></i>Watch Demo
                        </span>
                    </button>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.6s;">
                    <div class="text-center">
                        <div class="text-3xl font-bold gradient-text mb-2">500+</div>
                        <div class="text-gray-600">Happy Clients</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold gradient-text mb-2">1000+</div>
                        <div class="text-gray-600">Projects Completed</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold gradient-text mb-2">99%</div>
                        <div class="text-gray-600">Success Rate</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div class="flex flex-col items-center text-gray-400">
                <span class="text-sm mb-2">Scroll Down</span>
                <i class="fas fa-chevron-down text-xl"></i>
            </div>
        </div>

        <!-- Floating Icons -->
        <div class="absolute top-1/4 left-1/4 text-primary-400 opacity-30 animate-float">
            <i class="fas fa-code text-4xl"></i>
        </div>
        <div class="absolute top-1/3 right-1/4 text-secondary-400 opacity-30 animate-float" style="animation-delay: 1s;">
            <i class="fas fa-mobile-alt text-4xl"></i>
        </div>
        <div class="absolute bottom-1/4 left-1/3 text-accent-400 opacity-30 animate-float" style="animation-delay: 2s;">
            <i class="fas fa-cloud text-4xl"></i>
        </div>
    `;

    // Add parallax effect to background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = banner.querySelectorAll('.animate-float');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add typing effect to main heading
    const mainHeading = banner.querySelector('h1');
    if (mainHeading) {
        const text = mainHeading.textContent;
        mainHeading.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainHeading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
} 