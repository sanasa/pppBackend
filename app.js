var port=process.env.PORT;
var express = require('express');
var app = express();  
app.use(express.bodyParser());

app.get("/", function (req, res) {
    res.send('hello');
})

app.post("/travishook", function (req, res) {
    console.dir(req.body);
    res.send(req.body);

})


app.listen(port);
