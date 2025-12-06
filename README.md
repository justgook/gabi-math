# 9th Grade Math Learning Hub

A comprehensive web-based learning platform for 9th grade algebra and geometry topics, featuring interactive visualizations, dark/light themes, and engaging practice exercises.

## Features

### 🎯 Educational Content
- **Algebra Topics**: Linear equations, quadratic functions, systems of equations
- **Geometry Topics**: Triangles, Pythagorean theorem, circles, area and perimeter
- **Interactive Practice**: Quizzes, problem-solving exercises, and instant feedback
- **Real-World Applications**: Detailed explanations of how math concepts apply to daily life
- **Career Connections**: Examples of how different professions use these mathematical concepts
- **Modern Relevance**: Why these 2,500-year-old concepts still matter in our digital age

### 🎨 Design Features
- **Dual Theme Support**: Light and dark modes with smooth transitions
- **Bilingual Support**: Full English and Latvian language support with instant switching
- **SVG Visualizations**: Interactive mathematical diagrams and graphs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: Keyboard navigation, ARIA labels, and screen reader support

### 📱 Technical Features
- **Modular Architecture**: Separate HTML, CSS, and JavaScript files
- **Modern CSS**: CSS custom properties for theming, Grid and Flexbox layouts
- **Interactive JavaScript**: Theme switching, language switching, quiz functionality, and animations
- **Internationalization**: Complete translation system with persistent language preferences
- **Performance Optimized**: Lazy loading, reduced motion support, and efficient animations

## File Structure

```
math-learning-site/
├── index.html          # Home page with overview
├── algebra.html        # Algebra concepts and examples
├── geometry.html       # Geometry concepts and examples
├── practice.html       # Interactive practice exercises
├── css/
│   └── styles.css      # Complete styling with theme system
├── js/
│   ├── main.js         # Interactive functionality
│   ├── translations.js # Language translations and management
│   └── auto-translate.js # Automatic translation helper
├── images/             # Directory for additional images (if needed)
└── README.md          # This file
```

## Pages Overview

### 1. Home Page (index.html)
- Welcome section with hero SVG illustration
- Topic overview cards for Algebra, Geometry, and Practice
- "Why Math Matters" section with career connections
- Daily life applications and modern relevance
- Feature highlights and navigation

### 2. Algebra Page (algebra.html)
- "Why Algebra Still Matters Today" relevance section
- Linear equations with real-world examples (phone plans, Uber pricing, electricity bills)
- Quadratic functions with applications (sports physics, business optimization, architecture)
- Systems of equations with practical problems (shopping decisions, traffic engineering)
- Interactive graphs and visualizations
- Practice problems with step-by-step solutions

### 3. Geometry Page (geometry.html)
- "Why Geometry Powers Our World" relevance section
- Triangles with applications (structural engineering, GPS triangulation, sports)
- Pythagorean theorem with real examples (screen technology, construction, aviation)
- Circles with practical uses (transportation, satellite dishes, food packaging)
- Area and perimeter with everyday applications
- Interactive diagrams and visual proofs

### 4. Practice Page (practice.html)
- Tabbed interface for different practice types
- Interactive problem-solving exercises
- Multiple-choice quiz with scoring
- Study tips and learning strategies

## Key Features

### Theme System
- Toggle between light and dark themes
- Persistent theme preference using localStorage
- Smooth transitions and animations
- Theme-aware SVG elements

### Language System
- **Bilingual Support**: Complete English and Latvian translations
- **Instant Switching**: Change language without page reload
- **Persistent Preference**: Language choice saved in localStorage
- **Auto-Translation**: Automatic detection and translation of common elements
- **Comprehensive Coverage**: All content including navigation, headings, descriptions, and UI elements

### SVG Visualizations
- Mathematical graphs and coordinate systems
- Geometric shapes with measurements
- Interactive elements with hover effects
- Responsive and scalable graphics

### Interactive Elements
- Answer checking with immediate feedback
- Step-by-step problem solving
- Quiz navigation and scoring
- Collapsible answer sections

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Usage

1. **Local Development**:
   ```bash
   cd math-learning-site
   python3 -m http.server 8000
   # Open http://localhost:8000 in your browser
   ```

2. **Web Server Deployment**:
   - Upload all files to your web server
   - Ensure proper MIME types for .css and .js files
   - No server-side processing required

3. **Language Features**:
   - **Language Switcher**: Dropdown in navigation (🇺🇸 EN / 🇱🇻 LV)
   - **Instant Translation**: Content changes immediately without page reload
   - **Persistent Settings**: Language preference saved across sessions
   - **Complete Coverage**: All text content translated including:
     - Navigation menus and buttons
     - Page titles and headings
     - Educational content and explanations
     - Real-world examples and applications
     - Interactive elements and feedback messages

## Educational Standards Alignment

This content is designed to align with common 9th grade mathematics standards:

### Algebra
- A-REI.3: Solve linear equations and inequalities
- A-CED.2: Create equations in two variables
- F-IF.7: Graph functions and analyze key features

### Geometry
- G-SRT.8: Use trigonometric ratios and Pythagorean theorem
- G-GMD.1: Give informal arguments for geometric formulas
- G-MG.1: Use geometric shapes to describe objects

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Theme system supports accessibility preferences
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Clear focus indicators and logical tab order

## Future Enhancements

- Additional practice problems and exercises
- Progress tracking and user accounts
- Printable worksheets and study guides
- Video explanations for complex concepts
- Integration with learning management systems

## License

This educational resource is created for learning purposes. Feel free to use and modify for educational use.

---

**Created for 9th Grade Mathematics Education**  
*Designed with accessibility, interactivity, and modern web standards in mind.*