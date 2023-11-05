import React, { useEffect, useState } from 'react';
import headerLogo from '../assets/images/logo.jpg';
import hamburger from '../assets/icons/hamburger.svg';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  //{ href: "#products", label: "Products" },
  // { href: "#footer", label: "Contact" },
];



const Navbar = () => {


  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [login, setLogin] = useState("");

  const navigate = useNavigate();

  function scrollToQuality(event) {
    event.preventDefault();
    const element = document.getElementById('footer');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

  //I just removed the dependency array
  // And now I can see the changes on navbar
  // of conditional rendering
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setLogin(savedUsername);
    }
  });

  // useEffect(()=>{
  //   window.location.reload()
  // }, [])

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const deleteCredentials = () => {
    localStorage.removeItem('username');
    setLogin("");
    navigate('/login');
  }

  return (
    <div className='fixed top-0 w-full z-10 bg-white'>
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
                <Link
                  to={item.href}
                  className='leading-normal text-md text-slate-gray border-b-2 border-transparent hover:border-blue-900 transition duration-500 ease-in-out'
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <a href="#footer" onClick={scrollToQuality}><li>Contact</li></a>

            {/* Division for buttons */}
            <div className='ml-52 mr-0'>
              {login
                ?
                (
                  <div className='flex'>

                    <div
                      className='border-2 border-black rounded-full text-white font-extrabold bg-red py-3 px-5'
                      style={{ backgroundColor: getRandomColor() }}>
                      {login[0].toUpperCase()}
                    </div>

                    <div className='flex justify-center items-center'>
                      <button
                        className='text-md mx-3 px-2 py-2 border-2 border-blue-600 bg-transparent rounded-xl transition duration-300 ease-in-out hover:rounded-md hover:bg-blue-600 hover:text-white'
                        onClick={deleteCredentials}>
                        Log-out
                      </button>
                    </div>

                  </div>
                )
                :
                (
                  <div>
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
                )
              }
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
              <a href="#footer" onClick={scrollToQuality}><li className='flex justify-center items-center text-lg'>Contact</li></a>

              {/* Division for buttons */}
              <div className='flex justify-center items-center'>
                {login
                  ?
                  (
                    <div className='flex'>
                      <div
                        className='border-2 border-black rounded-full text-white font-extrabold bg-red py-3 px-4'
                        style={{ backgroundColor: getRandomColor() }}>
                        {login[0].toUpperCase()}
                      </div>

                      <button
                        className='text-md mx-3 px-4 py-1 border-2 border-blue-600 bg-transparent rounded-xl transition duration-300 ease-in-out hover:rounded-md hover:bg-blue-600 hover:text-white'
                        onClick={deleteCredentials}>
                        Log-out
                      </button>

                    </div>
                  )
                  :
                  (
                    <div>
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
                  )
                }
              </div>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
