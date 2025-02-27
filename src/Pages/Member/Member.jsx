import React from 'react'
import { useState } from 'react'
import  FitnessCenterIcon  from '@mui/icons-material/FitnessCenter'
import AddIcon from '@mui/icons-material/Add'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import  ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SearchIcon from '@mui/icons-material/Search'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MemberCard from '../../Components/MemberCard/MemberCard'
import Modal from '../../Components/Modal/Modal'
import AddMemberShip from '../../Components/AddMemberShip/AddMemberShip'
import AddMembers from '../../Components/AddMembers/AddMembers'

const Member = () => {

  const[addMemberShip,setAddMemberShip] = useState(false)
  const [addMember,setAddMember] = useState(false)

  const handleMemberShip = () =>{
    setAddMemberShip(prev=>!prev)
  }

  const handleMember = () =>{
    setAddMember(prev=>!prev)
  }

  return (
    <div className='text-black w-3/4 flex'>
      <div className="">
      <Sidebar></Sidebar>
      </div>
      <div className="">
     
      <div className="border-2 bg-slate-900 flex justify-between w-[88rem] text-white rounded-lg p-3">
      <div className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black" onClick={()=>handleMember()}> Add Member <FitnessCenterIcon/>
      </div>

      <div className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black" onClick={()=>handleMemberShip()}> Membership <AddIcon/></div>
      </div>

      <Link className='ml-[0.5rem]' to={'/dashboard'}><ArrowBackIcon/>Back To Dashboard Page</Link>

      <div className="mt-5 w-1/2 flex gap-2">
      <input type="text" className='border-2 w-full p-2 rounded-lg' placeholder='Search By Name or Mobile No'/>
      <div className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black"><SearchIcon/></div>
      </div>

      <div className="mt-5 text-xl flex justify-between text-slate-900">
        <div className="ml-[1rem]">Total Members</div>
        <div className="flex gap-5">
          <div className="">1 - 9 of 52 Members</div>
          <div className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}><ChevronLeftIcon/></div>
          <div className=""><ChevronRightIcon/></div>
        </div>
      </div>

      <div className="bg-slate-100 p-5 mt-5 rounded-lg grid gap-2  grid-cols-3 overflow-x-auto h-[65%]">
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>
     <MemberCard/>

      </div>

    {addMemberShip && <Modal header="Add Membership" handleClose={handleMemberShip} content={<AddMemberShip/>}/>}
    {addMember && <Modal header={"Add New Member"} handleClose={handleMember} content={<AddMembers/>}/>}
      
    </div>
    </div>

  )
}

export default Member
