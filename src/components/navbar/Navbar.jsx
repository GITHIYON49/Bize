import React from 'react';

const Navbar = () => {
  return <>
  <header className='w-full h-36 shadow-lg'>
    <nav className='w-[70%] h-full mx-auto flex justify-between items-center py-3'>
        <div className='w-36 h-auto'>
            <img src="https://biz-excellence.net/wp-content/uploads/2024/06/Add-a-subheading.png" alt="logo" className='w-full h-full object-cover' />
        </div>
        <ul className='flex gap-10 capitalize'>
            <li>home</li>
            <li>about</li>
            <li className='flex items-center justify-center gap-1'>programs</li>
            <li>contact</li>
        </ul>
        <div>
            <button className='capitalize px-5 py-2 rounded-3xl text-base cursor-pointer outline-none'>login</button>
            <button className='capitalize px-5 py-2 rounded-3xl text-base bg-orange-600 hover:bg-orange-500 text-white cursor-pointer outline-none'>register</button>
        </div>
    </nav>
  </header>
  </>
}

export default Navbar