import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import Rental from './section/rental-grid';
import Footer from './global/footer';
import Search from './section/search';

const PropertGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Rentals"  />
        <Search />
        <Rental />
        <Footer />
    </div>
}

export default PropertGridPage

