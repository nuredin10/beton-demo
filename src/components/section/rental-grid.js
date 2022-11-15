import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PropertyGrid extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-page-area pt-5 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-12">
			        <div className="product-search-inner bg-main">
			          <div className="row custom-gutters-20">
			            <div className="col-md-3 align-self-center">
			              
			            </div>
			            <div className="col-md-6 mt-2 mt-md-0">
			              
			                 <h1>Rental</h1>
			                 
			               
			            </div>

			          </div>
			        </div>        
			      </div>        
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/15.png" }alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                    
			                </div>
			                <div className="media-body">
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />Apartment</p>
			                </div>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">32,000,000$</Link></h4>
			            <ul className="meta-inner">
			            </ul>
			            <p>Bole, Wolo Sefer</p>
			            <span className="">Addis Ababa</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
						
			          </div>         
			        </div>
			      </div>
			      
			      
			      
			      
			     
			      
			      
			      
			      <div className="pagination-area text-center mt-0">
			        <ul className="pagination">
			          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
			          <li className="page-item active"><a className="page-link" href="#">1</a></li>
			          <li className="page-item"><a className="page-link" href="#">2</a></li>
			          <li className="page-item"><a className="page-link" href="#">3</a></li>
			          <li className="page-item"><a className="page-link" href="#">...</a></li>
			          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default PropertyGrid