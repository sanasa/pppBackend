var port=process.env.PORT;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();  

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get("/", function (req, res) {
 res.send("ok");
})

app.post("/travishook", function (req, res) {
   //console.log(req.method);
   // console.dir(req.method);
    //var a=req;heroku
  res.send(req.body.status_message);

})


app.listen(port);

