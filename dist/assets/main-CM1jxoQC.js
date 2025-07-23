(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function y(){const s=document.getElementById("navbar");s.innerHTML=`
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
    `,window.addEventListener("scroll",()=>{window.scrollY>100?(s.classList.add("bg-white/95","backdrop-blur-md","shadow-lg"),s.classList.remove("bg-transparent")):(s.classList.remove("bg-white/95","backdrop-blur-md","shadow-lg"),s.classList.add("bg-transparent"))});const e=document.querySelectorAll(".nav-link, .mobile-nav-link"),r=document.querySelectorAll("section[id]");window.addEventListener("scroll",()=>{let c="";r.forEach(t=>{const o=t.offsetTop;t.clientHeight,window.scrollY>=o-200&&(c=t.getAttribute("id"))}),e.forEach(t=>{t.classList.remove("text-primary-600","font-semibold"),t.getAttribute("href")===`#${c}`&&t.classList.add("text-primary-600","font-semibold")})})}async function w(){const s=document.getElementById("banner");s.innerHTML=`
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
    `,window.addEventListener("scroll",()=>{const r=window.pageYOffset;s.querySelectorAll(".animate-float").forEach((t,o)=>{const m=.5+o*.1;t.style.transform=`translateY(${r*m}px)`})});const e=s.querySelector("h1");if(e){const r=e.textContent;e.textContent="";let c=0;const t=()=>{c<r.length&&(e.textContent+=r.charAt(c),c++,setTimeout(t,50))};setTimeout(t,1e3)}}async function k(){const s=document.getElementById("footer");s.innerHTML=`
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
    `;const e=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.pageYOffset>300?(e.classList.remove("opacity-0","invisible"),e.classList.add("opacity-100","visible")):(e.classList.add("opacity-0","invisible"),e.classList.remove("opacity-100","visible"))}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const r=s.querySelector('input[type="email"]').parentElement;r.addEventListener("submit",c=>{if(c.preventDefault(),c.target.querySelector('input[type="email"]').value){const o=document.createElement("div");o.className="text-green-400 text-sm mt-2",o.textContent="Thank you for subscribing!",r.appendChild(o),c.target.querySelector('input[type="email"]').value="",setTimeout(()=>{o.remove()},3e3)}})}async function E(){const s=document.getElementById("about");s.innerHTML=`
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
    `}async function S(){const s=document.getElementById("services");s.innerHTML=`
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
    `}async function L(){const s=document.getElementById("portfolio");s.innerHTML=`
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
    `}async function j(){const s=document.getElementById("contact");s.innerHTML=`
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
    `;const e=document.getElementById("contactForm");e.addEventListener("submit",r=>{r.preventDefault();const c=new FormData(e);Object.fromEntries(c);const t=document.createElement("div");t.className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6",t.innerHTML=`
            <div class="flex items-center">
                <i class="fas fa-check-circle mr-2"></i>
                <span>Thank you for your message! We'll get back to you soon.</span>
            </div>
        `,e.insertBefore(t,e.firstChild),e.reset(),setTimeout(()=>{t.remove()},5e3)})}function M(){const s={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(i=>{i.forEach(d=>{d.isIntersecting&&(d.target.classList.add("animate-fade-in"),e.unobserve(d.target))})},s);document.querySelectorAll(".card, .gradient-text, h2, h3, p").forEach(i=>{e.observe(i)});const c=document.querySelectorAll("[data-count]"),t=new IntersectionObserver(i=>{i.forEach(d=>{if(d.isIntersecting){const a=d.target,n=parseInt(a.getAttribute("data-count")),p=n/(2e3/16);let u=0;const b=setInterval(()=>{u+=p,u>=n&&(u=n,clearInterval(b)),a.textContent=Math.floor(u)+(a.getAttribute("data-suffix")||"")},16);t.unobserve(a)}})},{threshold:.5});c.forEach(i=>{t.observe(i)}),window.addEventListener("scroll",()=>{const i=window.pageYOffset;document.querySelectorAll(".parallax").forEach((a,n)=>{const l=.5+n*.1;a.style.transform=`translateY(${i*l}px)`})}),window.typeWriter=function(i,d,a=50){i.textContent="";let n=0;function l(){n<d.length&&(i.textContent+=d.charAt(n),n++,setTimeout(l,a))}l()},document.querySelectorAll(".floating-animation").forEach((i,d)=>{i.style.animationDelay=`${d*.5}s`}),document.querySelectorAll(".card, .btn-primary, .btn-secondary").forEach(i=>{i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-5px) scale(1.02)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0) scale(1)"})});const f=document.querySelectorAll("section"),v=new IntersectionObserver(i=>{i.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.2});f.forEach(i=>{v.observe(i)});const x=document.createElement("style");x.textContent=`
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        
        section.section-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `,document.head.appendChild(x)}function C(){document.addEventListener("click",a=>{if(a.target.matches('a[href^="#"]')){a.preventDefault();const n=a.target.getAttribute("href"),l=document.querySelector(n);if(l){const p=l.offsetTop-80;window.scrollTo({top:p,behavior:"smooth"})}}});const s=document.createElement("div");s.className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 transform origin-left",s.style.transform="scaleX(0)",document.body.appendChild(s),window.addEventListener("scroll",()=>{const a=window.pageYOffset,n=document.body.scrollHeight-window.innerHeight,l=a/n;s.style.transform=`scaleX(${l})`});const e=document.querySelectorAll(".parallax-bg");window.addEventListener("scroll",()=>{const a=window.pageYOffset;e.forEach((n,l)=>{const p=.5+l*.1,u=-(a*p);n.style.transform=`translateY(${u}px)`})});const r=document.querySelectorAll(".reveal"),c=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&n.target.classList.add("revealed")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});r.forEach(a=>{c.observe(a)});const t=document.getElementById("navbar");let o=0;window.addEventListener("scroll",()=>{const a=window.pageYOffset;a>100?t.classList.add("navbar-scrolled"):t.classList.remove("navbar-scrolled"),a>o&&a>200?t.style.transform="translateY(-100%)":t.style.transform="translateY(0)",o=a});const m=document.createElement("style");m.textContent=`
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        
        .reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        #navbar {
            transition: all 0.3s ease-in-out;
        }
        
        #navbar.navbar-scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .parallax-bg {
            will-change: transform;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #0ea5e9, #d946ef);
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #0284c7, #c026d3);
        }
    `,document.head.appendChild(m);const f=document.getElementById("backToTop");f&&(window.addEventListener("scroll",()=>{window.pageYOffset>300?(f.classList.remove("opacity-0","invisible"),f.classList.add("opacity-100","visible")):(f.classList.add("opacity-0","invisible"),f.classList.remove("opacity-100","visible"))}),f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));const v=document.querySelectorAll("img[data-src]"),x=new IntersectionObserver(a=>{a.forEach(n=>{if(n.isIntersecting){const l=n.target;l.src=l.dataset.src,l.classList.remove("lazy"),x.unobserve(l)}})});v.forEach(a=>{x.observe(a)});const i=document.querySelectorAll("[data-counter]"),d=new IntersectionObserver(a=>{a.forEach(n=>{if(n.isIntersecting){const l=n.target,p=parseInt(l.dataset.counter),b=p/(2e3/16);let g=0;const h=setInterval(()=>{g+=b,g>=p&&(g=p,clearInterval(h)),l.textContent=Math.floor(g)},16);d.unobserve(l)}})},{threshold:.5});i.forEach(a=>{d.observe(a)})}class P{constructor(){this.init()}async init(){try{await this.loadComponents(),this.initUtilities(),this.addEventListeners(),console.log("🚀 Personal Enterprise Website loaded successfully!")}catch(e){console.error("❌ Error initializing app:",e)}}async loadComponents(){await Promise.all([y(),w(),k(),E(),S(),L(),j()])}initUtilities(){M(),C()}addEventListeners(){document.addEventListener("click",e=>{if(e.target.matches('a[href^="#"]')){e.preventDefault();const r=document.querySelector(e.target.getAttribute("href"));r&&r.scrollIntoView({behavior:"smooth",block:"start"})}}),document.addEventListener("click",e=>{if(e.target.matches(".mobile-menu-toggle")){const r=document.querySelector(".mobile-menu");r&&r.classList.toggle("hidden")}}),document.addEventListener("click",e=>{if(!e.target.closest(".mobile-menu")&&!e.target.closest(".mobile-menu-toggle")){const r=document.querySelector(".mobile-menu");r&&!r.classList.contains("hidden")&&r.classList.add("hidden")}})}}document.addEventListener("DOMContentLoaded",()=>{new P});
