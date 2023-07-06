import React from 'react'

const Jsx2 = () => {

    const person = {
        firstName: "John",
        lastName: "Docker",
        age : 30,
        occupation: "Developer",
        email: "johndocker@xax.com"
        
    }

  return (
   <div>
        <div>Name: {person.firstName}</div>
        <div>Surname: {person.lastName}</div>
        <div>age: {person.age}</div>
        <div>Occupation: {person.occupation}</div>
        <div>Email: {person.email}</div>
   </div>
  )
}

export default Jsx2