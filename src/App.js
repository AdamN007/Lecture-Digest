import './App.css';
import generateResponse from './ChatGPT';
import React, { useState } from "react";
import splitString from './TextCompressor';
import finalGeneration from './FinalGeneration';

function TextForm() {
  // Create a state variable to store the text entered by the user
  const [text, setText] = useState("");

  const [response, setResponse] = useState("");

  const [title, setTitle] = useState("");

  let wordsBefore = "";

  function handleChange(event) {
    // Update the state variable with the value of the text input field
    setText(event.target.value);
  }

  async function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Use `try` and `catch` to handle any errors that may occur
    try {
      let dividedText =[];
      let summarizedText = [];
      let i = 0;
      // divides the text into an array of strings each 2000 words in length.
      dividedText =  splitString(text);
  
      console.log(dividedText);
  
      for(i = 0; i < dividedText.length; i++){
        console.log(dividedText.length);
        // Use `await` to wait for the response from the `generateResponse` function
        const res = await generateResponse(dividedText[i]);
  
        console.log(res.data);
        let inputString = res.data.choices[0].text;
  
        console.log(inputString);
        let titleIndex = inputString.indexOf("Title:");
  
        if (titleIndex >= 0) {
          // If "Title:" was found, delete everything before it
          console.log("AMONG US");
  
          inputString = inputString.substring(titleIndex);
        }
  
        summarizedText[i] = inputString;
      
  
      // Now that the loop has finished, we can generate the final summary
      if(i === 2){
        console.log("started final summary")
        const finalString = summarizedText.join(" ");
        console.log(finalString);
        // Use `await` again to wait for the response from the `generateResponse` function
        const res = await finalGeneration(finalString);
        console.log(res.data);
        let inputString = res.data.choices[0].text;
  
        console.log(inputString);
        let titleIndex = inputString.indexOf("Title:");
  
        if (titleIndex >= 0) {
          // If "Title:" was found, delete everything before it
          console.log("Among us");
  
          inputString = inputString.substring(titleIndex);
        }

        // Find the index of "Among Us" in the inputString
        const titleIndexFinal = inputString.indexOf("Among Us");

      if (titleIndex >= 0) {
        // If "Among Us" was found, create a new variable that saves the words before it
      wordsBefore = inputString.substring(0, titleIndexFinal );

      // Delete the words before "Among Us" in the original string
      inputString = inputString.substring(titleIndexFinal );
} 
        setTitle(wordsBefore);
        setResponse(inputString);
        
      }}
    } catch (error) {
      // Handle any errors that may occur
      console.error(error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a transcript:</label><br />
      <input type="text" value={text} onChange={handleChange} /><br />
      <button type="submit">Submit</button>
      <div className="ResponseBox">
        {title && <h1>{title}</h1>}
        {response && <p>{response}</p>}
      </div>
    </form>
  );
}

export default TextForm;
