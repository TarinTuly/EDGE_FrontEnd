import React from 'react';



  
function ProductComponent(props) {
    const { id, name, details, size, color } = props.allProduct;
    return (
        <div>
            <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Size</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{details}</td>
                        <td>
                            
                                {size.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            
                        </td>
                        <td>
                           
                                {color.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                           
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductComponent;
