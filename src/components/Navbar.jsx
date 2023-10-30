import React, { useState } from 'react';
import headerLogo from '../assets/images/logo.jpg';
import hamburger from '../assets/icons/hamburger.svg';

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
    <header className='px-6 lg:px-20 py-2 relative z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
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

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
          <div>
            <button className='lg:mx-8 lg:px-2 mx-3 px-2 border-black border-2'>Login</button>
            <button className='lg:mx-8 lg:px-2 mx-3 px-2 border-black border-2'>Signup</button>
          </div>
        </ul>
      </nav>

      {mobileMenuVisible && (
        <div className='lg:hidden bg-white absolute top-16 right-0 left-0 px-4 py-2 border border-black'>
          <ul>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='block text-lg text-slate-gray mb-2'
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div>
              <button className='lg:mx-8 lg:px-2 mx-3 px-2 border-black border-2'>Login</button>
              <button className='lg:mx-8 lg:px-2 mx-3 px-2 border-black border-2'>Signup</button>
          </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
