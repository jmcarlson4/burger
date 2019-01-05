var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function (request, response) {
    burgers.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.get("/api", function (request, response) {
    burgers.selectAll(function (data) {
        console.log(data);
        response.json(data);
    });
});
router.post("/burgers", function (request, response) {
    burgers.create([
        "Burger_name", "Devoured"
    ], [
            request.body.Burger_name, request.body.Devoured],
        function (result) {

            response.json({ id: result.insertId });
        });
});

router.put("/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);

    burgers.update({
        Devoured: request.body.Devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

module.exports = router;