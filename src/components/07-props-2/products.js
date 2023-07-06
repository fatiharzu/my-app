import React from 'react'
import ProductCard from './product-card'

const Products = () => {
  return (
    <div>
        <ProductCard name="Fatih">
            <h1>Sony Display</h1>
            <p>$209.58</p>
            <p> 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iure non quibusdam culpa qui neque natus blanditiis commodi 
                accusantium libero aliquam rem eius sed mollitia impedit, 
                recusandae nostrum modi minus quidem.
            </p>
        </ProductCard>
        <br />
        <ProductCard>
            <h1>Intel Processor</h1>
            <p>$234.35</p>
            <p> 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iure non quibusdam culpa qui neque natus blanditiis commodi 
                accusantium libero aliquam rem eius sed mollitia impedit, 
                recusandae nostrum modi minus quidem.
            </p>
        </ProductCard>
    </div>
  )
}

export default Products