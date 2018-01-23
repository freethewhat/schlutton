var express = require('express');
var app = express();

var port = 3001;

app.use(express.static('public'));

app.listen(port, function() {
  console.log("Server running on http://localhost:" + port)
});
