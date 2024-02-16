import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; 
const TeamAreaTwo = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-100 pd-bottom-120 '
      
      >
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>MEET OUR EXPERTS</h6>
            <h2 className='title  '>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row">
     
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 '>
              <div className='single-team-inner style-2  text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/11.jpg' alt='img' />
                </div>
                <div className='details '>
                  <div className='details-inner  '>
                    <h5>
                    <Link to=''>Devon Lane</Link>
                    </h5>
                    {/* <p>Merketing Department</p> */}
                    <ul className='team-social-inner  mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/22.jpg' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to=' '>Falcon Lane</Link>
                    </h5>
                    {/* <p>Merketing Department</p> */}
                    <ul className='team-social-inner  mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/33.jpg' alt='img' />
                </div>
                <div className='details'>
                  <div className='details-inner'>
                    <h5>
                    <Link to=' '>Wilson Jac</Link>
                    </h5>
                    {/* <p>Merketing Department</p> */}
                    <ul className='team-social-inner  mb-1'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaTwo;
