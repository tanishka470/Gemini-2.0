// gemini.js - Main API integration file
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-flash"; // Updated working model name
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Get API key from Vite environment variable

async function runChat(prompt) {
  try {

    // Check if API key exists
    if (!API_KEY) {
      console.error('❌ ERROR: API key not found!');
      console.log('Make sure you have VITE_GEMINI_API_KEY in your .env file');
      return null;
    }

    console.log('🚀 Starting Gemini API call...');
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    console.log('📤 Sending prompt:', prompt);
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = await response.text();
    
    console.log('✅ Success! Response received:');
    console.log('📝 Answer:', text);
    return text;
    
  } catch (error) {
    console.error('❌ Gemini API error:', error.message || error);
    
    if (error.message.includes('API key')) {
      console.log('🔧 Fix: Check your API key in .env file');
    } else if (error.message.includes('model')) {
      console.log('🔧 Fix: Model name might be incorrect');
    } else if (error.message.includes('quota')) {
      console.log('🔧 Fix: API quota exceeded, try later');
    }
    
    return null;
  }
}

export default runChat;