import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondComponent from './component/SecondComponent'
import { Button, ButtonBase } from '@mui/material'
import ProductComponent from './component/ProductComponent'
import Component_03_10 from './component/Component_03_10'
import ConditionalRendaring from './component/ConditionalRendaring'
import FormComponent from './component/formComponent'
import SearchComponent from './component/SearchComponent'
 // Use the correct capitalization

const a = 'tarin'

function button_try(){
  return (
    <Button style={{ backgroundColor: '#A594F9', color: 'white', fontWeight: 'bold' }}>Click me</Button>
  )
}

function App() {
  const productList = [
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

  const StudentInfo = [
    {
      name:'Tarin',
      email:'tarin@gmail.com',
      age:25,
    },
    {
      name:'Tuly',
      email:'tuly@gmail.com',
      age:26,
    },
    {
      name:'Tamanna',
      email:'tamanna@gmail.com',
      age:16,
    }  
  ]

  return (
    <>
      <h1>Product Info</h1>
      {/* <Component_03_10 productList={productList} /> */}
      {/* <ConditionalRendaring StudentInfo={StudentInfo} /> */}
      {/* <FormComponent />  */}
    
      <SearchComponent />
    </>
  )
}

export default App
