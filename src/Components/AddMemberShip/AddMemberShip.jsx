import { useState } from "react"
import React from 'react'

const AddMemberShip = () => {
  const [inputField,setInputFieid] = useState({months:"",price:""})

  const handleOnChange = (event,name) =>{
    setInputFieid({...inputField,[name]:event.target.value})
  }

  console.log(inputField)
  return (
    <div className='text-black'>
      <div className="flex flex-wrap gap-5 items-center justify-center">

        <div className="text-lg bg-slate-900 text-white cursor-pointer border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-red-600">
            <div className="">1 Months Membership</div>
            <div className="">Rs 1000</div>
        </div>

        <div className="text-lg bg-slate-900 text-white cursor-pointer border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-red-600">
            <div className="">2 Months Membership</div>
            <div className="">Rs 2000</div>
        </div>

        <div className="text-lg bg-slate-900 text-white cursor-pointer border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-red-600">
            <div className="">3 Months Membership</div>
            <div className="">Rs 3000</div>
        </div>

        <div className="text-lg bg-slate-900 text-white cursor-pointer border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-red-600">
            <div className="">4 Months Membership</div>
            <div className="">Rs 4000</div>
        </div>
        <div className="text-lg bg-slate-900 text-white cursor-pointer border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-red-600">
            <div className="">5 Months Membership</div>
            <div className="">Rs 5000</div>
        </div>



      </div>

      <hr className='mt-10 mb-10'/>
      <div className="flex ml-[2rem] gap-10">
        <input type="number" value={inputField.months} onChange={(event)=>{handleOnChange(event,"months")}} className='border-2 rounded-lg text-lg w-1/3 h-1/2 p-2' placeholder='Add No. of Months'/>
        <input type="number" value={inputField.price} onChange={(event)=>{handleOnChange(event,"price")}} className='border-2 rounded-lg text-lg w-1/3 h-1/2 p-2' placeholder='Add Price'/>
        <div className="text-lg border-2 p-1 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-500">Add+</div>
      </div>
    </div>
  )
}

export default AddMemberShip
