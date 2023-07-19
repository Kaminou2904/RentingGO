import React from 'react';
import { Link } from 'react-router-dom';
import './Productcard.css'

function Productcard() {
    return (
        <div>
            <div className="featItem border me-4">
                {/* <div className="hoverRating w-100 d-flex justify-content-between align-items-start text-white mb-0 px-2">
                    <div className="hoverRate rounded-3 px-2">
                        <p className="mb-0"><i className="fas fa-star me-1"></i>4.9</p>
                    </div>
                    <div className="hoverAway rounded-3 px-2">
                        <p className="mb-0"><i className="fas fa-location-arrow me-1"></i>1.2km</p>
                    </div>
                </div> */}
                <img src="./images/airpuri.jpg" alt="product" className="featImg img-fluid mb-2" />
                <div className="featData">
                    <div className="featNameWrap d-flex justify-content-between align-items-start">
                        <div className="featName">
                            <Link to="/detail" className="nav-link fs-5">Air Purifier</Link>
                            <p className="stars mb-0"><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i></p>
                        </div>
                    </div>
                    <div className="featLocaWrap d-flex justify-content-between">
                        <div className="featLocation text-muted">
                            <p className="mb-0"><i className="fas fa-rupee-sign text-success brandcolor1"></i><span className='fs-6 fw-bold'> 499</span>/Day
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productcard