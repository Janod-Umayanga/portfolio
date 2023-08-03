import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import AcademicQualifications from './pages/AcademicQualifications'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academic-qualifications" element={<AcademicQualifications />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
