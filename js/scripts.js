$(document).ready(function() {
  var mainSentence = prompt("Enter your sentence.");
  console.log(mainSentence);

  var firstLast = mainSentence.charAt(0).toUpperCase() + mainSentence.charAt(mainSentence.length-1).toUpperCase();
  console.log(firstLast);

  var reverse = mainSentence.charAt(mainSentence.length-1).toUpperCase() + mainSentence.charAt(0).toUpperCase();
  console.log(reverse);

  var show = (firstLast);
  var show = (reverse);
  alert(show);

});
