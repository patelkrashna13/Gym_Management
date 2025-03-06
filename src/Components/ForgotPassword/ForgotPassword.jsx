import React, { useState } from 'react'

const ForgotPassword = () => {

  const [emailSubmit,setEmailSubmit] =  useState(false);
  const [otpValidate,setOtpValidate] = useState(false);
  const [contentVal,setContentValue] = useState("Submit Your Email")
  const [inputField, setInputField] = useState({email:"", otp:"" , newPassWord:""})


  const handleSubmit = () =>{
    if(!emailSubmit)
    {
      setEmailSubmit(true);
      setContentValue("Submit Your OTP");

    }

    else if(emailSubmit && !otpValidate)
    {
      setOtpValidate(true);
      setContentValue("Submit Your New Password");
    }
  }
  console.log(inputField)
  const handleOnChange = (event,name) =>{
    setInputField({...inputField,[name]:event.target.value})
  }

  return (
          <div className="w-full">
            <div className="w-full mb-5 h-40 mt-[-4rem]">
                <div className="ml-[0.5rem] text-shadow-sm">Enter Email</div>
                <input type="text" value={inputField.email} onChange={(event)=>{handleOnChange(event,"email")}} className='w-1/2 p-2 mt-[1rem] ml-[0.5rem] rounded-lg border-2 border-slate-400' placeholder='Enter Email'/>
            </div>

            {
                emailSubmit && <div className="w-full mb-5 mt-[-5rem]">
                <div className="ml-[0.5rem] text-shadow-sm">Enter Your OTP</div>
                <input type="text"  value={inputField.otp} onChange={(event)=>{handleOnChange(event,"otp")}} className='w-1/2 p-2 mt-[1rem] ml-[0.5rem] rounded-lg border-2 border-slate-400' placeholder='Enter OTP'/>
            </div> 
            }
            
            {
                otpValidate && <div className="w-full mb-5 ">
                <div className="ml-[0.5rem] text-shadow-sm">Enter Your New Password</div>
                <input type="password"  value={inputField.newPassWord} onChange={(event)=>{handleOnChange(event,"newPassWord")}} className='w-1/2 p-2 mt-[1rem] ml-[0.5rem] rounded-lg border-2 border-slate-400' placeholder='Enter New Password'/>
            </div> 
            }

            <div className="bg-slate-800 mt-[3.5rem] text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold cursor-pointer border-2 hover:bg-white hover:text-black text-shadow-sm shadow-lg" onClick={handleSubmit}>{contentVal }</div>
          </div>
        )
      }

export default ForgotPassword
