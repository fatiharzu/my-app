import React from 'react'

const Jsx5 = () => {

    const names = ["Ali", "Veli", "Ayse", "Fatma", "Osman"]
    const cities = ["Istanbul", "Izmir", "London", "Paris", "Stuttgart"]

  return (
    <div>

        <ul>
            {
              names.map((name, index)=> (<li key={index}>{name}</li> ))
            }            
        </ul>
        <select>
          {
            cities.map((city,index)=> <option key={index}>{city}</option>)
          }
        </select>

    </div>
  )
}

export default Jsx5