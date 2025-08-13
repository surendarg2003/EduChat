// controllers/chatController.js
const axios = require('axios');

exports.askQuestion = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      'https://api.together.xyz/v1/completions ',
      {
        model: 'mistralai/Mistral-7B-Instruct-v0.1', // You can also use 'meta-llama/Llama-3-8b-chat-hf'
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7,
        top_p: 0.7,
        repetition_penalty: 1,
        type: "greedy"
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.TOGETHER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error("Together AI Error:", error.message);
    res.status(500).json({ error: "Error with Together AI API" });
  }
};