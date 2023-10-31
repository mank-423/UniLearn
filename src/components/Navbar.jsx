import React, { useState } from 'react';
import headerLogo from '../assets/images/logo.jpg';
import hamburger from '../assets/icons/hamburger.svg';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  //{ href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <header className='px-6 lg:px-12 py-1 relative z-10 w-full'>
      <nav className='flex justify-between items-center max-container ml-16'>
        <a href="/">
          <img
            className='rounded-3xl'
            src={headerLogo}
            alt=""
            width={140}
            height={20}
          />
        </a>

        <div className='lg:hidden'>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleMobileMenu}
          />
        </div>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden font-semibold ml-36'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal text-md text-slate-gray border-b-2 border-transparent hover:border-blue-900 transition duration-500 ease-in-out'
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className='ml-52 mr-0'>
            <Link to="/login">
              <button className='text-md mx-3 px-4 py-1 border-2 border-blue-600 bg-transparent rounded-xl transition duration-300 ease-in-out hover:rounded-md hover:bg-blue-600 hover:text-white'>
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className='text-md mx-3 px-4 py-1 border-2 border-blue-600 bg-transparent rounded-xl transition duration-300 ease-in-out hover:rounded-md hover:bg-blue-600 hover:text-white'>
                Signup
              </button>
            </Link>
          </div>
        </ul>
      </nav>

      {mobileMenuVisible && (
        <div className='lg:hidden bg-white absolute top-16 right-0 left-0 px-4 py-2 border border-black'>
          <ul className='font-semibold'>
            {navLinks.map((item) => (
              <li key={item.label} className='flex flex-col justify-center items-center'>
                <a
                  href={item.href}
                  className='block text-lg text-slate-gray mb-2'
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div className='flex justify-center items-center'>
            <Link to="/login">
              <button className='lg:mx-8 lg:px-2 mx-3 px-4 py-1 border-2 border-blue-600 bg-transparent rounded-xl transition duration-300 ease-in-out hover:rounded-md hover:bg-blue-600 hover:text-white'>
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className='lg:mx-8 lg:px-2 mx-3 px-4 py-1 border-2 border-blue-600 bg-transparent rounded-xl transition duration-300 ease-in-out hover:rounded-md hover:bg-blue-600 hover:text-white'>
                Signup
              </button>
            </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
