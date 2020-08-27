// Business Logic
function robotics(input) {
  let robotArray = "";
  let indexOutput;
  let css1;
  let css2;
  let css3;
  
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
    css1 = Math.ceil(Math.random() * 5);
    css2 = Math.ceil(Math.random() * 5);
    css3 = Math.ceil(Math.random() * 5);
    robotArray = robotArray + "<span class=rStyle" + css1 + "><span class=rText" + css2 + "><span class=rColor" + css3 + ">" + indexOutput; + "</span></span></span>";
  }
  return robotArray;
}

function reply(input) {
  let botAnswer;
  let resultRobot;
  let resultUser;

  if (isNaN(input) || input === "") {                // Test 1
    botAnswer = "<strong>**ERROR** **ERROR** ...</strong> Mr. Roboger can only receive numbers.";
  } else {
    botAnswer = robotics(parseInt(input));
  };
  resultRobot = "<div class=col-6><div class=bot><div class=card-body><h5 class=card-title>Mr. Roboger:</h5>" + botAnswer + "</div></div></div>";
  resultUser = "<div class=col-6><div class=user><div class=card-body><h5 class=card-title>You:</h5>" + input + "</div></div></div>";

  let convo = "<div class=row>" + resultUser + resultRobot + "</div>";

  return convo;
}

// Interface Logic
$(document).ready(function() {
  $("#input-submit").click(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    
    let conversation = reply(input1);

    $("#result1").prepend(conversation);
  });
});