import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import PropertyDetailsPage from './section/property-details';
import Footer from './global/footer';

const PropertyDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property Details"  />
        <PropertyDetailsPage />
        <Footer />
    </div>
}

export default PropertyDetails

