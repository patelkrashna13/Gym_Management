import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MenuIcon from '@mui/icons-material/Menu'
import  PeopleAltIcon  from '@mui/icons-material/PeopleAlt'
import SignalCellularAltIcon  from '@mui/icons-material/SignalCellularAlt'
import AccessAlarmAlticon  from '@mui/icons-material/AccessAlarm'
import ErrorIcon from "@mui/icons-material/Error"
import ReportIcon from "@mui/icons-material/Report"
import { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
// import TechError from "@mui/icons-material/TechError/techError"

const Dashboard = () => {

  const[accordianDashBoard,setAccordianDashboard] = useState(false);
  const ref = useRef();//In React, the useRef() hook is used to create a mutable reference that persists across renders without causing a re-render when its value changes.

  useEffect(()=>{
    const checkIfClickedOutside = e =>{
      if(accordianDashBoard && ref.current && !ref.current.contains(e.target))
      {
        setAccordianDashboard(false)
      }
    }
    document.addEventListener("mousedown",checkIfClickedOutside)
    return ()=>{
      document.removeEventListener("mousedown",checkIfClickedOutside)
    }
  },[accordianDashBoard])


  return (  
  <div className="flex">

    <Sidebar/> 
      <div className="w-[88.90rem] p-2">
      <div className="w-full bg-slate-900 text-white rounded-lg flex p-3 justify-between items-center">
        <MenuIcon sx={{cursor:"pointer"}} className='w-full' onClick={()=>{setAccordianDashboard(prev=>!prev)}}/>
        
        </div>

        {
          accordianDashBoard && 
          <div className="absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight">
          <div className="" ref={ref}>
            Hello, Welcome to our Gym Management System !!
          </div>
          <p>Feel free to ask any queries!</p>
          </div>
        }

        <div className="mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]">
          {/* Card-1 */}
          
          <Link to={'/member'} className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-800 hover:text-white delay-2000 duration-500">
            <PeopleAltIcon sx={{color:"green", fontSize:"50px"}}/>
            <p className='text-xl my-3 font-semibold font-mono'>Joined Members</p>
            </div>
          </Link>
          
          
          {/* Card-2 */}
          <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-800 hover:text-white delay-2000 duration-500">
            <SignalCellularAltIcon sx={{color:"green", fontSize:"50px"}}/>
            <p className='text-xl my-3 font-semibold font-mono'>Monthly Joined</p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-800 hover:text-white delay-2000 duration-500">
            <AccessAlarmAlticon sx={{color:"red", fontSize:"50px"}}/>
            <p className='text-xl my-3 font-semibold font-mono'>Expiring Within 3 days</p>
            </div>
          </div>

           {/* Card-4 */}
          <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-800 hover:text-white delay-2000 duration-500">
            <AccessAlarmAlticon sx={{color:"red", fontSize:"50px"}}/>
            <p className='text-xl my-3 font-semibold font-mono'>Expiring Within 4-7 days</p>
            </div>
          </div>

           {/* Card-5 */}
          <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-800 hover:text-white delay-2000 duration-500">
            <ErrorIcon sx={{color:"red", fontSize:"50px"}}/>
            <p className='text-xl my-3 font-semibold font-mono'>Expired</p>
            </div>
          </div>

           {/* Card-6 */}
          <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-800 hover:text-white delay-2000 duration-500">
            <ReportIcon sx={{color:"brown", fontSize:"50px"}}/>
            <p className='text-xl my-3 font-semibold font-mono'>Inactive Members</p>
            </div>
          </div>

        </div>

        <div className="md:bottom-4 text-center p-4 w-3/4 mb-4 md:mb-0 absolute  text-black mt-20 rounded-xl text-xl">
        Contact Developer for any technical Error at krashnapatel001@gmail.com
        </div>

      </div>
      </div>
      

      
   
  )
}

export default Dashboard
