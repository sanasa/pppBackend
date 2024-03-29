var port = process.env.PORT;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.send("ok");
});

var jsonVersFrontend;

app.post("/travishook", function (req, res) {
        console.log("hook is here");

    var buildstatus = req.body.payload.status_message;
    var dateCommit = req.body.payload.committed_at;
    var user = req.body.payload.author_name;
    jsonVersFrontend = '{"buildstatus": "' + buildstatus + '","dateCommit": "' + dateCommit + '","user": "' + user + '"}';
})


app.get("/travishook", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(201).send(JSON.parse(jsonVersFrontend));
})


app.listen(port);

