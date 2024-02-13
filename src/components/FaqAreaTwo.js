import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FaqAreaTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div className='faq-area pd-bottom-120' style={{backgroundColor:"#F5F6F7"}}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5  col-md-6 order-lg-last' >
              <div className='about-thumb-inner video-thumb  d-flex flex-row-reverse h-100 w-100 align-items-center'>
                 <img
                  className=' h-75'
                  src='assets/img/about/FQpic.png'
                  alt='img'
                />  
                <span
                  onClick={() => setOpen(true)}
                  className='video-play-btn-hover'
                >
                  <img src='assets/img/video.svg' alt='img' />{" "}
                  <h6 className='d-inline-block'>how we work</h6>
                </span>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='fLN5hJlfUXE'
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
            
            <div className='col-lg-6 align-self-center'>
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h6 className='sub-title'>YOUR ANSWER</h6>
                <h2 className='title'>
                  Have Any <span>Question</span> Please?
                </h2>
              </div>
              <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >

                  <div className='accordion-item'>
                  <h2 className='' id='headingOne'>
                  <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='false'
                      aria-controls='collapseOne'
                    >
                     What does Modicare sell?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse '
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    We have more than 300 Products in 12 Categories viz. Nutrition, Health & Wellness, Colour Cosmetics, Home care, Laundry Care, Personal care, Skin Care, Food & Beverages, Agriculture, Baby Care, Auto Care, Imitated Jewellery, Literature, Apparels etc.
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                  <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                     How does a person become a Modicare Direct Seller? 
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse  '
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    To become a Modicare Direct Seller, a person must be sponsored by an active Modicare Direct Seller into the Modicare business. The sponsoring Modicare Direct Seller is responsible for guiding the new Modicare Direct Seller about the business.
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      How can i buy Modicare products?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Modicare products are sold by Modicare Authorized Direct sellers only. You can also leave your interest on our website and our team will connect with you shortly and help you with your query.
                    </div>
                  </div>
                </div>  

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                     How do i make mony with Modicare?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Modicare Consultants make money when their customers buy Modicare Products from them and when others in their Modicare network sell products to their customers and/or self-consume the products. To know about Modicare'’s Sales plan, please click here. Bonuses earned by Modicare Consultants vary widely and are dependent on product sales, which usually reflects how much time and effort they consistently put into the Modicare Business. Modicare will never pay commissions in respect of joining fees.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                     How can i buy Modicare Products?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFive'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Modicare products are sold by Modicare Authorized Direct sellers only. You can also leave your interest on our website and our team will connect with you shortly and help you with your query.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-1'></div>
          </div>
        </div>
      </div>

      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaTwo;