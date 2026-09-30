import React, { useState } from 'react'

const Students = () => {

  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [students, setStudents] = useState([])

  const Submit = (event) => {
    event.preventDefault()

    const newStudent = {
      name: name,
      course: course
    }

    setStudents([...students, newStudent])

    // setName("")
    // setCourse("")
  }

  return (
    <>
      <div>
        <label>Name : </label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br />

        <label>Course : </label>

        <input
          type="text"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <button onClick={Submit}>Submit</button>

        <h3>Student Count: {students.length}</h3>

        <h3>Students:</h3>

        <ul>
          {students.map((student, index) => (
            <li key={index}>
              Name : {student.name} 
              <br />
              Course : {student.course}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Students 