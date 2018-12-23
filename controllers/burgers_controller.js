var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/", function (request, response) {
    burgers.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        response.render(hbsObject);
    });
});

router.post("/api/burgers", function (request, response) {
    burgers.create(["type"], [request.body.type], function (result) {

        response.json({ id: result.insertId });
    });
    console.log(result.insertId);
});
router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;

    console.log(condition);

    burger.update(
        {
            name: req.body.type
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});


module.exports = router;