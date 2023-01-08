import React, { Component, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class PropertyDetails extends Component {
  // constructor(props) {
  // 	super(props);

  // 	this.state = {
  // 	  data : null,
  // 	  id: this.props.match.params.id,
  // 	  page: this.props.match.params.page
  // 	};
  //   }
  constructor(props) {
    super(props);
    this.state = {
      data: {},
	  imageUrls: []
    };
  }

  componentDidMount() {
    //  const $ = window.$;
    //  $( 'body' ).addClass( 'body-bg' );
    // this.fetchData(id);
  }

  componentWillMount() {
    let { id } = this.props.params;
    let { page } = this.props.params;

    // console.log(id, page);
    axios
      .get(
        `http://gojo-ethiopia-api.herokuapp.com/api/property/most-viewed-properties/?page=${page}`
      )
      .then((res) => {
        for (let i = 0; i < res.data.properties.length; i++) {
          if (res.data.properties[i]._id === id) {
            // setData(res.data.properties[i]);
            this.setState({ data: res.data.properties[i] });
            this.setState({ imageUrls: res.data.properties[i].imageUrls});
            console.log(this.state.imageUrls);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err, "asdc");
      });
  }

  // componentWillMount(){
  // 	console.log(this.state.id, this.state.page)
  // }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="property-page-area pd-top-120 pd-bottom-90 ">
        <div className="container">
          <div className="property-details-top pd-bottom-70">
            <div className="property-details-top-inner">
              <div className="row">
                <div className="col-lg-7">
                  <h3>{this.state.data.address}</h3>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/location2.png"}
                      alt="img"
                    />{" "}
                    {this.state.data.city}{" "}
                  </p>
                  <ul>
                    <li>{this.state.data.numberOfBeedrooms} Bedroom</li>
                    <li>{this.state.data.numberOfBathrooms} Bathroom</li>
                    <li>{this.state.data.totalAreaSq} sqft</li>
                  </ul>
                </div>
                <div className="col-lg-5 text-lg-right">
                  <h4>$ {this.state.data.price}</h4>

                  {this.state.data.totalAreaSq && (
                    <ul>
                      <li>
                        <img
                          src={publicUrl + "assets/img/icon/3.png"}
                          alt="img"
                        />
                        Negotiable
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="product-thumbnail-wrapper">
              <div className="single-thumbnail-slider">

					{this.state.imageUrls.map(function(e,i){
						return <div className="slider-item">
						<img
						  src={e}
						  alt="img"
						/>
					  </div>
					})}
              </div>
              <div className="product-thumbnail-carousel">
			  {this.state.imageUrls.map(function(e,i){
						return <div className="single-thumbnail-item">
						<img
						  src={e}
						  alt="img"
						/>
					  </div>
					})}
                
                
              </div>
            </div>
          </div>
          <div className="row go-top">
            <div className="col-lg-8">
              <div className="single-property-details-inner">
                <h4>About the House</h4>
                <p>{this.state.data.description}</p>
                <p>{this.state.data.additionalDescription}</p>
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

                <div className="single-property-grid">
                  <h4>Estate Location</h4>
                  <div className="property-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget-author text-center">
                  <h4 className="widget-title">Information </h4>
                  <div className="thumb"></div>
                  <div className="details">
                    <p>
                      For more information or to visit house, Use the chat
                      button at the bottom or call/text us by information's
                      below
                    </p>
                    <p>Phone: 0905404444 0906404444</p>
                    <p>Telegram:</p>
                    <p>Email: betonproperties@gmail.com</p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-linkedin-in"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(PropertyDetails);
