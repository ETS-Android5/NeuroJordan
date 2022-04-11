let express = require("express");
let path = require('path')

let app = express();

const PORT = process.env.PORT || 80

app.use(express.static('static'));

app.listen(PORT, function() {
    console.log(PORT);
});
