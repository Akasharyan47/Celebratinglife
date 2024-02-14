import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';


const BannerFour = () => {
  const bannerImages = [
    {
      url: require("../Image/bannerImage/1.jpg"),
    },
    {
      url: require("../Image/bannerImage/2.jpg"),
    },
    {
      url: require("../Image/bannerImage/1.jpg"),
    },
    {
      url: require("../Image/bannerImage/1.jpg"),
    },
   
     
  ];
  return (
    <>  
      <div className='banner-area bg-relative banner-area-3'>

        <div className='container-fluid pt-5 '>
          <div className='bg-gray   '>
           <img
              className='img-right img-fluid'
              src='assets/img/banner-4/Preeti_jog.jpg'
              alt='img'
            /> 
            
                  {/* <Slide>
          {bannerImages.map((image, index) => (
            <div key={index} className='each-slide'>
              <img src={image.url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slide> */}
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 align-self-center'>
                  <div className='banner-inner'>
                    <h6
                      className='subtitle '
                      data-aos='fade-right'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    > 
                      INDIA'S LEADING DIRECT SELLING COMPANIES
                    </h6>
                    <h2
                      className='title '
                      data-aos='fade-right'
                      data-aos-delay='250'
                      data-aos-duration='1500'
                    >
                     Welcome to the world<span>financial</span> freedom
                    </h2>
                    <Link
                      className='mt-3 btn btn-border-base'
                      data-aos='fade-right'
                      data-aos-delay='400'
                      data-aos-duration='1500'
                      to=' '
                    >
                      Register <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* ================== BannerFour End ==================*/}
    </>
  );
};

export default BannerFour;