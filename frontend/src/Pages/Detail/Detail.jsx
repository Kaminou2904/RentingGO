import React from 'react';
import './Detail.css';
import Carousel from '../../components/Carousel/carousel';
import Commentcard from '../../components/Commentcard/Commentcard';

function Detail() {
  return (
    <div className='detailMain'>
      <div className="leftDesk">
        <Carousel carouselid='detailCar' img1='./images/airpurism.jpg' img2='./images/airpuri2.jpg' img3='./images/airpuri1.jpg' />
      </div>

      <div className="rightDesk">
      <div className="spaInfo mt-3 container">
          <h3 className="mb-0">Air Purifier</h3>
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
            Best Spa in Thane, Maharashtra Thai Massage Spa Thane, Maharashtra Spa in Thane, Maharashtra Aira Spa in Thane, Maharashtra the best thing to do is just call it a day and go get a massage.
          </div>
          <div className="extraInfo">
            <div className="phoneNo text-muted"><i className="fas fa-phone-alt text-success d-inline"></i> <a href="tel:+91 73042 98519" className="nav-link d-inline">080100 38415</a></div>
          </div>
          <div className="spaFacilities my-4 pb-5">
            <h3 className="mb-3">Features</h3>
            <div className="facilitiesWrap d-flex">
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-car d-block fs-1"></i>
                <p className="mb-0">Parking</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-clock fs-1"></i>
                <p className="mb-0">Waiting</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-wifi fs-1"></i>
                <p className="mb-0">Wifi</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-wind fs-1"></i>
                <p className="mb-0">Ac</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-shower fs-1"></i>
                <p className="mb-0">Shower</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-toilet-paper fs-1"></i>
                <p className="mb-0">Towel</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-music fs-1"></i>
                <p className="mb-0">Music</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-spray-can fs-1"></i>
                <p className="mb-0">Perfume</p>
              </div>
              <div className="facilityCard p-2 text-center rounded-3 bg-light text-secondary me-2">
                <i className="fas fa-wine-bottle fs-1"></i>
                <p className="mb-0">Water</p>
              </div>
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
              <span className="text-white fw-bold fs-4"><i className="fas fa-rupee-sign"></i>499</span>/Day
            </div>
            <div className="floatBooking bg-success text-white p-2 px-3 rounded-3 fs-4">
              <a href="tel:+91 08010038415" className="nav-link">Call now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
