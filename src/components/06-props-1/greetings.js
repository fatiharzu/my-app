import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
    <div>
        <h1>Greetings Component</h1>
        <Welcome firstName="Ali" lastName="Gel"/>
        <Welcome firstName="Ayse" lastName="Gel"/>
        <Welcome firstName="Murat" lastName="Kos"/>
        <Welcome firstName="Durmus" lastName="Gez"/>
    </div>
  )
}

export default Greetings