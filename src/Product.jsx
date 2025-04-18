import React from 'react'
import "./Product.css"
function Product({title,price=999, features=["Reliable"]}) {
   let styles={backgroundColor:price<50000&&"green" }
  return (
    <div className='pro' style={styles}>
        <h1>{title}</h1>
        <h3>Price : Rs {price}</h3>
        {price>20000?<p>Discount:5% <br></br> <h2>New Price: {price-(0.05*price)}</h2> </p>:""}
        <p>{features.map((feature)=><li>{feature}</li>)}</p>

    </div>
  )
}

export default Product