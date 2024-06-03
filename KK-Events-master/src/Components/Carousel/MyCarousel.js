import React, { useState, useEffect } from 'react';

import './Carousel.css'
// import './Css/TestimonialsCarousel.css'

// import LA from '../assets/LA.png';
// import RA from '../assets/RA.png';
import Founder from '../Assets/founder.png'
import CoFounder from '../Assets/co-founder.png'
import BE from '../Assets/be.png'

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up automatic slide transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  // };

  // const goToPreviousSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  // };

  return <>

    <div className="carousel carous w-100">
      {/* Left navigation button */}
      {/* <button onClick={goToPreviousSlide} className="carousel-btn prev-btn">
        <img src="{LA}" alt="Previous Slide" />
      </button> */}

      {/* Slides container */}
      <div
        className="slides-container carous-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide carous-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>

      {/* Right navigation button */}
      {/* <button onClick={goToNextSlide} className="carousel-btn next-btn">
        <img src="{RA}" alt="Next Slide" />
      </button> */}

      {/* Carousel navigation dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  </>
};

const Slide1 = () => (
  <div className="slide-content contentslide">
    <div className='members-name'>SRUTHI KRISHNA . K | Founder </div>
    <p className='location'> TELANGANA - ANDHRA PRADESH EVENTS PLANNER</p>
    <img src={Founder} alt="Slide 1" />
  </div>
);

const Slide2 = () => (
  <div className="slide-content contentslide">
    <div className='members-name'>AKESHON K SATHYAA | Co-Founder</div>
    <p className='location'>CHENNAI - BANGLORE EVENTS PLANNER</p>
    <img src={CoFounder} alt="Slide 2" />
  </div>
);

const Slide3 = () => (
  <div className="slide-content contentslide">
    <div className='members-name'>RAJA K | EXECTIVE DIRECTOR</div>
    <p className='location'>CHENNAI EVENTS PLANNER</p>
    <img src={BE} alt="Slide 3" />
  </div>
);

const MyCarousel = () => (
  <Carousel slides={[<Slide1 />, <Slide2 />, <Slide3 />]} />
);

export default MyCarousel;
