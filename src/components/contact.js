import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import ContactForm from './section/contact-form';
import Footer from './global/footer';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact"  />
        <ContactForm />
        <Footer />
    </div>
}

export default ContactPage

