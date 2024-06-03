import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Css/Styles.css'
import MyCarousel from './Carousel/MyCarousel';
import ArchImage from './Assets/archimage.png'
import event1 from './Assets/wedeve.png'
import event2 from './Assets/we2.jpg'
import event3 from './Assets/corpeve.png'
import ReactCardFlip from 'react-card-flip'
import location1 from './Assets/Hyderabad.png'
import location2 from './Assets/Bangalore.png'
import location3 from './Assets/chennai.webp'
import logo from './Assets/logo.png'
import Review from './Review/TestimonialsCarousel.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OffcanvasExample from './OffcanvasExample.js';
import EventBooking from './BooknowButtons/EventBooking.js';

function Home() {
    const [isFlipped, SetIsflipped] = useState(false)
    const [isFlippedFr, SetIsflippedFr] = useState(false)
    const [isFlippedSe, SetIsflippedSe] = useState(false)

    useEffect(() => {
        AOS.init()
    }, [])

    function handleFlip() {
        SetIsflipped(!isFlipped)
    }
    function secondCard() {
        SetIsflippedFr(!isFlippedFr)
    }
    function thirdCard() {
        SetIsflippedSe(!isFlippedSe)
    }
    return <>

        <div className='container-fluid '>
            <div className='row'>
                <OffcanvasExample/>
            </div>
            <div className='row'>
                <section className="home">
                    <div className="content">
                        <span>Your Wedding,Your Way</span>
                        <h3>We Make Every Moment Special!</h3>
                    </div>
                </section>
            </div>
            {/* Home */}
            <div className='row ' id='home'>
                <div className='col-md-6 heading-img-section' >
                    <div className='d-flex justify-content-center' data-aos="fade-down" data-aos-duration="1500">
                        <img src={ArchImage} className='w-75' alt="" />
                    </div>
                </div>
                <div className='col-md-6 heading-section text-dark text-center' data-aos="fade-up" data-aos-duration="1500">
                    <div>
                        <div className='h6 side-heading'>
                            CHERISH HAPPY MOMENTS WITH US
                        </div>
                        <div className='home-heading'>
                            KK EVENTS
                        </div>
                        <div className='h6'>
                            Wedding | Birthday | Haldi | Corporate
                        </div><br />
                        <p className='home-paragraph' >We are crafting unforgettable experiences, <br /> our event management makes your event most <br /> significant and making it extraordinary</p>
                        <div className='d-flex justify-content-center'>
                            <div className='btn mt-5 book-btn text-center'>
                                <EventBooking />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* why-us */}
            <div className='row pt-5' id='why-us'>

                <div className="section-head col-sm-12">
                    <h4><span className="text-white">Why Choose</span> Us?</h4>
                    <p className="text-white">"Our passion for flawless execution and commitment to exceeding expectations make us the premier choice unforgettable events.<br /> Experience the difference with our meticulous attention to detail and personalised service. From meticulous planning to flawless execution, <br /> we prioritise client satisfaction, ensuring memorable events that exceed expectations. Choose us for a journey where every detail matters."</p>
                </div>
                <div className='row '>
                    <div className='col-md-4 text-end ' data-aos="fade-up" data-aos-duration="1500">
                        <img className='imag-2 imag' src={event1} alt="" />
                    </div>
                    <div className='col-md-4 text-center' data-aos="fade-up" data-aos-duration="1500">
                        <img className='imag-1 imag' src={event2} alt="" />
                    </div>
                    <div className='col-md-4 text-start' data-aos="fade-up" data-aos-duration="1500">
                        <img className='imag-2 imag' src={event3} alt="" />
                    </div>
                </div>
                <div className="feat bg-gray pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
                                <h6 className='heading-why-us' >Expertise</h6>
                                <p >With years of experience in event planning and decoration, KK-Events brings a wealth of expertise to every project we undertake.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
                                <h6 className='heading-why-us'>Creative Design</h6>
                                <p>Our team excels in innovative event decoration, keeping up with trends to make your event memorable.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
                                <h6 className='heading-why-us'>24 x 7 User Support</h6>
                                <p>We're here to assist with any issues or questions our customers may have, ensuring their satisfaction and peace of mind.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-pen-to-square"></i></span>
                                <h6 className='heading-why-us'>Customization</h6>
                                <p>We recognize each event's uniqueness, providing personalized decoration packages designed to match your exact requirements and preferences.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-people-group"></i></span>
                                <h6 className='heading-why-us'>Professional Team</h6>
                                <p>Our dedicated professionals aim for perfection, handling each aspect flawlessly to offer you a stress-free and outstanding service encounter.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
                                <h6 className='heading-why-us'>Affordable cost</h6>
                                <p>Love is precious; I reserve it for genuine feelings. Overuse cheapens its depth and significance, diluting its true meaning.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-face-smile"></i></span>
                                <h6 className=' '>Customer Satisfaction</h6>
                                <p>Our priority is your satisfaction. We work closely with you throughout the planning process, keeping you informed and involved every step of the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* REVIEW */}

            <div className='row pt-5' id='review'>
                <div className='text-center review-heading col-md-12' style={{ fontSize: "32px" }} data-aos="fade-up" data-aos-duration="1500">
                    What Our Clients Say
                </div>
                <div className='col-md-12 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1500">
                    <Review />
                </div>
            </div>


            {/* about us */}
            <div className='row pb-5' id='about-us' >
                <div className='text-center  pt-5 pb-5' style={{ fontSize: "32px" }} data-aos="fade-up" data-aos-duration="1500">
                    Get to Know Us
                </div>
                <div className='col-md-6' data-aos="fade-up" data-aos-duration="1500">
                    <MyCarousel />
                </div>
                <div className='col-md-6' >
                    <p data-aos="fade-up" className='about-para-section' data-aos-duration="1500">At our event management website, we're dedicated to turning your visions into unforgettable experiences. With a passion for detail and creativity at our core, we strive to exceed expectations, making every event uniquely spectacular. Trust us to handle everything from planning to execution, ensuring seamless and remarkable occasions every time.</p>
                </div>
            </div>

            {/* CONTACT US  */}
            <div className='row' id='contact'>
                <div className='col-md-4' data-aos="fade-up" data-aos-duration="1500">
                    {/* Hyderabad */}
                    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                        {/* Front-side of the card */}
                        <div className="card m-3 text-center" style={{ height: "17rem" }}>
                            <div className='d-flex justify-content-center'>
                                <img src={location1} className="card-img-top  w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Hyderabad</h5><br />
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <a href="#a" className="btn btn-warning" onClick={handleFlip}>Locate us</a>
                            </div>
                        </div>

                        {/*Back side of the card */}
                        <div className="card m-3 text-center"  >
                            <div className="card-body backcard text-white">
                                <h5 className="card-title">Hyderabad</h5><br />
                                <p className="card-text flip-card"> Flat no 303,<br />
                                    Chaitanya bank building,<br />
                                    Hanuman nagar,<br />
                                    Chaitanyapuri,<br />
                                    Hyderabad 500035<br /><br />
                                    {/* <a style={{ textDecoration: "none", color: " #332c26" }} href="tel:+919849091554" className='btn btn-secondary text-white'>Connect with us</a> */}
                                </p>
                                <a href="tel:+919849091554" style={{ textDecoration: "none", color: " #332c26" }} className="btn btn-primary text-white" onClick={handleFlip}>Connect with us</a>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-duration="1500">
                    {/* Bengaluru */}
                    <ReactCardFlip isFlipped={isFlippedFr} flipDirection='horizontal'>
                        {/* Front-side of the card */}
                        <div className="card m-3 text-center" style={{ height: "17rem" }}  >
                            <div className='d-flex justify-content-center'>
                                <img src={location2} className="card-img-top  w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bengaluru</h5><br />
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <div className="btn btn-warning " onClick={secondCard}>Locate us</div>
                            </div>
                        </div>

                        {/* Backside of the card */}
                        <div className="card m-3 text-center"   >
                            <div className="card-body backcard text-white">
                                <h5 className="card-title">Bengaluru</h5><br />
                                <p className="card-text flip-card">
                                    F-004, Nandi citadel,<br />
                                    no22P, 23,<br />
                                    chandra Akshayavana,<br />
                                    Bannerghatta Road,<br />
                                    Bengaluru 560076<br /><br />
                                    {/* <a style={{ textDecoration: "none", color: " #332c26" }} href="tel:+919176311171" className='btn btn-secondary text-white'></a> */}
                                </p>
                                <a style={{ textDecoration: "none", color: " #332c26" }} href="tel:+919176311171" className="btn btn-primary text-white" onClick={secondCard}>Connect with us</a>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-duration="1500">
                    {/* Chennai */}
                    <ReactCardFlip isFlipped={isFlippedSe} flipDirection='horizontal'>
                        {/* Front-side of the card */}
                        <div className="card m-3 text-center" style={{ height: "17rem" }} >
                            <div className='d-flex justify-content-center'>
                                <img src={location3} className="card-img-top w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Chennai</h5><br />
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <div className="btn btn-warning" onClick={thirdCard}>Locate us</div>
                            </div>
                        </div>
                        {/* Backside of the card */}
                        <div className="card m-3 text-center" >
                            <div className="card-body backcard text-white">
                                <h5 className="card-title">Chennai</h5><br />
                                <p className="card-text flip-card">
                                    Hey Ram Infrastructure 21,<br />
                                    Rammurthy Ave 2nd St,<br />
                                    Sakthi Nagar,<br />
                                    Chennai,<br /> Tamil Nadu 600116 <br />
                                    {/* <a style={{ textDecoration: "none", color: " #332c26" }} href="tel:+917200150577" className='btn btn-secondary text-white'>Connect with us</a> */}
                                </p><br />
                                <a style={{ textDecoration: "none", color: " #332c26" }} href="tel:+917200150577" className="btn btn-primary text-white" onClick={thirdCard}>Connect with us</a>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
            </div>

            <div className='row pt-5 pb-5' id='map' data-aos="fade-up" data-aos-duration="1500">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121850.76142227587!2d78.44859016331485!3d17.371608645447605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99bcc3b80a2d%3A0xbb293e3735324157!2sKK%20Event%20planners!5e0!3m2!1sen!2sin!4v1714029124212!5m2!1sen!2sin" id='frame1' width="600" height="450" style={{ "border": "0" }} allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* footer */}
            <div className='row'>
                <footer>
                    <div className="footer-container">
                        <div className="footer-content" data-aos="fade-down" data-aos-duration="1500">
                            <h3>Contact Us</h3>
                            <p><i className='bx bxl-gmail'></i> yourkkevents@gmail.com</p>
                            <p><i className="bx bxs-phone"></i>&nbsp; Sruthi Krishna.K at +91 9849091554</p>
                            <p>
                                <i className="bx bxs-map"></i> &nbsp;
                                <a href="https://maps.app.goo.gl/kwfFGSBqSMSnGRc1A" target="blank">
                                    Flat no 303,<br />
                                    Chaitanya bank building,<br />
                                    Hanuman nagar,<br />
                                    Chaitanyapuri,<br />
                                    Hyderabad 500035<br /><br /> </a>
                            </p>
                        </div>

                        <div className="footer-content" data-aos="fade-down" data-aos-duration="1500">
                            <h3>Quick Links</h3>
                            <ul className="list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about-us">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-content" data-aos="fade-down" data-aos-duration="1500">
                            <h3>Follow Us</h3>
                            <ul className="footer-social-icons">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100076310920100&name=xhp_nt_&paipv=0&eav=AfaI_UHjVmvMF277J_rTp_QmBzKdJfFaKlZKDhT42NLRT8zYdYjxNvBviXPtFJuFJP4&_rdr" rel="noreferrer noopener" target='_blank'>
                                        <i style={{ color: "#1877F2" }} className="ps-2 pe-2 fa-brands fa-3x fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/the_kkevents?igsh=MWg2MzkydWg3MW82NA==" rel="noreferrer noopener" target='_blank'>
                                        <i className="ps-2 pe-2 fa-brands fa-3x fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://pin.it/n7qdgVX1N" rel="noreferrer noopener" target='_blank'>
                                        <i style={{ color: "red" }} className="ps-2 pe-2 fa-brands fa-3x fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-content" data-aos="fade-down" data-aos-duration="1500">
                            <h3>Help</h3>
                            <ul className="footer-terms">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100076310920100&name=xhp_nt_&paipv=0&eav=AfaI_UHjVmvMF277J_rTp_QmBzKdJfFaKlZKDhT42NLRT8zYdYjxNvBviXPtFJuFJP4&_rdr" rel="noreferrer noopener" target='_blank'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100076310920100&name=xhp_nt_&paipv=0&eav=AfaI_UHjVmvMF277J_rTp_QmBzKdJfFaKlZKDhT42NLRT8zYdYjxNvBviXPtFJuFJP4&_rdr" rel="noreferrer noopener" target='_blank'>
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-bottom" data-aos="fade-down" data-aos-duration="1500">
                        <p>Made With Love <i className="bx bxs-heart"></i> By Passionate Team</p>
                        <p>Copyright@2024</p>
                    </div>
                </footer>
            </div>

            {/* <!--End Footer--> */}
        </div>
    </>
}
export default Home