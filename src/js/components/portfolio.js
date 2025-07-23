export async function loadPortfolio() {
    const portfolio = document.getElementById('portfolio');
    
    portfolio.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6">
                    Our <span class="gradient-text">Portfolio</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore our latest projects and see how we've helped businesses achieve their digital goals.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="card group overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" 
                             alt="E-Commerce Platform" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 text-white">
                                <button class="btn-primary text-sm">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">E-Commerce Platform</h3>
                        <p class="text-gray-600 mb-4">
                            A modern e-commerce solution with advanced features and seamless user experience.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
                            <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Node.js</span>
                            <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="card group overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" 
                             alt="Fitness App" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 text-white">
                                <button class="btn-primary text-sm">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Fitness App</h3>
                        <p class="text-gray-600 mb-4">
                            Cross-platform mobile app for fitness tracking and workout planning.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React Native</span>
                            <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Firebase</span>
                            <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">Redux</span>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="card group overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                             alt="Analytics Dashboard" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 text-white">
                                <button class="btn-primary text-sm">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Analytics Dashboard</h3>
                        <p class="text-gray-600 mb-4">
                            Real-time analytics dashboard with interactive charts and data visualization.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Vue.js</span>
                            <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">D3.js</span>
                            <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">Python</span>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="card group overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" 
                             alt="Learning Management System" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 text-white">
                                <button class="btn-primary text-sm">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Learning Management System</h3>
                        <p class="text-gray-600 mb-4">
                            Comprehensive LMS platform for online education and course management.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Angular</span>
                            <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Laravel</span>
                            <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">MySQL</span>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="card group overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" 
                             alt="Healthcare Portal" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 text-white">
                                <button class="btn-primary text-sm">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Healthcare Portal</h3>
                        <p class="text-gray-600 mb-4">
                            Secure healthcare management system for patient records and appointments.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
                            <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Express</span>
                            <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">PostgreSQL</span>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="card group overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop" 
                             alt="Ride-Sharing App" 
                             class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div class="p-4 text-white">
                                <button class="btn-primary text-sm">
                                    <i class="fas fa-external-link-alt mr-2"></i>View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Ride-Sharing App</h3>
                        <p class="text-gray-600 mb-4">
                            Modern ride-sharing platform with real-time tracking and payment integration.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Flutter</span>
                            <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Node.js</span>
                            <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">Socket.io</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View More Button -->
            <div class="text-center mt-12">
                <button class="btn-primary text-lg px-8 py-4">
                    <i class="fas fa-eye mr-2"></i>View All Projects
                </button>
            </div>
        </div>
    `;
} 