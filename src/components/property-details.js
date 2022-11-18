import React,{useState, useEffect} from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import PropertyDetailsPage from './section/property-details';
import Footer from './global/footer';
import { useParams } from 'react-router';
import axios from 'axios'

const PropertyDetails = () => {
    
    const _id = '6374d73efffcad35d370df6d'
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(()=>{
		axios.get(`http://gojo-ethiopia-api.herokuapp.com/api/property/most-viewed-properties/?page=1`)
		.then((res)=>{
			setData(res.data.properties[6])
            
					})
		.catch((err)=>{
			console.log(err, "asdc")
		})
	},[])

    return <div>
        <Navbar />
        <PageHeader headertitle="Property Details"  />
        <PropertyDetailsPage data={data}/>
        <Footer />
    </div>
}

export default PropertyDetails

