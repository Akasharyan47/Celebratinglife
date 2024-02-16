import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
    width: '100%',
    display: 'block',
    textAlign: 'center'
  };

  const userimgUrl = 'https://source.unsplash.com/random/1920x1080';
  const parentimgUrl = 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';

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

    // Clean up object URLs to avoid memory leaks
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
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
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
    <div className="slide-container">
        
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{
              backgroundImage: `url(${slideImage.url})`,
              backgroundSize: 'cover',
              height: '400px',
              width: slideImage.layout,
              display: 'inline-block'
            }}>
               <span style={{ ...spanStyle, position: 'absolute',    left: 0, width: '100%' }}>{slideImage.caption}</span>
              {/* Add your button here */}
              <button style={{ position: 'absolute', bottom: '50%', left: '50%', transform: 'translate(-50%, 50%)' }}>Button</button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
