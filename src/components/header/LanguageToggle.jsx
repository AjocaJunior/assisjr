import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Portuguese'}`}
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  );
};

export default LanguageToggle;