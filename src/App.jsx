import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondComponent from './component/SecondComponent'
import { Button, ButtonBase } from '@mui/material'

const a = 'tarin'



function button_try(){
      return(
         <Button style={{ backgroundColor: '#A594F9', color: 'white', fontWeight: 'bold' }}>Click me</Button>
      )
}


function App() {
   function fun1() {
      return "My name is "
   }
   const devices=['mobile','laptop','tablet']

   return (
      <>
         Learn React with me
         <SecondComponent name={a} fun1={fun1} email='tarin@gmail.com' device={devices} fun2={button_try} />
      </>
   )
}

export default App
