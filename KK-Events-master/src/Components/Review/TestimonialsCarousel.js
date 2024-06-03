import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';

const testimonials = [
    {
        id: 1,
        text: "Exceeded expectations! Flawless execution, exceptional service, and unforgettable memories. Highly recommend for your special day!",
        author: "PraveenKumar Ramar",
        image: "https://cdn-icons-png.freepik.com/512/3736/3736489.png",
        rating: 5,
    },
    {
        id: 2,
        text: "Absolutely loved our haldi event! Beautiful decorations, great atmosphere, and fantastic service. Highly recommend for a memorable celebration!",
        author: "Akashya",
        image: "https://cdn-icons-png.freepik.com/512/3736/3736489.png",
        rating: 4,
    },
    {
        id: 3,
        text:"Outstanding birthday event! Everything was perfect from start to finish. Highly recommend for an unforgettable celebration!",
        author: "Ragul Vinayak",
        image: "https://cdn-icons-png.freepik.com/512/3736/3736489.png",
        rating: 5,
    },
    {
        id: 4,
        text: "Exceeded our expectations! The wedding was flawless thanks to their exceptional service and attention to detail.",
        author: "Sanjay Ram",
        image: "https://cdn-icons-png.freepik.com/512/3736/3736489.png",
        rating: 4,
    },
    {
        id: 5,
        text: "Outstanding birthday event! Memorable, fun, and well-organized. Highly recommended!",
        author: "Arun kumar",
        image: "https://cdn-icons-png.freepik.com/512/3736/3736489.png",
        rating: 5,
    },
    {
        id: 6,
        text: "Exceptional corporate event! Great organization, engaging activities, and fantastic ambiance. Highly recommended for future events!",
        author: "Beran",
        image: "https://cdn-icons-png.freepik.com/512/3736/3736489.png",
        rating: 4,
    },
];

function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = testimonials.length;
    const totalVisibleCards = 3;
    let interval;

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    useEffect(() => {
        interval = setInterval(nextCard, 3000);
        return () => clearInterval(interval);
    }, [nextCard]);

    const handleMouseEnter = () => clearInterval(interval);

    const handleMouseLeave = () => interval = setInterval(nextCard, 3000);

    const renderStars = (rating) => (
        <div className="star_rating" aria-label={`Rating: ${rating} out of 5`}>
            {[...Array(rating)].map((_, index) => (
                <span key={index} role="img" aria-label="star">&#9733;</span>
            ))}
        </div>
    );

    const renderDots = () => (
        <div className="dot_navigation">
            {testimonials.map((_, index) => (
                <div
                    key={index}
                    className={`dott ${currentIndex === index ? 'activee' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    role="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setCurrentIndex(index);
                        }
                    }}
                />
            ))}
        </div>
    );

    return (
        <div
            className="carousel_wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-label="Testimonials Carousel"
        >
            <button
                className="carousel_control prevv"
                onClick={prevCard}
                aria-label="Previous slide"
            >
                &#9664;
            </button>
            <div className="carousel_container">
                <div
                    className="carousell"
                    style={{ transform: `translateX(-${currentIndex * (100 / totalVisibleCards)}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="cards">
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.author}'s testimonial`}
                                aria-hidden="true"
                            />
                            {renderStars(testimonial.rating)}
                            <p className='review-text'>{`"${testimonial.text}"`}</p>
                            <div className='review-author'>{`- ${testimonial.author}`}</div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="carousel_control nextt"
                onClick={nextCard}
                aria-label="Next slide"
            >
                &#9654;
            </button>
            {renderDots()}
        </div>
    );
}

export default TestimonialsCarousel;
