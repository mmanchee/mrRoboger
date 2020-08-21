// Business Logic
function robotics(input) {
  let robotArray; // = [];
  let indexOutput;
  
  for (let i = 0; i <= input; i++) {    
    if (/[3]+/g.test(i)) {              // Test 5 
      indexOutput = " <span class='saying3'>Won't you be my neighbor?";
    } else if (/[2]+/g.test(i)) {       // Test 4
      indexOutput = " <span class='saying2'>Boop!</span>";
    } else if (/[1]+/g.test(i)) {       // Test 3
      indexOutput = " <span class='saying1'>Beep!</span>";
    } else {
      indexOutput = " " + i;
    }
    cssInject = Math.
    robotArray = robotArray + "<span class=saying" +  + ">" + indexOutput; + "</span>";
    // robotArray.push(indexOutput);       // Test 2
  }
  
  return robotArray;
}

// Interface Logic
$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    let result1;

    if (isNaN(input1)) {                // Test 1
      result1 = "Mr. Roboger can only receive numbers.";
    } else {
      result1 = robotics(parseInt(input1));
    };

    $("#result1").html(result1);
  });
});