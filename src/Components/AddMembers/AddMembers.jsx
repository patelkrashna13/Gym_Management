import React from 'react'
import { useState } from 'react'

const AddMembers = () => {

  const [inputField,setInputFieid] = useState({name:"",mobileNo:"",address:"",membership:"",joiningDate:"" })

  const handleOnChange = (event,name) =>{
    setInputFieid({...inputField,[name]:event.target.value})
  }

  console.log(inputField)

  return (

<div className='text-black ml-[2rem]'>

        <div className="grid gap-5 grid-cols-2 text-lg">
                <input value={inputField.name} onChange={(event)=>{handleOnChange(event,"name")}} placeholder='Name of the Joinee' type="text" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/>
                <input value={inputField.mobileNo} onChange={(event)=>{handleOnChange(event,"mobileNo")}} placeholder='Mobile No' type="text" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/>
                <input value={inputField.address} onChange={(event)=>{handleOnChange(event,"address")}} placeholder='Enter Address' type="text" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/> 
                <input value={inputField.joiningDate} onChange={(event)=>{handleOnChange(event,"joiningDate")}} type="date" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/>

                <select className="border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray">
                    <option value="">1 Month Membership</option>
                    <option value="">2 Month Membership</option>
                </select>

                <input type="file" onChange={(e)=>uploadImage(e)}/>
              
                <div className="p-3 ml-[18rem] mt-[5rem] border-2 w-40 text-lg h-16 text-center mx-auto bg-slate-900 text-white rounded-xl cursor-pointer ">
                    Register
                </div>
                
        </div>
    </div>

  )
}

export default AddMembers
