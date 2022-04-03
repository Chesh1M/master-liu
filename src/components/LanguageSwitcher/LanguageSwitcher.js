import React from 'react'
import './LanguageSwitcherStyles.css';
import american_flag from '../../images/us.svg';
import chinese_flag from '../../images/cn.svg';
// For translation
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  // For translation
  const { i18n } = useTranslation();

  // Function to handle click for language selection
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="languages-section bg-light">
        <div className="languages-container">
            <span className="language-wrapper" onClick={handleClick.bind(this, 'en')}>
                <span><img src={american_flag} alt="En" className="country-flag"/></span>
                <span className="language">English</span>
            </span>
            
            <span>|</span>
            
            <span className="language-wrapper" onClick={handleClick.bind(this, 'cn')}>              
                <span><img src={chinese_flag} alt="Cn" className="country-flag"/></span>
                <span className="language">中文</span>                
            </span>

        </div>
    </div>
    
  )
}

export default LanguageSwitcher