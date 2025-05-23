const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

app.get('/cv', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cv.html'));
});

app.get('/github', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'github.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});