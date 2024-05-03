import React from 'react';
import AppIcon from '../assets/app-icon.svg';

const Nav = () => {
  return (
    <header className='h-[10%] w-full'>
        <nav className='h-full w-full flex justify-between items-center px-6'>
          <div id="appLogo" className='flex'>
            <h1 className='text-xl mr-2'>NewsReader</h1>
            <img src={AppIcon} className='w-8'/>
          </div>
          <div id="navLinks" className='flex'>
            <p className='mx-4'>Link 1</p>
            <p className='mx-4'>Link 2</p>
            <p className='mx-4'>Link 3</p>
          </div>
        </nav>
    </header>
  )
}

export default Nav