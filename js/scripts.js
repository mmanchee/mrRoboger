function robotics(input) {

  let robArray = [];
  for (let i = 0; i <= input; i++) {
    robArray.push(i);
  }
  return robArray;
}



$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    event.preventDefault();
    let input1 = parseInt($("input#input1").val());


    let result = robotics(input1);
    $("#result1").text(result);
  });
});