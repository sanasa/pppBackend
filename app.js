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

var jsonVersFrontend="";

app.post("/travishook", function (req, res) {
    var buildstatus = req.body.status_message;
    var dateCommit = req.body.committed_at;
    var user = req.body.author_name;
    jsonVersFrontend = "{'buildstatus': " + buildstatus + ",'dateCommit': " + dateCommit + ",'user': " + user + "}";
})


app.get("/travishook", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(201).send(JSON.parse(jsonVersFrontend));
})


app.listen(port);

