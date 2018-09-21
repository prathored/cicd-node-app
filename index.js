//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('llo world');
    console.log('someone visited the site');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up and running on port 3000');
});

module.exports = app;
