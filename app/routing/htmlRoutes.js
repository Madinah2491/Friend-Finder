//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 

//path makes delivering pages easier 
var path = require("path");

//tells my page what route to deliver to the url
module.exports = function(app){

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

}
