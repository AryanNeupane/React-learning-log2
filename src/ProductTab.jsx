import React from 'react'
import Product from './Product'
import "./ProductTab.css"

function ProductTab() {
  let features=["Metallic", "AI Features", "Camera","Durable"]
  return (
    <div className='PT'>
    <Product title="Laptop" price={60000} features={features} />
    <Product title="Phone" price={30000} />
    <Product title="Tablet" price={40000} />
    <Product title="Pen"  />
  
    </div>
  )
}

export default ProductTab