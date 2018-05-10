//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 
var survey = require('../public/survey');

module.exports = function(app){
    app.get('api/survey', function(req, res){
        res.json(survey)
    })
}