import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

// class PropertyDetails extends Component {

// 	componentDidMount() {

//      const $ = window.$;

//      $( 'body' ).addClass( 'body-bg' );

//  	}

//     render() {

const PropertyDetails = ({ data }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";


   const long = data && data.location.coordinates[0]
   const lat = data && data.location.coordinates[1]
  // const [imageUrl, setImageUrl] = useState([])
  let _url = "https://maps.google.com/maps?q=10.305385,+77.923029&hl=es;z=14&amp;output=embed"

  // 	data != undefined && setImageUrl(data.imageUrls)
  console.log(long, lat)
  console.log(data, "datattta");
  return (
    /* data != undefined ? */ <div className="property-page-area pd-top-120 pd-bottom-90 ">
      <div className="container">
        <div className="property-details-top pd-bottom-70">
          {data != undefined ? (
            <div className="property-details-top-inner">
              <div className="row">
                <div className="col-lg-7">
                  <h3>{data.address}</h3>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/location2.png"}
                      alt="img"
                    />
                    {data.city}
                  </p>
                  <ul>
                    <li>{data.numberOfBeedrooms} Bedroom</li>
                    <li>{data.numberOfBathrooms} Bathroom</li>
                    <li>{data.totalAreaSq} sqft</li>
                  </ul>
                </div>
                <div className="col-lg-5 text-lg-right">
                  <h4>$ {data.price}</h4>
                  
                  <div className="btn-wrap">
                    <a className="btn-base btn-sm" style={{color: 'white'}}>
                      {data.status}
                    </a>
                    {/* <a className="btn btn-blue btn-sm" href="#">
                      BUY
                    </a>
                    <a className="btn btn-blue btn-sm" href="#">
                      RENT
                    </a> */}
                  </div>
                  <ul>
                    <li>
                      <img
                        src={publicUrl + "assets/img/icon/1.png"}
                        alt="img"
                      />
                      Marce 9 , 2020
                    </li>
                    <li>
                      <img
                        src={publicUrl + "assets/img/icon/2.png"}
                        alt="img"
                      />
                      4263
                    </li>
                    <li>
                      <img
                        src={publicUrl + "assets/img/icon/3.png"}
                        alt="img"
                      />
                      68
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}

          {/* {data != undefined ? ( */}
          <div className="product-thumbnail-wrapper">
            <div className="single-thumbnail-slider">
              <div className="slider-item">
                <img src={data != undefined && data.imageUrls[0]} alt="img" />
              </div>
            </div>
            <div className="product-thumbnail-carousel">
              {/* {data!=undefined && data.imageUrls.map((e, i) => ( */}
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/1.png"}
                  alt="img"
                />
              </div>
              {/* ))} */}
            </div>
          </div>
          {/* ) : null} */}
        </div>
        {data != undefined && (
          <div className="row go-top">
            <div className="col-lg-8">
              <div className="single-property-details-inner">
                <h4>Daily Apartment</h4>
                <p>{data.description}</p>
                <p>{data.additionalDescription}</p>
                <div className="single-property-grid">
                  <h4>Poperty Details</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: {data.numberOfBeedrooms}</li>
                        <li>Bathroom: {data.numberOfBathrooms}</li>
                        <li>All Rooms: </li>
                        <li>Kitchen: 2</li>
                        <li>Type: {data.type}</li>
                      </ul>
                    </div>
                    {/* <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: 3</li>
                        <li>Livingroom: 2</li>
                        <li>Year Built: 2020</li>
                        <li>Area: 1258</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: 3</li>
                        <li>All Rooms: 12</li>
                        <li>Kitchen: 2</li>
                        <li>Type: Privet House</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Amenities</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        {data.offer ? (
                          <li>
                            <i className="fa fa-check" />
                            Offer
                          </li>
                        ) : null}
                        {data.parking ? (
                          <li>
                            <i className="fa fa-check" />
                            Parking
                          </li>
                        ) : null}
                        {data.pool ? (
                          <li>
                            <i className="fa fa-check" />
                            Pool
                          </li>
                        ) : null}
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <ul>
                        {data.foodAndBeverage ? (
                          <li>
                            <i className={`fa fa-check`} />
                            food And Beverage
                          </li>
                        ) : null}
                        {data.bar ? (
                          <li>
                            <i className="fa fa-check" />
                            Bar
                          </li>
                        ) : null}
                        {data.negotiable ? (
                          <li>
                            <i className="fa fa-check" />
                            Negotiable
                          </li>
                        ) : null}
                        {data.furnished ? (
                          <li>
                            <i className="fa fa-check" />
                            Furnished
                          </li>
                        ) : null}
                      </ul>
                    </div>

                    <div className="col-md-3">
                      <ul>
                        {data.tv ? (
                          <li>
                            <i className="fa fa-check" />
                            Tv
                          </li>
                        ) : null}
                        {data.wifi ? (
                          <li>
                            <i className="fa fa-check" />
                            Wifi
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Additional Details</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>covered Area: {data.coveredArea}</li>
                        <li>Seen Count: {data.seenCount}</li>
                        <li>Equepment: Grill-gass</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Diposit: 7065$</li>
                        <li>Pool Size: 1620</li>
                        <li>Additional Room: 2</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Ground: 2</li>
                        <li>Additional Room: 2</li>
                        <li>Floor: 1203</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Proparty Attachment</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="PDFLINK" download>
                        <img
                          src={publicUrl + "assets/img/icon/9.png"}
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0">
                      <a href="PDFLINK" download>
                        <img
                          src={publicUrl + "assets/img/icon/9.png"}
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Estate Location</h4>
                  <div className="property-map">
                  {/* <iframe src = {}></iframe> */}


                    {/* <iframe
                      width="300"
                      height="170"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?q='+8.9806','+38.7578+'&hl=es&z=14&amp;output=embed"
                    ></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Floor Plans</h4>
                  <img
                    src={publicUrl + "assets/img/project-single/6.png"}
                    alt="img"
                  />
                </div>
                <div className="single-property-grid">
                  <h4>Intro Video</h4>
                  <div
                    className="property-video text-center"
                    style={{
                      background:
                        "url(" + publicUrl + "assets/img/project-single/8.png)",
                    }}
                  >
                    <a
                      className="play-btn"
                      href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                      data-effect="mfp-zoom-in"
                    >
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Whats Nearby?</h4>
                  <div className="media single-review-inner">
                    <div className="media-left">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/project-single/9.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      <div className="row">
                        <div className="col-md-8">
                          <h5>Eureka/Harvey Milk Branch</h5>
                          <p>consectetuLorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <p className="ratting-title">
                            <span>32</span> Reviews
                          </p>
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media single-review-inner">
                    <div className="media-left">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/project-single/10.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      <div className="row">
                        <div className="col-md-8">
                          <h5>Milbaly Extension &amp; Academy</h5>
                          <p>consectetuLorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <p className="ratting-title">
                            <span>32</span> Reviews
                          </p>
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media single-review-inner">
                    <div className="media-left">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/project-single/11.png"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      <div className="row">
                        <div className="col-md-8">
                          <h5>Nilgao School</h5>
                          <p>consectetuLorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <p className="ratting-title">
                            <span>32</span> Reviews
                          </p>
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Page statistics</h4>
                  <img
                    src={publicUrl + "assets/img/project-single/7.png"}
                    alt="img"
                  />
                </div>
                <form className="single-property-comment-form">
                  <div className="single-property-grid bg-black">
                    <div className="single-property-form-title">
                      <div className="row">
                        <div className="col-md-8">
                          <h4>Post Your Comment</h4>
                        </div>
                        <div className="col-md-4 text-md-right">
                          <div className="ratting-inner">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="single-input-inner style-bg">
                          <span className="label">Enter Your Name</span>
                          <input type="text" placeholder="Your name here...." />
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label className="single-input-inner style-bg">
                          <span className="label">Enter Your MAil</span>
                          <input
                            type="text"
                            placeholder="Your email here...."
                          />
                        </label>
                      </div>
                      <div className="col-12">
                        <label className="single-input-inner style-bg">
                          <span className="label">Enter Your Messege</span>
                          <textarea
                            placeholder="Enter your messege here...."
                            defaultValue={""}
                          />
                        </label>
                      </div>
                      <div className="col-12 mb-4">
                        <button className="btn btn-base radius-btn">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget-author text-center">
                  <h4 className="widget-title">About Me</h4>
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/agent/1.png"} alt="img" />
                  </div>
                  <div className="details">
                    <h5>Sandara Mrikon</h5>
                    <p>
                      Lorem ipsum dolor amet, Lore ipsum dolor sit amet,
                      consectetur et eiLorem ipsum dolor sit amet
                    </p>
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
                <div className="widget widget-category">
                  <h5 className="widget-title">Category</h5>
                  <ul>
                    <li>
                      <a href="#">
                        Design <span>26</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Villa House <span>20</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>21</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Global World <span>31</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Technology <span>12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Ui Design <span>12</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-place">
                  <h5 className="widget-title">Place</h5>
                  <ul>
                    <li>
                      New York <span>26</span>
                    </li>
                    <li>
                      Love Road <span>20</span>
                    </li>
                    <li>
                      Beach Side <span>21</span>
                    </li>
                    <li>
                      Golden city <span>31</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news">
                  <h5 className="widget-title">Popular Feeds</h5>
                  <div className="single-news-wrap media">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/5.png"}
                        alt="img"
                      />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>
                        <Link to="/blog-details">
                          Dolor eorem ipsum sit amet Lorem ipsum
                        </Link>
                      </h6>
                      <p className="date">
                        <i className="far fa-calendar-alt" />
                        25 Aug 2020
                      </p>
                    </div>
                  </div>
                  <div className="single-news-wrap media">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/6.png"}
                        alt="img"
                      />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>
                        <Link to="/blog-details">
                          Responsive Web And Desktop Develope
                        </Link>
                      </h6>
                      <p className="date">
                        <i className="far fa-calendar-alt" />
                        25 Aug 2020
                      </p>
                    </div>
                  </div>
                  <div className="single-news-wrap media">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/blog/7.png"}
                        alt="img"
                      />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>
                        <Link to="/blog-details">
                          Admin Web is Django Highlig Models
                        </Link>
                      </h6>
                      <p className="date">
                        <i className="far fa-calendar-alt" />
                        25 Aug 2020
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget widget-tags">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tagcloud">
                    <Link to="/blog">Popular</Link>
                    <Link to="/blog">Art</Link>
                    <Link to="/blog">Business</Link>
                    <Link to="/blog">Design</Link>
                    <Link to="/blog">Creator</Link>
                    <Link to="/blog">CSS</Link>
                    <Link to="/blog">Planing</Link>
                    <Link to="/blog">Creative</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>
    </div>
  ); /*  : null */
};

// }
// }

export default PropertyDetails;
