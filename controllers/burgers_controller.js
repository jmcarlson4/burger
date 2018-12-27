var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/", function (request, response) {
    burgers.selectAll(function (data) {
         console.log(data);
         response.json(data);
    });
});



module.exports = router;