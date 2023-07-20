import React from 'react';
import './Listing.css';
import Listingcard from '../../components/Listingcard/Listingcard';
import Header from '../../components/Header/Header';

function Listing() {
  return (
    <div className="container-fluid p-0">
      <Header headTxt1='List' headTxt2='ing'/>
      <div className='container d-flex flex-wrap mt-5 pt-4'>
        <Listingcard id='car1' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg' />
        <Listingcard id='car2' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg' />
        <Listingcard id='car3' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg' />
        <Listingcard id='car4' img1='./images/airpuri.jpg' img2='./images/airpurilg1.jpg' img3='./images/airpurilg2.jpg' />
      </div>
    </div>
  )
}

export default Listing;