import { React } from 'react'

// components
import Header from '../components/Nav/Nav'
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Articles from '../components/Articles/Articles'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <About />
      <Services />
      <Articles />
      <Contact />
    </>
  )
}

export default Home