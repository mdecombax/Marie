import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}
const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { role: 'user', content: userInput }]);
    setUserInput('');

    // Simulate a response for now
    setTimeout(() => {
      setMessages([...messages, { role: 'user', content: userInput }, { role: 'assistant', content: "C'est noté !" }]);
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-screen w-screen border rounded-lg shadow p-4 m-4 flex flex-col">
      <div className="flex-grow flex flex-col justify-end overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} role={message.role} content={message.content} />
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className="flex mt-2 border-t pt-2">
        <input
          className="flex-grow rounded-l-md border border-gray-300 px-2 py-1 mr-2"
          type="text"
          placeholder="Écrivez votre message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
          onClick={sendMessage}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;