import React from 'react';
import Navbar from './global/navbar';
import Banner from './section/banner';
import Service from './section/service';
import Product from './section/product';
import Video from './section/video';
import Testimonial from './section/testimonial';
import Property from './section/property';
import Agent from './section/agent';
import Client from './section/client';
import Footer from './global/footer';
import PropertyGrid from './section/featured-grid';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Service />
        <PropertyGrid />
        <Testimonial />
        <Agent />
        <Footer />
    </div>
}

export default Home_V1

