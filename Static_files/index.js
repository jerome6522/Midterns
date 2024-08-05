var express = require('express');
var app = express();

app.use(express.static('public'));

app.get ('/', function (req, res) {
    res.send('you have Successfully created second app!');
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Exapmle app listening at http://%s:%s", host, port)
});