$(document).ready(function() {
  var mainSentence = prompt("Enter your sentence.");
  console.log(mainSentence);
  var step1 = firstLast(mainSentence);
  console.log(step1);
  var step2 = reverseString(step1);
  console.log(step2);
});

function firstLast(mainSentence){
  return mainSentence.charAt(0).toUpperCase() + mainSentence.charAt(mainSentence.length-1).toUpperCase();
};

function reverseString(str) {
    return str.split("").reverse().join("");
};
