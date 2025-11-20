# Portfolio Website

A modern, responsive portfolio website built with Angular, showcasing web design and development abilities with stunning animations and professional presentation.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Looks great on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **Professional Sections**:
  - Hero/Landing section with animated elements
  - About section with professional timeline
  - Skills showcase with animated progress bars
  - Portfolio projects with filtering
  - Contact form with validation
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Performance Optimized**: Fast loading with optimized code and assets
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices

## 🛠️ Built With

- **Angular 17+** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling with advanced CSS features
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Animations** - Smooth transitions and effects

## 📦 Installation & Setup

1. **Prerequisites**: Make sure you have Node.js and Angular CLI installed
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm start
   # or
   ng serve
   ```
4. **Open Browser**: Navigate to `http://localhost:4200`

## 🎨 Customization Guide

### Personal Information

1. **Update Personal Details** in each component:
   - `hero.component.ts` - Name, title, subtitle
   - `about.component.ts` - About text, experiences, achievements
   - `contact.component.ts` - Contact information, social links

2. **Skills & Technologies** in `skills.component.ts`:
   - Update technical skills and proficiency levels
   - Modify design skills and tools
   - Add/remove technologies as needed

3. **Portfolio Projects** in `portfolio.component.ts`:
   - Replace sample projects with your actual work
   - Update project descriptions, technologies, and links
   - Add project images to `src/assets/projects/`

### Styling & Colors

1. **Color Scheme** - Update the main gradient colors in:
   - Global variables in `styles.scss`
   - Component-specific SCSS files
   - Default: Purple gradient (#667eea to #764ba2)

2. **Typography** - Customize fonts in `styles.scss`:
   - Currently using Inter font from Google Fonts
   - Update font imports and font-family declarations

3. **Animations** - Modify or add animations in:
   - Global animations in `styles.scss`
   - Component-specific animations in each `.scss` file

### Content Sections

1. **Navigation** - Update menu items in `navbar.component.ts`
2. **Footer** - Modify footer content in `app.component.html`
3. **SEO Meta Tags** - Update in `src/index.html`

### Adding New Sections

1. Create new component: `ng generate component components/new-section`
2. Add component to `app.module.ts`
3. Include in `app.component.html`
4. Update navigation if needed

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below  
- **Desktop**: 1200px and above

## 🎯 Performance Tips

1. **Images**: Optimize images before adding to `assets/`
2. **Lazy Loading**: Consider implementing lazy loading for images
3. **Bundle Analysis**: Run `ng build --stats-json` and analyze bundle size

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
ng build --prod
```

### Deploy to Popular Platforms

**Netlify**:
1. Build: `ng build --prod`
2. Publish directory: `dist/about-me`

**Vercel**:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

**GitHub Pages**:
1. Install: `npm install -g angular-cli-ghpages`
2. Deploy: `ng deploy --base-href=/repository-name/`

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎨 Design Credits

- Icons: Native emojis for cross-platform compatibility
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Color Scheme: Custom gradient palette
- Animations: Custom CSS animations

## 📞 Support

If you need help customizing this portfolio or have questions:

1. Check the documentation above
2. Look for similar issues in the repository
3. Create a new issue with your question

---

**Happy coding!** 🚀 Create something amazing with this portfolio template.
