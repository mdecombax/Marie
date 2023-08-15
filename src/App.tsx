import React from 'react';
import ChatWindow from './components/ChatWindow';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center h-full w-full">
      <ChatWindow />
    </div>
  );
}
export default App;
