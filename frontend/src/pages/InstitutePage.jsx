import React from 'react'
import nav from '../components/institute/Nav'
import Hero from '../components/institute/Hero'
import About from '../components/institute/About'
import Courses from '../components/institute/Courses'
import Results from '../components/institute/Results'
import Faculty from '../components/institute/Faculty'
import Testimonials from '../components/institute/Testimonials'
import Facilities from '../components/institute/Facilities'
import Contact from '../components/institute/Contact'
import Footer from '../components/institute/Footer'
import Nav from '../components/institute/Nav'

function InstitutePage() {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Courses />
            <Results />
            <Faculty />
            <Testimonials />
            <Facilities />
            <Contact />
            <Footer />
        </>
    )
}

export default InstitutePage
