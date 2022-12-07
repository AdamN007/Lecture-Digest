import axios from "axios";

async function generateResponse(prompt) {
    try {
      console.log("Starting Generation of:" + prompt);
      // Make a request to the OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: "give a summary of this zoom lecture transcript, create a title and use the lecturers name only once. At the start of the summary say Title:, after the title start a new" + prompt,
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
  
  
  
  
  
  

export default generateResponse;