import React from 'react';
import { Link,useNavigate } from 'react-router';

const Navbar = () => {
  const navigation = useNavigate();
  function handleClick(route){
    navigation(route)

  }
  return <>
  <header className='w-full h-36 shadow-lg'>
    <nav className='w-[70%] h-full mx-auto flex justify-between items-center py-3'>
        <div className='w-36 h-auto'>
            <img src="https://biz-excellence.net/wp-content/uploads/2024/06/Add-a-subheading.png" alt="logo" className='w-full h-full object-cover' />
        </div>
        <ul className='flex gap-10 capitalize'>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li className='flex items-center justify-center gap-1 cursor-pointer'>programs</li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
        <div>
            <button className='capitalize px-5 py-2 rounded-3xl text-base cursor-pointer outline-none' onClick={()=>{handleClick('/login')}}>login</button>
            <button className='capitalize px-5 py-2 rounded-3xl text-base bg-[#BF2EF0] hover:bg-orange-500 text-white cursor-pointer outline-none' onClick={()=>{handleClick('/registration')}}>register</button>
        </div>
    </nav>
  </header>
  </>
}

export default Navbar