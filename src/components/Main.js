import React,{useState} from 'react'
import useStorage from './useStorage'
function Main() {
    const [value,setvalue]=useState('')
    useStorage(value)
  return (
    <div>
      <input defaultValue={value} onChange={(e)=>{setvalue({value:e.target.value})}} type="text" />
    </div>
  )
}

export default Main
