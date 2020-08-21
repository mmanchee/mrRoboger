function robotics(input) {
  let robArray = [];
  let test;
  
  for (let i = 0; i <= input; i++) {
    if (/[1]+/g.test(i)) {
      test = "Beep!";
    } else {
      test = i;
    }
    robArray.push(test);    
  }

  return robArray;
}



$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    let result;

    if (isNaN(input1)) {
      result = "Mr. Roboger can only receive numbers.";
    } else {
      result = robotics(parseInt(input1));
    };

    $("#result1").text(result);
  });
});