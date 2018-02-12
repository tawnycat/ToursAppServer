$(document).on("click", "#formsubmit", function() {
    console.log("we're in");
    event.preventDefault();

    var point1 = {
        title: $("#point1name").val().trim(),
        latitude: $("#point1lat").val(),
        longitude: $("#point1long").val(),
        description: $("#point1description").val().trim()
    }

    var point2 = {
        title: $("#point2name").val().trim(),
        latitude: $("#point2lat").val(),
        longitude: $("#point2long").val(),
        description: $("#point2description").val().trim()
    }

    var point3 = {
        title: $("#point3name").val().trim(),
        latitude: $("#point3lat").val(),
        longitude: $("#point3long").val(),
        description: $("#point3description").val().trim()
    }

    var pointArray = [];

    $.post("/api/point", point1)

        .done(function(data) {
            console.log(data);
            pointArray.push(data);
            pointTwo();
        });

    function pointTwo() {
        $.post("/api/point", point2)

            .done(function(data) {
                console.log(data);
                pointArray.push(data);
                pointThree();
            });
    }

    function pointThree() {
        $.post("/api/point", point3)

            .done(function(data) {
                console.log(data);
                pointArray.push(data);
                tour();
            });
    }

    var newTour = {
        title: $("#tourTitleInput").val().trim(),
        city: $("#tourCityInput").val(),
        category: $("#tourCategoryInput").val().trim(),
        description: $("#tourDescriptionInput").val().trim(),
        price: $("#tourPrice").val(),
        photo: $("#tourPhotoInput").val().trim(),
        points: pointArray
    }

    //console.log(newTour);

    function tour() {
    pointArray.map(p => {p.createdAt = null; p.updatedAt = null;});
    $.post("/api/tour", newTour)
        .done(function(data) {
            console.log(data);
        })
    }

    // // empty each input box by replacing the value with an empty string
    // $("#name").val("");
    // $("#role").val("");
    // $("#age").val("");
    // $("#force-points").val("");

});