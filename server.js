const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Allow cross-origin requests from anywhere (for testing).
// In production, you can specify just your domain.
app.use(cors());

app.get('/download-cv', (req, res) => {
  // Path to your PDF inside the server
  const filePath = path.join(__dirname, 'Priyanshu Resume.pdf'); 

  res.download(filePath, 'Priyanshu-Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading:', err);
      res.status(500).send('Server error');
    }
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
