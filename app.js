var port=process.env.PORT;
var express = require('express');
var app = express();  


app.get("/", function (req, res) {
    res.send('hello');
})

app.get("/travishook", function (req, res) {
    res.send("api woks");

})


app.listen(port);
