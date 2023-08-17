import React from 'react';

interface Props {
  onAnswer: (language: string) => void;
}

const LanguageQuestion: React.FC<Props> = ({ onAnswer }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4">
      <div className="text-xl mb-4">Quelle est la langue du personnage?</div>
      <div className="flex space-x-4">
        <div onClick={() => onAnswer('français')} className="p-4 border rounded cursor-pointer">
          <img src="/path_to_french_icon.png" alt="Français" />
        </div>
        <div onClick={() => onAnswer('anglais')} className="p-4 border rounded cursor-pointer">
          <img src="/path_to_english_icon.png" alt="Anglais" />
        </div>
        <div onClick={() => onAnswer('espagnol')} className="p-4 border rounded cursor-pointer">
          <img src="/path_to_spanish_icon.png" alt="Espagnol" />
        </div>
      </div>
    </div>
  );
};

export default LanguageQuestion;