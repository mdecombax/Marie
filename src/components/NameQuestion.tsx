import React, { useState } from 'react';

interface Props {
  onAnswer: (name: string) => void;
}

const NameQuestion: React.FC<Props> = ({ onAnswer }) => {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <label className="mb-4 text-xl">Quel nom donner au personnage?</label>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className="p-2 border rounded"
        onBlur={() => onAnswer(name)}
      />
    </div>
  );
};

export default NameQuestion;