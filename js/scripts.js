$(document).ready(function() {
  var mainSentence = prompt("Enter your sentence.");
  console.log(mainSentence);
  var step4 = showResult(mainSentence);
  var step5 = middle(mainSentence) + step4;
  alert(step5);

  $("img#code").click(function() {
    alert(step5);
  });

  $("img#org").click(function() {
    alert(mainSentence);
  });
});

function firstLast(mainSentence){
  return mainSentence.charAt(0).toUpperCase() + mainSentence.charAt(mainSentence.length-1).toUpperCase();
};

function reverseFL(mainSentence) {
  return mainSentence.charAt(mainSentence.length-1).toUpperCase() + mainSentence.charAt(0).toUpperCase();
};

function showResult(userInput) {
  var step1 = firstLast(userInput);
  console.log(step1);
  var step2 = reverseFL(step1);
  console.log(step2);
  var step3 = userInput.concat(step2);
  console.log(step3);
  return step3;
};

function middle(mainSentence) {
  return mainSentence.charAt(mainSentence.length/2);
};
