import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-fit">
                <div className="fonts-sans text-white text-center text-4xl">Login</div>
                <input type="text" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Your Name' />
                <input type="password" className='w-full my-10 p-1.5 rounded-lg ' placeholder='Enter Password' />
                <div className="p-3 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center hover:bg-slate-300 hover:text-black text-lg font-semibold cursor-pointer">Login</div>
            </div>
        </div>
    )
}

export default Login
