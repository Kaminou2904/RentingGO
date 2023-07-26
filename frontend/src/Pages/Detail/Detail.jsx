import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.css';
import Carousel from '../../components/Carousel/carousel';
import Commentcard from '../../components/Commentcard/Commentcard';
import Data from '../../Data/Products.json';

function Detail(props) {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formDisplay, setFormDisplay] = useState('none');
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

  // const displayForm =()=>{setDisplay('flex')}

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
          <p className="mb-0 fs-6 fw-bold">	&#8377;<span className='fs-5 text-primary'>{product.price}</span>/Day</p>
          <div className="detailRating bg-light rounded-3 p-2 d-flex justify-content-between mt-3">
            <div className="starts">
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                className="fas fa-star"></i><i className="fas fa-star"></i>
              <p className="reviewCount text-muted">
                3.1k reviews <a href="#commentDiv" className="nav-link d-inline"><i className="fas fa-chevron-right ms-2 text-primary"></i></a>
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
            <div className="phoneNo text-muted"><i className="fas fa-phone-alt text-primary d-inline"></i> <a href="tel:+91 73042 98519" className="nav-link d-inline">080100 38415</a></div>
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
              <div className="submitBtn btn btn-primary">
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
            <div className="floatPrice text-white text-center rounded-3 bg-secondary p-2 px-3">
              <span className="text-white fw-bold fs-4"><i className="fas fa-rupee-sign"></i>{product.price}</span>/Day
            </div>
            <div className="floatBooking bg-primary text-white p-2 px-3 rounded-3 fs-4">
              <p className="mb-0" onClick={()=>{setFormDisplay('flex')}}>Check Avaibility</p>
            </div>
          </div>
        </div>
      </div>

      <div className="formContainer px-2" style={{display: formDisplay}}>
        <div className="popupForm bg-white container py-3">
          <p className="text-end fs-2"><i className="fas fa-times-circle text-secondary fs-2" onClick={()=> setFormDisplay('none')}></i></p>
          <p className="mb-1 fs-4 fw-bold">Select Day</p>
          <div className="dateWrap d-flex">
            <div className="dateCard">
              <p className="dateCardPara me-2 p-2 px-3 text-center text-capitalize border border-black rounded-3 fs-5 ">today</p>
            </div>
            <div className="dateCard">
              <p className="dateCardPara me-2 p-2 px-3 text-center text-capitalize border border-black rounded-3 fs-5 ">tommorrow</p>
            </div>
            <div className="dateCard">
              <p className="dateCardPara me-2 p-2 px-3 text-center text-capitalize border border-black rounded-3 fs-5 ">28 jul</p>
            </div>
          </div>
          <p className="mb-1 fs-4 fw-bold">How Much</p>
          <div className="amoundWrap d-flex">
            <div className="amountCard">
              <p className="amoutCardPara me-2 p-2 px-3 text-center text-capitalize border border-black rounded-3 fs-5">0 - 10</p>
            </div>
            <div className="amountCard">
              <p className="amoutCardPara me-2 p-2 px-3 text-center text-capitalize border border-black rounded-3 fs-5">10 - 20</p>
            </div>
            <div className="amountCard">
              <p className="amoutCardPara me-2 p-2 px-3 text-center text-capitalize border border-black rounded-3 fs-5">20 - 30</p>
            </div>
          </div>
          <div className="numberForm ">
            <p className="fs-4 mb-1 fw-bold">Enter your number</p>
            <input type="text" name='number' className='form-control fs-4 mb-0' placeholder='Ex. 1234567890' /><br />
            <button className="btn btn-primary m-0 fs-5">Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Detail;
