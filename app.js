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
var jsonVersFrontend;



app.post("/travishook", function (req, res) {
  
  var buildstatus =req.body.status_message;
  var dateCommit=req.body.committed_at;
  var user=req.body.committer_name;
  var repoName=req.body.repository.name;
console.log("hook is hereeeee !!!! ")
  jsonVersFrontend="{ \"buildstatus\": \""+buildstatus+"\",\"dateCommit\": \""+dateCommit+"\",\"user\": \""+user+"\",\"repoName\": \""+repoName+"\"}";
})


app.get("/travishook", function (req, res) {


res.setHeader('Access-Control-Allow-Origin','*');

 var jsonTosend=JSON.parse(jsonVersFrontend);
     return res.status(201).send(jsonTosend);

})

app.listen(port);

