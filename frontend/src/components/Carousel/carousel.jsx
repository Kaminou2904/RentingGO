import React from 'react';
import './carousel.css';

function carousel(props) {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner px-2">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={props.img1} className="d-block w-100 rounded-3" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={props.img2} className="d-block w-100 rounded-3" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval='2000'>
            <img src={props.img3} className="d-block w-100 rounded-3" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-black rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-black rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
};

export default carousel;