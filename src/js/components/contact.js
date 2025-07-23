export async function loadContact() {
    const contact = document.getElementById('contact');
    
    contact.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl sm:text-5xl font-bold mb-6">
                    Get In <span class="gradient-text">Touch</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to start your next project? Let's discuss how we can help bring your vision to life.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="card">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                    <form id="contactForm" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                            </div>
                            <div>
                                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                        </div>
                        
                        <div>
                            <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                            <select id="service" name="service" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                                <option value="">Select a service</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-apps">Mobile Apps</option>
                                <option value="cloud-solutions">Cloud Solutions</option>
                                <option value="ui-ux-design">UI/UX Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="consulting">Consulting</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary w-full text-lg py-4">
                            <i class="fas fa-paper-plane mr-2"></i>Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                        <p class="text-gray-600 mb-8">
                            We'd love to hear from you. Reach out to us through any of these channels and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <!-- Contact Cards -->
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Our Location</h4>
                                <p class="text-gray-600">
                                    123 Innovation Street<br>
                                    Tech District, City 12345<br>
                                    Country
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Phone Number</h4>
                                <p class="text-gray-600">
                                    +1 (555) 123-4567<br>
                                    +1 (555) 987-6543
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Email Address</h4>
                                <p class="text-gray-600">
                                    hello@personalenterprise.com<br>
                                    support@personalenterprise.com
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-clock text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Business Hours</h4>
                                <p class="text-gray-600">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br>
                                    Saturday: 10:00 AM - 4:00 PM<br>
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="pt-6 border-t border-gray-200">
                        <h4 class="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Map Section -->
            <div class="mt-16">
                <div class="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 text-center">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Visit Our Office</h3>
                    <p class="text-gray-600 mb-6">
                        Come by our office to meet the team and discuss your project in person.
                    </p>
                    <div class="w-full h-64 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-lg overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop" 
                             alt="Office Location" 
                             class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                            <div class="p-6 text-white text-left">
                                <h4 class="text-lg font-semibold mb-2">Personal Enterprise HQ</h4>
                                <p class="text-sm opacity-90">123 Innovation Street, Tech District</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6';
        successMessage.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle mr-2"></i>
                <span>Thank you for your message! We'll get back to you soon.</span>
            </div>
        `;
        
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
} 