$(document).ready(function() {
  var mainSentence = prompt("Enter your sentence.");
  console.log(mainSentence);
  var step1 = firstLast(mainSentence);
  console.log(step1);
  var step2 = reverseString(step1);
  console.log(step2);
  var step3 = showResult(mainSentence.concat(step2));
});

function firstLast(mainSentence){
  return mainSentence.charAt(0).toUpperCase() + mainSentence.charAt(mainSentence.length-1).toUpperCase();
};

function reverseString(str) {
  // Use the split() method to return a new string
  var splitString = str.split("");
  // Use the reverse() method to reverse the new array
  var reverseArray = splitString.reverse();
  // Use the join() method to reconnect all the elements of the array into a string
  var joinArray = reverseArray.join("");
  // Return the reversed string
  return joinArray;
};

function showResult(show1) {
  alert(show1);
};
