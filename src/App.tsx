import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import NameQuestion from './components/NameQuestion';
import LanguageLevelQuestion from './components/LanguageLevelQuestion';
import LanguageQuestion from './components/LanguageQuestion';


const App: React.FC = () => {
  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    languageLevel: '', // familier, courant, soutenu
    language: ''
  });
  const [step, setStep] = useState(1);

  return (
    <div className="container h-screen w-screen ">
      {step === 1 && <NameQuestion onAnswer={(name) => { setCharacterInfo(prev => ({ ...prev, name })); setStep(2); }} />}
      {step === 2 && <LanguageLevelQuestion onAnswer={(level) => { setCharacterInfo(prev => ({ ...prev, languageLevel: level })); setStep(3); }} />}
      {step === 3 && <LanguageQuestion onAnswer={(language) => { setCharacterInfo(prev => ({ ...prev, language })); setStep(4); }} />}
      {step === 4 && <ChatWindow characterInfo={characterInfo} />}
    </div>
  );
};

export default App;