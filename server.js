var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.argv.PORT || 3000;
var path = require("path");
// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// // parse application/json
// app.use(bodyParser.json())
 //because I have 2 files in the public file how do I specify which I want to be the main?
// app.use(express.static(path.join(__dirname, "public")))

//use change accepted type for parsers in body 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
// var survey = require("../public/survey.html");

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// $.post('/api/friends', userInput)

// app.get("/home", function (req, res){
//     //want to pass the home page in this file
//     console.log("its working");
//         res.sendFile(path.join(__dirname, "../public/home.html"));
//     })
    
// app.get("/survey", function (req, res){
//     //want to pass the survey page in this file
//     res.sendFile(path.join(__dirname, "../public/survey.html"));
//     })
    
app.listen(PORT, function(){
    console.log("Server Started on Port 3000")
}) 