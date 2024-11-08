// FormComponent.jsx
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
  


export default function FormComponent() {
  const [textValue, setTextValue] = useState("");
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };
  const fromsubmit = (e) => {
    e.preventDefault();
    console.log(textValue);
  };

//   useEffect(()=>{
//     console.log(name);
//   },[name]);

useEffect(()=>{ 
    const fetchData =()=>{
        try{
           const response = fetch('http://10.19.80.72:8081/test_api//search.php?query=app'); 
        //    const data=response.json();
           console.log(response);
        }catch (error){
            console.log(error);
        }
    };
    fetchData();
},[]);

  return (
    <div>
      <form onSubmit={fromsubmit}>
        <TextField
          type="text"
          //onChange={handleChange}
          onChange={(e)=>{
            setName({...name,
                firstname:e.target.value
                //lastname:''
,            })
          }}
          //value={textValue}
          value={name.firstname}
          label="Enter Text"
        />

<TextField
          type="text"
          //onChange={handleChange}
          onChange={(e)=>{
            setName({...name,
                // firstname:'',
                lastname:e.target.value
,            })
          }}
          //value={textValue}
          value={name.lastname}
          label="Enter Text"
        />
        <br />
        <button type="submit">Click</button>
      </form>
    </div>
  );
}
