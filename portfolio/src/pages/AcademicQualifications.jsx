import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AcademicQualifications = () => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/')
    }

    const [qualification, setQualification] = useState('AL')

    return (
        <div className='container'>
            <h1>Academic Qualifications</h1>
            <h2>Higher Education</h2>
            <h3>University of Colombo School of Computing</h3>
            <p>2021 - present</p>
            <p>B.Sc in Computer Science (GPA 3.14)</p>
            <h2>G.C.E. Examination Results</h2>
            <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
                <option value="AL">Advanced Level</option>
                <option value="OL">Ordinary Level</option>
            </select>
            {qualification === 'AL' && (
                <div>
                    <h3>Royal College, Colombo</h3>
                    <p>Year - 2019</p>
                    <table>
                        <tr>
                            <th>Subject</th>
                            <th>Grade</th>
                        </tr>
                        <tr>
                            <td>Combined Mathematics</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Physics</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>Chemistry</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>General English</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Common General Test</td>
                            <td>073</td>
                        </tr>
                    </table>
                </div>
            )}
            {qualification === 'OL' && (
                <div>
                    <h3>Boys' School, Malabe</h3>
                    <p>Year - 2015</p>
                    <table>
                        <tr>
                            <th>Subject</th>
                            <th>Grade</th>
                        </tr>
                        <tr>
                            <td>Sinhala</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Buddhism</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>History</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Business Studies and Accountancy</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Appreciation of English Literary Texts</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Information and Communication Technology</td>
                            <td>A</td>
                        </tr>
                    </table>
                </div>
            )}
            <div className='navigation-button-section'>
                <p>Back to Home</p>
                <button onClick={handleBackClick}>Click Here</button>
        </div>
        </div>
    )
}

export default AcademicQualifications