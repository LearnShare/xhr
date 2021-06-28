const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from api.');
});

app.get('/404/', (req, res) => {
  res.status(404)
    .send('not found.');
});

app.listen(3000, () => {
  console.log('server listening at http://localhost:3000');
});
