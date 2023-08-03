import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleAcademicQualificationsClick = () => {
    navigate('/academic-qualifications')
  }

  return (
    <div className='container'>
      <h1>Welcome Stranger! This is my Portfolio</h1>
      <p>My name is <strong>Janod Umayanga</strong> and I am a <strong>Computer Science student</strong>. I found my self as a person who works best for things he passionates about to achieve a certain goal. I am passionate about Computer Science, Technology, Inovation and Video Games. And also interested in Music, Movies and TV Shows.</p>
      <p>My goal is to become a <strong>Software Engineer</strong> and to be able to work in a company that is passionate about what they do and to be able to work with people who are passionate about what they do.</p>
      <h2>Education</h2>
      <hr/>
      <div className='navigation-button-section'>
        <p>Check my Academic Qualifications here</p>
        <button onClick={handleAcademicQualificationsClick}>Click Here</button>
      </div>
      <div className='navigation-button-section'>
        <p>Check my Skills here</p>
        <button>Click Here</button>
      </div>
      <div className='navigation-button-section'>
        <p>Check my Projects here</p>
        <button>Click Here</button>
      </div>
      <div className='navigation-button-section'>
        <p>Check my Work Experience here</p>
        <button>Click Here</button>
      </div>
    </div>
  )
}

export default Home