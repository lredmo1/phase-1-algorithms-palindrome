// Write a function that determines if a word is the same letters forward and backward.
// Try racecar, mom, and Lisa



function isPalindrome(word) {
  let lettersArray = word.split("")
  let reverseLettersArray = lettersArray.reverse()
  let newWord = reverseLettersArray.join("")
  return (word === newWord ? true : false)
 }



// The function will take in a word and split it up by letter. Then it will reverse the letters in the array and rejoin them back together. This will be set to a new variable name and compared to the original word. If they are equal the word function will return true. If they are not the same, it will return false.

/*
  Add written explanation of your solution here
  //I'm not sure what this means.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
