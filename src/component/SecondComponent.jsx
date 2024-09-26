import React from 'react'
// const name = 'Second Component'

// function fun1(){
//     return "My name is "
// }

function SecondComponent(props) {
    
    const { fun1, name, email ,device,fun2} = props;
return (
    <div>
        {fun1()} {name}
        <br />
        {email}
        <br />
        <ul>
        {device.map((device, index) => (
          <li key={index}>{device}</li>  // Loop through devices array
        ))}
      </ul>

      {fun2()}
    </div>
)
}

export default SecondComponent
