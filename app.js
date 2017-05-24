var port=process.env.PORT;
var express = require('express');
var app = express();  


app.get("/", function (req, res) {
    res.send('hello');
})

app.post("/travishook", function (req, res) {
    res.send(req.body);

})


app.listen(port);
