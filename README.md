# Kevin Zogu - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Senior Software Developer.

## 🌐 Live Demo

[https://kevinzogu.github.io](https://kevinzogu.github.io) *(after deployment)*

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations
- **Interactive Elements** - Typing animation, hover effects, scroll animations
- **Contact Form** - Easy way for recruiters to reach out
- **Dark Theme Code Block** - Showcases developer aesthetic
- **SEO Optimized** - Proper meta tags for search engines and social sharing

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter, Fira Code)

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML file
├── style.css       # All styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click **New Repository**
3. Name it `kevinzogu.github.io` (must be this exact format for GitHub Pages)
4. Make it **Public**
5. Click **Create Repository**

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all files from the `portfolio` folder
3. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to portfolio folder
cd portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/kevinzogu/kevinzogu.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your portfolio will be live at: `https://kevinzogu.github.io`

## 📝 Customization

### Adding New Projects

Edit the `index.html` file and add new project cards in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="project-screenshot.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tags">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
    </div>
</div>
```

### Updating Contact Form

The form uses `mailto:` which opens the user's email client. For a functional backend form, consider:
- [Formspree](https://formspree.io) (free tier available)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary: #0ea5e9;      /* Main accent color */
    --secondary: #1e3a5f;    /* Secondary color */
    --dark: #0f172a;         /* Dark backgrounds */
    --light: #f1f5f9;        /* Light backgrounds */
}
```

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 📞 Contact

- **Email:** kevinzogu@gmail.com
- **LinkedIn:** [Kevin Zogu](https://www.linkedin.com/in/kevin-zogu-b08ab0112/)
- **Phone:** +355 68 39 03 809

---

*Built with ❤️ by Kevin Zogu | © 2026*
