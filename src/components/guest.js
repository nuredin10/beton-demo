import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import Guest from './section/guest-grid';
import Footer from './global/footer';
import Search from './section/search';

const PropertGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Guest House"  />
        <Search />
        <Guest />
        <Footer />
    </div>
}

export default PropertGridPage

