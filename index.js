const express = require('express'); // CommonJS Modules

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hi There!!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
