import React from 'react'

const Style1 = () => {
  return (
    <div>
        <h1 style={
            {
                border: "1px solid red",
                padding: "1rem",
                borderRadius:"2rem",
                textAlign: "center"
            }
        }>Hello Style1</h1>
        <p style={{fontStyle:"italic", fontSize: "1.3rem"}}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa natus minus quibusdam sed necessitatibus ea enim a 
            numquam eaque dolorum ad vitae commodi rem saepe maiores, 
            esse nihil. Eligendi, in.
        </p>
    </div>
  )
}

export default Style1