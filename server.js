var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var path = require("path");
// var logger = function(req, res, next){
//     console.log("Logging");
//     next();
// }

// app.use(logger);

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 //because I have 2 files in the public file how do I specify which I want to be the main?
app.use(express.static(path.join(__dirname, "public/home.html")))

var friendsList= [
    {
        name: "Joan",
        photo: 25,
        scores: []
    },
    {
        name: "Jeff",
        photo: 35,
        scores:[]
    }
]

app.get("/", function (req, res){
//want to pass the home page in this file
    res.json(friendsList);
})



app.listen(3000, function(){
    console.log("Server Started on Port 3000")
});

 

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })