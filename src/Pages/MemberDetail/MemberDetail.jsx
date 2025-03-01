import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import StatusToggle from './StatusToggle'
import Sidebar from '../../Components/Sidebar/Sidebar'

const MemberDetail = () => {
  const navigate = useNavigate()
  const [renew, setRenew] = useState(false)
  const [memberStatus, setMemberStatus] = useState(true) // true means Active, false means Pending
  
  const handleStatusChange = (newStatus) => {
    // Update the component state with the new status
    setMemberStatus(newStatus)
    console.log(`Member status changed to: ${newStatus ? 'Active' : 'Pending'}`)
  }

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className='w-3/4 text-black p-5'>
        <div className="border-2 w-fit text-xl font-sans text-white p-2 rounded-xl bg-slate-900 cursor-pointer" onClick={()=>{navigate(-1)}}>
          <ArrowBackIcon/>Go Back
        </div>
        <div className="flex gap-[12rem]">
          <div className="mt-10 p-2">
            <div className="w-[100%] h-fit flex">
              <div className="w-1/3 mx-auto">
              </div>
              <div className="w-2/3 mt-5 text-xl pl-5">
                <div className="mt-1 mb-2 text-2xl font-semibold">Name: David</div>
                <div className="mt-1 mb-2 text-2xl font-semibold">Mobile: +919304058285</div>
                <div className="mt-1 mb-2 text-2xl font-semibold">Address: Patna, Bihar , India</div>
                <div className="mt-1 mb-2 text-2xl font-semibold">Joined Date: 10-11-2024</div>
                <div className="mt-1 mb-2 text-2xl font-semibold">Next Bill Date: 10-11-2024</div>
                
                {/* Status Toggle */}
                <div className="mt-4 mb-2 flex items-center">
                  <span className="text-2xl font-semibold mr-3">Status:</span>
                  <StatusToggle initialStatus={memberStatus} onToggle={handleStatusChange} />
                </div>
              </div>
            </div>

            <div className={`rounded-lg h-[2rem] text-2xl ml-[7rem] mt-[2rem] p-8 border-2 text-center bg-red-500 text-white w-[13rem] cursor-pointer hover:text-white hover:bg-black`} onClick={()=>{setRenew(prev=>!prev)}}>
              <div className="mt-[-1rem]">Renew</div>
            </div>
            
          </div>

          {/* Corrected condition: show only when renew is true AND status is Active */}
          {renew && memberStatus && (
            <div className="rounded-lg p-7 mt-[5rem] mx-auto mb-5 h-fit bg-slate-50 w-[50%]">
              <div className="w-[20rem]">
                <div className="my-5">
                  <div className="text-lg font-bold text-center mt-[-1rem]">Membership</div>
                  <select className="w-full mt-[1rem] border-2 p-4 rounded-lg">
                    <option value="">1 Month Plan</option>
                    <option value="">2 Month Plan</option>
                  </select>
                  <div className={`rounded-lg h-[2rem] text-2xl ml-[4rem] mt-[2.5rem] p-8 border-2 text-center bg-green-500 text-white w-[12rem] cursor-pointer hover:text-white hover:bg-green-600`}>
                    <div className="mt-[-1rem]">Save</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberDetail