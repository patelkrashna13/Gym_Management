import React, { useState } from 'react'
import './SignUp.css'
import Modal from '../Modal/Modal'
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const SignUp = () => {

    const [forgotPassword, setForgotPassword] = useState(false);

    const handleClose = () =>{
        setForgotPassword(prev=>!prev)
    }



    return (
    <div className="customSignup w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto rounded-2xl">
    <div className=" text-current font-bold text-center shadow-lg text-4xl text-shadow-lg">Register your Gym</div>
    <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Email'/>
    <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Gym Name'/>
    <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter UserName'/>
    <input type="password" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Password'/>
    <input type="file" className='w-full mb-10 p-2 rounded-lg ' placeholder='Enter Gym Name'/>
    <div className="p-3 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer">Register</div>
    <div className="p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer" onClick={()=>handleClose()}>Forgot Password</div>
    {
    forgotPassword && <Modal header="Forgot Passsword" handleClose={handleClose} content={<ForgotPassword/> }/> //Props: if forgotPassword change then only it toggles to the true and Modal component is rendered
    }             
    </div>//forgot password
  )

}

export default SignUp
