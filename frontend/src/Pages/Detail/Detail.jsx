import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.css';
import Carousel from '../../components/Carousel/carousel';
import Commentcard from '../../components/Commentcard/Commentcard';
import Data from '../../Data/Products.json';

function Detail(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState('');
  const [product, setProduct] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const foundProduct = findProductByName(name);
    setProduct(foundProduct);
  }, [name]);

  const findProductByName = (name) => {
    for (const mainProduct of Data.mainProducts) {
      for (const subProduct of mainProduct.subProducts) {
        if (subProduct.subProName === name) {
          return subProduct;
        }
      }
    }
    return null;
  };

  if (!product) {
    return <div>Loading...</div>
  }

  const formattedSubDesc = product.subDesc.split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ));

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('form was submitted successfully!')
  }

  return (
    <div className='detailMain'>
      <div className="leftDesk">
        <div className="detailBackBtn">
          <button className='btn p-0 m-0' onClick={() => navigate(-1)}><i className="fas fa-chevron-left rounded-circle me-3 fs-4 p-2 pe-3 text-white"></i></button>
        </div>
        <Carousel carouselid='detailCar' img1='../images/airpurism.jpg' img2='../images/airpuri2.jpg' img3='../images/airpuri1.jpg' />
      </div>

      <div className="rightDesk">
        <div className="spaInfo mt-3 container">
          <h3 className="mb-0">{product.subProName}</h3>
          <p className="mb-0 fs-6 fw-bold">	&#8377;<span className='fs-5 text-success'>{product.price}</span>/Day</p>
          <div className="detailRating bg-light rounded-3 p-2 d-flex justify-content-between mt-3">
            <div className="starts">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                className="fas fa-star"></i><i className="fas fa-star"></i>
              <p className="reviewCount text-muted">
                3.1k reviews <a href="#commentDiv" className="nav-link d-inline"><i className="fas fa-chevron-right ms-2 text-success"></i></a>
              </p>
            </div>
            <div className="pofileImg d-flex justify-content-center align-items-center">
              <i className="fas fa-user p-3 rounded-circle text-muted border d-block fs-5 userIcon"></i>
              <i className="fas fa-user p-3 rounded-circle text-muted border d-block fs-5 userIcon"></i>
              <i className="fas fa-user p-3 rounded-circle text-muted border d-block fs-5 userIcon"></i>
              <i className="fas fa-user p-3 rounded-circle text-muted border d-block fs-5 userIcon"></i>
              <i className="fas fa-user p-3 rounded-circle text-muted border d-block fs-5 userIcon"></i>
            </div>
          </div>
          <div className="desc text-muted mt-4 mb-4">
            <h3 className="text-dark mb-1">Overview</h3>
            {/* {product.subDesc} */}
            {formattedSubDesc}
          </div>
          <div className="extraInfo">
            <div className="phoneNo text-muted"><i className="fas fa-phone-alt text-success d-inline"></i> <a href="tel:+91 73042 98519" className="nav-link d-inline">080100 38415</a></div>
          </div>

          <div className="features my-5 mt-3">
            <h3 className='mb-0'>Features</h3>
            <div className="featuresWrap ps-3">
              {
                product.subFeatures.map((featur, index) => (
                  <p key={index} className="mb-0 featuresPara">{index + 1}. {featur}</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="ratingsNReview container">
          <h3>Ratings & Reviews</h3>
          <div className="ratingDiv mt-3">
            <div className="ratingDiv">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              <input type="text" className="form-control" placeholder="Name" />
              <input type="text" className="form-control my-2" placeholder="Write a comment..." />
              <div className="submitBtn btn btn-success">
                Submit
              </div>
            </div>
          </div>
          <div id="commentDiv" className="reviewDiv mt-3 mb-5 pb-5">
            <Commentcard name='ramesh chauhan' stars='4.6' comment='This is a very good airpurifier it give 100% pure air...' />
            <Commentcard name='suresh rajbhar' stars='4' comment='I loved this product, it is awesome.' />
            <Commentcard name='rajesh patel' stars='4.3' comment='It works great.' />
            <Commentcard name='parvez ali' stars='5' comment='This is very great and budjet friendly' />
          </div>
        </div>

        <div className="floatBtnWrap bg-white pt-2">
          <div className="floatBtns container d-flex justify-content-around align-items-center">
            <div className="floatPrice text-white text-center rounded-3 bg-secondary p-2">
              <span className="text-white fw-bold fs-4"><i className="fas fa-rupee-sign"></i>{product.price}</span>/Day
            </div>
            <div className="floatBooking bg-success text-white p-2 px-3 rounded-3 fs-4">
              <a href="tel:+91 08010038415" className="nav-link">Call now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="formPopupContainer">
        <div className="fomrPopup">
          <form name='Contact' method='POST' onSubmit={submitHandler}>
          <input type="hidden" name="form-name" value="Contact" />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Your Number</label>
              <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData} onChange={(e)=> setFormData(e.target.value)}/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Detail;
