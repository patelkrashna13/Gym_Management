import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import { useState,useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'

const Sidebar = () => {
    const [greeting,setGreeting] = useState("")
    const location = useLocation()
    //uselocation shows the location of the url like 
    // https://localhost:5173/dashboard
    //if location is at /dashboard then it changes the UI by our styling 

    const greetingMessage = () =>{
        
    const currentHour = new Date() .getHours()
    if (currentHour < 12) {
    setGreeting( "Good Morning")
    }
    
    else if (currentHour < 18)
    setGreeting( "Good Afternoon")

    else if (currentHour < 21) {
    setGreeting( "Good Evening")
}

    else {
    setGreeting( "Good Night")
    }
}

    useEffect(()=>{ //This hook is used for the changes applied after the 
        greetingMessage()
    },[])
    
  return (
    <div className=' border-2 h-[100vh] bg-slate-800 text-white p-5'>
        <div className="text-center text-3xl">
            PowerZone
        </div>

        <div className="w-[15rem] flex gap-5 ">
            <div className="w-[100px] h-[100px] mt-[1rem] ml-[3.5rem]">
                <img className='w-full h-full ml-[0.54rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJI7GLiZAuEGQuNwFMYt_G0hH7Q7272jevqA&s" alt="gympic"  />
            </div>
        </div>

        <div className= 'text-4x1 ml-[3.5rem] mt-[1rem]'> {greeting}</div>
        <div className="text-xl text-center mt-1 font-semibold">-Admin-</div>

        <div className="mt-10 p-5 border-t-2 border-gray-700 ">
            <Link to='/dashboard' className={`flex items-center gap-2 font-semibold text-xl bg-slate-900 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==='/dashboard'?'bg-red-500 ':null}`}>
                <div className=""><HomeIcon/></div>
                <div className="">Dashboard</div>
            </Link>

            <Link to='/member' className={`flex items-center mt-5 gap-2 font-semibold text-xl bg-slate-900 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname === '/member'?'bg-red-500':null}`}>
                <div className=""><GroupIcon/></div>
                <div className="">Members</div>
            </Link>
            
            <div className="flex items-center mt-5 gap-2 font-semibold text-xl bg-slate-900 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
                <div className=""><LogoutIcon/></div>
                <div className="">Logout</div>
            </div>

            

            

        </div>
        
    </div>
  )
}

export default Sidebar
