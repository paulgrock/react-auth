const express = require('express');
const path = require('path');

const app = express();
const mainIndex = path.join(__dirname, 'build/index.html');

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(mainIndex);
});

app.get('/welcome', function(req, res) {
  res.sendFile(mainIndex);
});

app.get('/logout', function(req, res) {
  res.sendFile(mainIndex);
});

app.get('/login', function(req, res) {
  res.redirect(301, '/');
});

var server = app.listen(app.get('port'), function () {
  console.log('Server listening on http://localhost:' + server.address().port);
})