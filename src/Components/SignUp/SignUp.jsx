import React, { useState } from 'react'
import './SignUp.css'
import Modal from '../Modal/Modal'
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import { Password } from '@mui/icons-material';
import axios from 'axios';

const SignUp = () => {

    const [forgotPassword, setForgotPassword] = useState(false);
    const [inputField,setInputField] = useState({gymName:"",email:"",password:""})

    const handleClose = () =>{
        setForgotPassword(prev=>!prev)
    }

    const handleOnChange = (event,name)=>{
      setInputField({...inputField,[name]:event.target.value})
    }

    const uploadImage = async (e) => {

      console.log("Image is uploading");
      const files = e.target.files;

      if (!files || files.length === 0) return;
  
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "gym-management"); // Ensure this preset exists in Cloudinary
  
      try {

              const response = await fetch("https://api.cloudinary.com/v1_1/dhhmn71qr/image/upload", {
              method: "POST",
              body: data
            
          }
        );

        const imageURL = response.data.url;

          if (!response.ok) {
              throw new Error(`Upload failed: ${response.statusText}`);
          }

          const result = await response.json();
          console.log(result);

      
          setInputField({...inputField, ['profilePic']:imageURL});


      } 
      
      catch (err) {
          console.log("Upload error:", err.message);
      }

  };

  console.log(inputField)

    return (

    <div className="customSignup w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto rounded-2xl">

    <div className=" text-current font-bold text-center shadow-lg text-4xl text-shadow-lg">Register your Gym</div>
    <input type="text" value={inputField.email} onChange={(event)=>{handleOnChange(event,"email")}} className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Email'/>
    <input type="text" value={inputField.gymName} onChange={(event)=>{handleOnChange(event,"gymName")}} className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Gym Name'/>
    <input type="text" value={inputField.userName} onChange={(event)=>{handleOnChange(event,"userName")}} className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter UserName'/>
    <input type="password" value={inputField.password} onChange={(event)=>{handleOnChange(event,"password")}} className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Password'/>
    
    <input type="file" onChange={(e)=>{uploadImage(e)}}  className='w-full mb-10 p-2 rounded-lg '/>

    <div className="p-3 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer">Register</div>
    <div className="p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer" onClick={()=>handleClose()}>Forgot Password</div>

    {
    forgotPassword && <Modal header="Forgot Passsword" handleClose={handleClose} content={<ForgotPassword/> }/> //Props: if forgotPassword change then only it toggles to the true and Modal component is rendered
    } 

    </div>
    //forgot password

  )
}

export default SignUp
