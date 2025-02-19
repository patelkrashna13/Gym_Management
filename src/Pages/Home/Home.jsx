import React from 'react'
import Login from '../../Components/Login/Login'
// import SignUp from '../../Components/Signup/signUp'

const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl'>
            Welcome To Gym Management System 
        </div>
        <div className='w-full bg-cover text-black flex justify-center h-[100%] bg-[url("https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?w=4933&h=3289&rs=1&pid=ImgDetMain")]'>
            <div className="w-full flex gap-32">

            <Home/> 
            <Home/>

              <div className="w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto">
                <div className="fonts-sans text-white text-center text-4xl">Register your Gym</div>
                <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Email'/>
                <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Gym Name'/>
                <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter UserName'/>
                <input type="password" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Password'/>
                <input type="file" className='w-full mb-10 p-2 rounded-lg ' placeholder='Enter Gym Name'/>
                <div className="p-3 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer">Register</div>
                <div className="p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer">Forgot Password</div>
              
              </div>

            </div>
        </div>
    </div>
  )
}

export default Home