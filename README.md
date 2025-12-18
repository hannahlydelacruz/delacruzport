# Hannahly Dela Cruz - Portfolio Website

A modern, responsive portfolio website for Hannahly Dela Cruz, a motivated IT student pursuing a Bachelor of Science in Information Technology (BSIT).

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Navigation**: Sticky navigation bar with smooth scrolling
- **Sections**:
  - Home/Hero section with call-to-action
  - About me with education details
  - Skills showcase (5 key skill areas)
  - Projects section
  - Career goals
  - Contact information
- **API Integration**: Backend API endpoint to serve resume data
- **Smooth Scrolling**: JavaScript-powered smooth navigation
- **Active Navigation**: Dynamic nav link highlighting based on scroll position

## Technologies Used

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Server**: Express static file serving

## Installation

1. Navigate to the project directory:
```bash
cd c:\Users\ii\delacruzport
```

2. Install dependencies:
```bash
npm install
```

## Running the Website

Start the server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
delacruzport/
├── public/
│   ├── index.html       # Main portfolio page
│   ├── styles.css       # Styling
│   ├── script.js        # Client-side JavaScript
│   └── 404.html         # 404 error page
├── server.js            # Express server configuration
├── package.json         # Node.js dependencies
└── README.md            # This file
```

## API Endpoint

The website includes a REST API endpoint:

- **GET** `/api/resume` - Returns resume data in JSON format

## Customization

To update your information:

1. **Personal Info**: Edit `public/index.html` - Update the hero section and contact information
2. **Skills**: Modify the skills section in `public/index.html`
3. **Projects**: Update projects in `public/index.html`
4. **Styling**: Customize colors and layout in `public/styles.css`
5. **API Data**: Update the JSON response in `server.js` at the `/api/resume` endpoint

## Features Implemented

✅ Frontend-only website with Express.js backend serving static files
✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth navigation and scroll effects
✅ Professional styling with CSS Grid and Flexbox
✅ Contact information section
✅ Skills and projects showcase
✅ 404 error page
✅ API endpoint for resume data
✅ Clean, maintainable code structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Hannahly Dela Cruz
Email: dumberbells424@gmail.com
Location: Philippines
