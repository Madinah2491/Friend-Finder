var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var PORT = process.argv.PORT || 3000;

// // // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// //use change accepted type for parsers in body 
// // parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// // parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// // parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))
// // var survey = require("../public/survey.html");

// require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);

// // $.post('/api/friends', userInput)

// // app.get("/home", function (req, res){
// //     //want to pass the home page in this file
// //     console.log("its working");
// //         res.sendFile(path.join(__dirname, "../public/home.html"));
// //     })
    
// // app.get("/survey", function (req, res){
// //     //want to pass the survey page in this file
// //     res.sendFile(path.join(__dirname, "../public/survey.html"));
// //     })
    
// app.listen(PORT, function(){
//     console.log("Server Started on Port 3000")
// }) 