import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='bg-white'>
        <div className="container-fluid d-flex justify-content-between p-3 align-items-center shadow">
            <h3 className="mb-0">Renting<span className='text-primary fw-bold'>GO</span></h3>
            <a href='tel:+91 9076472920' className="btn btn-primary">Contact Us</a>
        </div>
    </div>
  )
}

export default Header;