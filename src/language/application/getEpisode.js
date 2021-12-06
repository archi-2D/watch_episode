
const http = require('https');
const fs = require('fs');

//path del bucket que contiene el episodio...
var options = {
  host: 'storage.googleapis.com',
  path: '/episodes_test1234/y2mate.com%20-%20Inicio%20Intro%20de%20pelicula_360p.mp4'
};

const file = fs.createWriteStream("intro.mp4");

req = http.get(options, function(res) {
  res.pipe(file);
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
