import React from 'react'
// const name = 'Second Component'

// function fun1(){
//     return "My name is "
// }

function SecondComponent(props) {
    
    //const { fun1, name, email ,device,fun2} = props;
    const{name,email,devices,emoji}=props.allInfo
return (
    <div>
        {/* {fun1()} {name}
        <br />
        {email}
        <br />
        <ul>
        {device.map((device, index) => (
          <li key={index}>{device}</li>  // Loop through devices array
        ))}
      </ul>

      {fun2()} */}
        <h1>Student Info</h1>
        {name}
        <br/>
        {email}
        <br/>
        <ul>
            {devices.map((device,i)=>(
                <li key={i}>{device}</li>
            ))}
        </ul>
        <br/>
        {emoji}

    </div>
)
}

export default SecondComponent
