import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useEffect,useState } from 'react';
import axios from 'axios'

const PropertyGrid = ()=>{
	let publicUrl = process.env.PUBLIC_URL+'/'
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
	return <div className="blog-page-area pt-5 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-12">
			        <div className="product-search-inner bg-main">
			          <div className="row custom-gutters-20">
			            <div className="col-md-3 align-self-center">
			              
			            </div>
			            <div className="col-md-6 mt-2 mt-md-0">
			              
			                 <h1>Featured</h1>
			                 
			               
			            </div>

			          </div>
			        </div>        
			      </div>     
				  {
					data.map((e,i)=>(
						<div className="col-lg-4 col-md-6" >
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={e.imageUrls[0]}alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                    
			                </div>
			                <div className="media-body">
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />{e.category}</p>
			                </div>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4>  <li><Link to={`/details/${e._id}`} params={{ testvalue: "hello" }}>{e.type === 'for_rent' ? 'Rental' : e.type}</Link></li></h4>
			            <ul className="meta-inner">
			            </ul>
			            <p>{e.address}</p>
			            <span className="">{e.city}</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>{e.numberOfBeedrooms}<span>Bedroom</span></span>
			            <span className="border-none">{e.numberOfBathrooms}<span>Bathroom</span></span>
			            <span>{e.totalAreaSq}<span>sqft</span></span>
						
			          </div>         
			        </div>
			      </div>
					))
				  }   
			      
			      
			
			    </div>
			      <div className="pagination-area text-center mt-0">
					
			        <ul className="pagination">
						<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
				  	{
						[...Array(totalPage)].map((e,i) => (
							<li className={`page-item ` + (selectedPage == i+1 ? `active`: ``) } onClick={()=>setSelectedPage(i+1)}><a className="page-link" >{i+1}</a></li>)
						)
					}
{/* 
			          <li className="page-item"><a className="page-link" href="#">2</a></li>
			          <li className="page-item"><a className="page-link" href="#">3</a></li>
			          <li className="page-item"><a className="page-link" href="#">...</a></li> */}
			          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
			        </ul>
			      </div>
			  </div>
			</div>

}

export default PropertyGrid