const express = require("express");
const htmlRoute = require("./app/routing/htmlRoutes.js");
const apiRoute = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;

//HTML routes
app.get('/', htmlRoute.home);
app.get('/survey', htmlRoute.survey);

//API routes
app.get('/api/matches', apiRoute.matches);
app.post('/api/matches', apiRoute.findMatch);

//Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });