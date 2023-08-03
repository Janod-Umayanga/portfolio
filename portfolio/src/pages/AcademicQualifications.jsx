import React from 'react'
import { useNavigate } from 'react-router-dom'

const AcademicQualifications = () => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/')
    }

    return (
        <div className='container'>
            <h1>Academic Qualifications</h1>
            <h3>University of Colombo School of Computing</h3>
            <p>2021 - present</p>
            <p>B.Sc in Computer Science (GPA 3.14)</p>
            <div className='navigation-button-section'>
                <p>Back to Home</p>
                <button onClick={handleBackClick}>Click Here</button>
        </div>
        </div>
    )
}

export default AcademicQualifications