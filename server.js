var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//========================================

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

//========================================

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// =======================================


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});