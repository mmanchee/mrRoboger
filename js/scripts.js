// Business Logic
function robotics(input) {
  let robotArray = "";
  let indexOutput;
  let cssInject;
  
  for (let i = 0; i <= input; i++) {    
    if (/[3]+/g.test(i)) {              // Test 5 
      indexOutput = " W0n't you b3 my n3ighb0r?";
    } else if (/[2]+/g.test(i)) {       // Test 4
      indexOutput = " B00p!";
    } else if (/[1]+/g.test(i)) {       // Test 3
      indexOutput = " B33p!";
    } else {
      indexOutput = " " + i;
    }

    // robotArray.push(indexOutput);       // Test 2

    cssInject = Math.floor(Math.random() * 10);
    robotArray = robotArray + "<span class=saying" + cssInject + ">" + indexOutput; + "</span>";
  }
  robotArray = "<div class=row><div class=card ><div class=card-back>" + robotArray + "</div></div></div";
  return robotArray;
}

// Interface Logic
$(document).ready(function() {
  $("#robot-form").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    let result1;
    let result1a;

    if (isNaN(input1)) {                // Test 1
      result1 = "Mr. Roboger can only receive numbers.";
    } else {
      result1 = robotics(parseInt(input1));
      result1a = "<div class=row><div class=card ><div class=card-back>" + input1 + "</div></div></div";
    };

    $("#result1").html(result1);
    $("#result1a").html(result1a);
  });
});