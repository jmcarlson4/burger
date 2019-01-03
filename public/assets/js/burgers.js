$(function () {
    $(".burger").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newBurger");

        var newBurgerAddition = {
            name: newBurger
        };


        $.ajax("/burgers" + id, {
            type: "PUT",
            data: newBurgerAddition
        }).then(
            function () {

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bu").val().trim(),
        };


        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
