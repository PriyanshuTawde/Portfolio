// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // or any port you prefer

// 1) Serve static files so we can view index.html, images, etc.
//    __dirname is the folder where server.js lives
app.use(express.static(__dirname));

// 2) Download route for the resume
app.get('/download-cv', (req, res) => {
  // Path to "Priyanshu Resume.pdf" in your root folder
  const filePath = path.join(__dirname, 'Priyanshu Resume.pdf');
  
  res.download(filePath, 'Priyanshu-Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Something went wrong...');
    }
  });
});

// 3) Start listening
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
