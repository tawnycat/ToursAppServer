// when user clicks add-btn
$("#formsubmit").on("click", function(event) {
  event.preventDefault();

var newTour = {
  $("")
},

// run a loop to make all the new points?
var newPoint

// run separate posts to each table?

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newCharacter)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#role").val("");
  $("#age").val("");
  $("#force-points").val("");

});