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

  return robotArray;
}

// Interface Logic
$(document).ready(function() {
  $("#input-submit").click(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    let botAnswer;
    let resultRobot;
    let resultUser;

    if (isNaN(input1)) {                // Test 1
      botAnswer = "<strong>**ERROR** **ERROR** ...</strong> Mr. Roboger can only receive numbers.";
    } else {
      botAnswer = robotics(parseInt(input1));
    };
    resultRobot = "<div class=col-6><div class=bot><div class=card-body><h5 class=card-title>Mr. Roboger:</h5>" + botAnswer + "</div></div></div>";
    resultUser = "<div class=col-6><div class=user><div class=card-body><h5 class=card-title>You:</h5>" + input1 + "</div></div></div>";

    let convo = "<div class=row>" + resultUser + resultRobot + "</div>";

    $("#result1").prepend(convo);
  });
});