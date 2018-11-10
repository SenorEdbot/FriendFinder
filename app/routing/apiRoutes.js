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
    let lowestIndex = 0;
    for (let i=0; i<scores.length; i++){
        lowestIndex = scores[i] < scores[lowestIndex] ? i : lowestIndex;
    }
    console.log(friends[lowestIndex].name);
    res.json(friends[lowestIndex]);
}