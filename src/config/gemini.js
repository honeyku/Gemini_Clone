import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyDmwf0_Hp2nSVVLYO3vyE6QTJ2Yhnr8VAw";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function listModels() {
  const models = await genAI.listModels();
  models.forEach(m => console.log(m.name));
}
listModels();


const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

      const result = await chatSession.sendMessage(prompt);
      const response = result.response
      console.log(result.response.text());
      return response.text()
  
}

export default run;
