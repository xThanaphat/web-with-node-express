export async function loadFooter() {
    const footer = document.getElementById('footer');
    
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="lg:col-span-2">
                    <div class="flex items-center space-x-2 mb-6">
                        <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-rocket text-white text-lg"></i>
                        </div>
                        <span class="text-xl font-bold text-white">Personal Enterprise</span>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                        We are passionate about creating innovative digital solutions that help businesses thrive in the modern world. Our team of experts is dedicated to delivering exceptional results.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-6">Quick Links</h3>
                    <ul class="space-y-3">
                        <li>
                            <a href="#banner" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-primary-400"></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-primary-400"></i>About Us
                            </a>
                        </li>
                        <li>
                            <a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-primary-400"></i>Services
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-primary-400"></i>Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-primary-400"></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-6">Services</h3>
                    <ul class="space-y-3">
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-code mr-2 text-secondary-400"></i>Web Development
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-mobile-alt mr-2 text-secondary-400"></i>Mobile Apps
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-cloud mr-2 text-secondary-400"></i>Cloud Solutions
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-paint-brush mr-2 text-secondary-400"></i>UI/UX Design
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                                <i class="fas fa-chart-line mr-2 text-secondary-400"></i>Digital Marketing
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter -->
            <div class="mt-12 pt-8 border-t border-gray-700">
                <div class="max-w-md mx-auto text-center">
                    <h3 class="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                    <p class="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
                    <div class="flex">
                        <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-l-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-primary-500">
                        <button class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-r-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 pt-8 border-t border-gray-700">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-gray-300 text-sm mb-4 md:mb-0">
                        © 2024 Personal Enterprise. All rights reserved.
                    </div>
                    <div class="flex space-x-6 text-sm">
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Back to Top Button -->
        <button id="backToTop" class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 opacity-0 invisible">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;

    // Back to top functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter form submission
    const newsletterForm = footer.querySelector('input[type="email"]').parentElement;
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        if (email) {
            // Add success message
            const successMsg = document.createElement('div');
            successMsg.className = 'text-green-400 text-sm mt-2';
            successMsg.textContent = 'Thank you for subscribing!';
            newsletterForm.appendChild(successMsg);
            
            // Clear input
            e.target.querySelector('input[type="email"]').value = '';
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    });
} 