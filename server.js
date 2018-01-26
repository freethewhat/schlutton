var express = require('express');
var app = express();
var fileUpload = require('express-fileupload');
var path = require('path');
var fs = require('fs');
var randomString = require('randomstring');

var port = 3001;
var publicPath = path.join(__dirname + "/public/");

app.use(express.static('public'));

app.use(fileUpload());

app.get('/images', function(req, res) {
  contents = fs.readdirSync('public/img');
  res.json(contents)
})

app.post('/upload', function(req, res) {
  if(!req.files.sampleFile) {
    console.log('issues')
    return res.sendFile(path.resolve(__dirname + '/public/index.html'));
  }

  var file = req.files.sampleFile;
  var extension = file.mimetype.split('/');
  var random = randomString.generate(7);

  fs.writeFile(
    './public/img/' + random + '.' + extension[1],
    req.files.sampleFile.data,
    function(err) {
      if(err){
        console.log(err);
      }
  })

  res.sendFile(path.resolve(__dirname + '/public/index.html'));
})

app.listen(port, function() {
  console.log("Server running on http://localhost:" + port)
});
