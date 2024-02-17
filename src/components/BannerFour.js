import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
//  url: require("../Image/bannerImage/1.jpg"),

const BannerFour = () => {
 
  const userimgUrl = 'https://source.unsplash.com/random/1920x1080';
  const parentimgUrl = 'https://source.unsplash.com/random/1920x1080';

  const [combinedImageUrl, setCombinedImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const combineImages = async () => {
      try {
        const userimgResponse = await fetch(userimgUrl);
        const userimgBlob = await userimgResponse.blob();

        const parentimgResponse = await fetch(parentimgUrl);
        const parentimgBlob = await parentimgResponse.blob();

        const userimgObjectURL = URL.createObjectURL(userimgBlob);
        const parentimgObjectURL = URL.createObjectURL(parentimgBlob);

        // Combine images using canvas
        const canvas = document.createElement('canvas');
        canvas.width = 1920; // Assuming the image dimensions are 1920x1080
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(await createImage(userimgObjectURL), 0, 0, 960, 1080); // User image
        ctx.drawImage(await createImage(parentimgObjectURL), 960, 0, 960, 1080); // Parent image
        const combinedImageUrl = canvas.toDataURL();

        setCombinedImageUrl(combinedImageUrl);
        setLoading(false);
      } catch (error) {
        console.error('Error combining images:', error);
      }
    };

    combineImages();
 
    return () => {
      URL.revokeObjectURL(combinedImageUrl);
    };
  }, []);

  // Helper function to create image objects
  const createImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  };

  const slideImages = [
    {
      url: loading ? '' : combinedImageUrl, // Set combined image URL for slide 1 once loaded
      caption: 'Slide 1',
      layout: '100%'
    },
    {
      url: '../Image/bannerImage/img3.jpg',
      caption: 'Slide 2',
      layout: '100%'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 3',
      layout: '100%'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 4',
      layout: '100%'
    }
  ];


  return (
    <>  
      <div className=' bg-relative'> 
      <div className='' style={{height:"75px"}}> </div>
        <div className='container-fluid  m-0 p-0 '>
          <div className='bg-gray'>
          <div className="slide-container bg-success">
        
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div className='bannerI' style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: 'cover',
               
                width: slideImage.layout,
                display: 'inline-block'
              }}>
                
              <div className='container'>
              <div className='row'>
                <div className='col-lg-7 align-self-center'>
                  <div className='banner-inner pt-5 '>
                    <h6
                      className='subtitle'
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
                     Welcome to the world <span> financial </span> freedom
                    </h2>
                    <Link
                      className='mt-3 btn btn-border-basee  '
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
          ))}
        </Slide>
      </div>

             
      
          </div>
        </div>
        
      </div>

      {/* ================== BannerFour End ==================*/}
    </>
  );
};

export default BannerFour;