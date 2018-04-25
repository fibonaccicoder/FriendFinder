var express = require("express");
var fs = require("fs");
var path = require("path");


var router = express.Router();


module.export = function (app) {
    //default route is to home page
    router.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, './public/home.html'));
    });

    //this route sends to the survey page
    router.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, './public/survey.html'));
    });
}