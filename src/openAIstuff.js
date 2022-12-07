import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-n8pbSAirtDeTJnrGSJRdcwHI",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

export default configuration;