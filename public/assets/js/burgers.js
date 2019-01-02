

$(function () {
    $(".burger").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newsleep");

        var newSleepState = {
            sleepy: newSleep
        };
    })

$.ajax("/burgers", {
    type: "POST",
    data: newCat
}).then(
    function () {
        console.log("created new burger");
        location.reload();
    }
);
});