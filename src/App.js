import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/home'
import FAQs from './pages/faq'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/FAQs" element={<FAQs />}/>
      </Routes>
    </Router>
  )
}

export default App

