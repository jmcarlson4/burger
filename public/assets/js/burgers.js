$(function () {
    $(".burger").on("click", function (event) {
        //console.log("Something got clicked");
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
                console.log(newBurger);
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

    $(".devourme").click(function (event) {
        event.preventDefault();
        var id = event.currentTarget.dataset.id;

        $.ajax("/burger", {
            type: "PUT",
            data: id
        }).then(function () {
            location.reload();
        });

    })
});
