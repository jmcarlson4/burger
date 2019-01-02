var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/api", function (request, response) {
    burgers.selectAll(function (data) {
        console.log(data);
        response.json(data);
    });
});
router.post("/burgers", function (request, response) {
    burgers.insertOne(function (response) {
        console.log(response);
        response.json(response);
    });
});

router.put("/burgers/:id", function (request, response) {
    burgers.updateOne(function (response) {
        console.log(response);
        response.json(response);
    });
});


router.get("/", function(req, res) {
    burgers.selectAll(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  




module.exports = router;