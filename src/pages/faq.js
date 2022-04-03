import React from 'react'

// components
import FAQHeader from '../components/NavFAQ/NavFAQ'
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher'
import FAQs from '../components/FAQs/FAQs'

const AboutPage = () => {
  return (
    <>
      <FAQHeader />
      <LanguageSwitcher />
      <FAQs />
    </>
  )
}

export default AboutPage