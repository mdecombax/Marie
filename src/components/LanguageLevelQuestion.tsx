import React from 'react';
import { FaRegGrinSquint, FaRegCommentDots, FaFeatherAlt } from 'react-icons/fa'; // Importez les icônes que vous souhaitez utiliser

interface Props {
  onAnswer: (level: string) => void;
}

const LanguageLevelQuestion: React.FC<Props> = ({ onAnswer }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4">
      <div className="mb-4 flex items-center justify-center">Quel est le niveau de langage du personnage?</div>
      <div className="flex space-x-4">
        <div onClick={() => onAnswer('familier')} className="p-4 border rounded cursor-pointer flex flex-col items-center">
          <FaRegGrinSquint size={32} /> {/* Utilisez l'icône ici */}
          <span>Familier</span>
        </div>
        <div onClick={() => onAnswer('courant')} className="p-4 border rounded cursor-pointer flex flex-col items-center">
          <FaRegCommentDots size={32} /> {/* Et une autre icône ici */}
          <span>Courant</span>
        </div>
        <div onClick={() => onAnswer('soutenu')} className="p-4 border rounded cursor-pointer flex flex-col items-center">
          <FaFeatherAlt size={32} /> {/* Et une autre icône ici */}
          <span>Soutenu</span>
        </div>
        {/* ... (reste du composant) */}
      </div>
    </div>
  );
};

export default LanguageLevelQuestion;