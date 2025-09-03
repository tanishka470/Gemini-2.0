// test.js - Test file to check if everything works
import runChat from './src/config/Gemini.js';

async function testReactQuestion() {
  console.log('🔍 Testing Gemini API with React JS question...');
  console.log('=' .repeat(50));
  
  const question = "What is React JS? Give me a brief explanation.";
  const answer = await runChat(question);
  
  if (answer) {
    console.log('=' .repeat(50));
    console.log('🎉 SUCCESS! Your setup is working correctly!');
  } else {
    console.log('=' .repeat(50));
    console.log('❌ FAILED! Check the error messages above.');
  }
}

// Run the test
testReactQuestion();