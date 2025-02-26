import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        sessionStorage.setItem("isLogin", true); 
        navigate("/dashboard");
    };

    return (
        <div className="w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-fit rounded-2xl">
            <div className="fonts-sans text-4xl font-bold text-center shadow-lg text-shadow-lg">Login</div>
            <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Your Name' />
            <input type="password" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Password' />
            <div className="p-3 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer" onClick={()=>{handleLogin()}}> {/* ✅ Corrected */}
                Login
            </div>
        </div>
    );
};

export default Login;
