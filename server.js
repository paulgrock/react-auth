const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('port', process.env.SERVER_PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  const mainIndex = path.join(__dirname, 'build/index.html');
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', (req, res) => {
    res.sendFile(mainIndex);
  });

  app.get('/welcome', (req, res) => {
    res.sendFile(mainIndex);
  });

  app.get('/logout', (req, res) => {
    res.sendFile(mainIndex);
  });

  app.get('/login', (req, res) => {
    res.redirect(301, '/');
  });
}

app.post('/api/auth', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "paulgrock@gmail.com" && password === "password") {
    return res.sendStatus(200)
  } 
  res.sendStatus(401);
});

var server = app.listen(app.get('port'), () => {
  console.log('Server listening on http://localhost:' + server.address().port);
})