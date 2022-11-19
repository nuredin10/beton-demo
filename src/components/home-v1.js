import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

const Home_V1 = () => {

    const [data, setData] = useState([])
	const [totalPage, setTotalPage] = useState();
	const [currentPage, setCurrentPage] = useState()
	const [selectedPage, setSelectedPage] = useState(1);

	useEffect(()=>{
		axios.get(`http://gojo-ethiopia-api.herokuapp.com/api/property/most-viewed-properties/?page=${selectedPage}`)
		.then((res)=>{
			setData(res.data.properties)
			setTotalPage(res.data.totalPages)
			setCurrentPage(res.data.currentPage)
			console.log(res.data)
		})
		.catch((err)=>{
			console.log(err, "asdc")
		})
	},[selectedPage])

    return <div>
        <Navbar />
        <Banner setData={setData}/>
        <Service />
        <PropertyGrid data={data} selectedPage = {selectedPage} setSelectedPage = {selectedPage} totalPage = {totalPage}/>
        <Testimonial />
        <Agent />
        <Footer />
    </div>
}

export default Home_V1

