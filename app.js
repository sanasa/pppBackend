var port=process.env.PORT;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();  
//var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.bodyParser());

app.get("/", function (req, res) {
    res.send('hello');
})

app.post("/travishook", function (req, res) {
   // console.log(req.body);
    var a=req;
    res.send(a);

})


app.listen(port);

