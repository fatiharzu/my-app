import React from 'react'

const Jsx1 = () => {

    const message = "class isimleri className= ' ' ile verilir";

  return (
    <ul>
        <li>Jsx1  Tüm elementler tek bir root icinde olmalidir.</li>
        <li>Elementlerin attribute leri camelCase olmalidir</li>
        <li>{message}</li>
        <li className='title'>Merhaba Jsx</li>
    </ul>
  )
}

export default Jsx1