export async function loadServices() {
    const services = document.getElementById('services');
    
    services.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6">
                    Our <span class="gradient-text">Services</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer comprehensive digital solutions to help your business grow and succeed in the modern world.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Web Development -->
                <div class="card group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-code text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Web Development</h3>
                    <p class="text-gray-600 mb-6">
                        Custom websites and web applications built with modern technologies and best practices.
                    </p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            Responsive Design
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            SEO Optimization
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            Performance Focused
                        </li>
                    </ul>
                    <button class="btn-secondary w-full">
                        Learn More
                    </button>
                </div>

                <!-- Mobile Development -->
                <div class="card group hover:bg-gradient-to-br hover:from-secondary-50 hover:to-accent-50">
                    <div class="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-mobile-alt text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Mobile Apps</h3>
                    <p class="text-gray-600 mb-6">
                        Native and cross-platform mobile applications for iOS and Android platforms.
                    </p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-secondary-500 mr-2"></i>
                            Native Development
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-secondary-500 mr-2"></i>
                            Cross-Platform
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-secondary-500 mr-2"></i>
                            App Store Optimization
                        </li>
                    </ul>
                    <button class="btn-secondary w-full">
                        Learn More
                    </button>
                </div>

                <!-- Cloud Solutions -->
                <div class="card group hover:bg-gradient-to-br hover:from-accent-50 hover:to-primary-50">
                    <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-cloud text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Cloud Solutions</h3>
                    <p class="text-gray-600 mb-6">
                        Scalable cloud infrastructure and DevOps solutions for modern applications.
                    </p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-accent-500 mr-2"></i>
                            AWS/Azure/GCP
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-accent-500 mr-2"></i>
                            CI/CD Pipelines
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-accent-500 mr-2"></i>
                            Monitoring & Security
                        </li>
                    </ul>
                    <button class="btn-secondary w-full">
                        Learn More
                    </button>
                </div>

                <!-- UI/UX Design -->
                <div class="card group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-paint-brush text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
                    <p class="text-gray-600 mb-6">
                        Beautiful and intuitive user interfaces designed for optimal user experience.
                    </p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            User Research
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            Wireframing & Prototyping
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-primary-500 mr-2"></i>
                            Design Systems
                        </li>
                    </ul>
                    <button class="btn-secondary w-full">
                        Learn More
                    </button>
                </div>

                <!-- Digital Marketing -->
                <div class="card group hover:bg-gradient-to-br hover:from-secondary-50 hover:to-accent-50">
                    <div class="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-chart-line text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Digital Marketing</h3>
                    <p class="text-gray-600 mb-6">
                        Strategic digital marketing campaigns to boost your online presence and drive growth.
                    </p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-secondary-500 mr-2"></i>
                            SEO & Content Marketing
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-secondary-500 mr-2"></i>
                            Social Media Management
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-secondary-500 mr-2"></i>
                            PPC Campaigns
                        </li>
                    </ul>
                    <button class="btn-secondary w-full">
                        Learn More
                    </button>
                </div>

                <!-- Consulting -->
                <div class="card group hover:bg-gradient-to-br hover:from-accent-50 hover:to-primary-50">
                    <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-lightbulb text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Consulting</h3>
                    <p class="text-gray-600 mb-6">
                        Expert guidance on digital transformation and technology strategy.
                    </p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-accent-500 mr-2"></i>
                            Technology Strategy
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-accent-500 mr-2"></i>
                            Digital Transformation
                        </li>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-accent-500 mr-2"></i>
                            Process Optimization
                        </li>
                    </ul>
                    <button class="btn-secondary w-full">
                        Learn More
                    </button>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center mt-16">
                <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                    <h3 class="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p class="text-xl mb-6 opacity-90">
                        Let's discuss how we can help transform your business with our innovative solutions.
                    </p>
                    <button class="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                        <i class="fas fa-paper-plane mr-2"></i>Get Free Consultation
                    </button>
                </div>
            </div>
        </div>
    `;
} 