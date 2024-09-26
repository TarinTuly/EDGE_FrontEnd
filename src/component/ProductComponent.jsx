import React from 'react'

function ProductComponent(props) {
    const{id,name,details,size,color}=props.allProduct
  return (
    <div>
        
        <h1>Product Info</h1>
        <h2>{id}</h2>
        <h2>{name}</h2>
        <p>{details}</p>
        
        {size.map((size,i)=>(
                <li key={i}>{size}</li>
        ))}
        <br />
        {color.map((color,i)=>(
            <li key={i}>{color}</li>
        ))}
        
    </div>
  )
}

export default ProductComponent
