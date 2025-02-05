import React from 'react';
import { Link,useNavigate,useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navigation = useNavigate();
  function handleClick(route){
    navigation(route)

  }

  const {pathname} = useLocation();
  return <>
  <header className='w-full h-36 shadow-lg bg-sky-200 sticky top-0 z-[999]'>
    <nav className='w-[70%] h-full mx-auto flex justify-between items-center py-3'>
        <div className='w-36 h-auto'>
          <Link to='/' className='outline-none'><img src="https://biz-excellence.net/wp-content/uploads/2024/06/Add-a-subheading.png" alt="logo" className='w-full h-full object-cover' /></Link>
            
        </div>
        <ul className='flex gap-8 capitalize'>
            <li><Link to='/' className={`hover:bg-primary px-4 py-3 rounded-md ${pathname === '/' ? "bg-primary text-white" :" "}  hover:text-white outline-none`}>home</Link></li>
            <li><Link to='/about' className={`hover:bg-primary px-4 py-3 rounded-md ${pathname === '/about' ? "bg-primary text-white" :" "}  hover:text-white outline-none`}>about</Link></li>
            <li className='flex items-center justify-center gap-1 cursor-pointer relative'>programs<ChevronDown/>
            <ul className='absolute top-10 bg-white h-40 flex flex-col items-start gap-3 justify-center'>
              <li><Link className={`hover:bg-primary px-4 py-3 rounded-md ${pathname === '/about' ? "bg-primary text-white" :" "}  hover:text-white outline-none`}>Engagement</Link></li>
              <li><Link className={`hover:bg-primary px-4 py-3 rounded-md ${pathname === '/about' ? "bg-primary text-white" :" "}  hover:text-white outline-none`}>Enhancement</Link></li>
              <li><Link className={`hover:bg-primary px-4 py-3 rounded-md ${pathname === '/about' ? "bg-primary text-white" :" "}  hover:text-white outline-none`}>Empowerment</Link></li>
            </ul>
            </li>
            <li><Link to="/contact" className={`hover:bg-primary px-4 py-3 rounded-md ${pathname === '/contact' ? "bg-primary text-white" :" "}  hover:text-white outline-none`}>contact</Link></li>
        </ul>
        <div className='flex items-center justify-center gap-2'>
            <button className='capitalize px-5 py-2 rounded-3xl text-base bg-[#712d90] hover:bg-[#712d90c7] text-white cursor-pointer outline-none' onClick={()=>{handleClick('/login')}}>login</button>
            <button className='capitalize px-5 py-2 rounded-3xl text-base bg-[#FA163F] hover:bg-primaryLight transform transition-all ease-in-out text-white cursor-pointer outline-none z-50' onClick={()=>{handleClick('/registration')}}>register</button>
        </div>
    </nav>
  </header>
  </>
}

export default Navbar