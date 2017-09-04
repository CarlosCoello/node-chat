const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3200;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server running on port${port}`);
})