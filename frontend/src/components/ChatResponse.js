import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatResponse({ response }) {
  return (
    <div className="chat-response" style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>
      <strong>🤖 AI Answer:</strong>
      <div style={{ marginTop: '10px' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{response}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatResponse;