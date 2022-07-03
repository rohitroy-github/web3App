//Navbar component
import React from 'react';

import {HiMenuAlt4 } from 'react-icons/hi'; 
import {AiOutlineClose} from 'react-icons/ai'; 

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => { 
  return ( 
    <li className='mx-4 cursor-poinger $(classProps)'> 
    {title} 
    </li>
  )
}
const Navbar = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-start p-4"> 
      <div className='md-flex-[0.5] flex-iitial justify-center items-center'> 
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-row flex-row justify-between items-center flex-inital'> 
        {["Market", "Excahnge", "Tutorials", "Wallets"].map((item, index) => ( 
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>
    </div>
  )
}

export default Navbar;