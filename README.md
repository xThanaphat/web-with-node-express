# Personal Enterprise Website

A modern, colorful, and interactive personal enterprise website built with **Vite + Express + Tailwind CSS**. This project features a beautiful design with smooth animations, responsive layout, and comprehensive sections for showcasing business services.

## 🚀 Features

- **Modern Design**: Colorful gradient theme with glass morphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and interactive elements
- **Component-Based**: Modular JavaScript components for easy maintenance
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📁 Project Structure

```
web-with-node-express/
├── src/
│   ├── js/
│   │   ├── components/
│   │   │   ├── navbar.js
│   │   │   ├── banner.js
│   │   │   ├── about.js
│   │   │   ├── services.js
│   │   │   ├── portfolio.js
│   │   │   ├── contact.js
│   │   │   └── footer.js
│   │   ├── utils/
│   │   │   ├── animations.js
│   │   │   └── scrollEffects.js
│   │   └── main.js
│   ├── styles/
│   │   └── main.css
│   ├── assets/
│   │   └── images/
│   └── index.html
├── dist/ (built files)
├── server.js
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#d946ef to #c026d3)
- **Accent**: Orange gradient (#f97316 to #ea580c)

### Animations
- Fade-in effects on scroll
- Floating animations for background elements
- Hover effects on interactive elements
- Smooth transitions and transforms
- Parallax scrolling effects

### Components
- **Navbar**: Fixed navigation with mobile menu
- **Banner**: Hero section with animated background
- **About**: Company story and team information
- **Services**: Service cards with hover effects
- **Portfolio**: Project showcase with interactive cards
- **Contact**: Contact form and information
- **Footer**: Comprehensive footer with social links

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-with-node-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Development Mode**
   ```bash
   # Start both Vite dev server and Express server
   npm start
   
   # Or run them separately:
   npm run dev    # Vite dev server (port 5173)
   npm run server # Express server (port 3000)
   ```

4. **Production Build**
   ```bash
   # Build the project
   npm run build
   
   # Preview the build
   npm run preview
   
   # Start production server
   npm run server
   ```

## 📱 Available Scripts

- `npm start` - Start both development servers
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start Express server

## 🌐 Access Points

- **Development**: http://localhost:5173 (Vite dev server)
- **Production**: http://localhost:3000 (Express server)
- **API Health Check**: http://localhost:3000/api/health

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Content
- Update content in respective component files in `src/js/components/`
- Modify styles in `src/styles/main.css`
- Add images to `src/assets/images/`

### Animations
- Customize animations in `src/js/utils/animations.js`
- Modify scroll effects in `src/js/utils/scrollEffects.js`

## 📦 Dependencies

### Production Dependencies
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `helmet` - Security headers
- `compression` - Response compression
- `chalk` - Terminal styling

### Development Dependencies
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing
- `concurrently` - Run multiple commands
- `nodemon` - Development server

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `server.js` - Express server configuration

## 🎨 Styling

The project uses Tailwind CSS with custom components and utilities:

```css
/* Custom button styles */
.btn-primary {
  @apply bg-gradient-to-r from-primary-500 to-secondary-500;
}

/* Custom card styles */
.card {
  @apply bg-white rounded-2xl shadow-xl;
}

/* Gradient text */
.gradient-text {
  @apply bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent;
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel/Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist` folder and `server.js` to your server
3. Install production dependencies: `npm install --production`
4. Start the server: `node server.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

**Built with ❤️ using Vite + Express + Tailwind CSS** 