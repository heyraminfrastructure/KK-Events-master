import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Homepage from './HomePage/Homepage.js'
import AboutUs from './About/AboutUs.js'
import ContactUs from './Contact/ContactUs.js'
import FooterBar from './Footer/FooterBar.js'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Homepage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AnimatePresence>
    </>
}

export default AnimatedRoutes