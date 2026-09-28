const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Tetris server running at http://localhost:${PORT}`);
});
