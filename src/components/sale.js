import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import PropertyGrid from './section/sale-grid';
import Footer from './global/footer';
import Search from './section/search';

const PropertGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Sale"  />
        <Search />
        <PropertyGrid />
        <Footer />
    </div>
}

export default PropertGridPage

