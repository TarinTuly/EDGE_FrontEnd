import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondComponent from './component/SecondComponent'
import { Button, ButtonBase } from '@mui/material'
import ProductComponent from './component/ProductComponent'

const a = 'tarin'



function button_try(){
      return(
         <Button style={{ backgroundColor: '#A594F9', color: 'white', fontWeight: 'bold' }}>Click me</Button>
      )
}


function App() {
   // function fun1() {
   //    return "My name is "
   // }
   //const devices=['mobile','laptop','tablet']
   // const studentInfo ={
   //    name: 'Tarin',
   //    email:'tarin@gmail.com',
   //    devices:['mobile,','laptop,','tablet'],
   //    emoji:'❤'
   // }
   const productList=[
      {
         id:1,
         name:'Samsung',
         details:'This is a good phone',
         size:['small','medium','large'],
         color:['red','blue','green'],
      },
      {
         id:2,
         name:'product2',
         details:'This is a good product',
         size:['small','medium','large'],
         color:['yellow','red','blue'],
      }
   ]

   return (
      
      <>
         Learn React with me
         {/* <SecondComponent name={a} fun1={fun1} email='tarin@gmail.com' device={devices} fun2={button_try} /> */}
         {/* <SecondComponent allInfo={studentInfo}/> */}
        
         {productList.map(p=>(
            <ProductComponent key={p.id} allProduct={p}/>
         ))}
      </>
   )
}

export default App
