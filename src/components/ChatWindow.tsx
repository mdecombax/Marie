import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}
const ChatWindow: React.FC<{ characterInfo: { name: string; languageLevel: string; language: string; } }> = ({ characterInfo }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (userInput.trim() === '') return;
    let tempMessages = [...messages, { role: 'user', content: userInput }];

    setMessages([...messages, { role: 'user', content: userInput }]);

    // Call the Flask API
    try {
        const response = await axios.post('http://127.0.0.1:5000/chat', {
          character_name: characterInfo.name,
          language: characterInfo.language,
          lang_level: characterInfo.languageLevel,
          user_message: userInput
        });

        const assistantResponse = response.data.message;

        setMessages([...messages, { role: 'user', content: userInput }, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API:", error);
        setMessages([...messages, { role: 'user', content: userInput }, { role: 'assistant', content: "Désolé, je n'ai pas pu traiter votre demande." }]);
    }

    setUserInput('');
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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