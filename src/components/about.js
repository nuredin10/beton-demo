import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import About from './section/about';
import Counter from './section/counter';
import Service from './section/service';
import Agent from './section/agent';
import Testimonial from './section/testimonial';
import MoreInfo from './section/more-info';
import Footer from './global/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <About />
        <Counter />
        <Service />
        <Agent />
        <Testimonial />
        <MoreInfo />
        <Footer />
    </div>
}

export default AboutPage

