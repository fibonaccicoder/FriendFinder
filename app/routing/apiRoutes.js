var express = require("express");
var path = require("path");
var router = express.Router();

//===================================

var survey = require("./data/survey.html");
var friends = require("./data/friends.js");


module.exports = function (app) {

    router.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    router.post("/api/friends", function (req, res) {

        //initialize variables and return as json object
        var vibetribe = req.body;
        console.log(vibetribe);



        var newScores = vibetribe.scores;
        var differenceArray = [];
        var matchIndex = 0;

        //logic for scores

        for (var i = 0; i < friends.length; ++i) {
            var scoreDifference = 0;
            for (var j = 0; j < newScores.length; ++j) {
                scoreDifference += Math.abs(parseInt(vibetribe[i].scores[j]) - parseInt(newScores[j]));
            }
            differenceArray.push(scoreDifference);
        }

        for (var i = 0; i < differenceArray.length; ++i) {
            if (differenceArray[i] <= differenceArray[matchIndex]) {
                matchIndex = i;
            }
        }

        console.log(vibetribe[matchIndex]);
        res.json(true)

        friends.push(vibetribe);
    });

};



// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/home.html"));
// });

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/survey.html"));
// });

// app.use("/", htmlRoutes);
// app.use("/api/friends", apiRoutes);







//??

//         var newFriendSum = arraySum(newFriend.scores);
//         var mostCompatibleFriend;
//         var mostCompatibleDifference = 10000;

//         for (var i = 0; i < friends.length; i++) {
//             var friendsScore = arraySum(friends[i].scores);

//             var difference = parseInt(newFriendSum) - parseInt(friendsScore);
//             difference = Math.abs(difference);

//             if (difference < mostCompatibleDifference) {
//                 mostCompatibleFriend = friends[i];
//                 mostCompatibleDifference = difference;

//             }
//         }


//         friends.push(newFriend);

//         res.json(mostCompatibleFriend);
//         console.log("friend" + JSON.stringify(mostCompatibleFriend));
//         console.log("friend" + mostCompatibleFriend.name);
//         console.log("difference" + difference);
//     });

// }

// function arraySum(scoreArray) {
//     var userSum = 0;
//     for (var i = 0; i < scoreArray.length; i++) {
//         userSum += parseInt(scoreArray[i]);
//     }
//     return userSum;
// }