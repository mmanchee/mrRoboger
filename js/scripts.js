$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    let input1 = $("input#input1").val();


    let result = robotics(input);
    $("#result1").text(result);
  });
});