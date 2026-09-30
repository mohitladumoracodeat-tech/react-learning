import React from 'react'

const StudentCard = ({ name, course }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  )
}

export default StudentCard