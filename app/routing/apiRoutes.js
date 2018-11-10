const friends = require("../data/friends.js");

exports.matches = function (req, res) {
    return res.json(friends);
}

exports.findMatch = function (req, res) {
    let a = req.body;
    let newUser = {
        name: a.name
        , photo: a.photo
        , score: []
    };
    a.score.forEach(score => {
        newUser.score.push(parseInt(score));
    });
    let scores = [];
    let totalScore = 0;
    for (let i=0; i<friends.length; i++){
        for (let j=0; j<friends[i].score.length; j++){
            totalScore += Math.abs(newUser.score[i] - friends[i].score[j])
        }
        scores.push(totalScore);
        totalScore = 0;
    }
    let highestIndex = 0;
    for (let i=0; i<scores.length; i++){
        highestIndex = scores[i] > scores[highestIndex] ? i : highestIndex;
    }
    console.log(highestIndex);
    console.log(friends[highestIndex].name);
    console.log(scores, "at the end of findMatch");
    console.log(newUser, "in the apiRoute");
}
// Loop through the friends Array
// for every person in that array loop through their score and add up the absolute differences
