import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import Property from './section/property-page';
import Footer from './global/footer';

const PropertyPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property"  />
        <Property />
        <Footer />
    </div>
}

export default PropertyPage

