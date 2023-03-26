import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { menu, logo, close } from '../assets'


const Navbar = () => {
const [active, setActive] = useState("Hotel")
const [toggle, setToggle] = useState(false)

  return ( 
    <nav className={
      `w-full flex items-center py-3 fixed top-0 z-20 
        bg-primary sm:px-16 px-6`
    }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      
      <Link to="/" className='flex item-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
        <img src={logo} alt="logo" className='w-13 h-12 object-contain cursor-pointer' />
      
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10 ">
        {navLinks.map((link) => (
          <li key={link.id} className={`${active === link.title
              ? "text-white"
            : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer text-[20px]`} onClick={() => setActive(link.title)}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
          <button  className='button'>Sign Up</button>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)} />
          
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppings font-medium cursor-pointer text-[16px]`} onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }
              
                }>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
              <button  className='button'>Sign Up</button>
            </ul>
            

        </div>
      </div>
      
      </div>
   
    </nav>
  )
}

export default Navbar
