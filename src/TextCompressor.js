
function splitString(str) {
    // Use the `.match()` method to find all the words in the string
    // This returns an array of words, or `null` if there are no words
    const words = str.match(/\b\w+\b/g);
    
    // Initialize an empty array to store the split strings
    const splitStrings = [];
    
    // Initialize a counter variable to keep track of the current position in the array of words
    let counter = 0;
  
    // Keep looping until we've reached the end of the array of words
    while (counter < words.length) {
      // Use the `.slice()` method to create a new array of the next 2000 words
      // This starts at the `counter` variable and goes for 2000 words
      const slice = words.slice(counter, counter + 2000);
  
      // Use the `.join()` method to join the array of words into a single string
      // This separates the words with a space character
      const splitString = slice.join(' ');
  
      // Add the split string to the array of split strings
      splitStrings.push(splitString);
  
      // Increment the counter variable by 2000 to move to the next set of 2000 words
      counter += 2000;
    }
  
    // Return the array of split strings
    return splitStrings;
  }

  export default splitString;