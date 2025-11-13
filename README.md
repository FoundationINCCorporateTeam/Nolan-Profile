# Nolan Idle - High-Tech Portfolio 🚀

A stunning, high-tech, coding-themed personal portfolio built with React. Features multiple pages with dynamic routing, insane CSS animations, and a cyberpunk aesthetic perfect for showcasing your coding journey.

## 🌟 Features

- **Single Page Application** with React Router for dynamic multi-page navigation
- **Insane CSS Effects**: Matrix rain background, glitch effects, neon glows, animated gradients
- **5 Distinct Pages**:
  - **Home**: Hero section with terminal animation, stats, and CTA buttons
  - **About**: Personal bio with timeline, values, and profile section
  - **Projects**: Filterable project showcase with 3D card flip effects
  - **Skills**: Interactive skill bars with proficiency levels and learning section
  - **Contact**: Contact form and social links with availability status
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **High-Tech Theme**: Cyberpunk color palette with cyan, green, purple accents
- **Smooth Animations**: Page transitions, scroll effects, and hover animations
- **Easy Customization**: Clearly marked placeholders for your personal content

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FoundationINCCorporateTeam/Nolan-Profile.git
cd Nolan-Profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📝 Customization Guide

### 1. Update Personal Information

#### Home Page (`src/pages/Home.js`)
- Line 8: Update the typing animation text
- Lines 73-96: Update statistics (lines of code, projects, technologies, years)
- Lines 105-111: Add your personal description

#### About Page (`src/pages/About.js`)
- Lines 26-32: Add your profile image
- Lines 36-38: Customize your tags
- Lines 47-78: Update your biography in the code block
- Lines 88-122: Add your coding journey timeline
- Lines 135-174: Customize your core values

#### Projects Page (`src/pages/Projects.js`)
- Lines 9-61: Replace placeholder projects with your actual projects
- Add project images, descriptions, technologies, GitHub links, and live demos

#### Skills Page (`src/pages/Skills.js`)
- Lines 6-42: Update your skill levels (0-100) for all categories
- Lines 165-188: Add technologies you're currently learning
- Lines 197-215: Add your certifications and achievements

#### Contact Page (`src/pages/Contact.js`)
- Lines 65-119: Update your contact information (email, GitHub, LinkedIn, etc.)
- Line 37: Integrate with form handling service (Formspree, EmailJS, etc.)

### 2. Customize Colors

Edit the CSS variables in `src/index.css` (lines 11-23):
```css
--primary-cyan: #00ffff;
--primary-green: #00ff88;
--primary-purple: #b24bf3;
--primary-pink: #ff006e;
--primary-yellow: #ffbe0b;
```

### 3. Add Your Profile Image

Replace the placeholder in `src/pages/About.js`:
```jsx
<div className="profile-image-placeholder">
  <img src="/path/to/your/image.jpg" alt="Nolan Idle" />
</div>
```

### 4. Setup Contact Form

The contact form is currently a demo. To make it functional:

**Option 1: Formspree**
```javascript
// In src/pages/Contact.js, update handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response...
};
```

**Option 2: EmailJS**
```javascript
import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    .then((result) => {
      // Handle success...
    });
};
```

## 🎨 Project Structure

```
Nolan-Profile/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Navigation.js   # Navigation bar component
│   │   ├── Navigation.css
│   │   ├── BackgroundEffect.js  # Matrix rain effect
│   │   └── BackgroundEffect.css
│   ├── pages/
│   │   ├── Home.js         # Home page
│   │   ├── Home.css
│   │   ├── About.js        # About page
│   │   ├── About.css
│   │   ├── Projects.js     # Projects page
│   │   ├── Projects.css
│   │   ├── Skills.js       # Skills page
│   │   ├── Skills.css
│   │   ├── Contact.js      # Contact page
│   │   └── Contact.css
│   ├── App.js              # Main app with routing
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Global CSS variables and utilities
├── package.json
└── README.md
```

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## 🌐 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/Nolan-Profile",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

## 🎯 Key Technologies

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **CSS3** - Advanced animations and effects
- **Canvas API** - Matrix rain background effect

## 🎨 Design Features

- **Matrix Rain Effect**: Animated code characters falling in background
- **Glitch Text Effect**: Cyberpunk-style glitching titles
- **3D Card Flips**: Interactive project cards with flip animations
- **Neon Glow Effects**: CSS-based glow and shadow effects
- **Animated Skill Bars**: Progress bars with gradient fills
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Smooth Transitions**: Page and element animations
- **Terminal Styling**: Code-themed UI elements

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Replace Placeholders**: Search for `/* PLACEHOLDER */` comments in the code
2. **Add Images**: Put your project screenshots in the `public` folder
3. **Customize Fonts**: The project uses Google Fonts (Fira Code, Orbitron, Space Mono)
4. **Test Responsiveness**: Use browser dev tools to test on different screen sizes
5. **Performance**: Run `npm run build` to create an optimized production build

## 🐛 Troubleshooting

**Issue**: npm start fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Routing doesn't work after deployment
- **Solution**: Add a `_redirects` file (Netlify) or configure routing for your hosting platform

**Issue**: Background effects lag on mobile
- **Solution**: The effects are automatically reduced on mobile. Check `BackgroundEffect.css` media queries.

## 📞 Support

If you have questions or need help customizing your portfolio, feel free to open an issue!

---

**Built with ❤️ and ☕ by Nolan Idle**

*"Code is poetry, and this portfolio is my masterpiece."*