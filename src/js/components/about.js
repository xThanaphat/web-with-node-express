export async function loadAbout() {
    const about = document.getElementById('about');
    
    about.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6">
                    <span class="gradient-text">About</span> Our Company
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We are a passionate team of innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <!-- Company Story -->
                <div class="space-y-6">
                    <h3 class="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Founded in 2020, Personal Enterprise began with a simple mission: to help businesses thrive in the digital age. What started as a small team of passionate developers has grown into a full-service digital agency.
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        We believe that every business deserves access to world-class technology solutions. Our approach combines technical expertise with creative thinking to deliver results that exceed expectations.
                    </p>
                    <div class="grid grid-cols-2 gap-6 mt-8">
                        <div class="text-center">
                            <div class="text-3xl font-bold gradient-text mb-2">5+</div>
                            <div class="text-gray-600">Years Experience</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold gradient-text mb-2">50+</div>
                            <div class="text-gray-600">Team Members</div>
                        </div>
                    </div>
                </div>

                <!-- Company Image -->
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                         alt="Our Team" 
                         class="rounded-2xl shadow-2xl">
                    <div class="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                <i class="fas fa-trophy text-white"></i>
                            </div>
                            <div>
                                <div class="font-bold text-gray-800">Award Winning</div>
                                <div class="text-sm text-gray-600">Best Digital Agency 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Team Section -->
            <div class="text-center mb-16">
                <h3 class="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Our diverse team of experts brings together years of experience in technology, design, and business strategy.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Team Member 1 -->
                <div class="card text-center group">
                    <div class="relative mb-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                             alt="John Doe" 
                             class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg">
                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">John Doe</h4>
                    <p class="text-primary-600 font-medium mb-3">CEO & Founder</p>
                    <p class="text-gray-600 text-sm mb-4">
                        Visionary leader with 10+ years of experience in digital transformation.
                    </p>
                    <div class="flex justify-center space-x-3">
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 2 -->
                <div class="card text-center group">
                    <div class="relative mb-4">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
                             alt="Jane Smith" 
                             class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg">
                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h4>
                    <p class="text-primary-600 font-medium mb-3">CTO</p>
                    <p class="text-gray-600 text-sm mb-4">
                        Technical expert specializing in scalable architecture and cloud solutions.
                    </p>
                    <div class="flex justify-center space-x-3">
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 3 -->
                <div class="card text-center group">
                    <div class="relative mb-4">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                             alt="Mike Johnson" 
                             class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg">
                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">Mike Johnson</h4>
                    <p class="text-primary-600 font-medium mb-3">Lead Designer</p>
                    <p class="text-gray-600 text-sm mb-4">
                        Creative designer focused on user experience and modern design trends.
                    </p>
                    <div class="flex justify-center space-x-3">
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-dribbble"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 4 -->
                <div class="card text-center group">
                    <div class="relative mb-4">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" 
                             alt="Sarah Wilson" 
                             class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg">
                        <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">Sarah Wilson</h4>
                    <p class="text-primary-600 font-medium mb-3">Marketing Director</p>
                    <p class="text-gray-600 text-sm mb-4">
                        Strategic marketer with expertise in digital campaigns and brand growth.
                    </p>
                    <div class="flex justify-center space-x-3">
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Values Section -->
            <div class="mt-20">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold text-gray-800 mb-6">Our Values</h3>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        These core values guide everything we do and shape our company culture.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-lightbulb text-white text-xl"></i>
                        </div>
                        <h4 class="text-xl font-semibold text-gray-800 mb-3">Innovation</h4>
                        <p class="text-gray-600">
                            We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-handshake text-white text-xl"></i>
                        </div>
                        <h4 class="text-xl font-semibold text-gray-800 mb-3">Integrity</h4>
                        <p class="text-gray-600">
                            We build trust through honest communication, transparency, and ethical business practices.
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-star text-white text-xl"></i>
                        </div>
                        <h4 class="text-xl font-semibold text-gray-800 mb-3">Excellence</h4>
                        <p class="text-gray-600">
                            We strive for excellence in every project, delivering quality that exceeds expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
} 