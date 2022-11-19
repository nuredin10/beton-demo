import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PropertyDetails extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="property-page-area pd-top-120 pd-bottom-90 ">
			  <div className="container">
			    <div className="property-details-top pd-bottom-70">
			      <div className="property-details-top-inner">
			        <div className="row">
			          <div className="col-lg-7">
			            <h3>Agusta, Torhayloch</h3>
			            <p><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> Addis, Ababa </p>
			            <ul>
			              <li>3 Bedroom</li>
			              <li>Bathroom</li>
			              <li>1026 sqft</li>
			            </ul>
			          </div>
			          <div className="col-lg-5 text-lg-right">
			            <h4>$ 80,650.00</h4>
			            
			            <ul>
			             
			              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" />Negotiable</li>
			            </ul>
			          </div>
			        </div>
			      </div>
			      <div className="product-thumbnail-wrapper">
			        <div className="single-thumbnail-slider">
			          <div className="slider-item">
			            <img src={publicUrl+"assets/img/project-single/1.png"} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={publicUrl+"assets/img/project-single/2.png"} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={publicUrl+"assets/img/project-single/3.png"} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={publicUrl+"assets/img/project-single/4.png"} alt="img" />
			          </div>
			          <div className="slider-item">
			            <img src={publicUrl+"assets/img/project-single/5.png"} alt="img" />
			          </div>
			        </div>
			        <div className="product-thumbnail-carousel">
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/1.png"} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/2.png"} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/3.png"} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/4.png"} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/5.png"} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/2.png"} alt="img" />
			          </div>
			          <div className="single-thumbnail-item">
			            <img src={publicUrl+"assets/img/project-single/3.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row go-top">
			      <div className="col-lg-8">
			        <div className="single-property-details-inner">
			          <h4>About the House</h4>
			          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
			          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			          <div className="single-property-grid">
			            <h4>Poperty Details</h4>
			            <div className="row">
			              <div className="col-md-4">
			                <ul>
			                  <li>Status: For Sale</li>
			                  <li>Bedrooms: 12</li>
			                  <li>Bathroom: 2</li>
			                  <li>House Type: Apartment</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li>Total Sqft: 380</li>
			                  <li>Covered Area: 290</li>
			                  <li>Floor: 3</li>
			                  <li>Year Built: 2019</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                 
			                  <li>All Rooms: 12</li>
			                  <li>House ID: S053</li>
			                  <li>Type: Private House</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          
			              
			          
			             
			              
			          
			         
			              
			                 
			                 
			            
			                 
			          
			         
			                  
			              
			               
			               
			                
			             
			          
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <aside className="sidebar-area">
			          <div className="widget widget-author text-center">
			            <h4 className="widget-title">Information </h4>
			            <div className="thumb">
			             
			            </div> 
			            <div className="details">
			             
			              <p>For more information or to visit house, Use the chat button at the bottom or call/text us by information's below</p>
						  <p>Phone: 0905404444  0906404444</p>
						  <p>Telegram:</p>
						  <p>Email:
betonproperties@gmail.com</p>
			              <ul>
			                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
			              </ul>
			            </div>        
			          </div>
			          
			          
			       
			          
			        </aside>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default PropertyDetails