$(document).ready(function() {
  var mainSentence = prompt("Enter your sentence.");
  console.log(mainSentence);
  var firstLast = mainSentence.charAt(0) + mainSentence.charAt(mainSentence.length-1);
  console.log(firstLast);
});
