import React from 'react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  const isUser = role === 'user';

  return (
    <div className={`mb-2 ${isUser ? 'text-right' : ''}`}>
      <div className={`inline-block py-2 px-4 max-w-3/4 break-words rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        {content}
      </div>
    </div>
  );
}

export default ChatMessage;