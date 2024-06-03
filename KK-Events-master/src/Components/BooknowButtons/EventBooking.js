import React, { useState } from 'react';
import Booking from '../BookNow/Booking.js'
import Corporate from '../BookNow/Corporate.js'
function EventBooking() {
    const [showPopup, setShowPopup] = useState(false);

    const handleBookNowClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    // const handleForm1 = () => {
    //     setShowPopup2(true)
    // };

    // const handleForm2 = () => {
    //     setShowPopup2(false)
    // }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="btn btn-secondary" onClick={handleBookNowClick}>BOOK NOW</div>
                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup-content">

                                <div className="popup-close mt-2 mb-2 pb-2" onClick={handleClosePopup}><i class="fa-solid fa-xmark"></i></div>
                                <div className="mt-2 mb-2 social-events"><Booking /></div>
                                <div className="mt-2 mb-2 corporate-events"><Corporate /></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default EventBooking;
