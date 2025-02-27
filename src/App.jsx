import React, { useState, useEffect } from 'react';
import Home from './Pages/Home/home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Member from './Pages/Member/Member';

const App = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(()=>{
    let isLogedIn = localStorage.getItem("isLogin") === "true"; // ✅ Convert to boolean
  
    if(isLogedIn){
      setIsLogin(true);
      navigate('/dashboard');
    } 
  }, [localStorage.getItem("isLogin")]); 
  

  return (
    <div className='flex'>
      {
        isLogin && <Sidebar/>
      }
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/member' element={<Member />} />
      </Routes>
    </div>
  );
};

export default App;
