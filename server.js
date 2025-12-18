const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/resume', (req, res) => {
  res.json({
    name: 'HANNAHLY DELA CRUZ',
    title: 'College Student | BS in Information Technology (BSIT)',
    email: 'dumberbells424@gmail.com',
    location: 'Philippines',
    about: 'I am a motivated college student currently pursuing a Bachelor of Science in Information Technology (BSIT). I am eager to develop my skills in technology, problem-solving, and innovation while gaining hands-on experience through academic projects and continuous learning.',
    skills: [
      'Basic Programming (Python, Java, or C++)',
      'Web Development Fundamentals (HTML, CSS)',
      'Computer Literacy and Troubleshooting',
      'Problem Solving and Logical Thinking',
      'Teamwork and Communication Skills'
    ],
    education: [
      {
        degree: 'Bachelor of Science in Information Technology (BSIT)',
        status: 'College Student'
      }
    ],
    projects: [
      {
        title: 'Academic Projects',
        description: 'Simple system or application developed as part of coursework'
      },
      {
        title: 'Web Development',
        description: 'Basic website or program demonstrating IT fundamentals'
      }
    ],
    careerGoals: 'To become a skilled IT professional who contributes to innovative technology solutions while continuously learning and improving technical expertise.'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
