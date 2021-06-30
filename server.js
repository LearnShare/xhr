const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

const upload = multer({
  dest: 'uploads/',
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from api.');
});

app.get('/json/', (req, res) => {
  res.send({
    'test-header': req.get('test-header'),
  });
});

app.post(
  '/json/',
  express.json(),
  (req, res) => {
    const {
      username,
      password,
    } = req.body;

    res.send({
      username,
      password,
    });
  },
);

app.post(
  '/formdata/',
  upload.none(),
  (req, res) => {
    const {
      username,
      password,
    } = req.body;

    res.send({
      username,
      password,
    });
  },
);

app.post(
  '/upload/',
  upload.single('avatar'),
  (req, res) => {
    res.send(req.file);
  },
);

app.get('/404/', (req, res) => {
  res.status(404)
    .send('not found.');
});

app.listen(3000, () => {
  console.log('server listening at http://localhost:3000');
});
