import axios from "axios";

async function finalGeneration(prompt) {
    try {
        console.log("-----------------------------FINAL-GENERATION------------------------------")
      console.log("Starting Generation of:" + prompt);
      // Make a request to the OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: prompt + "            Give a summary of this text and give it a title. at the end of the title say the word Among us all uppercase, put the title before the summary",
          model: "text-davinci-003",
          temperature: 0.7,
          top_p : 0.9,
          frequency_penalty: 0.0,
          presence_penalty: 1,
          max_tokens: 1064,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
  
      // Return the response data as a Promise object
      return Promise.resolve(response);
    } catch (error) {
      // Handle any errors
      console.log(error.response);
      console.error(error);
      return Promise.reject(error);
    }
  }
  
  
  
  
  
  

export default finalGeneration;