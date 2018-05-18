// import { userInfo } from "os";

var friends = require("../data/friends");

module.exports = function (app) {


    app.get('/api/friends', function(req, res){
        // console.log(friends);
        res.json(friends);
    });

  //  should post the newly input user info into the friendsArray in the below format
    app.post('/api/friends', function(req, res){
        console.log("we hit!");
        var bestie = {
            name:"",
            photo:"",
            differences: 100

        };

        //results from survey
        var data = req.body;
        var scores= data.scores;

        // var totalDifferences = 0;

        for (i= 0; i<friends.length; i++){
            var totalDifferences = 0;

            for (o = 0; o<friends[i].scores[o]; o++){
                //difference between scores
                totalDifferences += Math.abs(parseInt(scores[o]) - parseInt(friends[i].scores[o]));

                if (totalDifferences <= bestie.differences) {
                    bestie.name = friends[i].name;
                    bestie.photo = friends[i].photo;
                    bestie.differences = totalDifferences;
                }
            }
        }
        friends.push(data);
        res.json(bestie);
    }

    );
}