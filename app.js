var port=process.env.PORT;
var express = require('express');
var app = express();  
app.use(express.bodyParser());

app.get("/", function (req, res) {
    res.send('hello');
})

app.post("/travishook", function (req, res) {
    console.log(req.body);
    res.send(ok);

})


app.listen(port);
