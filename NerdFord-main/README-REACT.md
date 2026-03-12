# Drakex University - React + Tailwind CSS

A modern, fully responsive school website built with React, React Router, and Tailwind CSS.

## Features

- **Modern Tech Stack**: React 18, React Router v6, Tailwind CSS
- **Multiple Pages**: 
  - Home - Hero section, stats, features, programs, testimonials
  - Academics - Comprehensive program listings across all levels
  - Campus Life - Sports, arts, clubs, facilities, and events
  - About Us - History, mission, values, and leadership
  - Contact - Contact form, department info, and FAQ
  - Registration - Full application form with validation
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Working navigation, forms, and dynamic content
- **Beautiful UI**: Modern gradients, shadows, and smooth transitions
- **Rich Content**: Extensive information about programs, facilities, and campus life

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Drakex-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

This project is ready for one-click deployment to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

**Quick Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite settings
4. Click Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Other Platforms

The project can also be deployed to:
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use `gh-pages` package
- **AWS S3:** Upload `dist` folder to S3 bucket
- **Any static hosting:** Upload the `dist` folder

## Project Structure

```
Drakex-main/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── Academics.jsx    # Academic programs
│   │   ├── CampusLife.jsx   # Campus life & recreation
│   │   ├── About.jsx        # About the university
│   │   ├── Contact.jsx      # Contact page
│   │   └── Registration.jsx # Application form
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── img/                     # Images directory
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## Pages Overview

### Home
- Hero section with call-to-action
- University statistics
- Key features and benefits
- Program categories
- Student testimonials
- Call-to-action section

### Academics
- Undergraduate programs (Engineering, Business, Arts, Sciences)
- Graduate programs (Advanced degrees)
- Doctoral programs (Ph.D. and professional degrees)
- Program details with duration and degree types
- Faculty and accreditation information

### Campus Life
- Sports & Recreation facilities
- Arts & Culture programs
- Student organizations (200+ clubs)
- Social spaces and amenities
- Campus facilities (dining, housing, technology)
- Annual events and activities

### About Us
- University history timeline
- Mission and vision statements
- Core values
- Leadership team
- Achievements and rankings

### Contact
- Contact form with validation
- Department contact information
- Office hours and location
- FAQ section
- Social media links

### Registration
- Comprehensive application form
- Personal information section
- Academic background
- Program selection
- Personal statement
- Application requirements and deadlines

## Customization

### Colors
Edit `tailwind.config.js` to change the primary color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
All content is in the respective page components in `src/pages/`. Simply edit the JSX to update text, images, or structure.

### Images
Replace images in the `img/` directory with your own. Make sure to use the same filenames or update the image paths in the components.

## Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see LICENSE file for details

## Credits

Original design by Chiagozie Okafor
React conversion with enhanced features and content
