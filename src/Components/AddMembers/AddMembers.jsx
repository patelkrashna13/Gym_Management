import React from 'react'

const AddMembers = () => {
  return (
    <div className='text-black ml-[2rem]'>
        <div className="grid gap-5 grid-cols-2 text-lg">
                <input placeholder='Name of the Joinee' type="text" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/>
                <input placeholder='Mobile No' type="text" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/>
                <input placeholder='Enter Address' type="text" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/> 
                <input type="date" className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12'/>

                <select className="border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray">
                    <option value="">1 Month Membership</option>
                    <option value="">2 Month Membership</option>
                </select>

                <input type="file" />

                <div className="p-3 ml-[18rem] mt-[5rem] border-2 w-40 text-lg h-16 text-center mx-auto bg-slate-900 text-white rounded-xl cursor-pointer ">
                    Register
                </div>

        </div>
    </div>
  )
}

export default AddMembers
