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
    console.log(newUser, "in the apiRoute");
}