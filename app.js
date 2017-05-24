var port=process.env.PORT;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();  
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.bodyParser());

app.get("/", function (req, res) {
    res.send('hello');
})

app.post("/travishook", function (req, res) {
    console.log(req.body);
    res.send(ok);

})


app.listen(port);

