let express = require("express");
let path = require('path')

let app = express();

const PORT = process.env.PORT || 80

//app.use(express.static(__dirname + "/static"));

//app.use("static/index.html");

/*app.use(function(req, res, next) {
   console.log(`${new Date()} - ${req.method} request for ${req.url}`);
   next();
});*/
/*app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
    res.sendFile(__dirname + '/static/Model_js2/model.json');
});*/

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, function() {
    console.log(PORT);
});
