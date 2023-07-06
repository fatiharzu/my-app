import React from 'react'

const Style2 = () => {
    const styleTitle ={
        fontSize: "2rem",
        color:"red",
        fontWeight:'bold',
        textAlign:"center"
    }
  return (
    <div>
        <h2 style={styleTitle}>JSX Loops</h2>
        <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa natus minus quibusdam sed necessitatibus ea enim a 
            numquam eaque dolorum ad vitae commodi rem saepe maiores, 
            esse nihil. Eligendi, in.
        </p>
        <hr/>
        <h2 style={{...styleTitle, color:"blue"}}>Components Props</h2>
        <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa natus minus quibusdam sed necessitatibus ea enim a 
            numquam eaque dolorum ad vitae commodi rem saepe maiores, 
            esse nihil. Eligendi, in.
        </p>
    </div>
  )
}

export default Style2