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

    console.log(req.body);
    var buildstatus = req.body.payload.status_message;
    var dateCommit = req.body.payload.committed_at;
    var user = req.body.payload.author_name;
    var repoName = req.body.payload.repository.name;
    jsonVersFrontend = "{ \"buildstatus\": \"" + buildstatus + "\",\"dateCommit\": \"" + dateCommit + "\",\"user\": \"" + user + "\",\"repoName\": \"" + repoName + "\"}";
    console.log('hook is hereeee');
});


app.get("/travishook", function (req, res) {


    res.setHeader('Access-Control-Allow-Origin', '*');

    var jsonTosend = JSON.parse(jsonVersFrontend);
    return res.status(201).send(jsonTosend);

});
// var repoName = req.body.repository.name;

app.listen(port);

