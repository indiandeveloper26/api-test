// index.js
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.json({ message: 'API working ✅' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
