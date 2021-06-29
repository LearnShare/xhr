const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(express.json());
app.use(multer().none());

app.get('/', (req, res) => {
  res.send('hello from api.');
});

app.get('/json/', (req, res) => {
  res.send({
    'test-header': req.get('test-header'),
  });
});

app.post('/json/', (req, res) => {
  // with express.json()
  const {
    username,
    password,
  } = req.body;

  res.send({
    username,
    password,
  });
});

app.post('/formdata/', (req, res) => {
  // with multer().none()
  const {
    username,
    password,
  } = req.body;

  res.send({
    username,
    password,
  });
});

app.get('/404/', (req, res) => {
  res.status(404)
    .send('not found.');
});

app.listen(3000, () => {
  console.log('server listening at http://localhost:3000');
});
