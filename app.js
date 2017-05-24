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
   console.log(req.method);
    console.dir(req.method);
    //var a=req;heroku
 //   res.send(ok);

})


app.listen(port);

