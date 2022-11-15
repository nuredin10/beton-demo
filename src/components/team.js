import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import Team from './section/team';
import Testimonial from './section/testimonial';
import MoreInfo from './section/more-info';
import Footer from './global/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Team"  />
        <Team />
        <Testimonial />
        <MoreInfo />
        <Footer />
    </div>
}

export default AboutPage

