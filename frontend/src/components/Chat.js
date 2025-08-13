import React, { useState } from 'react';
import axios from 'axios';
import ChatResponse from './ChatResponse';

function Chat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/chat/ask', { prompt });
      setResponse(res.data.answer);
      setError('');
    } catch (err) {
      console.error("Error fetching AI response:", err.message);
      setError("Error connecting to the AI. Try again.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧠 EduChat AI - Ask Your Doubts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything about your studies..."
          style={{ width: '80%', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Ask</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {response && <ChatResponse response={response} />}
    </div>
  );
}

export default Chat;