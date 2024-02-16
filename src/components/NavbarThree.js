import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarThree = () => {
  const [active, setActive] = useState(false); 
  const menuActive = () => {
    setActive(!active);
  };
  

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
    
      {/* ==================== Navbar Two Start ====================*/}
      <nav className='navbar navbar-area navbar-area-2 navbar-expand-lg '>
        <div className='container-fluid nav-container  '>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo '>
            <Link to='/'>
            <img
              className='img-right'
              src='assets/img/headerLogo.png'
              alt='img'
            />
               
            </Link>
          </div>
          
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
              <li className='menu-item-has-children'> 
                <Link to="/" > Home</Link>
                 <ul className='sub-menu'>
                  {/* <li>
                    <Link to='/'>Home 01</Link>
                  </li>
                  <li>
                    <Link to='/index-2'>Home 02</Link>
                  </li>
                  <li>
                    <Link to='/index-3'>Home 03</Link>
                  </li>
                  <li>
                    <Link to='/index-4'>Home 04</Link>
                  </li>
                  <li>
                    <Link to='/index-5'>Home 05</Link>
                  </li> */}
                </ul>  
              </li>
              {/* <li className='menu-item-has-children'>
                <a href='#'>Service</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/service'>Service</Link>
                  </li>
                  <li>
                    <Link to='/service-details'>Service Single</Link>
                  </li>
                </ul>
              </li> */}
              <li className='menu-item-has-children'>
                {/* <a href='#'>Pages</a> */}
                <Link to=' '>Philosophy</Link>
                <ul className='sub-menu'>
                  <li>
                    <Link to=''>Power of Compounding</Link>
                    {/* <Link to='/about'>About Us</Link> */}
                  </li>
                  <li>
                    <Link to=''>Law of average</Link>
                    {/* <Link to='/team'>Team</Link> */}
                  </li>
                  <li>
                    <Link to='/contact'> Powerful platform</Link>
                    {/* <Link to='/team-details'>Team Details</Link> */}
                  </li>
                  <li>
                    {/* <Link to='/case-study-details'>Case Study Details</Link> */}
                  </li>
                </ul>
              </li>

              
              <li className='menu-item-has-children'>
              <Link to=' '>plan</Link>
                 
              </li>
              <li>
                <Link to=' '>products</Link>
              </li>
               
              <li className='menu-item-has-children'>
              <Link to=' '>Help</Link>
                 
              </li>
            </ul>
          </div>
          <div className='nav-right-part  nav-right-part-desktop  d-lg-inline-flex align-item-center'>
             {/*<a className='navbar-phone d-xl-inline-block d-none' href='tel:'>
              <span className='icon'>
                <img src='assets/img/icon/1.png' alt='img' />
              </span>  
              {/* <span>Need help?</span>
              <h5>(808) 555-0111</h5> 
            </a>*/}
            <Link className='btn btn-border-base  ' to=' '>
               Register <FaPlus  />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarThree;