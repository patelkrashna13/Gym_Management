import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MemberCard from '../../Components/MemberCard/MemberCard'
import {useEffect,useState} from 'react'

const GeneralUser = () => {
    const [header,setHeader] = useState("")

    useEffect(()=>{
        const func = sessionStorage.getItem("func")
        functionCall(func)
    },[])

    const functionCall = async (func) => {
        switch (func) {

            case "monthlyJoined":

                setHeader("Monthly Joined Members")
                break;

            case "threeDayExpire":

                setHeader("Expring In 3 Days Members")
                break;

            case "fourToSevenDaysExpire":

                setHeader("Expring In 4-7 Days Members")
                break;

            case "expired":

                setHeader("Expired Members")
                break;

            case "inActiveMembers":

                setHeader("InActive Members")
                break;

        }
    }
  
    return (

    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar - vertical layout */}
      <div className="w-70 h-full">
        <Sidebar />
      </div>

      {/* Main content - horizontal layout */}
      <div className="flex-1 p-5 overflow-auto w-[80rem]">
        <div className="mb-4">
          <Link to={'/dashboard'} className='inline-flex items-center border-2 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
            <ArrowBackIcon className="mr-1" /> 
            Back To Dashboard
          </Link>
        </div>
        
        <div className="mt-5 text-xl text-slate-900">
          {header}
        </div>

        <div className="bg-slate-100 pt-5 mt-5 rounded-lg grid gap-2 grid-cols-3 overflow-x-auto h-[80%]">
           
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>

            <MemberCard/>
            <MemberCard/>
            <MemberCard/>

        </div>
      </div>
    </div>
  )
}

export default GeneralUser