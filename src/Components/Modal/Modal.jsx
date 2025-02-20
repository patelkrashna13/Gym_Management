import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'

import SignUp from '../SignUp/SignUp';
import Home from '../../Pages/Home/home';
const Modal = ({handleClose}) => {

// const [click,subClick] = useState(false);
//

const handleButton = ()=>
{
    subClick(prev=>!prev);
}

  return (
    
    <div className='w-full h-[100vh] fixed bg-black bg-opacity-50 text-black top-0 left-0 flex justify-center'>
        <div className="w-1/2 bg-white rounded-lg h-fit mt-32">
        <div className="flex justify-between">
            
            <div className="text-4xl font-semibold">
            Forgot Passsword
            </div>

            <div className="" onClick={()=>handleClose()}>
                <ClearIcon sx={{fontSize:"32px"}}/>
            </div>

            <div className="mt-10">
                    This is the content
            </div>

        </div>

        </div>

    </div>
  )
}

export default Modal
